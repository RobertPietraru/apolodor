<script lang="ts">
	import '../app.css';
	import * as m from '$lib/paraglide/messages';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { setLocale, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import {
		Languages,
		Menu,
		X,
		BookOpen,
		FileText,
		Users,
		Handshake,
		Image,
		Archive
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let locale = $state(getLocale());
	// Language switching function
	function switchLanguage() {
		const currentLocale = getLocale();
		locale = currentLocale;
		const newLocale = currentLocale === 'ro' ? 'en' : 'ro';
		setLocale(newLocale);
	}

	const navigationItems = $derived([
		{
			title: m.nav_about(),
			color: 'text-destructive hover:text-destructive/90',
			items: [
				{
					title: m.about_section_title(),
					href: localizeHref('/about', { locale }),
					expanded: false,
					icon: BookOpen,
					disabled: false
				},
				{ title: m.about_team(), href: '/team', expanded: false, icon: Users, disabled: false },
				{
					title: m.nav_partners(),
					href: localizeHref('/partners', { locale }),
					expanded: false,
					icon: Handshake,
					disabled: false
				},
				// { title: m.gallery(), href: '/gallery', expanded: false, icon: Image, disabled: true },
				// {
				// 	title: m.about_archive(),
				// 	href: localizeHref('/archive', { locale }),
				// 	expanded: false,
				// 	icon: Archive,
				// 	disabled: true
				// },
				{
					title: m.about_press(),
					href: localizeHref('/press', { locale }),
					expanded: false,
					icon: FileText,
					disabled: true
				}
			]
		},
		{
			title: m.nav_guests(),
			color: 'text-primary hover:text-primary/90',
			href: localizeHref('/guests', { locale })
		},
		// {
		// 	title: m.nav_program(),
		// 	color: 'text-primary hover:text-primary/90',
		// 	href: '/program'
		// },
		{
			title: m.nav_news(),
			color: 'text-warning hover:text-warning/90',
			href: localizeHref('/blog', { locale })
		},

		{
			title: m.nav_contact(),
			color: 'text-primary hover:text-primary/90',
			href: localizeHref('/#contact_section', { locale })
		}
	]);

	let mobileMenuOpen = $state(false);

	let { children } = $props();
</script>

<header class="border-warning border-b-2 bg-background shadow-sm">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-20 items-center justify-between">
			<div class="flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-controls="mobile-menu"
					aria-expanded="false"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>
					<!-- Icon when menu is closed.  Menu open: "hidden", Menu closed: "block" -->
					<Menu class="block size-6" />
					<!-- Icon when menu is open.  Menu open: "block", Menu closed: "hidden" -->
					<X class="hidden size-6" />
				</button>
			</div>

			<a class="hidden items-center gap-1 sm:flex" href={localizeHref('/', { locale })}>
				<img
					src={getLocale() === 'ro' ? '/assets/logos/logo.svg' : '/assets/logos/logo_en.svg'}
					alt="Apolodor"
					class="h-16"
				/>
			</a>
			<div
				class="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<NavigationMenu.Root viewport={false} class="z-50 hidden sm:block">
					<NavigationMenu.List>
						{#each navigationItems as item}
							{#if item.items}
								<NavigationMenu.Item>
									<NavigationMenu.Trigger>{item.title}</NavigationMenu.Trigger>
									<NavigationMenu.Content>
										<ul class="grid w-[300px] gap-4 p-2">
											{#each item.items as subItem}
												<NavigationMenu.Link
													onclick={() => {
														goto(subItem.href);
														mobileMenuOpen = false;
													}}
													class="group/nav flex cursor-pointer flex-row items-center gap-2"
												>
													<subItem.icon
														class="h-4 w-4 text-primary group-hover/nav:text-accent-foreground"
													/>
													<span class="text-sm font-medium">{subItem.title}</span>
												</NavigationMenu.Link>
											{/each}
										</ul>
									</NavigationMenu.Content>
								</NavigationMenu.Item>
							{:else}
								<NavigationMenu.Item>
									<NavigationMenu.Link>
										{#snippet child()}
											<button
												onclick={() => {
													goto(item.href);
													mobileMenuOpen = false;
												}}
												class={navigationMenuTriggerStyle()}>{item.title}</button
											>
										{/snippet}
									</NavigationMenu.Link>
								</NavigationMenu.Item>
							{/if}
						{/each}
					</NavigationMenu.List>
				</NavigationMenu.Root>
				<!-- Language Switch -->
				<div class="flex-shrink-0">
					<Button variant="outline" class="border-2" onclick={switchLanguage}>
						<Languages class="h-4 w-4" />
						<span class="ml-2 font-semibold"
							>{getLocale() === 'ro' ? m.switch_to_en() : m.switch_to_ro()}</span
						>
					</Button>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if mobileMenuOpen}
		<div id="mobile-menu" class="px-4 sm:hidden">
			<Accordion.Root type="single" class="w-full sm:max-w-[70%]">
				{#each navigationItems as item}
					{#if item.items}
						<Accordion.Item value={item.title}>
							<Accordion.Trigger>{item.title}</Accordion.Trigger>
							<Accordion.Content class="flex flex-col gap-4 text-balance">
								{#each item.items as subItem}
									<button
										onclick={() => {
											goto(subItem.href);
											mobileMenuOpen = false;
										}}
										class="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
									>
										<svelte:component this={subItem.icon} class="h-4 w-4" />
										{subItem.title}
									</button>
								{/each}
							</Accordion.Content>
						</Accordion.Item>
					{:else}
						<div class="border-b last:border-b-0">
							<button
								onclick={() => {
									goto(item.href);
									mobileMenuOpen = false;
								}}
								class="flex flex-1 items-start justify-between gap-4
								rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline
								focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
								disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
							>
								{item.title}
							</button>
						</div>
					{/if}
				{/each}
			</Accordion.Root>
		</div>
	{/if}
</header>

<main class="min-h-screen bg-gradient-to-b from-accent/5 to-background">
	<!-- <main class="min-h-screen bg-background"> -->
	{@render children()}
</main>

<footer class="border-t bg-background">
	<div class="container mx-auto px-4 py-8">
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.about_festival()}</h3>
				<p class="text-sm">
					{m.about_description()}
				</p>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_contact()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>{m.footer_email()}</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_quick_links()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>
						<a href={localizeHref('/program')} class=" hover:text-primary">{m.nav_program()}</a>
					</li>
					<li>
						<a href={localizeHref('/guests')} class=" hover:text-primary">{m.guests_special()}</a>
					</li>
					<li>
						<a href={localizeHref('/blog')} class=" hover:text-primary">{m.nav_news()}</a>
					</li>

					<li>
						<a href={localizeHref('/team')} class=" hover:text-primary">{m.footer_team()}</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_social()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>
						<a href="https://www.facebook.com/festivalul.apolodor" class=" hover:text-primary"
							>{m.social_facebook()}</a
						>
					</li>
					<li>
						<a href="https://www.instagram.com/festivalul_apolodor/" class=" hover:text-primary"
							>{m.social_instagram()}</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t pt-8">
			<div class="flex flex-col items-center justify-between gap-10 md:flex-row">
				<p class="mb-4 text-center text-sm md:mb-0">
					{m.footer_copyright()}
				</p>
				<div class="flex-1"></div>
				<img src="/assets/sponsors/corona.png" alt="Corona" class="h-10" />
				<img src="/assets/sponsors/primaria.png" alt="Primaria Botoșani" class="h-10" />

				<a href="https://github.com/RobertPietraru/apolodor">
					<img src="/assets/logos/github.svg" alt="GitHub" class="h-4 w-4" />
				</a>
			</div>
		</div>
	</div>
</footer>

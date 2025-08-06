<script lang="ts">
	import '../app.css';
	import * as m from '$lib/paraglide/messages';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import {
		Languages,
		Menu,
		X,
		FileText,
		Info,
		Users,
		Star,
		Handshake,
		Image,
		Archive
	} from '@lucide/svelte';

	// Language switching function
	function switchLanguage() {
		const currentLocale = getLocale();
		const newLocale = currentLocale === 'ro' ? 'en' : 'ro';
		setLocale(newLocale);
	}

	const navigationItems = $state([
		{
			title: m.nav_about(),
			color: 'text-destructive hover:text-destructive/90',
			items: [
				{ title: m.about_festival(), href: '/despre-festival', expanded: false, icon: Info },
				{ title: m.about_team(), href: '/echipa', expanded: false, icon: Users },
				{ title: m.gallery(), href: '/galerie', expanded: false, icon: Image },
				{ title: m.about_archive(), href: '/arhiva', expanded: false, icon: Archive },
				{ title: m.about_press(), href: '/presa', expanded: false, icon: FileText },
				{ title: m.nav_partners(), href: '/parteneri', expanded: false, icon: Handshake }
			]
		},
		{
			title: m.nav_guests(),
			color: 'text-primary hover:text-primary/90',
			items: [
				{ title: m.guests_special(), href: '/guests', expanded: false, icon: Star },
				{ title: m.nav_partners(), href: '/parteneri', expanded: false, icon: Handshake }
			]
		},
		{
			title: m.nav_program(),
			color: 'text-primary hover:text-primary/90',
			href: '/program'
		},
		{
			title: m.nav_news(),
			color: 'text-warning hover:text-warning/90'
		}
	]);

	let mobileMenuOpen = $state(false);

	let { children } = $props();
</script>

<header class="border-warning border-b-2 bg-background shadow-sm">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
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

			<img
				src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
				alt="APL"
				class="hidden h-8 sm:block"
			/>
			<div
				class="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<NavigationMenu.Root viewport={false} class="hidden sm:block">
					<NavigationMenu.List>
						{#each navigationItems as item}
							{#if item.items}
								<NavigationMenu.Item>
									<NavigationMenu.Trigger>{item.title}</NavigationMenu.Trigger>
									<NavigationMenu.Content>
										<ul class="grid w-[300px] gap-4 p-2">
											{#each item.items as subItem}
												<li>
													<NavigationMenu.Link
														href={subItem.href}
														class=" rounded-md px-3 py-2 text-sm font-medium hover:bg-accent "
													>
														<div class="flex items-center gap-2">
															<subItem.icon class="h-4 w-4 hover:text-accent-foreground"/>
															{subItem.title}
														</div>
													</NavigationMenu.Link>
												</li>
											{/each}
										</ul>
									</NavigationMenu.Content>
								</NavigationMenu.Item>
							{:else}
								<NavigationMenu.Item>
									<NavigationMenu.Link>
										{#snippet child()}
											<a href={item.href} class={navigationMenuTriggerStyle()}>{item.title}</a>
										{/snippet}
									</NavigationMenu.Link>
								</NavigationMenu.Item>
							{/if}
						{/each}
					</NavigationMenu.List>
				</NavigationMenu.Root>
				<!-- Language Switch -->
				<div class="flex-shrink-0">
					<Button
						variant="outline"
						class="border-2 border-primary bg-transparent font-semibold text-primary hover:bg-primary/10"
						onclick={switchLanguage}
					>
						<Languages class="h-4 w-4" />
						<span class="ml-2">{getLocale() === 'ro' ? m.switch_to_en() : m.switch_to_ro()}</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu, show/hide based on menu state. -->
	{#if mobileMenuOpen}
		<div id="mobile-menu" class="px-4 sm:hidden">
			<Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="item-1">
				{#each navigationItems as item}
					{#if item.items}
						<Accordion.Item value={item.title}>
							<Accordion.Trigger>{item.title}</Accordion.Trigger>
							<Accordion.Content class="flex flex-col gap-4 text-balance">
								{#each item.items as subItem}
									<a
										href={subItem.href}
										class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
									>
										<svelte:component this={subItem.icon} class="h-4 w-4" />
										{subItem.title}
									</a>
								{/each}
							</Accordion.Content>
						</Accordion.Item>
					{:else}
						<div class="border-b last:border-b-0">
							<a
								href={item.href}
								class="flex flex-1 items-start justify-between gap-4
								rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline
								focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none
								disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
							>
								{item.title}
							</a>
						</div>
					{/if}
				{/each}
			</Accordion.Root>
		</div>
	{/if}
</header>

<main class="min-h-screen">
	{@render children()}
</main>

<footer class="border-t bg-background">
	<div class="container mx-auto px-4 py-12">
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.about_festival()}</h3>
				<p class="text-sm text-muted-foreground">
					{m.about_description()}
				</p>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_contact()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm text-muted-foreground md:block md:space-y-2">
					<li>{m.footer_email()}</li>
					<li>{m.footer_phone()}</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_quick_links()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>
						<a href="/program" class="text-muted-foreground hover:text-primary">{m.nav_program()}</a
						>
					</li>
					<li>
						<a href="/guests" class="text-muted-foreground hover:text-primary"
							>{m.guests_special()}</a
						>
					</li>
					<li>
						<a href="/blog" class="text-muted-foreground hover:text-primary">{m.nav_news()}</a>
					</li>
					<li>
						<a href="/contact" class="text-muted-foreground hover:text-primary"
							>{m.footer_contact()}</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_social()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>
						<a
							href="https://www.facebook.com/festivalul.apolodor"
							class="text-muted-foreground hover:text-primary">{m.social_facebook()}</a
						>
					</li>
					<li>
						<a
							href="https://www.instagram.com/festivalul_apolodor/"
							class="text-muted-foreground hover:text-primary">{m.social_instagram()}</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t pt-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="mb-4 text-center text-sm text-muted-foreground md:mb-0">
					{m.footer_copyright()}
				</p>
				<div class="flex space-x-4 text-sm text-muted-foreground">
					<a href="/politica-confidentialitate" class="hover:text-primary">{m.privacy_policy()}</a>
					<a href="/termeni-conditii" class="hover:text-primary">{m.terms_conditions()}</a>
					<a href="https://github.com/RobertPietraru/apolodor">
						<img src="/logos/github.svg" alt="GitHub" class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

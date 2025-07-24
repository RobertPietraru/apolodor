<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import {
		Calendar,
		Languages,
		MapPin,
		Menu,
		X,
		ChevronDownIcon,
		Info,
		Users,
		Star,
		Handshake,
		FileText,
		Image,
		Archive,
		Newspaper,

		Book,

		Palette


	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';

	const navigationItems = $state([
		{
			title: 'DESPRE',
			color: 'text-destructive hover:text-destructive/90',
			items: [
				{ title: 'Despre festival', href: '/despre-festival', expanded: false, icon: Info },
				{ title: 'Echipa', href: '/echipa', expanded: false, icon: Users }
			]
		},
		{
			title: 'INVITAȚI',
			color: 'text-primary hover:text-primary/90',
			items: [
				{ title: 'Invitați speciali', href: '/invitati-speciali', expanded: false, icon: Star },
				{ title: 'Parteneri', href: '/parteneri', expanded: false, icon: Handshake }
			]
		},
		{
			title: 'PROGRAM',
			color: 'text-primary hover:text-primary/90',
			href: '/program'
		},
		{
			title: 'NOUTĂȚI',
			color: 'text-warning hover:text-warning/90',
			items: [
				{ title: 'Blog', href: '/blog', expanded: false, icon: FileText },
				{ title: 'Galerie', href: '/galerie', expanded: false, icon: Image },
				{ title: 'Arhiva', href: '/arhiva', expanded: false, icon: Archive },
				{ title: 'APOLODOR în presă', href: '/presa', expanded: false, icon: Newspaper }
			]
		}
	]);

	let mobileMenuOpen = $state(false);
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
					<!--
			  Icon when menu is closed.
  
			  Menu open: "hidden", Menu closed: "block"
			-->
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						data-slot="icon"
						aria-hidden="true"
						class="block size-6"
					>
						<path
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<!--
			  Icon when menu is open.
  
			  Menu open: "block", Menu closed: "hidden"
			-->
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						data-slot="icon"
						aria-hidden="true"
						class="hidden size-6"
					>
						<path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex shrink-0 items-center">
					<img
						src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
						alt="APL"
						class="h-8 w-auto"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block"></div>
			</div>
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
															<svelte:component
																this={subItem.icon}
																class="h-4 w-4 hover:text-accent-foreground"
															/>
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
					>
						<Languages class="h-4 w-4" />
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

<main>
	<section
		class="container mx-auto flex min-h-[calc(100vh-74px)] flex-col items-center px-4 py-8 lg:flex-row lg:justify-between lg:gap-16 lg:px-10"
	>
		<div class="flex w-full flex-col items-center justify-center md:items-start lg:w-1/2">
			<h1
				class="font-rubik mb-6 text-center text-4xl leading-tight font-bold md:text-start lg:text-7xl xl:text-8xl"
			>
				<span class="whitespace-nowrap">Festivalul de</span>
				<span class="text-accent">Literatură</span>
			</h1>

			<p
				class="font-caveat mb-8 text-center text-lg leading-relaxed font-bold md:text-start lg:text-2xl xl:text-3xl"
			>
				Dedicat copiilor și adolescenților din Botoșani! O sărbătoare a cărților, poveștilor și
				imaginației.
			</p>

			<div
				class="mb-10 flex flex-col justify-center space-y-4 md:mb-0 md:flex-row md:justify-start md:space-y-0 md:space-x-8"
			>
				<div
					class="text-md flex items-center space-x-2 whitespace-nowrap text-primary lg:text-lg xl:text-xl"
				>
					<Calendar class="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" /><span class="font-semibold"
						>18-21 septembrie 2025</span
					>
				</div>
				<div
					class="text-md flex items-center space-x-2 whitespace-nowrap text-primary lg:text-lg xl:text-xl"
				>
					<MapPin class="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" /><span class="font-semibold"
						>Botoșani, România</span
					>
				</div>
			</div>

			<div class="flex flex-col space-y-4 sm:mt-8 sm:flex-row sm:space-y-0 sm:space-x-6">
				<Button
					size="custom"
					class=" after:animate-shine rounded-full bg-primary px-8 text-lg font-extrabold text-primary-foreground transition-all duration-300 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-primary/20 after:via-transparent after:to-primary/20 after:opacity-0 after:transition-opacity hover:scale-105   lg:px-10 lg:py-4 lg:text-xl xl:px-12 xl:text-2xl"
				>
					Descoperă Programul
				</Button>
			</div>
		</div>

		<div class="w-full lg:w-5/12">
			<img
				src="/landing2.png"
				alt="APOLODOR"
				class="mx-auto hidden w-full max-w-96 object-contain md:block"
			/>
		</div>
	</section>

	<section class="container mx-auto px-4 py-16">
		<h2 class="mb-12 text-center text-4xl font-bold">Despre Festival</h2>
		<div class="grid gap-8 md:grid-cols-3">
			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-primary/10 p-4">
					<Book class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Lectură și Imaginație</h3>
				<p class="text-secondary">
					Descoperă lumea magică a cărților prin ateliere interactive și sesiuni de lectură captivante.
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-destructive/10 p-4">
					<Users class="h-8 w-8 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Întâlniri cu Autorii</h3>
				<p class="text-secondary">
					Conectează-te cu scriitori renumiți și descoperă poveștile din spatele cărților tale preferate.
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-warning/10 p-4">
					<Palette class="h-8 w-8 text-warning" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Ateliere Creative</h3>
				<p class="text-secondary">
					Participă la ateliere de scriere creativă, ilustrație și storytelling pentru toate vârstele.
				</p>
			</div>
		</div>
	</section>

</main>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	.font-rubik {
		font-family: 'Rubik', sans-serif;
	}
</style>

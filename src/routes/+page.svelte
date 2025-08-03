<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as m from '$lib/paraglide/messages';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';

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
				{ title: m.about_press(), href: '/presa', expanded: false, icon: Newspaper },
				{ title: m.nav_partners(), href: '/parteneri', expanded: false, icon: Handshake }
			]
		},
		{
			title: m.nav_guests(),
			color: 'text-primary hover:text-primary/90',
			items: [
				{ title: m.guests_special(), href: '/invitati-speciali', expanded: false, icon: Star },
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
										class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-accent hover:text-accent-foreground"
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
	{@render landingSection()}
	{@render aboutSection()}
	{@render activitiesSection()}
	{@render guestsSection()}
	{@render concertSection()}
</main>
{#snippet landingSection()}
	<section
		class="container mx-auto flex flex-col-reverse items-center px-4 py-8 lg:min-h-[calc(100vh-74px)] lg:flex-row lg:justify-between lg:gap-16 lg:px-10 gap-4"
	>
		<div class="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
			<h1
				class="font-rubik mb-4 text-center text-4xl leading-tight font-bold lg:text-5xl lg:text-left"
			>
				{@html m.landing_title()}
			</h1>

			<p
				class="font-caveat mb-6 text-center text-base leading-relaxed font-bold lg:text-lg lg:text-left"
			>
				{m.landing_subtitle()}
			</p>

			<div
				class="mb-8 flex flex-col items-center justify-center space-y-3 md:mb-0 md:flex-row md:space-y-0 md:space-x-6"
			>
				<div
					class="flex items-center space-x-2 whitespace-nowrap text-primary text-sm lg:text-base"
				>
					<Calendar class="h-4 w-4 lg:h-5 lg:w-5" /><span class="font-semibold"
						>{m.festival_date()}</span
					>
				</div>
				<div
					class="flex items-center space-x-2 whitespace-nowrap text-primary text-sm lg:text-base"
				>
					<MapPin class="h-4 w-4 lg:h-5 lg:w-5" /><span class="font-semibold"
						>{m.footer_location()}</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center space-y-4 sm:mt-6 sm:flex-row sm:space-y-0 sm:space-x-4">
				<Button
					size="custom"
					class="after:animate-shine rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-all duration-300 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-primary/20 after:via-transparent after:to-primary/20 after:opacity-0 after:transition-opacity hover:scale-105 lg:px-8 lg:py-3 lg:text-lg"
				>
					{m.discover_program()}
				</Button>
			</div>
		</div>

		<div class="w-full lg:w-5/12">
			<img
				src="/landing2.png"
				alt="APOLODOR"
				class="mx-auto w-full max-w-96 md:block md:object-contain lg:mx-0 lg:max-w-4/5"
			/>
		</div>
	</section>
{/snippet}
{#snippet guestsSection()}
	<section class="bg-accent/5 px-4 py-16">
		<h2 class="mb-12 text-center text-4xl font-bold">{m.guests_special()}</h2>

		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12">
				<!-- Scriitori Section -->
				<div>
					<h3 class="mb-6 border-b pb-2 text-2xl font-semibold">{m.guests_writers()}</h3>
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/florin_bican.jpeg  "
									alt="Florin Bican"
									class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Florin Bican</h4>
						</div>
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/veronica_niculescu.jpeg  "
									alt="Veronica D. Niculescu"
									class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Veronica D. Niculescu</h4>
						</div>
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/adina_rosetti.webp"
									alt="Adina Rosetti"
									class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Adina Rosetti</h4>
						</div>
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/matei_visiniec.jpeg"
									alt="Matei Vișniec"
									class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Matei Vișniec</h4>
						</div>
					</div>
				</div>

				<!-- Artiste Vizuale Section -->
				<div>
					<h3 class="mb-6 border-b pb-2 text-2xl font-semibold">{m.guests_illustrators()}</h3>
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/raluca_burca.jpg  "
									alt="Raluca Ioana Burcă"
									class="h-full w-full rounded-full border-4 border-destructive/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Raluca Ioana Burcă</h4>
						</div>
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/sabina_drinceanu.jpeg  "
									alt="Sabina Drînceanu"
									class="h-full w-full rounded-full border-4 border-destructive/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Sabina Drînceanu</h4>
						</div>
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src="/people/bianca_simionescu.jpeg  "
									alt="Nu am gasit"
									class="h-full w-full rounded-full border-4 border-destructive/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">Bianca Simionescu</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/snippet}
{#snippet concertSection()}
	<section
		class="relative overflow-hidden bg-[url('/bg-concert.jpg')] bg-cover bg-fixed bg-center px-4 py-24"
	>
		<div class="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
		<div class="relative container mx-auto">
			<div class="mx-auto max-w-3xl">
				<div class="mb-12 text-center">
					<h2 class="mb-4 text-4xl font-bold">{m.concert_title()}</h2>
					<div class="bg-warning mx-auto h-1 w-24"></div>
				</div>

				<div class="rounded-xl bg-background/50 p-8 shadow-xl backdrop-blur">
					<div class="flex flex-col items-center gap-12 md:flex-row">
						<div class="relative h-48 w-48 shrink-0">
							<div class="bg-warning/20 absolute -inset-4 animate-pulse rounded-full"></div>
							<img
								src="/people/ada_milea.jpeg"
								alt="Ada Milea"
								class="border-warning relative h-full w-full rounded-full border-4 object-cover shadow-lg"
							/>
						</div>
						<div class="flex-1 text-center md:text-left">
							<h3 class="text-warning mb-4 text-4xl font-bold">Ada Milea</h3>
							<p class="mb-8 text-xl leading-relaxed">
								{m.concert_description()}
							</p>
							<div class="flex flex-col items-center gap-8 text-lg sm:flex-row">
								<div class="flex items-center gap-3">
									<Calendar class="text-warning h-6 w-6" />
									<span class="font-semibold">{m.concert_date()}</span>
								</div>
								<Button
									variant="outline"
									class="border-warning text-warning hover:bg-warning/10 border-2"
								>
									{m.concert_details()}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/snippet}
{#snippet activitiesSection()}
	<section class="container mx-auto px-4 py-16">
		<h2 class="mb-12 text-center text-4xl font-bold">{m.activities_title()}</h2>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-primary/10 p-4">
					<Image class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">{m.exhibitions_title()}</h3>
				<p class="text-secondary">
					{m.exhibitions_subtitle()}
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-destructive/10 p-4">
					<FileText class="h-8 w-8 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">{m.program_readings()}</h3>
				<p class="text-secondary">
					{m.readings_subtitle()}
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="bg-warning/10 mb-4 rounded-full p-4">
					<Star class="text-warning h-8 w-8" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">{m.program_workshops()}</h3>
				<p class="text-secondary">
					{m.workshops_subtitle()}
				</p>
			</div>
		</div>
	</section>
{/snippet}
{#snippet aboutSection()}
	<section class=" bg-accent/5 px-4 py-16">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-4xl font-bold">{m.about_festival()}</h2>

			<div class="mb-12 flex flex-col items-center gap-8 md:flex-row">
				<div class="h-48 w-48 shrink-0">
					<img
						src="/people/dan_paper.jpg"
						alt="Dan Lungu"
						class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
					/>
				</div>
				<div class="flex-1">
					<blockquote class="text-xl italic">
						"{m.dan_lungu_quote()}"
						<footer class="mt-4 text-lg font-semibold text-primary">
							{m.dan_lungu_title()}
						</footer>
					</blockquote>
				</div>
			</div>

			<div class="grid gap-12 md:grid-cols-2">
				<div>
					<h3 class="mb-3 border-b pb-2 text-2xl font-semibold text-primary">
						{m.about_mission_title()}
					</h3>
					<p class="leading-relaxed text-secondary">
						{m.about_mission_description()}
					</p>
				</div>
				<div>
					<h3 class="mb-3 border-b pb-2 text-2xl font-semibold text-primary">
						{m.about_organizers_title()}
					</h3>
					<p class="leading-relaxed text-secondary">
						{m.about_organizers_description()}
					</p>
				</div>
			</div>
		</div>
	</section>
{/snippet}
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

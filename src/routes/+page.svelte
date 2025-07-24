<script lang="ts">
	import { Calendar, MapPin, Menu, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';

	const navigationItems = [
		{
			title: 'DESPRE',
			color: 'text-destructive hover:text-destructive/90',
			items: [
				{ title: 'Despre festival', href: '/despre-festival' },
				{ title: 'Echipa', href: '/echipa' }
			]
		},
		{
			title: 'INVITAȚI',
			color: 'text-primary hover:text-primary/90',
			items: [
				{ title: 'Echipa', href: '/echipa' },
				{ title: 'Invitați speciali', href: '/invitati-speciali' },
				{ title: 'Parteneri', href: '/parteneri' }
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
				{ title: 'Blog', href: '/blog' },
				{ title: 'Galerie', href: '/galerie', disabled: true },
				{ title: 'Arhiva', href: '/arhiva', disabled: true },
				{ title: 'APOLODOR în presă', href: '/presa', disabled: true }
			]
		}
	];

	let mobileMenuOpen = $state(false);
	let openDropdown = $state<string | null>(null);
</script>

<div class="min-h-screen bg-background">
	<header class="border-warning border-b-2 bg-background shadow-sm">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<div class="flex-shrink-0">
					<a
						href="/"
						class="text-4xl font-bold text-primary transition-colors hover:text-primary/90"
					>
						APOLODOR
					</a>
				</div>

				<NavigationMenu.Root>
					<NavigationMenu.List>
						{#each navigationItems as item}
							<NavigationMenu.Item>
								{#if item.items}
									<NavigationMenu.Trigger class={cn(item.color, 'hover:cursor-pointer')}
										>{item.title}</NavigationMenu.Trigger
									>
									<NavigationMenu.Content class="absolute">
										{#each item.items as subItem}
											<NavigationMenu.Link href={subItem.href}>
												<div
													class="rounded p-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
												>
													{subItem.title}
												</div>
											</NavigationMenu.Link>
										{/each}
									</NavigationMenu.Content>
								{:else}
									<NavigationMenu.Link>
										{#snippet child()}
											<a href={item.href} class={cn(navigationMenuTriggerStyle(), item.color)}>
												{item.title}
											</a>
										{/snippet}
									</NavigationMenu.Link>
								{/if}
							</NavigationMenu.Item>
						{/each}
					</NavigationMenu.List>
				</NavigationMenu.Root>

				<!-- Language Switch -->
				<div class="flex-shrink-0">
					<Button
						variant="outline"
						class="border-2 border-primary bg-transparent font-semibold text-primary hover:bg-primary/10"
					>
						EN version
					</Button>
				</div>
			</div>

			<!-- Mobile Center Content -->
			<div class="mt-4 text-center md:hidden">
				<h1 class="text-xl leading-tight font-bold text-foreground">
					Festivalul pentru Copii și Adolescenți Apolodor
				</h1>
				<p class="text-warning mt-1 text-lg font-semibold">18-21 septembrie 2025, Botoșani</p>
			</div>
		</div>
	</header>

	<nav class="border-rainbow border-b-2 bg-gradient-to-r from-muted/50 via-accent/50 to-primary/50">
		<div class="container mx-auto px-4">
			<!-- Mobile Navigation -->
			<div class="flex items-center justify-between py-4 lg:hidden">
				<span class="text-lg font-bold text-foreground">Meniu</span>
				<Button variant="ghost" size="sm" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</Button>
			</div>

			<!-- Mobile Menu -->
			{#if mobileMenuOpen}
				<div class="border-t-2 border-border bg-background py-4 lg:hidden">
					{#each navigationItems as item}
						<div class="mb-4">
							{#if item.items}
								<div>
									<button
										class="{item.color} w-full px-4 py-2 text-left text-lg font-bold"
										onclick={() => (openDropdown = openDropdown === item.title ? null : item.title)}
									>
										{item.title}
									</button>
									{#if openDropdown === item.title}
										<div class="mt-2 space-y-2 pl-8">
											{#each item.items as subItem}
												<a
													href={subItem.href}
													class="block py-2 text-muted-foreground {subItem.disabled
														? 'cursor-not-allowed opacity-50'
														: 'hover:text-foreground'}"
													onclick={subItem.disabled ? () => {} : () => (mobileMenuOpen = false)}
												>
													{subItem.title}
													{#if subItem.disabled}
														<span class="block text-xs text-muted">{'(după festival)'}</span>
													{/if}
												</a>
											{/each}
										</div>
									{/if}
								</div>
							{:else}
								<a
									href={item.href}
									class="{item.color} block px-4 py-2 text-lg font-bold"
									onclick={() => (mobileMenuOpen = false)}
								>
									{item.title}
								</a>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</nav>

	<main>
		<section class="container mx-auto flex min-h-[calc(100vh-74px)] flex-col items-center lg:gap-16 px-4 py-8 lg:flex-row lg:justify-between lg:px-10">
			<div class="w-full lg:w-1/2">
				<h1 class="font-rubik mb-6 text-left text-4xl leading-tight font-bold lg:text-7xl xl:text-8xl">
					<span class="whitespace-nowrap">Festivalul de</span> <span class="text-accent">Literatură</span>
				</h1>

				<p class="font-caveat mb-8 text-left text-lg leading-relaxed font-bold lg:text-2xl xl:text-3xl">
					Dedicat copiilor și adolescenților din Botoșani! O sărbătoare a cărților, poveștilor și
					imaginației.
				</p>

				<div class="mb-10 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
					<div class="text-md flex items-center space-x-2 text-primary lg:text-lg xl:text-xl whitespace-nowrap"><Calendar class="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" /><span class="font-semibold">18-21 septembrie 2025</span></div>
					<div class="text-md flex items-center space-x-2 text-primary lg:text-lg xl:text-xl whitespace-nowrap"><MapPin class="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" /><span class="font-semibold">Botoșani, România</span></div>
				</div>

				<div
					class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
				>
					<Button
					size=""
						class=" bg-primary px-8 text-lg font-extrabold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/90 lg:px-10 lg:py-4 lg:text-xl xl:px-12 xl:text-2xl after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-100 after:bg-gradient-to-r after:from-primary/20 after:via-transparent after:to-primary/20 after:animate-shine rounded-full"
					>
						Descoperă Programul
					</Button>
				</div>
			</div>

			<div class="mt-16 w-full lg:mt-0 lg:w-5/12">
				<img 
					src="/landing2.png" 
					alt="APOLODOR" 
					class="h-auto w-full object-contain lg:max-h-[700px] xl:max-h-[800px]" 
				/>
			</div>
		</section>
	</main>
</div>
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

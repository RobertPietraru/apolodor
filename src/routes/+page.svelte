<script lang="ts">
	import { Calendar, MapPin, Users, ChevronDown, Menu, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

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
				{ title: 'Scriitori', href: '/scriitori' },
				{ title: 'Ilustratori', href: '/ilustratori' },
				{ title: 'Invitați speciali', href: '/invitati-speciali' }
			]
		},
		{
			title: 'EXPOZIȚII',
			color: 'text-success hover:text-success/90',
			href: '/expozitii'
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
		},
		{
			title: 'PARTENERI',
			color: 'text-accent hover:text-accent/90',
			href: '/parteneri'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};

	let mobileMenuOpen = $state(false);
	let openDropdown = $state<string | null>(null);
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<div class="min-h-screen bg-background">
	<header class="border-b-2 border-warning bg-background shadow-sm">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
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
				<p class="mt-1 text-lg font-semibold text-warning">18-21 septembrie 2025, Botoșani</p>
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
		<section class="bg-gradient-to-br from-muted/50 via-accent/50 to-primary/50 py-16 lg:py-24">
			<div class="container mx-auto px-4 text-center">
				<div class="mx-auto max-w-4xl">
					<h1 class="font-rubik mb-6 text-4xl leading-tight font-bold text-foreground lg:text-6xl">
						Bun venit la <span class="text-primary">APOLODOR</span>
					</h1>

					<p class="font-caveat mb-8 text-xl leading-relaxed font-bold text-muted-foreground lg:text-2xl">
						Primul festival dedicat copiilor și adolescenților din Botoșani! O sărbătoare a
						cărților, poveștilor și imaginației.
					</p>

					<div
						class="mb-10 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8"
					>
						<div class="flex items-center space-x-2 text-lg text-muted-foreground">
							<Calendar class="h-6 w-6 text-warning" />
							<span class="font-semibold">18-21 septembrie 2025</span>
						</div>
						<div class="flex items-center space-x-2 text-lg text-muted-foreground">
							<MapPin class="h-6 w-6 text-destructive" />
							<span class="font-semibold">Botoșani, România</span>
						</div>
						<div class="flex items-center space-x-2 text-lg text-muted-foreground">
							<Users class="h-6 w-6 text-primary" />
							<span class="font-semibold">Pentru copii și adolescenți</span>
						</div>
					</div>

					<div
						class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
					>
						<Button
							size="lg"
							class="bg-primary px-8 py-3 text-lg font-bold text-primary-foreground hover:bg-primary/90"
						>
							Descoperă Programul
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="border-2 border-warning bg-transparent px-8 py-3 text-lg font-bold text-warning hover:bg-warning/10"
						>
							Despre Festival
						</Button>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</svelte:head>

<style>
	.font-rubik {
		font-family: 'Rubik', sans-serif;
	}
</style>

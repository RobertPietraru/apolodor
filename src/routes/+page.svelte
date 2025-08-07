<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import {
		Calendar,
		MapPin,
		Star,
		FileText,
		Image,
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	const { data } = $props();
</script>



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
				src="/landing2.svg"
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
						{#each data.guests.writers as guest}
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src={guest.photo}
									alt={guest.name}
									class="h-full w-full rounded-full border-4 border-primary/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">{guest.name}</h4>
						</div>
						{/each}
					</div>
				</div>

				<!-- Artiste Vizuale Section -->
				<div>
					<h3 class="mb-6 border-b pb-2 text-2xl font-semibold">{m.guests_illustrators()}</h3>
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{#each data.guests.illustrators as guest}
						<div class="flex flex-col items-center text-center">
							<div class="mb-4 h-32 w-32">
								<img
									src={guest.photo}
									alt={guest.name}
									class="h-full w-full rounded-full border-4 border-destructive/20 object-cover shadow-lg"
								/>
							</div>
							<h4 class="font-semibold">{guest.name}</h4>
						</div>
						{/each}
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
								src="/assets/people/ada_milea.jpeg"
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
						src="/assets/people/dan_paper.jpg"
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

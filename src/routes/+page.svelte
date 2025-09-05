<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import {
		Calendar,
		MapPin,
		Star,
		FileText,
		Image,
		ArrowRight,
		Mail,
		Facebook,
		Instagram
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { page } from '$app/stores';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	const { data } = $props();
	let locale = $state(getLocale());
</script>

<main>
	{@render landingSection()}
	{@render aboutSection()}
	{@render activitiesSection()}
	{@render guestsSection()}
	{@render concertSection()}
	{@render featuredArticlesSection()}
	{@render contactSection()}
</main>

{#snippet contactSection()}
	<section id="contact_section" class="container mx-auto px-4 py-16">
		<h2 class="mb-12 text-center text-4xl font-bold">{m.footer_contact()}</h2>
		<div class="grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
			<a class="flex flex-col items-center text-center" href="mailto:{m.footer_email()}">
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
					<Mail class="h-5 w-5 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Email</h3>
				<span>
					{m.footer_email()}
				</span>
			</a>

			<a
				class="flex flex-col items-center text-center"
				href="https://www.facebook.com/festivalul.apolodor"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
					<Facebook class="h-5 w-5 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Facebook</h3>
				<span class="text-muted-foreground transition-colors hover:text-destructive">
					@festivalul.apolodor
				</span>
			</a>

			<a
				class="flex flex-col items-center text-center"
				href="https://www.instagram.com/festivalul_apolodor/"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
					<Instagram class="h-5 w-5 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Instagram</h3>
				<span> @festivalul_apolodor </span>
			</a>
		</div>
	</section>
{/snippet}
{#snippet landingSection()}
	<section
		class="container mx-auto flex flex-col-reverse items-center gap-4 px-4 py-8 lg:min-h-[calc(100vh-74px)] lg:flex-row lg:justify-between lg:gap-16 lg:px-10"
	>
		<div class="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
			<h1
				class="font-rubik mb-4 text-center text-4xl leading-tight font-bold lg:text-left lg:text-5xl"
			>
				{@html m.landing_title()}
			</h1>

			<p
				class="font-caveat mb-6 text-center text-base leading-relaxed font-bold lg:text-left lg:text-lg"
			>
				{m.landing_subtitle()}
			</p>

			<div
				class="mb-8 flex flex-col items-center justify-center space-y-3 md:mb-0 md:flex-row md:space-y-0 md:space-x-6"
			>
				<div
					class="flex items-center space-x-2 text-sm whitespace-nowrap text-primary lg:text-base"
				>
					<Calendar class="h-4 w-4 lg:h-5 lg:w-5" /><span class="font-semibold"
						>{m.festival_date()}</span
					>
				</div>
				<div
					class="flex items-center space-x-2 text-sm whitespace-nowrap text-primary lg:text-base"
				>
					<MapPin class="h-4 w-4 lg:h-5 lg:w-5" /><span class="font-semibold"
						>{m.footer_location()}</span
					>
				</div>
			</div>

			<div
				class="flex flex-col items-center space-y-4 sm:mt-6 sm:flex-row sm:space-y-0 sm:space-x-4"
			>
				<Button
					size="custom"
					href={localizeHref('/guests', { locale })}
					class="after:animate-shine rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-all duration-300 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-primary/20 after:via-transparent after:to-primary/20 after:opacity-0 after:transition-opacity hover:scale-105 lg:px-8 lg:py-3 lg:text-lg"
				>
					{m.discover_guests()}
				</Button>
			</div>
		</div>

		<div class="w-full lg:w-5/12">
			<img
				src="/landing.svg"
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
	<section class="relative overflow-hidden px-4 py-24">
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
		<div class="grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-primary/10 p-4">
					<Image class="h-8 w-8 text-primary" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">{m.exhibitions_title()}</h3>
				<p>
					{m.exhibitions_subtitle()}
				</p>
			</div>

			<div class="flex flex-col items-center text-center">
				<div class="mb-4 rounded-full bg-destructive/10 p-4">
					<FileText class="h-8 w-8 text-destructive" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">{m.program_readings()}</h3>
				<p>
					{m.readings_subtitle()}
				</p>
			</div>

			<div class="flex items-center justify-center md:col-span-2 lg:col-span-1">
				<div class="flex flex-col items-center text-center md:w-1/2 lg:w-full">
					<div class="bg-warning/10 mb-4 rounded-full p-4">
						<Star class="text-warning h-8 w-8" />
					</div>
					<h3 class="mb-2 text-xl font-semibold">{m.program_workshops()}</h3>
					<p>
						{m.workshops_subtitle()}
					</p>
				</div>
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
					<p class="leading-relaxed">
						{m.about_mission_description()}
					</p>
				</div>
				<div>
					<h3 class="mb-3 border-b pb-2 text-2xl font-semibold text-primary">
						{m.about_organizers_title()}
					</h3>
					<p class="leading-relaxed">
						{m.about_organizers_description()}
					</p>
				</div>
			</div>
		</div>
	</section>
{/snippet}
{#snippet featuredArticlesSection()}
	<section class="bg-accent/5 px-4 py-16">
		<div class="container mx-auto">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-4xl font-bold">{m.news_section_title()}</h2>
				<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
					{m.news_section_subtitle()}
				</p>
			</div>

			{#if data.articles && data.articles.length > 0}
				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.articles.slice(0, 3) as article}
						<div
							class="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							<div class="aspect-[16/9] w-full overflow-hidden bg-muted">
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
								<img
									src={article.image}
									alt={article.title}
									class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>

							<div class="p-6">
								<div class="mb-4 flex items-center justify-between gap-3">
									<Badge class="text-xs font-medium">
										{article.category}
									</Badge>
									<div class="flex items-center gap-1 text-xs text-muted-foreground">
										<Calendar class="h-3 w-3" />
										{new Date(article.date).toLocaleDateString()}
									</div>
								</div>

								<h3
									class="text-lg leading-tight font-semibold transition-colors duration-200 group-hover:text-primary"
								>
									<a
										href={localizeHref(`/blog/${article.id}`, { locale })}
										class="focus:outline-none"
									>
										<span class="absolute inset-0" aria-hidden="true"></span>
										{article.title}
									</a>
								</h3>

								<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
									{article.excerpt}
								</p>

								<div class="mt-4">
									<Button
										variant="ghost"
										class="group/btn h-auto p-0 text-primary hover:bg-transparent hover:text-primary/80"
									>
										<a
											href={localizeHref(`/blog/${article.id}`, { locale })}
											class="flex items-center gap-2"
											aria-label={`${m.blog_read_more()}: ${article.title}`}
										>
											{m.blog_read_more()}
											<ArrowRight
												class="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
											/>
										</a>
									</Button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="mt-12 text-center">
					<Button href={localizeHref('/blog', { locale })} variant="outline" size="lg">
						{m.news_view_all()}
					</Button>
				</div>
			{:else}
				<div class="mx-auto max-w-md py-20 text-center">
					<div class="mb-6">
						<FileText class="mx-auto h-16 w-16 text-muted-foreground/50" />
					</div>
					<h3 class="mb-2 text-2xl font-semibold">{m.blog_no_results_title()}</h3>
					<p class="text-muted-foreground">{m.blog_no_results_description()}</p>
				</div>
			{/if}
		</div>
	</section>
{/snippet}
<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
	<meta name="keywords" content={data.metadata.keywords} />

	<!-- Open Graph -->
	<meta property="og:title" content={data.metadata.ogTitle} />
	<meta property="og:description" content={data.metadata.ogDescription} />
	<meta property="og:image" content={data.metadata.ogImage} />
	<meta property="og:type" content={data.metadata.ogType} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content="APOLODOR" />

	<!-- Twitter -->
	<meta name="twitter:card" content={data.metadata.twitterCard} />
	<meta name="twitter:title" content={data.metadata.ogTitle} />
	<meta name="twitter:description" content={data.metadata.ogDescription} />
	<meta name="twitter:image" content={data.metadata.ogImage} />

	<!-- Additional SEO -->
	<link rel="canonical" href={$page.url.href} />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="APOLODOR Festival Team" />

	<!-- Fonts -->
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

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>

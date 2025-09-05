<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import * as Card from '$lib/components/ui/card';
	import { page } from '$app/stores';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	const { data } = $props();
	let locale = $state(getLocale());
</script>

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
</svelte:head>

<main class="space-y-12 p-4">
	<div class="space-y-2">
		<h1 class="text-center">{m.special_guests()}</h1>
		<p class="text-center text-muted">{m.special_guests_subtitle()}</p>
	</div>

	<!-- Writers Section -->
	{#if data.writers.length > 0}
		{@render writerSection()}
	{/if}

	<!-- Illustrators Section -->
	{#if data.illustrators.length > 0}
		{@render illustratorSection()}
	{/if}

	<!-- Moderators Section -->
	{#if data.moderators.length > 0}
		{@render moderatorSection()}
	{/if}

	<!-- Musicians Section -->
	{#if data.singers.length > 0}
		{@render singerSection()}
	{/if}
</main>
{#snippet singerSection()}
	<section class="space-y-8">
		<div class="flex items-center gap-4">
			<div class="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
			<h2 class="text-3xl font-bold whitespace-nowrap text-primary">{m.guests_singers()}</h2>
			<div class="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each data.singers as guest}
				<a
					class="group relative flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-accent/10 hover:shadow-xl"
					href={localizeHref(`/guests/${guest.name}`, { locale })}
				>
					<div class="relative">
						<div
							class="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
						></div>
						<div
							class="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 shadow-md transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl"
						>
							<img
								src={guest.photo}
								alt={guest.name}
								class="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-6"
							/>
						</div>
					</div>
					<div class="text-center">
						<h4 class="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
							{guest.name}
						</h4>
						<p
							class="mt-3 translate-y-2 transform text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span class="inline-flex items-center gap-2 font-medium">
								{m.see_details()}
								<svg
									class="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M5 12h14m-7-7l7 7-7 7" />
								</svg>
							</span>
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
{/snippet}

{#snippet illustratorSection()}
	<section class="space-y-8">
		<div class="flex items-center gap-4">
			<div class="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
			<h2 class="text-3xl font-bold whitespace-nowrap text-primary">{m.guests_illustrators()}</h2>
			<div class="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each data.illustrators as guest}
				<a
					class="group relative flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-accent/10 hover:shadow-xl"
					href={localizeHref(`/guests/${guest.name}`, { locale })}
				>
					<div class="relative">
						<div
							class="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
						></div>
						<div
							class="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 shadow-md transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl"
						>
							<img
								src={guest.photo}
								alt={guest.name}
								class="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-6"
							/>
						</div>
					</div>
					<div class="text-center">
						<h4 class="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
							{guest.name}
						</h4>
						<p
							class="mt-3 translate-y-2 transform text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span class="inline-flex items-center gap-2 font-medium">
								{m.see_details()}
								<svg
									class="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M5 12h14m-7-7l7 7-7 7" />
								</svg>
							</span>
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
{/snippet}
{#snippet writerSection()}
	<section class="space-y-8">
		<div class="flex items-center gap-4">
			<div class="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
			<h2 class="text-3xl font-bold whitespace-nowrap text-primary">{m.guests_writers()}</h2>
			<div class="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each data.writers as guest}
				<a
					class="group relative flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-accent/10 hover:shadow-xl"
					href={localizeHref(`/guests/${guest.name}`, { locale })}
				>
					<div class="relative">
						<div
							class="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
						></div>
						<div
							class="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 shadow-md transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl"
						>
							<img
								src={guest.photo}
								alt={guest.name}
								class="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-6"
							/>
						</div>
					</div>
					<div class="text-center">
						<h4 class="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
							{guest.name}
						</h4>
						<p
							class="mt-3 translate-y-2 transform text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span class="inline-flex items-center gap-2 font-medium">
								{m.see_details()}
								<svg
									class="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M5 12h14m-7-7l7 7-7 7" />
								</svg>
							</span>
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>{/snippet}

{#snippet moderatorSection()}
	<section class="space-y-8">
		<div class="flex items-center gap-4">
			<div class="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
			<h2 class="text-3xl font-bold whitespace-nowrap text-primary">{m.guests_moderators()}</h2>
			<div class="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each data.moderators as guest}
				<a
					class="group relative flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-accent/10 hover:shadow-xl"
					href={localizeHref(`/guests/${guest.name}`, { locale })}
				>
					<div class="relative">
						<div
							class="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
						></div>
						<div
							class="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 shadow-md transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl"
						>
							<img
								src={guest.photo}
								alt={guest.name}
								class="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-6"
							/>
						</div>
					</div>
					<div class="text-center">
						<h4 class="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
							{guest.name}
						</h4>
						<p
							class="mt-3 translate-y-2 transform text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span class="inline-flex items-center gap-2 font-medium">
								{m.see_details()}
								<svg
									class="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M5 12h14m-7-7l7 7-7 7" />
								</svg>
							</span>
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
{/snippet}

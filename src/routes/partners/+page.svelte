<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { page } from '$app/stores';
	
	const { data } = $props();
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

<main class="container mx-auto space-y-8 p-4">
	<div class="space-y-2">
		<h1 class="text-center">{m.partners_section_title()}</h1>
		<p class="text-center text-muted">{m.partners_section_subtitle()}</p>
	</div>
	{#each Object.entries(data.partners) as [key, category]}
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-semibold text-foreground">{key}</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each category as partner}
					<div
						class="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-destructive/20 hover:shadow-lg"
					>
						<p
							class="text-lg leading-relaxed font-medium text-foreground group-hover:text-destructive"
						>
							{partner}
						</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</main>

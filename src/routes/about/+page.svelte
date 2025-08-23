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

<main class="container mx-auto px-4 py-12">
	<div class="mb-16 text-center">
		<h1 class="mb-6 text-4xl font-bold tracking-tight text-primary">{m.about_festival()}</h1>
		<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
			{m.about_description()}
		</p>
	</div>
	
	<div class="grid gap-12 md:grid-cols-2">
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-primary">{m.about_mission_title()}</h2>
			<p class="leading-relaxed">{m.about_mission_description()}</p>
		</div>
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-primary">{m.about_organizers_title()}</h2>
			<p class="leading-relaxed">{m.about_organizers_description()}</p>
		</div>
	</div>
</main>
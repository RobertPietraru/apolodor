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
		<h1 class="mb-6 text-4xl font-bold tracking-tight text-primary">{m.about_team()}</h1>
		<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
			Cunoaște echipa care face posibil Festivalul Internațional de Literatură pentru Copii APOLODOR
		</p>
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.team as member}
			<div
				class="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
			>
				<div class="aspect-square overflow-hidden">
					<img
						src={member.photo}
						alt={member.name}
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>
				<div class="p-6">
					<h3 class="mb-2 text-xl font-semibold text-foreground">{member.name}</h3>
					<p class="mb-4 text-muted-foreground">{member.description}</p>
				</div>
			</div>
		{/each}
	</div>
</main>

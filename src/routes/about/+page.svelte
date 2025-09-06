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
<div class="container mx-auto px-4 py-16">
	<div class="prose prose-lg mx-auto">
		<h1 class="mb-8 text-center text-4xl font-bold">
			Festivalul de Literatură pentru Copii și Adolescenți APOLODOR din Botoșani
		</h1>

		<p class="mb-6 text-xl leading-relaxed">
			Festivalul își propune să îi apropie pe cei mai mici cititori de literatura contemporană
			dedicată lor.
		</p>

		<p class="text-xl leading-relaxed">
			Aducând în prim-plan voci esențiale ale culturii române contemporane, Festivalul APOLODOR își
			propune să devină o platformă unică pentru dialog, reflecție și inițiative culturale
			inovatoare, cu un potențial real de impact în combaterea deficitului de lectură în România.
		</p>
	</div>
</div>

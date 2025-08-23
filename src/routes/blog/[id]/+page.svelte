<script>
	import * as Card from '$lib/components/ui/card';
	import { marked } from 'marked';
	import * as m from '$lib/paraglide/messages';
	import { page } from '$app/stores';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { getLocale } from '$lib/paraglide/runtime.js';

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
	
	<!-- Article specific meta -->
	{#if data.article.date}
		<meta property="article:published_time" content={data.article.date} />
	{/if}
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<h1 class="text-4xl font-bold mb-6">{data.article.title}</h1>
			<img
				src={data.article.image}
				alt={data.article.title}
				class="mb-8 h-[400px] w-full rounded-lg object-cover"
			/>

			<article class="prose prose-lg markdown max-w-none">
				{@html marked(data.article.content)}
			</article>
		</div>
		<aside class="lg:col-span-1">
			<div class="sticky top-8">
				<h2 class="mb-4 text-2xl font-bold">{m.blog_recommended_articles()}</h2>
				<div class="space-y-4">
					{#each data.relatedArticles as article}
						<Card.Root class="group relative">
							<Card.Content class="px-4 py-0 flex gap-4">
								<img
									src={article.image}
									alt={article.title}
									class="h-22 w-22 rounded-lg object-cover"
								/>
								<div>
									<div class="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
										<time datetime={article.date}>
											{new Date(article.date).toLocaleDateString()}
										</time>
									</div>

									<h3
										class="text-base leading-tight font-semibold transition-colors duration-200 group-hover:text-primary"
									>
										<a href={localizeHref(`/blog/${article.id}`, {locale})} class="focus:outline-none">
											<span class="absolute inset-0" aria-hidden="true"></span>
											{article.title}
										</a>
									</h3>
									<p class="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
										{article.excerpt}
									</p>
								</div>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>
		</aside>
	</div>
</div>

<style>
	:global(.markdown h1) {
		font-size: 2.25rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.markdown h2) {
		font-size: 1.875rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.markdown h3) {
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	:global(.markdown p) {
		margin-bottom: 1rem;
		line-height: 1.625;
	}

	:global(.markdown ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.markdown ol) {
		list-style-type: decimal;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.markdown li) {
		margin-bottom: 0.5rem;
	}

	:global(.markdown a) {
		color: var(--primary);
	}

	:global(.markdown a:hover) {
		text-decoration: underline;
	}

	:global(.markdown blockquote) {
		border-left: 4px solid rgba(var(--primary), 0.2);
		padding-left: 1rem;
		font-style: italic;
		margin: 1rem 0;
	}

	:global(.markdown code) {
		background-color: var(--muted);
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
	}

	:global(.markdown pre) {
		background-color: var(--muted);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		overflow-x: auto;
	}

	:global(.markdown img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1rem 0;
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>

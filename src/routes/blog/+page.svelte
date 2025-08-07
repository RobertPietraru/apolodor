<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { Search, Filter, Calendar, ArrowRight, BookOpen, X } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	const { data } = $props();

	// Get URL parameters
	const urlParams = page.url.searchParams;

	// UI state from URL parameters
	let query = $state(urlParams.get('q') || '');
	$effect(() => {
		query = urlParams.get('q') || '';
		activeCategory = urlParams.get('category') || 'all';
		sortBy = urlParams.get('sort') as 'newest' | 'oldest' | 'az' | 'za' || 'newest';
	});
	let activeCategory: 'all' | string = $state(urlParams.get('category') || 'all');
	let sortBy: 'newest' | 'oldest' | 'az' | 'za' = $state(
		(urlParams.get('sort') as 'newest' | 'oldest' | 'az' | 'za') || 'newest'
	);

	// More useful content types instead of generic categories
	const categories = ['all', 'program', 'guests', 'workshops'];

	let articles = $derived(data.articles);
	function updateURL() {
		const params = new URLSearchParams();
		params.set('q', query);
		if (activeCategory !== 'all') params.set('category', activeCategory);
		if (sortBy !== 'newest') params.set('sort', sortBy);

		const newURL = params.toString() ? `?${params.toString()}` : '';
		goto(newURL, { replaceState: true });
	}

	function clearSearch() {
		query = '';
		updateURL();
	}

	function formatDate(iso: string) {
		const d = new Date(iso);
		return d.toLocaleDateString('ro-RO', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	const categoryLabel: Record<string, string> = {
		all: m.blog_category_all(),
		program: m.blog_category_program(),
		guests: m.blog_category_guests(),
		workshops: m.blog_category_workshops()
	};

	const categoryVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
		announcement: 'default',
		event: 'secondary',
		update: 'outline',
	};

	const sortLabels: Record<string, string> = {
		newest: m.blog_sort_newest(),
		oldest: m.blog_sort_oldest(),
		az: m.blog_sort_az(),
		za: m.blog_sort_za()
	};
</script>

<!-- Hero Section -->
<section class="">
	<div class="container mx-auto px-4 py-16 lg:py-24">
		<div class="mx-auto max-w-4xl text-center">
			<div class="space-y-6">
				<div class="space-y-4">
					<div
						class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
					>
						<BookOpen class="h-4 w-4" />
						{m.festival_name()}
					</div>
					<h1 class="font-rubik text-4xl leading-tight font-bold lg:text-5xl xl:text-6xl">
						{m.blog_hero_title()}
					</h1>
					<p class="font-caveat mx-auto max-w-2xl text-lg text-muted-foreground lg:text-xl">
						{m.blog_hero_subtitle()}
					</p>
				</div>

				<div class="flex items-center justify-center gap-4 text-sm text-muted-foreground">
					<div class="flex items-center gap-2">
						<Calendar class="h-4 w-4" />
						<span>{m.blog_latest_updates()}</span>
					</div>
					<div class="h-1 w-1 rounded-full bg-muted-foreground"></div>
					<span
						>{data.totalArticleCount}
						{data.totalArticleCount === 1 ? m.blog_articles_count() : m.blog_articles_count_plural()}</span
					>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Search and Filters -->
<section class="border-b bg-background/50 backdrop-blur-sm">
	<div class="container mx-auto px-4 py-8">
		<div class="space-y-6">
			<!-- Search Bar -->
			<div class="relative mx-auto max-w-2xl">
				<div class="absolute top-1/2 flex -translate-y-1/2 items-center justify-between px-2">
					<Button
						variant="ghost"
						size="icon"
						class="text-muted-foreground"
						onclick={() => {
							updateURL();
						}}
					>
						<Search class="h-5 w-5 text-muted-foreground" />
					</Button>
				</div>
				<div class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2">
					{#if query}
						<Button variant="ghost" size="icon" onclick={clearSearch}>
							<X class="h-4 w-4" />
						</Button>
					{/if}
				</div>
				<Input
					type="search"
					placeholder={m.blog_search_placeholder()}
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							updateURL();
						}
					}}
					bind:value={query}
					class="h-12 pr-12 pl-12 text-base"
				/>
			</div>

			<!-- Filters -->
			<div
				class="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
			>
				<!-- Categories -->
				<div class="flex flex-wrap items-center gap-2">
					<Filter class="h-4 w-4 text-muted-foreground" />
					<span class="text-sm font-medium text-muted-foreground">{m.blog_filter_label()}</span>
					{#each categories as cat}
						<Button
							variant={activeCategory === cat ? 'default' : 'outline'}
							size="sm"
							class="rounded-full transition-all duration-200 hover:scale-105"
							aria-pressed={activeCategory === cat}
							onclick={() => {
								activeCategory = cat;
								updateURL();
							}}
						>
							{categoryLabel[cat]}
						</Button>
					{/each}
				</div>

				<!-- Sort -->
				<div class="flex items-center gap-2">
					<span class="text-sm font-medium text-muted-foreground">{m.blog_sort_label()}</span>
					<Select.Root bind:value={sortBy} type="single" onValueChange={updateURL}>
						<Select.Trigger class="w-40">
							{sortLabels[sortBy]}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="newest">{m.blog_sort_newest()}</Select.Item>
							<Select.Item value="oldest">{m.blog_sort_oldest()}</Select.Item>
							<Select.Item value="az">{m.blog_sort_az()}</Select.Item>
							<Select.Item value="za">{m.blog_sort_za()}</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Results count -->
<div class="container mx-auto px-4 pt-6">
	<p class="text-center text-sm text-muted-foreground" aria-live="polite">
		{articles.length}
		{articles.length === 1 ? m.blog_results_count() : m.blog_results_count_plural()}
	</p>
</div>

<!-- News Grid -->
<section class="pb-20">
	<div class="container mx-auto px-4 pt-8">
		{#if articles.length === 0}
			<div class="mx-auto max-w-md py-20 text-center">
				<div class="mb-6">
					<BookOpen class="mx-auto h-16 w-16 text-muted-foreground/50" />
				</div>
				<h3 class="mb-2 text-2xl font-semibold">{m.blog_no_results_title()}</h3>
				<p class="text-muted-foreground">{m.blog_no_results_description()}</p>
			</div>
		{:else}
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each articles as item}
					<Card.Root
						class="group relative overflow-hidden rounded-xl border bg-card pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<a href="/news/${item.id}">
							<div class="aspect-[16/9] w-full overflow-hidden bg-muted">
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
								<img
									src={item.image}
									alt={item.title}
									class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>
						</a>

						<Card.Header class="p-6">
							<div class="mb-4 flex items-center justify-between gap-3">
								<Badge
									variant={categoryVariant[item.category as keyof typeof categoryVariant]}
									class="text-xs font-medium"
								>
									{item.category.charAt(0).toUpperCase() + item.category.slice(1)}
								</Badge>
								<time
									datetime={item.date}
									class="flex items-center gap-1 text-xs text-muted-foreground"
								>
									<Calendar class="h-3 w-3" />
									{formatDate(item.date)}
								</time>
							</div>

							<h3
								class="text-lg leading-tight font-semibold transition-colors duration-200 group-hover:text-primary"
							>
								<a href={`/news/${item.id}`} class="focus:outline-none">
									<span class="absolute inset-0" aria-hidden="true"></span>
									{item.title}
								</a>
							</h3>
						</Card.Header>

						<Card.Content class="p-6 pt-0">
							<p class="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
								{item.excerpt}
							</p>
						</Card.Content>

						<Card.Footer class="p-6 pt-0">
							<Button
								variant="ghost"
								class="group/btn h-auto p-0 text-primary hover:bg-transparent hover:text-primary/80"
							>
								<a
									href={`/news/${item.id}`}
									class="flex items-center gap-2"
									aria-label={`${m.blog_read_more()}: ${item.title}`}
								>
									{m.blog_read_more()}
									<ArrowRight
										class="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
									/>
								</a>
							</Button>
						</Card.Footer>
					</Card.Root>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>


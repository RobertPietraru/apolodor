<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	const { data } = $props();
</script>

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

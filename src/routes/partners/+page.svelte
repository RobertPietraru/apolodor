<script lang="ts">
	import { m } from '$lib/paraglide/messages';
    const { data } = $props();

</script>

<main class="container mx-auto space-y-8 p-4">
	<div class="space-y-2">
		<h1 class="text-center">Parteneri</h1>
		<p class="text-center text-muted">Lista cu toti partenerii nostri</p>
	</div>
	<div class="mb-16">
		<h2 class="mb-8 text-3xl font-semibold text-foreground">Parteneri Instituționali</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.partners.institutional as partner}
				<div
					class="group rounded-xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
				>
					<p class="text-lg leading-relaxed font-medium text-foreground group-hover:text-primary">
						{partner}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-16">
		<h2 class="mb-8 text-3xl font-semibold text-foreground">Edituri Partenere</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each data.partners.publishers as publisher}
				<div
					class="group hover:border-warning/20 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					<p class="group-hover:text-warning text-lg leading-relaxed font-medium text-foreground">
						{publisher}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-16">
		<h2 class="mb-8 text-3xl font-semibold text-foreground">Parteneri Media</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each data.partners.media as mediaPartner}
				<div
					class="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-destructive/20 hover:shadow-lg"
				>
					<p
						class="text-lg leading-relaxed font-medium text-foreground group-hover:text-destructive"
					>
						{mediaPartner}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<h2 class="mb-8 text-3xl font-semibold text-foreground">Sponsori</h2>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each data.partners.sponsors as sponsor}
				<div
					class="group rounded-xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg"
				>
					<p
						class="text-lg leading-relaxed font-medium text-foreground group-hover:text-accent-foreground"
					>
						{sponsor}
					</p>
				</div>
			{/each}
		</div>
	</div>
</main>

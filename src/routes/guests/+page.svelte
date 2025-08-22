<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	const { data } = $props();
</script>

<main class="space-y-8 p-4">
	<div class="space-y-2">
		<h1 class="text-center">{m.special_guests()}</h1>
		<p class="text-center text-muted">{m.special_guests_subtitle()}</p>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each data.guests as guest}
			<a class="group relative flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-accent/10 hover:shadow-xl hover:-translate-y-2" href="/guests/{guest.name}">
				<div class="relative">
					<div class="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 animate-pulse"></div>
					<div class="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-500 group-hover:border-primary/60 shadow-md group-hover:shadow-2xl">
						<img
							src={guest.photo}
							alt={guest.name}
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-6"
						/>
					</div>
				</div>
				<div class="text-center">
					<h4 class="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">{guest.name}</h4>
					<p class="mt-3 text-sm text-muted-foreground transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
						<span class="inline-flex items-center gap-2 font-medium">
							{m.see_details()}
							<svg class="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M5 12h14m-7-7l7 7-7 7"/>
							</svg>
						</span>
					</p>
				</div>
			</a>
		{/each}
	</div>
</main>

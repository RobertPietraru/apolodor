<script lang="ts">
	const { data } = $props();
</script>

<main class="space-y-8 p-4">
	<div class="space-y-2">
		<h1 class="text-center">Invitati speciali</h1>
		<p class="text-center text-muted">Lista cu toti invitatii speciali</p>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each data.guests as guest}
			<a class="flex flex-col items-center justify-center gap-2" href="/guests/{guest.name}">
				<div class="h-48 w-48 shrink-0 ">
					<img
						src={guest.photo}
						alt={guest.name}
						class="h-full w-full cursor-pointer rounded-full border-4 border-primary/20 object-cover shadow-lg"
					/>
				</div>
				<h4 class="cursor-pointer">{guest.name}</h4>
			</a>
		{/each}
	</div>
</main>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';
</script>

<div class="flex flex-col items-center justify-center p-8">
	<img
		src="/assets/illustrations/teen.svg"
		alt="Teen illustration"
		class="animate-float mb-6 h-96 w-96"
	/>
	<div class="relative mb-6">
		<h1
			class="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-9xl font-bold text-transparent"
		>
			{$page.status}
		</h1>
		<div
			class="absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
		></div>
	</div>
	{#if $page.status === 404}
		<p class="mb-8 text-3xl font-medium text-foreground/80">
			{m.notFoundError()}
		</p>
	{:else}
		<p class="mb-8 text-3xl font-medium text-foreground/80">
			{$page.error?.message || m.errorTitle()}
		</p>
	{/if}
	<Button
		href="/"
		variant="outline"
		class="border-2 border-primary bg-transparent px-8 py-6 text-lg font-semibold text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10"
	>
		<ArrowLeft class="mr-3 h-6 w-6" />
		{m.backToHome()}
	</Button>
</div>

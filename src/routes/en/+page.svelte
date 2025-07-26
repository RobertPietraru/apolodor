<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setLocale('en');
		goto('/');
	});
</script>

<div class="flex items-center justify-center min-h-screen">
	<p>Redirecting to English version...</p>
</div> 
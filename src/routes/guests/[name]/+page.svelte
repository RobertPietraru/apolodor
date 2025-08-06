<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';
	import { marked } from 'marked';

	const { data } = $props();
</script>

<main class="p-4">
	<Button href="./" variant="outline">
		<ArrowLeft />
		Inapoi
	</Button>
	<div class="flex justify-center">
		<div class="h-48 w-48 shrink-0">
			<img
				src={data.guest.photo}
				alt={data.guest.name}
				class="h-full w-full cursor-pointer rounded-full border-4 border-primary/20 object-cover shadow-lg"
			/>
		</div>
	</div>
    <div class="markdown mt-4">{@html marked.parse(data.guest.content)}</div>
</main>
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
</style>
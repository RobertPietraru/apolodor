<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import * as Card from '$lib/components/ui/card';
	import { page } from '$app/stores';
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	const { data } = $props();
	let locale = $state(getLocale());
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
	<meta name="keywords" content={data.metadata.keywords} />
	<meta property="og:title" content={data.metadata.ogTitle} />
	<meta property="og:description" content={data.metadata.ogDescription} />
	<meta property="og:image" content={data.metadata.ogImage} />
	<meta property="og:type" content={data.metadata.ogType} />
	<meta property="og:url" content={$page.url.href} />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<main class="prose prose-lg container mx-auto max-w-4xl px-4 py-8">
	<h1 class="mb-8 text-center text-4xl font-bold">
		{m.press_title()}
	</h1>

	<div class="mb-8 rounded-lg bg-accent/10 p-6">
		<h2 class="mb-4 text-2xl font-semibold">{m.press_highlights_title()}</h2>
		<ul class="list-disc space-y-2 pl-6">
			<li>{m.press_highlights_1()}</li>
			<li>{m.press_highlights_2()}</li>
			<li>{m.press_highlights_3()}</li>
		</ul>
	</div>

	<div class="space-y-8">
		<section>
			<p class="lead">
				{m.press_intro()}
			</p>
		</section>

		<section>
			<h2 class="mb-4 text-3xl font-bold">{m.press_exhibitions_title()}</h2>
			<div class="grid gap-6">
				<Card.Root class="p-6">
					<h3 class="mb-2 text-xl font-semibold">{m.press_exhibition_1_title()}</h3>
					<p>{m.press_exhibition_1_desc()}</p>
				</Card.Root>

				<Card.Root class="p-6">
					<h3 class="mb-2 text-xl font-semibold">{m.press_exhibition_2_title()}</h3>
					<p>{m.press_exhibition_2_desc()}</p>
				</Card.Root>

				<Card.Root class="p-6">
					<h3 class="mb-2 text-xl font-semibold">{m.press_exhibition_3_title()}</h3>
					<p>{m.press_exhibition_3_desc()}</p>
				</Card.Root>
			</div>
		</section>

		<section>
			<h2 class="mb-4 text-3xl font-bold">{m.press_team_title()}</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<h3 class="font-semibold">{m.press_team_leadership()}</h3>
					<ul class="list-none">
						<li>Director: Dan Lungu</li>
						<li>Director artistic: Luminița Corneanu</li>
						<li>Director executiv: Costică Roman</li>
					</ul>
				</div>
				<div>
					<h3 class="font-semibold">{m.press_team_departments()}</h3>
					<ul class="list-none">
						<li>Curator expoziții: Cezarina Caloian</li>
						<li>Manager logistică: Alexandru Teioșanu</li>
						<li>Identitate vizuală: Marinela Ciobanu</li>
						<li>Comunicare: Irina Simniceanu</li>
					</ul>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-4 text-3xl font-bold">{m.press_partners_title()}</h2>
			<div class="rounded-lg bg-accent/5 p-6">
				<h3 class="mb-2 font-semibold">{m.press_organizer()}</h3>
				<p>Fundația Corona</p>

				<h3 class="mt-4 mb-2 font-semibold">{m.press_funders()}</h3>
				<p>Consiliul Local și Primăria Municipiului Botoșani</p>

				<h3 class="mt-4 mb-2 font-semibold">{m.press_media_partners()}</h3>
				<p class="text-sm">
					Radio România Cultural, TVR Cultural, TVR Iași, Buzz Botoșani, PressHub, Revista Clivaj,
					Botoșăneanul, VIVA FM, Monitorul de Botoșani, Observator Cultural
				</p>
			</div>
		</section>

		<div class="mt-8 rounded-lg bg-primary/10 p-6 text-center">
			<h2 class="text-2xl font-bold text-primary">
				{m.press_free_access()}
			</h2>
		</div>
	</div>
</main>

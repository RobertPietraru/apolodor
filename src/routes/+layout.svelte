<script lang="ts">
	import '../app.css';
	import * as m from '$lib/paraglide/messages';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { Languages } from '@lucide/svelte';
	
	let { children } = $props();
	
	// Language switching function
	function switchLanguage() {
		const currentLocale = getLocale();
		const newLocale = currentLocale === 'ro' ? 'en' : 'ro';
		setLocale(newLocale);
	}
</script>

<main class="min-h-screen">
	{@render children()}
</main>

<footer class="border-t bg-background">
	<div class="container mx-auto px-4 py-12">
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.about_festival()}</h3>
				<p class="text-sm text-muted">
					{m.about_description()}
				</p>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_contact()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm text-muted md:block md:space-y-2">
					<li>{m.footer_email()}</li>
					<li>{m.footer_phone()}</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_quick_links()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li><a href="/program" class="text-muted hover:text-primary">{m.nav_program()}</a></li>
					<li>
						<a href="/invitati-speciali" class="text-muted hover:text-primary"
							>{m.guests_special()}</a
						>
					</li>
					<li><a href="/blog" class="text-muted hover:text-primary">{m.nav_news()}</a></li>
					<li><a href="/contact" class="text-muted hover:text-primary">{m.footer_contact()}</a></li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">{m.footer_social()}</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li>
						<a
							href="https://www.facebook.com/festivalul.apolodor"
							class="text-muted hover:text-primary">{m.social_facebook()}</a
						>
					</li>
					<li>
						<a
							href="https://www.instagram.com/festivalul_apolodor/"
							class="text-muted hover:text-primary">{m.social_instagram()}</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t pt-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="mb-4 text-center text-sm text-muted md:mb-0">
					{m.footer_copyright()}
				</p>
				<div class="flex space-x-4 text-sm text-muted">
					<a href="/politica-confidentialitate" class="hover:text-primary"
						>{m.privacy_policy()}</a
					>
					<a href="/termeni-conditii" class="hover:text-primary">{m.terms_conditions()}</a>
					<a href="https://github.com/RobertPietraru/apolodor">
						<img src="/logos/github.svg" alt="GitHub" class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

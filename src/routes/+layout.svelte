<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="min-h-screen">

{@render children()}
</main>

<footer class="border-t bg-background">
	<div class="container mx-auto px-4 py-12">
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-lg font-bold">Despre Festival</h3>
				<p class="text-sm text-muted-foreground">
					APOLODOR este festivalul de literatură dedicat copiilor și adolescenților din Botoșani,
					aducând bucuria lecturii și a imaginației în inima comunității.
				</p>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">Contact</h3>
				<ul class="flex flex-wrap gap-4 text-sm text-muted-foreground md:block md:space-y-2">
					<li>contact@apolodor.ro</li>
					<li>+40 123 456 789</li>

				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">Link-uri Rapide</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li><a href="/program" class="text-muted-foreground hover:text-primary">Program</a></li>
					<li>
						<a href="/invitati-speciali" class="text-muted-foreground hover:text-primary"
							>Invitați Speciali</a
						>
					</li>
					<li><a href="/blog" class="text-muted-foreground hover:text-primary">Blog</a></li>
					<li><a href="/contact" class="text-muted-foreground hover:text-primary">Contact</a></li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-bold">Social Media</h3>
				<ul class="flex flex-wrap gap-4 text-sm md:block md:space-y-2">
					<li><a href="#" class="text-muted-foreground hover:text-primary">Facebook</a></li>
					<li><a href="#" class="text-muted-foreground hover:text-primary">Instagram</a></li>
					<li><a href="#" class="text-muted-foreground hover:text-primary">YouTube</a></li>
				</ul>
			</div>
		</div>
		<div class="border-t pt-8">
			<div class="flex flex-col items-center md:flex-row gap-4 justify-between">
				<p class="mb-4 text-center text-sm text-muted-foreground md:mb-0">
					&copy; {new Date().getFullYear()} APOLODOR. Toate drepturile rezervate.
				</p>
				<div class="flex space-x-4 text-sm text-muted-foreground">
					<a href="/politica-confidentialitate" class="hover:text-primary"
						>Politica de Confidențialitate</a
					>
					<a href="/termeni-conditii" class="hover:text-primary">Termeni și Condiții</a>
					<img src="/logos/github.svg" alt="GitHub" class="h-4 w-4" />
				</div>
			</div>
		</div>
	</div>
</footer>

<script lang="ts">
	import '../app.css';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-background">
  <!-- Top Bar: Logo, Title, Nav, Language Switch -->
  <header class="w-full bg-white/90 shadow-sm sticky top-0 z-30 px-4 md:px-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 py-4">
      <!-- Logo and Title/Date -->
      <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-1 min-w-0">
        <a href="/" class="font-bold text-2xl md:text-3xl text-primary hover:underline shrink-0" style="font-family: 'Fredoka', sans-serif;">
          APOLODOR
        </a>
      </div>
      <!-- Navigation -->
      <div class="flex-1 flex justify-center md:justify-end w-full">
        <NavigationMenu.Root class="bg-transparent shadow-none">
          <NavigationMenu.List>
            <!-- DESPRE Dropdown -->
            <NavigationMenu.Item>
              <NavigationMenu.Trigger class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Despre</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div class="bg-white rounded-md shadow-lg p-4 min-w-[180px] flex flex-col gap-2">
                  <NavigationMenu.Link href="#" class="hover:underline">Despre festival</NavigationMenu.Link>
                  <NavigationMenu.Link href="#" class="hover:underline">Echipa</NavigationMenu.Link>
                  <NavigationMenu.Link href="#" class="hover:underline">Arhivă</NavigationMenu.Link>
                  <NavigationMenu.Link href="#" class="hover:underline">APOLODOR în presă</NavigationMenu.Link>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <!-- INVITAȚI Dropdown -->
            <NavigationMenu.Item>
              <NavigationMenu.Trigger class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Invitați</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div class="bg-white rounded-md shadow-lg p-4 min-w-[180px] flex flex-col gap-2">
                  <NavigationMenu.Link href="#" class="hover:underline">Scriitori</NavigationMenu.Link>
                  <NavigationMenu.Link href="#" class="hover:underline">Ilustratori</NavigationMenu.Link>
                  <NavigationMenu.Link href="#" class="hover:underline">Invitați speciali</NavigationMenu.Link>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <!-- EXPOZIȚII (simple link) -->
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#" class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Expoziții</NavigationMenu.Link>
            </NavigationMenu.Item>
            <!-- PROGRAM (simple link) -->
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#" class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Program</NavigationMenu.Link>
            </NavigationMenu.Item>
            <!-- NOUTĂȚI (simple link) -->
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#" class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Noutăți</NavigationMenu.Link>
            </NavigationMenu.Item>
            <!-- PARTENERI (simple link) -->
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#" class="uppercase font-bold px-4 py-2 rounded text-primary text-sm md:text-base hover:bg-primary/10 transition-colors" style="font-family: 'Fredoka', sans-serif;">Parteneri</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      <!-- Language Switch -->
      <div class="flex items-center mt-2 md:mt-0">
        <button class="px-3 py-1 rounded font-bold text-primary border border-primary hover:bg-primary hover:text-white transition-colors" aria-label="Switch to English">
          EN
        </button>
      </div>
    </div>
  </header>
  <main class="flex-1 px-4 md:px-8 py-6">
    <div class="max-w-6xl mx-auto">
      <slot />
    </div>
  </main>
  <footer class="w-full bg-secondary/60 px-4 md:px-8 py-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Fredoka', sans-serif;">Contact</h3>
        <a href="mailto:contact@apolodor.ro" class="text-primary hover:underline">contact@apolodor.ro</a>
        <a href="tel:+40123456789" class="text-primary hover:underline">+40 123 456 789</a>
        <p>Botoșani, România</p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Fredoka', sans-serif;">Link-uri rapide</h3>
        <a href="#" class="hover:underline">Despre festival</a>
        <a href="#" class="hover:underline">Program</a>
        <a href="#" class="hover:underline">Invitați</a>
        <a href="#" class="hover:underline">Parteneri</a>
      </div>

      <!-- Social Media -->
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Fredoka', sans-serif;">Social Media</h3>
        <div class="flex gap-4">
          <a href="#" class="text-primary hover:text-primary/80" aria-label="Facebook">
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" class="text-primary hover:text-primary/80" aria-label="Instagram">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" class="text-primary hover:text-primary/80" aria-label="YouTube">
            <i class="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="max-w-6xl mx-auto border-t border-gray-300 mt-8 pt-4 text-sm text-center">
      <p>© 2024 Festivalul pentru Copii și Adolescenți Apolodor. Toate drepturile rezervate.</p>
    </div>
  </footer>
</div>

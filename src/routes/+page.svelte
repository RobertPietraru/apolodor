<script lang="ts">
import { Calendar, MapPin, Users, ChevronDown, Menu, X } from "@lucide/svelte";
import { Button } from "$lib/components/ui/button";
import { page } from "$app/stores";

const navigationItems = [
  {
    title: "DESPRE",
    color: "text-red-500 hover:text-red-600",
    items: [
      { title: "Despre festival", href: "/despre-festival" },
      { title: "Echipa", href: "/echipa" },
    ],
  },
  {
    title: "INVITAȚI",
    color: "text-blue-500 hover:text-blue-600", 
    items: [
      { title: "Scriitori", href: "/scriitori" },
      { title: "Ilustratori", href: "/ilustratori" },
      { title: "Invitați speciali", href: "/invitati-speciali" },
    ],
  },
  {
    title: "EXPOZIȚII",
    color: "text-green-500 hover:text-green-600",
    href: "/expozitii",
  },
  {
    title: "PROGRAM", 
    color: "text-purple-500 hover:text-purple-600",
    href: "/program",
  },
  {
    title: "NOUTĂȚI",
    color: "text-orange-500 hover:text-orange-600",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Galerie", href: "/galerie", disabled: true },
      { title: "Arhiva", href: "/arhiva", disabled: true },
      { title: "APOLODOR în presă", href: "/presa", disabled: true },
    ],
  },
  {
    title: "PARTENERI",
    color: "text-pink-500 hover:text-pink-600",
    href: "/parteneri",
  },
];

let mobileMenuOpen = false;
let openDropdown: string | null = null;
</script>

<div class="min-h-screen bg-white">
  <header class="bg-white shadow-sm border-b-2 border-yellow-300">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-4xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
            APOLODOR
          </a>
        </div>

        <!-- Center - Festival Title and Date -->
        <div class="hidden md:flex flex-col items-center text-center flex-1 mx-8">
          <h1 class="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
            Festivalul pentru Copii și Adolescenți Apolodor
          </h1>
          <p class="text-lg lg:text-xl text-orange-600 font-semibold mt-1">18-21 septembrie 2025, Botoșani</p>
        </div>

        <!-- Language Switch -->
        <div class="flex-shrink-0">
          <Button variant="outline" class="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent">
            EN version
          </Button>
        </div>
      </div>

      <!-- Mobile Center Content -->
      <div class="md:hidden mt-4 text-center">
        <h1 class="text-xl font-bold text-gray-800 leading-tight">
          Festivalul pentru Copii și Adolescenți Apolodor
        </h1>
        <p class="text-lg text-orange-600 font-semibold mt-1">18-21 septembrie 2025, Botoșani</p>
      </div>
    </div>
  </header>

  <nav class="bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 border-b-2 border-rainbow">
    <div class="container mx-auto px-4">
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center justify-center space-x-8 py-4">
        {#each navigationItems as item}
          <div class="relative group">
            {#if item.items}
              <div class="relative">
                <button
                  class="{item.color} font-bold text-lg flex items-center space-x-1 transition-colors"
                  on:mouseenter={() => openDropdown = item.title}
                  on:mouseleave={() => openDropdown = null}
                >
                  <span>{item.title}</span>
                  <ChevronDown class="w-4 h-4" />
                </button>
                {#if openDropdown === item.title}
                  <div
                    class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border-2 border-gray-200 z-50"
                    on:mouseenter={() => openDropdown = item.title}
                    on:mouseleave={() => openDropdown = null}
                  >
                    {#each item.items as subItem}
                      <a
                        href={subItem.href}
                        class="block px-4 py-3 text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors {
                          subItem.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'
                        }"
                        on:click|preventDefault={subItem.disabled ? () => {} : undefined}
                      >
                        {subItem.title}
                        {#if subItem.disabled}
                          <span class="text-xs text-gray-400 block">{"(după festival)"}</span>
                        {/if}
                      </a>
                    {/each}
                  </div>
                {/if}
              </div>
            {:else}
              <a href={item.href} class="{item.color} font-bold text-lg transition-colors">
                {item.title}
              </a>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Mobile Navigation -->
      <div class="lg:hidden flex items-center justify-between py-4">
        <span class="text-lg font-bold text-gray-800">Meniu</span>
        <Button variant="ghost" size="sm" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </Button>
      </div>

      <!-- Mobile Menu -->
      {#if mobileMenuOpen}
        <div class="lg:hidden bg-white border-t-2 border-gray-200 py-4">
          {#each navigationItems as item}
            <div class="mb-4">
              {#if item.items}
                <div>
                  <button
                    class="{item.color} font-bold text-lg w-full text-left px-4 py-2"
                    on:click={() => openDropdown = openDropdown === item.title ? null : item.title}
                  >
                    {item.title}
                  </button>
                  {#if openDropdown === item.title}
                    <div class="pl-8 mt-2 space-y-2">
                      {#each item.items as subItem}
                        <a
                          href={subItem.href}
                          class="block py-2 text-gray-700 {
                            subItem.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-900'
                          }"
                          on:click|preventDefault={subItem.disabled ? () => {} : () => mobileMenuOpen = false}
                        >
                          {subItem.title}
                          {#if subItem.disabled}
                            <span class="text-xs text-gray-400 block">{"(după festival)"}</span>
                          {/if}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              {:else}
                <a
                  href={item.href}
                  class="{item.color} font-bold text-lg block px-4 py-2"
                  on:click={() => mobileMenuOpen = false}
                >
                  {item.title}
                </a>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </nav>

  <main>
    <section class="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 py-16 lg:py-24">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Bun venit la <span class="text-purple-600">APOLODOR</span>
          </h1>

          <p class="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Primul festival dedicat copiilor și adolescenților din Botoșani! O sărbătoare a cărților, poveștilor și
            imaginației.
          </p>

          <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
            <div class="flex items-center space-x-2 text-lg text-gray-700">
              <Calendar class="w-6 h-6 text-orange-500" />
              <span class="font-semibold">18-21 septembrie 2025</span>
            </div>
            <div class="flex items-center space-x-2 text-lg text-gray-700">
              <MapPin class="w-6 h-6 text-red-500" />
              <span class="font-semibold">Botoșani, România</span>
            </div>
            <div class="flex items-center space-x-2 text-lg text-gray-700">
              <Users class="w-6 h-6 text-blue-500" />
              <span class="font-semibold">Pentru copii și adolescenți</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" class="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 text-lg">
              Descoperă Programul
            </Button>
            <Button
              size="lg"
              variant="outline"
              class="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 text-lg bg-transparent"
            >
              Despre Festival
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon Sections -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Ce te așteaptă la APOLODOR?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gradient-to-br from-red-100 to-pink-100 p-8 rounded-2xl border-2 border-red-200">
            <div class="text-4xl mb-4">📚</div>
            <h3 class="text-xl font-bold text-red-600 mb-4">Scriitori și Ilustratori</h3>
            <p class="text-gray-700">
              Întâlniri cu autori și ilustratori renumiți din literatura pentru copii și adolescenți.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl border-2 border-blue-200">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="text-xl font-bold text-blue-600 mb-4">Expoziții Interactive</h3>
            <p class="text-gray-700">
              Expoziții de artă și ilustrație care aduc poveștile la viață prin culoare și imaginație.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl border-2 border-green-200">
            <div class="text-4xl mb-4">🎭</div>
            <h3 class="text-xl font-bold text-green-600 mb-4">Program Divers</h3>
            <p class="text-gray-700">
              Ateliere creative, spectacole, lansări de cărți și multe alte activități captivante.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <!-- Footer content here -->
  </footer>
</div>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
    <!-- Sticky call button on mobile -->
    <a
      href="tel:4504360321"
      class="fixed bottom-4 right-4 z-50 md:hidden bg-[#E8845C] text-white rounded-full px-5 py-3 font-bold shadow-lg flex items-center gap-2 hover:bg-[#c96840] transition-colors"
      aria-label="Appeler Toilettage Sarrazin"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Appeler
    </a>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

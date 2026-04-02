<template>
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <PawIcon class="w-9 h-9 text-[#3B8D8C]" />
        <div>
          <div class="font-extrabold text-lg leading-tight text-[#2D2D2D] font-heading">Toilettage Sarrazin</div>
          <div class="text-xs text-[#3B8D8C] font-medium">Sainte-Adèle</div>
        </div>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
        <RouterLink to="/" class="nav-link">Accueil</RouterLink>
        <RouterLink to="/services" class="nav-link">Services</RouterLink>
        <RouterLink to="/equipe" class="nav-link">L'équipe</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        <RouterLink to="/rendez-vous" class="btn-primary text-sm py-2 px-5">Prendre rendez-vous</RouterLink>
      </nav>

      <!-- Mobile menu button -->
      <button @click="menuOpen = !menuOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100" aria-label="Menu">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm font-semibold">
      <RouterLink to="/" class="nav-link" @click="menuOpen = false">Accueil</RouterLink>
      <RouterLink to="/services" class="nav-link" @click="menuOpen = false">Services</RouterLink>
      <RouterLink to="/equipe" class="nav-link" @click="menuOpen = false">L'équipe</RouterLink>
      <RouterLink to="/contact" class="nav-link" @click="menuOpen = false">Contact</RouterLink>
      <RouterLink to="/rendez-vous" class="btn-primary text-center" @click="menuOpen = false">Prendre rendez-vous</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import PawIcon from './PawIcon.vue'

const menuOpen = ref(false)
</script>

<style scoped>
@reference "../style.css";
.nav-link {
  @apply text-[#2D2D2D] hover:text-[#3B8D8C] transition-colors;
}
.router-link-active.nav-link {
  @apply text-[#3B8D8C];
}
</style>

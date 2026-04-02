<template>
  <footer class="bg-[#2D2D2D] text-white pt-12 pb-6">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-3">
          <PawIcon class="w-8 h-8 text-[#3B8D8C]" />
          <span class="font-extrabold text-lg font-heading">Toilettage Sarrazin</span>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Votre salon de toilettage canin à Sainte-Adèle. Douceur, patience et passion — pour chaque toutou.
        </p>
        <div class="flex gap-4 mt-4">
          <a href="https://www.facebook.com/ToilettagesSarrazin" target="_blank" rel="noopener" aria-label="Facebook" class="text-gray-400 hover:text-[#3B8D8C] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/toilettage_sarrazin" target="_blank" rel="noopener" aria-label="Instagram" class="text-gray-400 hover:text-[#3B8D8C] transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Navigation</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-[#3B8D8C] transition-colors">Accueil</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-[#3B8D8C] transition-colors">Services</RouterLink></li>
          <li><RouterLink to="/equipe" class="hover:text-[#3B8D8C] transition-colors">L'équipe</RouterLink></li>
          <li><RouterLink to="/rendez-vous" class="hover:text-[#3B8D8C] transition-colors">Prendre rendez-vous</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-[#3B8D8C] transition-colors">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Nous joindre</h3>
        <ul class="space-y-3 text-sm text-gray-300">
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 mt-0.5 text-[#3B8D8C] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            116 Rue Morin, Sainte-Adèle, QC J8B 2R1
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#3B8D8C] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <a href="tel:4504360321" class="hover:text-[#3B8D8C] transition-colors">450-436-0321</a>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 mt-0.5 text-[#3B8D8C] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Lun–Sam : 9h à 15h<br/>Dimanche : Fermé
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
      <span>© {{ new Date().getFullYear() }} Toilettage Sarrazin. Tous droits réservés.</span>
      <span>Membre de la Chambre de commerce et de tourisme de Sainte-Adèle</span>
    </div>
  </footer>
</template>

<script setup>
import PawIcon from './PawIcon.vue'
</script>

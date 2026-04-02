<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-[#3B8D8C] to-[#2d6e6d] text-white overflow-hidden">
      <!-- Background paw pattern -->
      <div class="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
        <div class="grid grid-cols-8 gap-8 p-8 rotate-12 scale-150">
          <PawIcon v-for="i in 48" :key="i" class="w-12 h-12 text-white" />
        </div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 text-center md:text-left">
          <!-- Google badge -->
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span class="flex gap-0.5">
              <StarIcon v-for="i in 5" :key="i" class="w-4 h-4 text-[#F5C542]" />
            </span>
            4.7/5 sur Google — 66+ avis
          </div>

          <h1 class="text-4xl md:text-5xl font-extrabold font-heading leading-tight mb-4">
            Toilettage Sarrazin<br/>
            <span class="text-[#F5C542]">Le bien-être de votre compagnon</span><br/>
            à Sainte-Adèle
          </h1>
          <p class="text-lg text-white/90 mb-8 max-w-xl">
            Pascalle, Sabrina et Miya prennent soin de votre toutou avec douceur et passion. Votre chien repart toujours avec son plus beau look.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <RouterLink to="/rendez-vous" class="bg-[#E8845C] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c96840] transition-colors text-center text-lg shadow-lg">
              Prendre rendez-vous
            </RouterLink>
            <RouterLink to="/services" class="bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-colors text-center text-lg border border-white/40">
              Nos services
            </RouterLink>
          </div>
        </div>

        <!-- Hero image -->
        <div class="flex-1 flex justify-center">
          <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
              alt="Chien fraîchement toiletté chez Toilettage Sarrazin à Sainte-Adèle"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Horaires bandeau -->
    <div class="bg-[#F7F7F7] border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-[#2D2D2D]">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#3B8D8C]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span><strong>Lun–Sam :</strong> 9h à 15h &nbsp;|&nbsp; <strong>Dimanche :</strong> Fermé</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#3B8D8C]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>116 Rue Morin, Sainte-Adèle</span>
        </div>
        <a href="tel:4504360321" class="flex items-center gap-2 text-[#3B8D8C] font-semibold hover:underline">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          450-436-0321
        </a>
      </div>
    </div>

    <!-- Services rapides -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title mb-3">Ce qu'on fait pour votre toutou</h2>
          <p class="text-gray-500 max-w-xl mx-auto">Tous nos soins sont adaptés à la taille, la race et le tempérament de votre animal.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="service in quickServices" :key="service.title" class="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F7F7F7] hover:shadow-md transition-shadow">
            <div :class="['w-14 h-14 rounded-full flex items-center justify-center mb-4', service.color]">
              <component :is="service.icon" class="w-7 h-7" />
            </div>
            <h3 class="font-bold text-[#2D2D2D] font-heading mb-1">{{ service.title }}</h3>
            <p class="text-sm text-gray-500">{{ service.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <RouterLink to="/services" class="btn-secondary">Voir tous les services</RouterLink>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section class="py-16 bg-[#F7F7F7]">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-1 mb-3">
            <StarIcon v-for="i in 5" :key="i" class="w-6 h-6 text-[#F5C542]" />
          </div>
          <h2 class="section-title mb-2">Ce que disent nos clients</h2>
          <p class="text-gray-500">4.7/5 sur Google — 66 avis</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="review in reviews" :key="review.name" class="bg-white rounded-2xl p-6 shadow-sm">
            <div class="flex gap-1 mb-3">
              <StarIcon v-for="i in 5" :key="i" class="w-4 h-4 text-[#F5C542]" />
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-4 italic">"{{ review.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-[#3B8D8C]/20 flex items-center justify-center text-[#3B8D8C] font-bold text-sm">
                {{ review.name[0] }}
              </div>
              <div>
                <div class="font-semibold text-sm">{{ review.name }}</div>
                <div class="text-xs text-gray-400">Avis Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram CTA -->
    <section class="py-14 bg-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <PawIcon class="w-10 h-10 text-[#E8845C] mx-auto mb-4" />
        <h2 class="section-title mb-3">Voyez nos plus belles transformations</h2>
        <p class="text-gray-500 mb-6">Goldendoodle, Husky, Berger ou Chihuahua — chaque chien repart avec son plus beau look.</p>
        <a
          href="https://www.instagram.com/toilettage_sarrazin"
          target="_blank"
          rel="noopener"
          class="btn-coral inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          @toilettage_sarrazin sur Instagram
        </a>

        <!-- Placeholder Instagram grid -->
        <div class="grid grid-cols-3 gap-2 mt-8">
          <div v-for="(img, i) in instaPhotos" :key="i" class="aspect-square rounded-xl overflow-hidden">
            <img
              :src="img.url"
              :alt="img.alt"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Google Maps -->
    <section class="bg-[#F7F7F7] py-14">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="section-title mb-2">Nous trouver</h2>
          <p class="text-gray-500">116 Rue Morin, Sainte-Adèle, QC J8B 2R1</p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-md h-72 md:h-96">
          <iframe
            title="Localisation Toilettage Sarrazin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.0!2d-74.1317!3d45.9497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s116+Rue+Morin%2C+Sainte-Ad%C3%A8le%2C+QC!5e0!3m2!1sfr!2sca!4v1"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-16 bg-[#3B8D8C] text-white text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="text-3xl font-extrabold font-heading mb-4">Votre toutou mérite d'être beau, propre et bien dans ses pattes.</h2>
        <p class="text-white/80 mb-8">On prend le temps qu'il faut — même avec les plus nerveux.</p>
        <RouterLink to="/rendez-vous" class="bg-white text-[#3B8D8C] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg inline-block shadow-lg">
          Prendre rendez-vous
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import PawIcon from '../components/PawIcon.vue'

const instaPhotos = [
  { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80', alt: 'Chien toiletté — Toilettage Sarrazin' },
  { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80', alt: 'Labrador après toilettage' },
  { url: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=400&q=80', alt: 'Caniche toiletté' },
  { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=80', alt: 'Golden retriever propre' },
  { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80', alt: 'Husky toiletté' },
  { url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&q=80', alt: 'Chien après bain' },
]

const StarIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
}

const ToilettagIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2c0 1.1-.9 2-2 2S6 3.1 6 2"/><path d="M14 2c0 1.1.9 2 2 2s2-.9 2-2"/><ellipse cx="12" cy="13" rx="6" ry="5"/><path d="M6 10C4 9 3 7 3 5.5A2.5 2.5 0 018 5c0 1-.4 2-1 2.5"/><path d="M18 10c2-1 3-3 3-4.5A2.5 2.5 0 0016 5c0 1 .4 2 1 2.5"/><path d="M9 17v3M15 17v3"/></svg>`
}

const ScissorsIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`
}

const GriffesIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="16.5" rx="5" ry="4"/><ellipse cx="7.5" cy="10" rx="2.2" ry="2.8"/><ellipse cx="12" cy="8" rx="2.2" ry="2.8"/><ellipse cx="16.5" cy="10" rx="2.2" ry="2.8"/><line x1="7.5" y1="7.5" x2="6.2" y2="5"/><line x1="12" y1="5.2" x2="12" y2="3"/><line x1="16.5" y1="7.5" x2="17.8" y2="5"/></svg>`
}

const BainIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5V3.5A1.5 1.5 0 0110 3.5V5"/><path d="M3 9h18v3a7 7 0 01-7 7H10A7 7 0 013 12V9z"/><path d="M6 19v2M18 19v2"/><circle cx="9" cy="6.5" r=".8" fill="currentColor" stroke="none"/><circle cx="12" cy="5.5" r=".8" fill="currentColor" stroke="none"/><circle cx="15" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>`
}

const quickServices = [
  { title: 'Toilettage complet', desc: 'Bain, tonte, coupe, soins — tout inclus', icon: ToilettagIcon, color: 'bg-[#3B8D8C]/10 text-[#3B8D8C]' },
  { title: 'Coupe aux ciseaux', desc: 'Style adapté à la race et au propriétaire', icon: ScissorsIcon, color: 'bg-[#E8845C]/10 text-[#E8845C]' },
  { title: 'Coupe de griffes', desc: 'En douceur, même pour les plus nerveux', icon: GriffesIcon, color: 'bg-[#F5C542]/20 text-[#c9960a]' },
  { title: 'Bain & soin', desc: 'Shampooing adapté, séchage, brossage', icon: BainIcon, color: 'bg-[#3B8D8C]/10 text-[#3B8D8C]' },
]

const reviews = [
  {
    name: 'Marie-Claude T.',
    text: 'Mon Goldendoodle ressort toujours magnifique. L\'équipe est tellement douce avec lui — il n\'est pas stressé du tout. Je recommande à 100%.',
  },
  {
    name: 'Stéphane B.',
    text: 'La coupe de griffes sans le stress, c\'est possible. Mon chien déteste ça habituellement, mais ici il est calme. Merci Pascalle et son équipe!',
  },
  {
    name: 'Josée L.',
    text: 'Mon Husky est difficile à toiletter mais elles s\'en occupent avec tellement de patience. Le résultat est impeccable à chaque fois.',
  },
]
</script>

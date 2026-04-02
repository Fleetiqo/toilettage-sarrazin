<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-br from-[#3B8D8C] to-[#2d6e6d] text-white py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold font-heading mb-4">Nos services</h1>
        <p class="text-white/80 text-lg max-w-xl mx-auto">
          Tous nos soins sont adaptés à la taille, la race et le tempérament de votre animal.
        </p>
      </div>
    </section>

    <!-- Services list -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4">

        <!-- Photo banner -->
        <div class="grid grid-cols-3 gap-3 mb-14 rounded-2xl overflow-hidden h-48">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80" alt="Chien toiletté" class="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&q=80" alt="Caniche après toilettage" class="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&q=80" alt="Golden retriever propre" class="w-full h-full object-cover" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-white"
          >
            <div :class="['w-14 h-14 rounded-xl flex items-center justify-center shrink-0', service.color]">
              <component :is="service.icon" class="w-7 h-7" />
            </div>
            <div>
              <h2 class="font-bold text-lg font-heading text-[#2D2D2D] mb-1">{{ service.title }}</h2>
              <p class="text-gray-600 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div class="mt-10 bg-[#F7F7F7] rounded-2xl p-6 flex gap-4 items-start">
          <PawIcon class="w-8 h-8 text-[#E8845C] shrink-0 mt-1" />
          <p class="text-gray-700 text-sm leading-relaxed">
            <strong>Tous nos soins sont adaptés à la taille, la race et le tempérament de votre animal.</strong>
            Que votre chien soit nerveux, très grand ou qu'il ait des besoins particuliers, on prend le temps qu'il faut pour qu'il soit à l'aise.
          </p>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <p class="text-gray-500 mb-4">Prêt à gâter votre toutou ?</p>
          <RouterLink to="/rendez-vous" class="btn-primary text-lg px-10 py-4">Prendre rendez-vous</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PawIcon from '../components/PawIcon.vue'

const icons = {
  // Toilettage complet : chien avec étoile / médaille
  toilettageComplet: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2c0 1.1-.9 2-2 2S6 3.1 6 2"/>
      <path d="M14 2c0 1.1.9 2 2 2s2-.9 2-2"/>
      <ellipse cx="12" cy="13" rx="6" ry="5"/>
      <path d="M6 10C4 9 3 7 3 5.5A2.5 2.5 0 018 5c0 1-.4 2-1 2.5"/>
      <path d="M18 10c2-1 3-3 3-4.5A2.5 2.5 0 0016 5c0 1 .4 2 1 2.5"/>
      <path d="M9 17v3M15 17v3"/>
      <path d="M12 8l.8 1.6 1.8.3-1.3 1.2.3 1.8L12 12l-1.6.9.3-1.8-1.3-1.2 1.8-.3z" fill="currentColor" stroke="none" opacity="0.6"/>
    </svg>`
  },
  // Ciseaux de coiffure vrais
  ciseaux: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>`
  },
  // Tondeuse électrique
  tonte: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="8" width="15" height="9" rx="2.5"/>
      <path d="M17 11.5h2.5a2 2 0 010 4H17"/>
      <rect x="2" y="15" width="15" height="2" rx="0" fill="currentColor" stroke="none" opacity="0.15"/>
      <line x1="5" y1="8" x2="5" y2="5"/>
      <line x1="8.5" y1="8" x2="8.5" y2="4"/>
      <line x1="12" y1="8" x2="12" y2="5"/>
      <line x1="4" y1="17" x2="4" y2="19"/>
      <line x1="7" y1="17" x2="7" y2="20"/>
      <line x1="10" y1="17" x2="10" y2="19"/>
      <line x1="13" y1="17" x2="13" y2="20"/>
    </svg>`
  },
  // Baignoire avec bulles
  bain: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 5V3.5A1.5 1.5 0 0110 3.5V5"/>
      <path d="M3 9h18v3a7 7 0 01-7 7H10A7 7 0 013 12V9z"/>
      <path d="M6 19v2M18 19v2"/>
      <circle cx="9" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="5.5" r=".8" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
    </svg>`
  },
  // Patte avec griffes qui dépassent
  griffes: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="16.5" rx="5" ry="4"/>
      <ellipse cx="7.5" cy="10" rx="2.2" ry="2.8"/>
      <ellipse cx="12" cy="8" rx="2.2" ry="2.8"/>
      <ellipse cx="16.5" cy="10" rx="2.2" ry="2.8"/>
      <path d="M6.5 7.5 L5.5 5" stroke-linecap="round"/>
      <path d="M12 5.2 L12 3" stroke-linecap="round"/>
      <path d="M17.5 7.5 L18.5 5" stroke-linecap="round"/>
    </svg>`
  },
  // Oreille de chien tombante + coton-tige
  oreilles: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 3C5 3 3 5 3 8c0 3 1.5 5 2 7 .3 1.2.5 3 2 3s2-1.5 2-3c0-1 .5-2 1-2s1 1 1 2c0 1.5.5 3 2 3s1.7-1.8 2-3c.5-2 2-4 2-7 0-3-2-5-4-5-1.5 0-2.5 1-3 2-.5-1-1.5-2-3-2z"/>
      <line x1="17" y1="8" x2="21" y2="4"/>
      <circle cx="21" cy="4" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
      <circle cx="17" cy="8" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
    </svg>`
  },
  // Brosse à dents + dent
  dents: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3C9 3 7 5.5 7 8c0 1.5.4 2.5.8 4 .5 2 .5 5 1.8 6 .4.4.9.4 1.3 0 .4-.7.4-1.8 1.1-1.8s.7 1.1 1.1 1.8c.4.4.9.4 1.3 0 1.3-1 1.3-4 1.8-6 .4-1.5.8-2.5.8-4 0-2.5-2-5-5-5z"/>
      <line x1="19" y1="3" x2="22" y2="6"/>
      <line x1="19" y1="6" x2="22" y2="3"/>
      <path d="M16 5l3-2"/>
    </svg>`
  },
  // Ciseaux + patte (sous-pattes)
  hygiene: {
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="8" cy="17" rx="4" ry="3"/>
      <ellipse cx="5" cy="11" rx="1.8" ry="2.2"/>
      <ellipse cx="8" cy="9.5" rx="1.8" ry="2.2"/>
      <ellipse cx="11" cy="11" rx="1.8" ry="2.2"/>
      <line x1="15" y1="4" x2="22" y2="11"/>
      <line x1="15" y1="11" x2="22" y2="4"/>
      <circle cx="14" cy="4" r="2"/>
      <circle cx="14" cy="11" r="2"/>
    </svg>`
  },
}

const services = [
  {
    title: 'Toilettage complet',
    desc: 'Bain avec shampooing adapté à la race, séchage, brossage, démêlage, tonte ou coupe aux ciseaux selon la race, soins des yeux, oreilles, dents, pattes, finition parfum et foulard. Le grand traitement pour votre toutou.',
    icon: icons.toilettageComplet,
    color: 'bg-[#3B8D8C]/10 text-[#3B8D8C]',
  },
  {
    title: 'Coupe aux ciseaux',
    desc: 'Coupe de style adaptée à la race et aux préférences du propriétaire. Un résultat soigné, précis, qui met en valeur la beauté naturelle de votre chien.',
    icon: icons.ciseaux,
    color: 'bg-[#E8845C]/10 text-[#E8845C]',
  },
  {
    title: 'Tonte',
    desc: 'Différentes longueurs selon les besoins et la saison. Idéal pour les races à poil dense ou pour les chaleurs estivales.',
    icon: icons.tonte,
    color: 'bg-[#3B8D8C]/10 text-[#3B8D8C]',
  },
  {
    title: 'Bain & soin',
    desc: 'Bain avec shampooing adapté à la peau et au pelage, séchage professionnel, brossage et soins de base. Parfait pour un entretien régulier.',
    icon: icons.bain,
    color: 'bg-[#E8845C]/10 text-[#E8845C]',
  },
  {
    title: 'Coupe de griffes',
    desc: 'Service rapide, en douceur, même pour les animaux nerveux. La coupe de griffes sans le stress, c\'est possible. Premier arrivé, premier servi.',
    icon: icons.griffes,
    color: 'bg-[#F5C542]/20 text-[#c9960a]',
  },
  {
    title: 'Nettoyage oreilles & yeux',
    desc: 'Soins d\'hygiène ciblés pour prévenir les infections et garder votre chien confortable. Inclus dans le toilettage complet ou offert séparément.',
    icon: icons.oreilles,
    color: 'bg-[#3B8D8C]/10 text-[#3B8D8C]',
  },
  {
    title: 'Soins dentaires',
    desc: 'Brossage et soins de base pour l\'hygiène bucco-dentaire de votre animal. Un geste simple qui fait une grande différence.',
    icon: icons.dents,
    color: 'bg-[#E8845C]/10 text-[#E8845C]',
  },
  {
    title: 'Sous-pattes & hygiène',
    desc: 'Tonte des sous-pattes et de la zone sanitaire. Un soin essentiel pour le confort et la propreté de votre chien au quotidien.',
    icon: icons.hygiene,
    color: 'bg-[#F5C542]/20 text-[#c9960a]',
  },
]
</script>

<template>
  <div>
    <!-- Header -->
    <section class="relative bg-gradient-to-br from-[#3B8D8C] to-[#2d6e6d] text-white py-16 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=60"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold font-heading mb-4">Notre équipe</h1>
        <p class="text-white/80 text-lg max-w-xl mx-auto">
          Pascalle, Sabrina et Miya : trois passionnées qui adorent ce qu'elles font.
        </p>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div v-for="member in team" :key="member.name" class="flex flex-col items-center text-center">
            <!-- Photo -->
            <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-[#3B8D8C]/20 mb-5">
              <img
                :src="member.photo"
                :alt="`${member.name} — toiletteuse chez Toilettage Sarrazin`"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-xl font-extrabold font-heading text-[#2D2D2D] mb-1">{{ member.name }}</h2>
            <div class="text-[#3B8D8C] font-semibold text-sm mb-3">{{ member.role }}</div>
            <p class="text-gray-600 text-sm leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>

        <!-- Valeurs -->
        <div class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12 text-center">
          <PawIcon class="w-10 h-10 text-[#E8845C] mx-auto mb-4" />
          <h2 class="text-2xl font-extrabold font-heading text-[#2D2D2D] mb-4">
            Chaque chien est unique. On adapte notre approche à sa personnalité.
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ici, pas de routine à la chaîne. On prend le temps de connaître votre animal, de comprendre ses préférences et ses inconforts. Le résultat, c'est un chien détendu, beau, et heureux de revenir.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="val in values" :key="val" class="bg-white rounded-xl py-4 px-3 text-sm font-semibold text-[#3B8D8C] shadow-sm">
              {{ val }}
            </div>
          </div>
        </div>

        <!-- Instagram -->
        <div class="text-center mt-14">
          <h2 class="section-title mb-3">Voyez notre travail</h2>
          <p class="text-gray-500 mb-6">Suivez-nous sur Instagram pour voir nos plus belles transformations.</p>
          <a
            href="https://www.instagram.com/toilettage_sarrazin"
            target="_blank"
            rel="noopener"
            class="btn-coral inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            @toilettage_sarrazin
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-14 bg-[#3B8D8C] text-white text-center">
      <div class="max-w-xl mx-auto px-4">
        <h2 class="text-2xl font-extrabold font-heading mb-3">Confiez votre toutou à notre équipe</h2>
        <p class="text-white/80 mb-6">Sur rendez-vous, du lundi au samedi de 9h à 15h.</p>
        <RouterLink to="/rendez-vous" class="bg-white text-[#3B8D8C] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block">
          Prendre rendez-vous
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import PawIcon from '../components/PawIcon.vue'

const team = [
  {
    name: 'Pascalle Sarrazin',
    role: 'Propriétaire & toiletteuse',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    bio: 'Passionnée des animaux depuis toujours, Pascalle a fondé le salon avec une vision claire : offrir un service de qualité dans un environnement calme et bienveillant. Son expérience avec toutes les races fait d\'elle une référence dans les Laurentides.',
  },
  {
    name: 'Sabrina',
    role: 'Toiletteuse',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'Patiente et douce, Sabrina a un talent particulier pour mettre à l\'aise les chiens anxieux. Elle prend le temps qu\'il faut pour que chaque animal se sente en confiance avant même de commencer.',
  },
  {
    name: 'Miya',
    role: 'Toiletteuse',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Spécialisée dans les coupes créatives et de style, Miya apporte une touche artistique à chaque toilettage. Elle adore travailler avec les races à poil long et les coupes de précision aux ciseaux.',
  },
]

const values = ['Douceur', 'Patience', 'Respect de l\'animal', 'Résultat soigné']
</script>

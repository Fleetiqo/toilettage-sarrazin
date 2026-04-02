<template>
  <div>
    <!-- Header -->
    <section class="relative bg-gradient-to-br from-[#3B8D8C] to-[#2d6e6d] text-white py-16 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=60"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold font-heading mb-4">Contact</h1>
        <p class="text-white/80 text-lg">On est là pour vous. N'hésitez pas à nous appeler.</p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Info -->
        <div>
          <h2 class="text-2xl font-extrabold font-heading text-[#2D2D2D] mb-8">Nos coordonnées</h2>

          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-[#3B8D8C]/10 flex items-center justify-center text-[#3B8D8C] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <div class="font-semibold text-[#2D2D2D] mb-1">Adresse</div>
                <p class="text-gray-600 text-sm">116 Rue Morin<br/>Sainte-Adèle, QC J8B 2R1</p>
                <p class="text-gray-400 text-xs mt-1">Stationnement disponible sur place</p>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-[#3B8D8C]/10 flex items-center justify-center text-[#3B8D8C] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <div class="font-semibold text-[#2D2D2D] mb-1">Téléphone</div>
                <a href="tel:4504360321" class="text-[#3B8D8C] font-semibold text-lg hover:underline">450-436-0321</a>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-[#3B8D8C]/10 flex items-center justify-center text-[#3B8D8C] shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div class="font-semibold text-[#2D2D2D] mb-1">Horaires</div>
                <div class="text-sm text-gray-600 space-y-1">
                  <div v-for="h in hours" :key="h.day" class="flex justify-between gap-8">
                    <span>{{ h.day }}</span>
                    <span :class="h.closed ? 'text-gray-400' : 'font-medium'">{{ h.time }}</span>
                  </div>
                </div>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-[#3B8D8C]/10 flex items-center justify-center text-[#3B8D8C] shrink-0">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </div>
              <div>
                <div class="font-semibold text-[#2D2D2D] mb-2">Réseaux sociaux</div>
                <div class="flex gap-3">
                  <a href="https://www.facebook.com/ToilettagesSarrazin" target="_blank" rel="noopener" class="flex items-center gap-2 text-sm text-[#3B8D8C] hover:underline font-medium">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/toilettage_sarrazin" target="_blank" rel="noopener" class="flex items-center gap-2 text-sm text-[#3B8D8C] hover:underline font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <a href="tel:4504360321" class="mt-8 btn-coral inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Appeler maintenant
          </a>
        </div>

        <!-- Map -->
        <div>
          <div class="rounded-2xl overflow-hidden shadow-md h-80 md:h-full min-h-64">
            <iframe
              title="Localisation Toilettage Sarrazin — 116 Rue Morin, Sainte-Adèle"
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
      </div>
    </section>

    <!-- RDV CTA -->
    <section class="py-12 bg-[#F7F7F7] text-center">
      <div class="max-w-xl mx-auto px-4">
        <h2 class="text-2xl font-extrabold font-heading text-[#2D2D2D] mb-3">Prêt à prendre rendez-vous ?</h2>
        <p class="text-gray-500 mb-6">Remplissez notre formulaire en ligne et on vous rappelle.</p>
        <RouterLink to="/rendez-vous" class="btn-primary text-lg px-10 py-4">Prendre rendez-vous</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const hours = [
  { day: 'Lundi', time: '9h – 15h' },
  { day: 'Mardi', time: '9h – 15h' },
  { day: 'Mercredi', time: '9h – 15h' },
  { day: 'Jeudi', time: '9h – 15h' },
  { day: 'Vendredi', time: '9h – 15h' },
  { day: 'Samedi', time: '9h – 15h' },
  { day: 'Dimanche', time: 'Fermé', closed: true },
]
</script>

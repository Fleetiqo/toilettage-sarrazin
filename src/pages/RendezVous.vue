<template>
  <div>
    <!-- Header -->
    <section class="bg-gradient-to-br from-[#3B8D8C] to-[#2d6e6d] text-white py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold font-heading mb-4">Prendre rendez-vous</h1>
        <p class="text-white/80 text-lg max-w-xl mx-auto">
          Remplissez le formulaire et on vous rappelle pour confirmer votre créneau.
        </p>
      </div>
    </section>

    <section class="py-16 bg-[#F7F7F7]">
      <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Form -->
        <div class="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
          <h2 class="text-xl font-extrabold font-heading text-[#2D2D2D] mb-6">Votre demande de rendez-vous</h2>
          <AppointmentForm />
        </div>

        <!-- Sidebar info -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <h3 class="font-bold font-heading text-[#2D2D2D] mb-4">Nous joindre</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#3B8D8C] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:4504360321" class="text-[#3B8D8C] font-semibold hover:underline">450-436-0321</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#3B8D8C] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Lun–Sam : 9h à 15h<br/>Dimanche : Fermé</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#3B8D8C] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>116 Rue Morin<br/>Sainte-Adèle, QC J8B 2R1</span>
              </li>
            </ul>
            <a
              href="tel:4504360321"
              class="mt-5 w-full btn-coral text-center block text-sm"
            >
              Appeler directement
            </a>
          </div>

          <div class="bg-[#3B8D8C]/10 rounded-2xl p-5 text-sm text-[#2D2D2D]">
            <PawIcon class="w-7 h-7 text-[#3B8D8C] mb-2" />
            <p class="leading-relaxed">
              <strong>Sur rendez-vous seulement.</strong> Premier arrivé, premier servi pour la coupe de griffes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppointmentForm from '../components/AppointmentForm.vue'
import PawIcon from '../components/PawIcon.vue'
</script>

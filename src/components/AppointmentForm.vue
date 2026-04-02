<template>
  <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
    <!-- Success state -->
    <div v-if="submitted" class="bg-[#3B8D8C]/10 border border-[#3B8D8C]/30 rounded-2xl p-8 text-center">
      <PawIcon class="w-12 h-12 text-[#3B8D8C] mx-auto mb-4" />
      <h3 class="text-xl font-extrabold font-heading text-[#2D2D2D] mb-2">Merci !</h3>
      <p class="text-gray-600">On vous rappelle pour confirmer votre créneau.</p>
    </div>

    <template v-else>
      <!-- Error global -->
      <div v-if="globalError" class="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
        {{ globalError }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Nom propriétaire -->
        <div>
          <label for="nom_proprio" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Votre nom <span class="text-[#E8845C]">*</span></label>
          <input
            id="nom_proprio"
            v-model="form.nom_proprio"
            type="text"
            required
            placeholder="Marie Tremblay"
            class="input-field"
            :class="{ 'border-red-400': errors.nom_proprio }"
          />
          <p v-if="errors.nom_proprio" class="text-red-500 text-xs mt-1">{{ errors.nom_proprio }}</p>
        </div>

        <!-- Téléphone -->
        <div>
          <label for="telephone" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Téléphone <span class="text-[#E8845C]">*</span></label>
          <input
            id="telephone"
            v-model="form.telephone"
            type="tel"
            required
            placeholder="450-555-1234"
            class="input-field"
            :class="{ 'border-red-400': errors.telephone }"
          />
          <p v-if="errors.telephone" class="text-red-500 text-xs mt-1">{{ errors.telephone }}</p>
        </div>

        <!-- Nom du chien -->
        <div>
          <label for="nom_chien" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Nom du chien <span class="text-[#E8845C]">*</span></label>
          <input
            id="nom_chien"
            v-model="form.nom_chien"
            type="text"
            required
            placeholder="Buddy"
            class="input-field"
            :class="{ 'border-red-400': errors.nom_chien }"
          />
          <p v-if="errors.nom_chien" class="text-red-500 text-xs mt-1">{{ errors.nom_chien }}</p>
        </div>

        <!-- Race -->
        <div>
          <label for="race" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Race <span class="text-[#E8845C]">*</span></label>
          <input
            id="race"
            v-model="form.race"
            type="text"
            required
            placeholder="Goldendoodle, Husky..."
            class="input-field"
            :class="{ 'border-red-400': errors.race }"
          />
          <p v-if="errors.race" class="text-red-500 text-xs mt-1">{{ errors.race }}</p>
        </div>

        <!-- Taille -->
        <div>
          <label for="taille" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Taille <span class="text-[#E8845C]">*</span></label>
          <select
            id="taille"
            v-model="form.taille"
            required
            class="input-field"
            :class="{ 'border-red-400': errors.taille }"
          >
            <option value="" disabled>Choisir une taille</option>
            <option value="Petit">Petit (moins de 10 kg)</option>
            <option value="Moyen">Moyen (10–25 kg)</option>
            <option value="Grand">Grand (25–40 kg)</option>
            <option value="Très grand">Très grand (40 kg et plus)</option>
          </select>
          <p v-if="errors.taille" class="text-red-500 text-xs mt-1">{{ errors.taille }}</p>
        </div>

        <!-- Service -->
        <div>
          <label for="service" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Service souhaité <span class="text-[#E8845C]">*</span></label>
          <select
            id="service"
            v-model="form.service"
            required
            class="input-field"
            :class="{ 'border-red-400': errors.service }"
          >
            <option value="" disabled>Choisir un service</option>
            <option value="Toilettage complet">Toilettage complet</option>
            <option value="Coupe aux ciseaux">Coupe aux ciseaux</option>
            <option value="Tonte">Tonte</option>
            <option value="Bain & soin">Bain & soin</option>
            <option value="Coupe de griffes">Coupe de griffes</option>
            <option value="Autre">Autre</option>
          </select>
          <p v-if="errors.service" class="text-red-500 text-xs mt-1">{{ errors.service }}</p>
        </div>
      </div>

      <!-- Date souhaitée -->
      <div>
        <label for="date_souhaitee" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Date souhaitée <span class="text-[#E8845C]">*</span></label>
        <input
          id="date_souhaitee"
          v-model="form.date_souhaitee"
          type="date"
          required
          :min="minDate"
          class="input-field"
          :class="{ 'border-red-400': errors.date_souhaitee }"
        />
        <p v-if="errors.date_souhaitee" class="text-red-500 text-xs mt-1">{{ errors.date_souhaitee }}</p>
      </div>

      <!-- Notes -->
      <div>
        <label for="notes" class="block text-sm font-semibold text-[#2D2D2D] mb-1">Notes / demandes spéciales</label>
        <textarea
          id="notes"
          v-model="form.notes"
          rows="3"
          placeholder="Allergies, comportement particulier, demandes spéciales..."
          class="input-field resize-none"
        ></textarea>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="loading"
        class="w-full btn-primary text-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span v-if="loading" class="flex items-center justify-center gap-2">
          <svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Envoi en cours...
        </span>
        <span v-else>Demander mon rendez-vous</span>
      </button>

      <p class="text-xs text-gray-400 text-center">
        Sur rendez-vous seulement. Premier arrivé, premier servi pour la coupe de griffes.
      </p>
    </template>
  </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { supabase } from '../lib/supabase.js'
import PawIcon from './PawIcon.vue'

const submitted = ref(false)
const loading = ref(false)
const globalError = ref('')
const errors = reactive({})

const form = reactive({
  nom_proprio: '',
  telephone: '',
  nom_chien: '',
  race: '',
  taille: '',
  service: '',
  date_souhaitee: '',
  notes: '',
})

const minDate = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
})

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  let valid = true
  if (!form.nom_proprio.trim()) { errors.nom_proprio = 'Votre nom est requis.'; valid = false }
  if (!form.telephone.trim()) { errors.telephone = 'Votre téléphone est requis.'; valid = false }
  if (!form.nom_chien.trim()) { errors.nom_chien = 'Le nom du chien est requis.'; valid = false }
  if (!form.race.trim()) { errors.race = 'La race est requise.'; valid = false }
  if (!form.taille) { errors.taille = 'Veuillez choisir une taille.'; valid = false }
  if (!form.service) { errors.service = 'Veuillez choisir un service.'; valid = false }
  if (!form.date_souhaitee) { errors.date_souhaitee = 'Veuillez choisir une date.'; valid = false }
  return valid
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  globalError.value = ''

  try {
    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('appointments')
      .insert([{
        nom_proprio: form.nom_proprio,
        telephone: form.telephone,
        nom_chien: form.nom_chien,
        race: form.race,
        taille: form.taille,
        service: form.service,
        date_souhaitee: form.date_souhaitee,
        notes: form.notes || null,
        confirme: false,
      }])

    if (dbError) throw dbError

    // 2. Send email via Resend (via Supabase Edge Function)
    await supabase.functions.invoke('send-appointment-email', {
      body: {
        nom_proprio: form.nom_proprio,
        telephone: form.telephone,
        nom_chien: form.nom_chien,
        race: form.race,
        taille: form.taille,
        service: form.service,
        date_souhaitee: form.date_souhaitee,
        notes: form.notes,
      },
    })

    submitted.value = true
  } catch (err) {
    console.error(err)
    globalError.value = 'Une erreur est survenue. Veuillez réessayer ou nous appeler au 450-436-0321.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@reference "../style.css";
.input-field {
  @apply w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#3B8D8C]/40 focus:border-[#3B8D8C] transition-colors bg-white;
}
</style>

# Toilettage Sarrazin — Site vitrine

Site vitrine pour le salon de toilettage canin Toilettage Sarrazin à Sainte-Adèle, QC.

Stack : Vue 3 + Vite + Tailwind CSS + Supabase + Resend

---

## Démarrage rapide

```bash
npm install
cp .env.example .env
# Remplir les variables dans .env
npm run dev
```

---

## Variables d'environnement

Créer un fichier `.env` à la racine :

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## Configuration Supabase

### 1. Créer la table `appointments`

Dans l'éditeur SQL de Supabase :

```sql
create table appointments (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  nom_proprio text not null,
  telephone text not null,
  nom_chien text not null,
  race text not null,
  taille text not null,
  service text not null,
  date_souhaitee date not null,
  notes text,
  confirme boolean default false
);

-- RLS : permettre les insertions publiques
alter table appointments enable row level security;

create policy "Allow public insert" on appointments
  for insert with check (true);
```

### 2. Déployer la Edge Function

```bash
npx supabase login
npx supabase link --project-ref your-project-ref
npx supabase functions deploy send-appointment-email
```

### 3. Configurer les secrets de la Edge Function

```bash
npx supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxx
npx supabase secrets set SALON_EMAIL=votre@email.com
```

---

## Configuration Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier le domaine `toilettagesarrazin.ca`
3. Créer une clé API et l'ajouter comme secret Supabase (voir ci-dessus)

---

## Images

Placer les images dans `public/images/` :

| Fichier | Description |
|---|---|
| `hero-dog.jpg` | Photo principale hero (chien toiletté) |
| `pascalle.jpg` | Photo Pascalle |
| `sabrina.jpg` | Photo Sabrina |
| `miya.jpg` | Photo Miya |
| `insta-1.jpg` à `insta-6.jpg` | Grille Instagram (page accueil) |
| `og-image.jpg` | Image Open Graph (1200x630px) |

Les images manquantes affichent un placeholder automatiquement.

---

## Déploiement

### Vercel

```bash
npm run build
npx vercel --prod
```

Ajouter les variables d'environnement dans le dashboard Vercel.

### Netlify

```bash
npm run build
# Déployer le dossier dist/
```

Ajouter un fichier `netlify.toml` pour le routing SPA :

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Structure

```
src/
  components/
    AppHeader.vue       Navigation sticky
    AppFooter.vue       Pied de page
    AppointmentForm.vue Formulaire RDV (Supabase + Resend)
    PawIcon.vue         Icône patte SVG
  pages/
    Home.vue            Accueil
    Services.vue        Liste des services
    Equipe.vue          L'équipe
    RendezVous.vue      Page rendez-vous
    Contact.vue         Contact + carte
  lib/
    supabase.js         Client Supabase
  router/
    index.js            Vue Router
supabase/
  functions/
    send-appointment-email/
      index.ts          Edge Function Resend
public/
  favicon.svg
  sitemap.xml
  images/               (à remplir)
```

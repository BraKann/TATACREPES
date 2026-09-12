# Tata Crêpes 

Site vitrine pour un service de restauration et de **culottage** de billig (plaque à crêpes bretonne traditionnelle), opérant en **Loire-Atlantique (44)** et dans le **Morbihan (56)**.

---

## Description

Tata Crêpes propose un service artisanal de culottage (entretien/remise en état de la surface de cuisson) de billigs pour particuliers et professionnels. Le site est une **vitrine à 5 pages**, sans back-office complexe, destinée à :

- Présenter le service et son fonctionnement
- Rassurer via des réalisations concrètes (avant/après)
- Permettre la prise de contact (devis, question)
- Donner de la crédibilité (à propos, zone d'intervention)

## Pages du site

| Page | Rôle |
|---|---|
| **Accueil** | Hero façon devanture de magasin (auvent rayé, rideaux, badge "Ouvert"), présentation rapide |
| **Le Culottage** | Explication pédagogique du service, étapes, avant/après |
| **À Propos** | Histoire, savoir-faire, zone d'intervention (44/56) |
| **Réalisations** | Galerie de chantiers réalisés (photos avant/après, témoignages) |
| **Contact** | Formulaire de contact / demande de devis |

## Stack technique utilisée

- **[React](https://react.dev/)** : bibliothèque UI
- **[Vite](https://vitejs.dev/)** : build tool / dev server
- **[React Router](https://reactrouter.com/)** : navigation entre les 5 pages
- **[Tailwind CSS v4](https://tailwindcss.com/)** via `@tailwindcss/vite` : styling utilitaire
  - Import v4 : `@import "tailwindcss";` (et non les directives v3 `@tailwind base/components/utilities`)
- **CSS custom properties** (`:root` dans `index.css`) : pilotage de toute la palette pour faciliter les évolutions de charte graphique

### Conventions du projet

- Styles et JSX **co-localisés** dans les composants (classes Tailwind inline privilégiées)
- `index.css` réduit au strict minimum : import Tailwind, variables `:root`, et quelques utilitaires non exprimables proprement en Tailwind (`.stripes-*`, etc.)

## Technos à mettre en place

Le site actuel est une vitrine statique. Selon les fonctionnalités souhaitées, voici les briques à ajouter :

### 1. Envoi d'e-mails (formulaire de contact)

Le formulaire de contact a besoin d'un service pour envoyer réellement les messages (un site React/Vite statique ne peut pas envoyer d'e-mail seul). Options, de la plus simple à la plus flexible :

| Solution | Avantages | Points d'attention |
|---|---|---|
| **[Formspree](https://formspree.io/)** | Zéro backend, très rapide à intégrer, plan gratuit correct | Moins de personnalisation, dépendance à un tiers |
| **[EmailJS](https://www.emailjs.com/)** | Envoi direct depuis le front, pas de serveur | Clé API exposée côté client (limiter via quotas/captcha) |
| **[Resend](https://resend.com/)** | API moderne, bonne délivrabilité, templates React Email | Nécessite une petite fonction serverless (Vercel/Netlify Functions) pour cacher la clé API |
| **Netlify Forms** | Intégré si hébergé sur Netlify, aucune config | Fonctionne uniquement sur Netlify |

👉 Recommandation pour un site vitrine simple : **Resend + une fonction serverless** (Netlify/Vercel Function) si l'hébergement le permet, sinon **Formspree** pour aller vite.

### 2. Base de données / gestion de contenu

À ce stade, le site n'a pas de besoin impératif de base de données (contenu géré directement dans le code via les zones `🎛️ MODIFIE`). Si le projet évolue vers plus de dynamisme :

| Besoin | Solution suggérée |
|---|---|
| Ajouter/modifier les réalisations sans toucher au code | CMS headless léger : **[Sanity](https://www.sanity.io/)**, **[Contentful](https://www.contentful.com/)**, ou simple fichier **JSON/Markdown** versionné dans le repo |
| Stocker des avis clients dynamiques | Base légère : **[Supabase](https://supabase.com/)** (Postgres + API auto) ou **[Firebase](https://firebase.google.com/)** |
| Formulaire avec suivi des demandes (CRM léger) | Supabase, Airtable en backend, ou intégration directe avec un CRM existant |

👉 Recommandation : rester sur du contenu statique (JSON/Markdown dans le repo) tant que le volume de réalisations reste gérable manuellement ; passer à Supabase seulement si un vrai besoin de mise à jour fréquente/autonome apparaît.

### 3. Hébergement des images (réalisations avant/après)

- Simple : dossier `public/images/` versionné avec le repo (suffisant pour un volume raisonnable de photos)
- Scalable : **Cloudinary** ou **Supabase Storage** si beaucoup de photos ou besoin d'optimisation automatique (redimensionnement, formats WebP/AVIF)

### 4. Hébergement du site

| Solution | Remarques |
|---|---|
| **[Netlify](https://www.netlify.com/)** | Déploiement continu depuis Git, Netlify Forms inclus, plan gratuit généreux |
| **[Vercel](https://vercel.com/)** | Idéal si usage de fonctions serverless (Resend), déploiement continu |
| **GitHub Pages** | Gratuit mais moins adapté si fonctions serverless nécessaires |

### 5. Nom de domaine & e-mail professionnel

- Réservation d'un nom de domaine (ex. `tata-crepes.fr`)
- Adresse e-mail professionnelle associée (via l'hébergeur du domaine, Google Workspace, ou Infomaniak/OVH)

### 6. Analytics (optionnel)

- **[Plausible](https://plausible.io/)** ou **[Umami](https://umami.is/)** pour un suivi de trafic respectueux de la vie privée (RGPD-friendly), alternative à Google Analytics

### 7. RGPD / mentions légales

- Page ou section mentions légales + politique de confidentialité (obligatoire dès qu'un formulaire collecte des données)
- Bannière de consentement cookies si Analytics ou services tiers déposent des cookies

## Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd tata-crepes

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
tata-crepes/
├── src/
│   ├── components/       # Composants réutilisables (Header, Auvent, Footer...)
│   ├── pages/             # Accueil, Culottage, APropos, Realisations, Contact
│   ├── index.css          # Import Tailwind + variables :root + utilitaires custom
│   ├── App.jsx             # Router principal
│   └── main.jsx
├── public/
│   └── images/             # Photos des réalisations
├── index.html
├── vite.config.js
└── package.json
```

## Variables d'environnement

À créer dans un fichier `.env` (non versionné) une fois les services externes choisis :

```bash
# Exemple si Resend + fonction serverless
RESEND_API_KEY=xxxxxxxxxxxxxxxx

# Exemple si Formspree
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx

# Exemple si Supabase
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxx
```

## Déploiement

1. Connecter le repo Git à Netlify ou Vercel
2. Définir la commande de build : `npm run build`
3. Définir le dossier de sortie : `dist`
4. Ajouter les variables d'environnement dans l'interface de l'hébergeur
5. Configurer le nom de domaine personnalisé

## Roadmap

- [ ] Finaliser la palette pastel sur l'ensemble des composants
- [ ] Peaufiner le bord festonné de l'auvent (proportions container / rayon / backgroundSize)
- [ ] Intégrer le service d'envoi d'e-mail pour le formulaire de contact
- [ ] Peupler la page Réalisations avec les vraies photos avant/après
- [ ] Rédiger les mentions légales / politique de confidentialité
- [ ] Ajouter un outil d'analytics respectueux de la vie privée
- [ ] Déployer en production avec nom de domaine

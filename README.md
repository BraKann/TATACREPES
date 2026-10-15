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
| **Contact** | Formulaire de contact / demande de devis (avec photo optionnelle) |

## Stack technique utilisée

- **[React](https://react.dev/)** : bibliothèque UI
- **[Vite](https://vitejs.dev/)** : build tool / dev server
- **[React Router](https://reactrouter.com/)** : navigation entre les 5 pages
- **[Tailwind CSS v4](https://tailwindcss.com/)** via `@tailwindcss/vite` : styling utilitaire
  - Import v4 : `@import "tailwindcss";` (et non les directives v3 `@tailwind base/components/utilities`)
- **CSS custom properties** (`:root` dans `index.css`) : pilotage de toute la palette pour faciliter les évolutions de charte graphique
- **Google Apps Script + Google Sheets + Google Drive** : réception des demandes du formulaire (voir ci-dessous)

### Conventions du projet

- Styles et JSX **co-localisés** dans les composants (classes Tailwind inline privilégiées)
- `index.css` réduit au strict minimum : import Tailwind, variables `:root`, et quelques utilitaires non exprimables proprement en Tailwind (`.stripes-*`, etc.)

## Formulaire de contact : fonctionnement

Un site React/Vite statique ne peut pas envoyer d'e-mail ni écrire dans une base seul. Le formulaire envoie donc ses données à un **script Google Apps Script** publié comme application web. Ce script, qui tourne dans le compte Google de Tata Crêpes, fait trois choses à chaque demande : il l'enregistre dans un **Google Sheet**, range la photo éventuelle dans un **dossier Google Drive**, et envoie un **e-mail de notification**.

### Schéma du parcours d'une demande

```
Visiteur
   │  remplit le formulaire (src/pages/Contact.jsx)
   │  • nom, message obligatoires
   │  • email OU téléphone obligatoire (au moins un des deux)
   │  • photo optionnelle (une seule), réduite dans le navigateur
   ▼
fetch POST (JSON) ──► Application web Google Apps Script (URL en /exec)
                          │
                          ├─► Google Drive : photo enregistrée dans le dossier « Photos demandes »
                          ├─► Google Sheets : nouvelle ligne dans l'onglet « Demandes »
                          └─► Gmail : e-mail de notification (photo en pièce jointe)
```

### 1. Côté site (`src/pages/Contact.jsx`)

- Les champs : **nom**, **email**, **téléphone**, **message**, **photo** (optionnelle, une seule) et un champ piège caché `_gotcha` (anti-spam).
- Règle de contact : il faut renseigner **au moins un email ou un téléphone**. Le formulaire bloque l'envoi sinon, et le script revérifie la règle côté serveur.
- **Photo** : l'image est redimensionnée dans le navigateur (côté max 1600 px, JPEG qualité 0,8) puis envoyée en base64. Les réglages sont dans les constantes `PHOTO_*` en haut du fichier. Taille maximale du fichier choisi : 15 Mo avant réduction.
- L'envoi est un `fetch` POST en JSON (`Content-Type: text/plain`, pour éviter la requête CORS préliminaire que Apps Script ne gère pas) vers l'URL définie dans `VITE_APPS_SCRIPT_URL`.
- **Important** : le navigateur ne peut pas lire la réponse d'Apps Script depuis un autre domaine. Selon la version du fichier, le formulaire envoie en mode `no-cors` et affiche « Merci » dès que la requête est partie, **sans confirmation que l'écriture a réussi**. En cas de doute, vérifier le Sheet et l'e-mail de notification.

### 2. Le script Google Apps Script

Le script (`doPost`) est publié comme **application web** (Exécuter en tant que : *Moi* ; Accès : *Tout le monde*). Pour chaque requête, il :

1. Ignore la demande si le champ piège `_gotcha` est rempli (bot).
2. Valide les données : nom et message présents, au moins un email ou un téléphone, format d'email correct.
3. Contrôle la photo : JPEG uniquement, 4 Mo maximum.
4. Enregistre la photo dans le dossier Drive **« Photos demandes »** (créé automatiquement s'il n'existe pas), nommée `AAAA-MM-JJ_HH-mm_Nom.jpg`.
5. Écrit une ligne dans l'onglet **« Demandes »** du Sheet (voir structure ci-dessous).
6. Envoie un e-mail de notification à l'adresse de Tata Crêpes, avec la photo en pièce jointe et un lien Drive. Si le visiteur a donné un email, il est placé en « Répondre à ».
7. Si une écriture dans le Sheet échoue, le mail de notification liste les champs concernés (section « Problèmes d'écriture »).

Sécurité et robustesse intégrées au script :

- Les valeurs commençant par `=`, `+`, `-` ou `@` sont neutralisées pour éviter l'injection de formules dans le Sheet.
- Les champs texte sont tronqués à 2000 caractères.
- Un verrou (`LockService`) évite les écritures concurrentes qui se marcheraient dessus.
- Les colonnes sont retrouvées **par leur nom d'en-tête** (sans tenir compte des accents ni des majuscules) : on peut réordonner les colonnes sans toucher au code.

### 3. Le Google Sheet

Un onglet nommé exactement **`Demandes`**, avec une ligne d'en-têtes (elle peut être en ligne 1 ou un peu plus bas : le script la cherche en repérant la colonne `Nom`).

| Colonne | Contenu |
|---|---|
| `Nom` | Nom saisi par le visiteur |
| `Email` | Email (peut être vide si un téléphone est donné) |
| `Téléphone` | Téléphone, stocké en texte pour garder le 0 initial |
| `Message` | Message du visiteur |
| `État` | Suivi de la demande, initialisé à **Pas commencé** (liste déroulante : Pas commencé, En cours, Bloqué, Terminé) |
| `Photo` | Lien cliquable « Voir la photo » vers le fichier dans Drive |
| `Date` *(optionnel)* | Date et heure de la demande, si la colonne existe |

Points d'attention :

- Les noms d'en-têtes doivent correspondre à ceux du tableau ci-dessus. Une colonne absente est ignorée (et signalée dans le mail pour `Photo`, `Téléphone`, etc.).
- La valeur « Pas commencé » doit exister dans la liste déroulante de la colonne `État`.
- Si des règles de validation (types de colonne) sont posées sur les autres colonnes, le script les lève cellule par cellule avant d'écrire. La liste déroulante d'`État` est conservée.
- Une nouvelle demande est écrite dans la première ligne vide sous les en-têtes.

### 4. Le dossier Google Drive

Les photos reçues sont rangées dans le dossier **« Photos demandes »** du Drive du compte propriétaire du script. Il reste **privé** : seul le compte propriétaire (et les personnes avec lesquelles il est partagé) y accède. Le lien de chaque photo est repris dans la colonne `Photo` du Sheet.

### Mise en place

1. **Créer le Sheet** : feuille Google Sheets native (pas un `.xlsx` importé), onglet `Demandes`, en-têtes comme ci-dessus.
2. **Ajouter le script** : dans le Sheet, *Extensions > Apps Script*, coller le script, renseigner `EMAIL_DEST` (adresse qui reçoit les notifications). Si le script est créé depuis script.google.com plutôt que depuis le Sheet, renseigner aussi `SHEET_ID` (l'identifiant présent dans l'URL du Sheet, entre `/d/` et `/edit`).
3. **Autoriser Drive et Gmail** : dans l'éditeur, sélectionner la fonction `getFolder`, cliquer sur *Exécuter* et accepter les autorisations (si Google affiche « application non vérifiée » : *Paramètres avancés > Accéder au projet*).
4. **Déployer** : *Déployer > Nouveau déploiement > Application Web*, *Exécuter en tant que : Moi*, *Qui a accès : Tout le monde*. Copier l'URL qui se termine par `/exec`.
5. **Brancher le site** : copier cette URL dans `.env` sous le nom `VITE_APPS_SCRIPT_URL` (une seule ligne, sans guillemets), puis **redémarrer Vite**.
6. **En production** : ajouter la même variable dans les paramètres d'environnement de l'hébergeur avant le déploiement, puis redéployer le site.

### Modifier le script plus tard

Après toute modification du script, il faut **redéployer** : *Déployer > Gérer les déploiements > crayon > Version : Nouvelle version > Déployer*. Sans cela, l'URL `/exec` continue de servir l'ancien code. L'URL reste la même. Si le script gagne de nouvelles autorisations (par exemple Drive), les accepter en exécutant une fonction depuis l'éditeur, puis redéployer.

### Tester

1. Lancer `npm run dev`, ouvrir `http://localhost:5173/contact`.
2. Envoyer quatre cas : email seul, téléphone seul, aucun des deux (doit être refusé), avec une photo.
3. Vérifier à chaque fois : ligne dans le Sheet, e-mail reçu, photo dans le Drive.

Test direct du script, sans passer par le site :

```bash
curl -L -X POST "URL_DU_SCRIPT_/exec" \
  -H "Content-Type: text/plain" \
  -d '{"nom":"Test","telephone":"0612345678","message":"Coucou"}'
```

Réponse attendue : `{"ok":true}`. En cas d'erreur, le détail est dans Apps Script, onglet **Exécutions**.

### Limites et dépannage

| Sujet | Détail |
|---|---|
| Quota d'e-mails | Environ 100 e-mails par jour avec un compte Google gratuit, très au-dessus du besoin d'un site vitrine |
| Taille des photos | 4 Mo maximum côté script (la photo est déjà réduite à ~300 Ko par le navigateur) |
| Erreur CORS ou page Google en réponse | Déploiement non réglé sur « Tout le monde », ou nouvelles autorisations non redéployées |
| Données absentes d'une colonne | En-tête mal nommé, ou règle de validation sur la colonne ; voir la section « Problèmes d'écriture » du mail |
| `.env` ignoré | Vite ne relit pas `.env` à chaud : redémarrer `npm run dev` |
| URL en double | L'URL du script commence déjà par `https://script.google.com/macros/s/` : la coller une seule fois |

### Sécurité et RGPD

- L'URL `/exec` est **publique par nature** : le navigateur doit l'appeler. Elle ne donne aucun accès au Sheet ni au Drive, mais permet d'envoyer des demandes. Le champ piège, la validation et le plafonnement des tailles limitent le spam. Si du spam arrive, ajouter un jeton secret dans le formulaire et le vérifier dans le script.
- Ne **jamais** versionner l'URL du Sheet, du dossier Drive ou de l'adresse de notification dans un dépôt public. Conserver l'URL du script dans `.env` (ignoré par Git) et dans les paramètres de l'hébergeur.
- Le Sheet et le Drive contiennent des **données personnelles** (nom, email, téléphone, photos). Garder l'accès restreint, définir une durée de conservation (par exemple 12 à 24 mois), supprimer les photos et lignes une fois la demande traitée, et le mentionner dans la politique de confidentialité.

Autres options si le projet évolue :

| Solution | Avantages | Points d'attention |
|---|---|---|
| **[EmailJS](https://www.emailjs.com/)** | Envoi direct depuis le front, pas de serveur | Clé API exposée côté client (limiter via quotas/captcha) |
| **[Resend](https://resend.com/)** | API moderne, bonne délivrabilité, templates React Email | Nécessite une petite fonction serverless (Vercel/Netlify Functions) pour cacher la clé API |
| **Netlify Forms** | Intégré si hébergé sur Netlify, aucune config | Fonctionne uniquement sur Netlify, pas d'upload de photo gratuit |
| **Supabase** (base + stockage) | Vraie base de données, stockage de fichiers, accès contrôlé | Plus de mise en place que le Sheet ; à envisager si le volume de demandes augmente |

👉 Le couple Apps Script + Sheet + Drive convient au volume d'un site vitrine : gratuit, sans serveur à maintenir, avec un suivi des demandes lisible par un non-technicien. Pour un contrôle complet des e-mails ou des traitements personnalisés, une fonction serverless associée à Resend pourra être envisagée ultérieurement.

## Technos à mettre en place

Le site actuel est une vitrine statique. Selon les fonctionnalités souhaitées, voici les briques à ajouter :

### 1. Base de données / gestion de contenu

À ce stade, le site n'a pas de besoin impératif de base de données (contenu géré directement dans le code via les zones `🎛️ MODIFIE`). Si le projet évolue vers plus de dynamisme :

| Besoin | Solution suggérée |
|---|---|
| Ajouter/modifier les réalisations sans toucher au code | CMS headless léger : **[Sanity](https://www.sanity.io/)**, **[Contentful](https://www.contentful.com/)**, ou simple fichier **JSON/Markdown** versionné dans le repo |
| Stocker des avis clients dynamiques | Base légère : **[Supabase](https://supabase.com/)** (Postgres + API auto) ou **[Firebase](https://firebase.google.com/)** |
| Suivi des demandes plus poussé (CRM léger) | Le Google Sheet actuel (colonne `État`), puis Supabase, Airtable ou un CRM existant si besoin |

👉 Recommandation : rester sur du contenu statique (JSON/Markdown dans le repo) tant que le volume de réalisations reste gérable manuellement ; passer à Supabase seulement si un vrai besoin de mise à jour fréquente/autonome apparaît.

### 2. Hébergement des images (réalisations avant/après)

- Simple : dossier `public/images/` versionné avec le repo (suffisant pour un volume raisonnable de photos)
- Scalable : **Cloudinary** ou **Supabase Storage** si beaucoup de photos ou besoin d'optimisation automatique (redimensionnement, formats WebP/AVIF)
- À ne pas confondre : le dossier Drive « Photos demandes » sert uniquement à stocker les photos **envoyées par les visiteurs** via le formulaire, pas les images du site.

### 3. Hébergement du site

| Solution | Remarques |
|---|---|
| **[Netlify](https://www.netlify.com/)** | Déploiement continu depuis Git, plan gratuit généreux |
| **[Vercel](https://vercel.com/)** | Idéal si usage de fonctions serverless (Resend), déploiement continu |
| **GitHub Pages** | Gratuit mais moins adapté si fonctions serverless nécessaires |
| **OVH / Ionos** | Hébergement mutualisé avec nom de domaine : déploiement du dossier `dist` |

### 4. Nom de domaine & e-mail professionnel

- Réservation d'un nom de domaine (ex. `tata-crepes.fr`)
- Adresse e-mail professionnelle associée (via l'hébergeur du domaine, Google Workspace, ou Infomaniak/OVH)

### 5. Analytics (optionnel)

- **[Plausible](https://plausible.io/)** ou **[Umami](https://umami.is/)** pour un suivi de trafic respectueux de la vie privée (RGPD-friendly), alternative à Google Analytics

### 6. RGPD / mentions légales

- Page ou section mentions légales + politique de confidentialité (obligatoire dès qu'un formulaire collecte des données : ici nom, email, téléphone, message, photo)
- Préciser la finalité, la durée de conservation, et le fait que les données sont traitées via Google (Sheets, Drive, Gmail)
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

À créer dans un fichier `.env` (non versionné) à la racine du projet :

```bash
# URL de l'application web Google Apps Script (se termine par /exec)
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec
```

Règles :

- Une seule ligne, sans guillemets, sans espace autour du `=`.
- Seules les variables préfixées `VITE_` sont exposées au navigateur. L'URL est publique par nature, mais ne contient aucun secret.
- Redémarrer Vite après toute modification du fichier.
- Un fichier [`.env.example`](./.env.example) sans valeur réelle peut être versionné comme modèle.

Exemples si d'autres services sont ajoutés plus tard :

```bash
# Si Resend + fonction serverless (variable côté serveur, jamais préfixée VITE_)
RESEND_API_KEY=xxxxxxxxxxxxxxxx

# Si Supabase
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxx
```

## Déploiement

1. Connecter le repo Git à Netlify ou Vercel (ou déployer le dossier `dist` sur OVH / Ionos)
2. Définir la commande de build : `npm run build`
3. Définir le dossier de sortie : `dist`
4. Ajouter `VITE_APPS_SCRIPT_URL` dans les variables d'environnement de l'hébergeur
5. Configurer le nom de domaine personnalisé
6. Après le déploiement, envoyer une demande de test depuis le vrai domaine et vérifier le Sheet, le Drive et l'e-mail
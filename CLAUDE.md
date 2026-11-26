# Atelier : consignes pour Claude

Le propriétaire n'est pas développeur et écrit en français : répondre en français, simplement, sans jargon.
Il travaille surtout depuis son téléphone Android, et peut-être plus tard depuis un ordinateur avec
Claude Code : tout doit pouvoir se faire des deux façons, sans démarche réservée à l'un ou à l'autre.

## Choix du modèle et de l'effort (automatique)

À chaque demande, estimer le modèle et l'effort nécessaires :

- **Haiku, effort faible** : question courte, recherche simple dans les fichiers, reformulation.
- **Sonnet, effort moyen** : travail courant (fichiers, portail public, documents, tests).
- **Sonnet, effort élevé** : travail long ou sur plusieurs fichiers liés, recherche d'une panne.
- **Opus, effort élevé** : sécurité, accès, données privées, architecture, décision difficile à défaire.
- **Opus, effort très élevé** : seulement si le niveau précédent n'a pas suffi, en le signalant.
- **Effort maximum** : jamais sans l'accord du propriétaire.

Si la tâche demande le modèle de la conversation, la faire directement. Sinon, la confier à un
sous-agent lancé avec ce modèle et cet effort. Pour une petite tâche, répondre directement : un
sous-agent repart de zéro et coûte plus cher.

Commencer chaque réponse par une ligne : « 🧠 Niveau : modèle, effort, raison ».
Ne jamais dire avoir changé le modèle de la conversation : seul le propriétaire peut le faire
(`/model`, `/effort`).

## Règles du dépôt

- Ce dépôt est **public**, historique compris : ce qui y a été publié une fois reste lisible.
  N'y mettre **aucune information privée** :
  - ni nom, description ou adresse d'un projet privé, ni lien vers un dépôt privé ;
  - ni code d'accès, ni empreinte du code (celle de `config.js` sera retirée à l'étape 2) ;
  - ni e-mail, clé, mot de passe ou donnée personnelle.
- Écrire de façon neutre (« appli A », « appli B »). La correspondance avec les vrais projets est
  tenue dans un dépôt privé séparé.
- Ne rien créer ni modifier sans le « validé » du propriétaire.
- Travailler sur une branche. Ne jamais fusionner sans son accord. Pas de pull request sauf demande.
- Avant chaque étape : un mini-rapport de quelques lignes (ce qui va être fait, modèle, effort,
  temps estimé).
- Le portail doit fonctionner dans tous les navigateurs (Chrome, Edge, Firefox, Safari, Samsung
  Internet), sur téléphone, tablette et ordinateur, au toucher, à la souris et au clavier.
- Environ toutes les 10 demandes, rappeler que la liste privée permet d'ajouter vite un projet ou
  une application, sans toucher au reste du portail.

## Décisions déjà prises (étape 0 en cours, à tenir à jour)

- **Domaine visé** : `aportatelier.fr` (un seul P), `aportatelier.com` en secours. Pas encore acheté :
  utiliser une adresse provisoire, modifiable en un seul endroit.
- **Adresses** : le portail à la racine du domaine, chaque appli sur son sous-domaine
  `<id>.aportatelier.fr`.
- **Listes** : une liste publique neutre (sur GitHub) et une liste privée (sur Cloudflare), affichée
  seulement après un code vérifié côté serveur. Le code d'accès sera changé à ce moment-là (étape 2).
- **Verrous** : chaque appli privée a son propre verrou (Cloudflare Access, code reçu par e-mail).
- **Contrat d'une appli (0.1, réglé)** : un bloc par appli, même format dans les deux listes, fichier
  commençant par `"version": 1`.
  - Obligatoires : `id` (minuscules, sans accent, ne change jamais ; il donne le sous-domaine),
    `nom`, `etat` (`en-ligne`, `en-cours`, `a-venir`).
  - Facultatifs : `description`, `icone` (un emoji suffit), `ouverture` (`onglet` par défaut, ou
    `fenetre`), `note`, `groupe` (sans effet sur l'affichage tant qu'il n'est pas utilisé),
    `adresse` (vide en temps normal, en `https://` pour une appli hébergée ailleurs).
- **Frontière public / privé (0.2, réglée)** : voir « Règles du dépôt » ci-dessus.
- **Plan** : étape 0 (préparation : 0.3 niveaux d'accès, 0.4 réglages au même endroit,
  0.5 procédures de secours, 0.6 contrôles automatiques), puis étape 1 (portail public, Sonnet),
  puis étape 2 (liste privée et vérification du code, Opus, effort élevé, avec relecture de sécurité).

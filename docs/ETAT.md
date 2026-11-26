# État du projet Atelier

Mis à jour et vérifié le 26/11/2026. Règles d'entretien : `CLAUDE.md`, partie « Mémoire du projet ».

## Où on en est

- **Étape 0 (préparation) en cours** : 0.1 et 0.2 réglées, 0.3 en discussion.
- **Le portail actuel** (page noire, code d'accès vérifié dans le navigateur, cartes de projets dans
  `projets.js`) est en ligne sur GitHub Pages, publié depuis `main`.
- **Rien n'est encore sur le domaine** : il n'est pas acheté, aucune appli n'y est publiée.

## Décisions en vigueur

- **Domaine** : `aportatelier.fr` (un seul P), `aportatelier.com` en secours. Tant qu'il n'est pas
  acheté : adresse provisoire, modifiable en un seul endroit.
- **Adresses** : le portail à la racine, chaque appli sur `<id>.aportatelier.fr`.
- **Deux listes** : une publique et neutre (GitHub), une privée (Cloudflare) affichée seulement après
  un code vérifié côté serveur. À ce moment-là (étape 2), le code d'accès est changé et l'empreinte
  retirée de `config.js`.
- **Verrous** : chaque appli privée a son propre verrou (Cloudflare Access, code reçu par e-mail).
- **Contrat d'une appli (0.1)** : un bloc par appli, même format dans les deux listes, fichier
  commençant par `"version": 1`.
  - Obligatoires : `id` (minuscules, sans accent, ne change jamais ; il donne le sous-domaine),
    `nom`, `etat` (`en-ligne`, `en-cours`, `a-venir`).
  - Facultatifs : `description`, `icone` (un emoji suffit), `ouverture` (`onglet` par défaut, ou
    `fenetre`), `note`, `groupe` (sans effet sur l'affichage tant qu'il n'est pas utilisé),
    `adresse` (vide en temps normal, en `https://` pour une appli hébergée ailleurs).
- **Frontière public / privé (0.2)** : règles dans `CLAUDE.md` ; un dépôt privé séparé tient la
  correspondance « appli A = … ».
- **Plan** : étape 0 (0.3 niveaux d'accès, 0.4 réglages au même endroit, 0.5 procédures de secours,
  0.6 contrôles automatiques), puis étape 1 (portail public, Sonnet), puis étape 2 (liste privée et
  vérification du code, Opus effort élevé, avec relecture de sécurité).
- **Agents permanents** : aucun pour l'instant ; ils viendront plus tard, au moment du codage.

## Prochaine action

Terminer la 0.3 (niveaux d'accès), puis 0.4, 0.5 et 0.6.

## Questions ouvertes

- **0.3** : ouvrir une appli privée demande le code du portail puis un code reçu par e-mail :
  d'accord ? Le propriétaire est-il le seul utilisateur pour l'instant ?
- **Mémoire** : base posée à la fin de l'étape 0 ? Mises à jour de la mémoire directement dans
  `main`, sans demander à chaque fois ?
- **Note de mémoire de Claude Code** en doublon avec `CLAUDE.md` (appareils et navigateurs) : à
  supprimer ?
- **Recommandations sans réponse** : accepter que l'historique public garde d'anciens noms ;
  procédure « code perdu » ; bulle Claude reportée.

## À faire par le propriétaire

- Créer le dépôt privé (nom proposé : `atelier-prive`).
- Créer un compte Cloudflare gratuit (utile pour l'étape 2).
- Acheter le domaine, le moment venu.

## À traiter plus tard

- `projets.js` contient encore des noms et des liens à retirer de la liste publique (étape 1).
- La bulle Claude prévue dans d'anciens plans n'a pas de dépôt ; deux demandes de fusion ouvertes
  dans d'autres dépôts en dépendent.

## Fichiers de sujet (niveau 3)

Aucun pour l'instant.

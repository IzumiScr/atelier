# État du projet Atelier

Mis à jour et vérifié le 26/11/2026. Règles d'entretien : `CLAUDE.md`, partie « Mémoire du projet ».

## Où on en est

- **Étape 0 (préparation) en cours** : 0.1 à 0.4 et le système de mémoire réglés. Dépôt privé
  `atelier-prive` créé (vide, privé) le 26/11/2026.
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
- **Niveaux d'accès (0.3, décidé le 26/11/2026)** : ouvrir une appli privée demande le code du portail,
  puis un code reçu par e-mail. Le propriétaire est le seul utilisateur pour l'instant, mais il doit
  pouvoir ajouter des utilisateurs plus tard, par une invitation envoyée par e-mail (l'adresse invitée
  est ajoutée au verrou de chaque appli choisie).
- **Contrat d'une appli (0.1)** : un bloc par appli, même format dans les deux listes, fichier
  commençant par `"version": 1`.
  - Obligatoires : `id` (minuscules, sans accent, ne change jamais ; il donne le sous-domaine),
    `nom`, `etat` (`en-ligne`, `en-cours`, `a-venir`).
  - Facultatifs : `description`, `icone` (un emoji suffit), `ouverture` (`onglet` par défaut, ou
    `fenetre`), `note`, `groupe` (sans effet sur l'affichage tant qu'il n'est pas utilisé),
    `adresse` (vide en temps normal, en `https://` pour une appli hébergée ailleurs).
- **Frontière public / privé (0.2)** : règles dans `CLAUDE.md` ; un dépôt privé séparé tient la
  correspondance « appli A = … ».
- **Mémoire** : fichiers dans le dépôt et outils de Claude Code (règles dans `CLAUDE.md`), avec une
  recherche hybride et une veille des outils d'Anthropic (voir la carte ci-dessous).
- **Entretien automatique** : tâche planifiée « Atelier : entretien de la mémoire » (dimanche 20 h 13,
  heure de Paris, jusqu'au 26/11/2027 : ménage si le dépôt a changé, puis veille rapide ; premier mois en
  test Sonnet contre Opus, voir la carte). **En pause depuis le 26/11/2026** : ses sessions n'ont pas
  l'accès en écriture à ce dépôt ; à recréer depuis claude.ai avec ce dépôt attaché.
- **Réglages (0.4, faite le 26/11/2026)** : tous dans `config.js`, liste expliquée en tête du fichier ;
  `manifest.webmanifest` et `style.css` restent à part.
- **Plan** : étape 0 (0.5 procédures de secours, 0.6 contrôles automatiques), puis étape 1
  (portail public, Sonnet), puis étape 2 (liste privée et
  vérification du code, Opus effort élevé, avec relecture de sécurité). L'étape 2 comprend un bouton
  « Inviter quelqu'un » : adresse + applis choisies, l'e-mail d'invitation part tout seul (le verrou
  Cloudflare Access accepte une adresse mais n'envoie pas d'invitation lui-même).
- **Agents permanents** : aucun pour l'instant ; ils viendront plus tard, au moment du codage.
- **Modèles (26/11/2026)** : échelle Haiku → Sonnet → Opus (règle dans `CLAUDE.md`) ; conseiller Sonnet
  testé, il marche ; fichier de réglages du dépôt à créer (voir « Prochaine action »).

## Prochaine action

Dans une nouvelle session (dépôt Atelier seul ; `/model haiku`, `/effort xhigh`, `/advisor sonnet`) :
créer `.claude/settings.json` et le fusionner dans `main` (accord donné le 26/11/2026), puis le grand
ménage, puis la 0.5 et la 0.6. Détail : `docs/memoire/sessions/2026-11-26-echelle-et-conseiller.md`.

## Questions ouvertes

- **Recommandations sans réponse** : accepter que l'historique public garde d'anciens noms ;
  procédure « code perdu » ; bulle Claude reportée.

## Propositions refusées

- 27/11/2026 : une liste de 10 idées liées aux projets en cours (il veut des idées nouvelles, sans lien).

## À faire par le propriétaire

- Créer un compte Cloudflare gratuit (utile pour l'étape 2).
- Acheter le domaine, le moment venu.
- Recréer la tâche planifiée avec ce dépôt attaché. Accepté, à faire plus tard : Claude lira d'abord la
  documentation officielle pour donner les étapes exactes.

## À traiter plus tard

- `projets.js` contient encore des noms et des liens à retirer de la liste publique (étape 1).
- La bulle Claude prévue dans d'anciens plans n'a pas de dépôt ; deux demandes de fusion ouvertes
  dans d'autres dépôts en dépendent.

## Carte des fichiers de sujet (niveau 3)

- `docs/memoire/recherche.md` : comment retrouver une information dans la mémoire (carte, mots exacts,
  moteur par le sens plus tard) et comparaison des outils de mémoire. Mots-clés : recherche, sens,
  hybride, index, vecteurs, Basic Memory, Vectorize, claude-mem, Mem0, Graphiti.
- `docs/memoire/veille-anthropic.md` : veille mensuelle des outils de mémoire d'Anthropic, état connu,
  critères et marche à suivre avant installation. Mots-clés : Anthropic, veille, outil mémoire, API,
  Auto Dream, Dreaming, mise à jour.
- `docs/memoire/proprietaire.md` : habitudes du propriétaire (dictée, « validé », réponses par numéros)
  et apprentissages techniques (coût des sessions, tâche planifiée, limites). Mots-clés : propriétaire,
  habitudes, préférences, dictée, validé, coût, jetons, session, limite hebdomadaire.
- `docs/memoire/sessions/` (temporaire) : archives courtes des prochaines sessions, à condenser
  au grand ménage suivant.
- `docs/memoire/test-modeles.md` (temporaire) : test d'un mois de la tâche planifiée, Sonnet contre
  Opus, calendrier et résultats. Mots-clés : test, modèle, Sonnet, Opus, comparaison, tâche planifiée.

# Atelier : consignes pour Claude

Le propriétaire n'est pas développeur et écrit en français : répondre en français, simplement, sans jargon.
Il travaille surtout depuis son téléphone Android, et peut-être plus tard depuis un ordinateur avec
Claude Code : tout doit pouvoir se faire des deux façons, sans démarche réservée à l'un ou à l'autre.

**Avant tout travail, lire `docs/ETAT.md`** : la mémoire à jour du projet (où on en est, décisions en
vigueur, prochaine action, questions ouvertes).

## Choix du modèle et de l'effort (automatique)

À chaque demande, estimer le modèle et l'effort nécessaires :

- **Haiku, effort faible** : question courte, recherche simple dans les fichiers, reformulation.
- **Sonnet, effort moyen** : travail courant (fichiers, portail public, documents, tests).
- **Sonnet, effort élevé** : travail long ou sur plusieurs fichiers liés, recherche d'une panne.
- **Opus, effort élevé** : sécurité, accès, données privées, architecture, décision difficile à défaire.
- **Opus, effort très élevé** : seulement si le niveau précédent n'a pas suffi, en le signalant.
- **Effort maximum** : jamais sans l'accord du propriétaire.

Chaque message relit toute la conversation : le plus économe est de démarrer en Sonnet et de faire
appel à Opus seulement quand il le faut.

- **Conversation en Sonnet, tâche difficile** : la confier à un sous-agent Opus, avec l'effort estimé.
- **Conversation en Opus, long travail simple** (beaucoup de fichiers ou de recherches) : le confier à
  un sous-agent Sonnet ou Haiku.
- **Petite demande** : répondre directement, quel que soit le modèle (un sous-agent repart de zéro et
  coûte plus cher).
- **Conversation longue** (plus de 400 000 jetons) ou **fin d'étape** : suivre « Fin de session ».

Commencer chaque réponse par une ligne « 🧠 » : le niveau **conseillé** (modèle, effort, raison) et le
modèle **réellement utilisé**, d'après les avis de la session, sans deviner. Ne jamais dire avoir changé
le modèle de la conversation : seul le propriétaire peut le faire (`/model`, `/effort`).

Ordre de chaque réponse : le moins utile en haut, l'essentiel en bas, collé aux propositions :
ligne « 🧠 », détails, puis le **résultat** (pas les propositions) en deux lignes, « Résultat
vulgarisé » et « Résultat en analogie », 10 mots chacune, 20 au maximum, puis les propositions.

Finir chaque réponse par **1 à 10 propositions** concrètes de suite, numérotées, chacune en une ligne
avec l'effort estimé et une question oui / non. Une proposition n'est faite qu'après accord.
Une proposition refusée n'est plus reproposée : elle est notée en une ligne dans `docs/ETAT.md`.

Un message qui commence par « Question » ou « Q : » est une **question à part** : y répondre
normalement, sans rien écrire dans la mémoire (`docs/ETAT.md`, `docs/memoire/`, notes de Claude Code) et
sans le compter dans les 10 demandes. Si la réponse sert le projet, demander avant de l'ajouter. Une
seule proposition à la fin suffit.

## Règles du dépôt

- Ce dépôt est **public**, historique compris : ce qui y a été publié une fois reste lisible.
  N'y mettre **aucune information privée** :
  - ni nom, description ou adresse d'un projet privé, ni lien vers un dépôt privé ;
  - ni code d'accès, ni empreinte du code ;
  - ni e-mail, clé, mot de passe ou donnée personnelle.
- Écrire de façon neutre (« appli A », « appli B »). Les notes qui nomment les projets du propriétaire
  (noms, descriptions, adresses, liens, décisions qui les identifient) vont dans le dépôt privé
  `atelier-prive`, jamais ici ; en cas de doute, y écrire.
- Travailler sur une branche, sans attendre un « validé » à chaque modification, pour ce qui est
  demandé dans la conversation ou écrit dans « Décisions en vigueur » de `docs/ETAT.md`. Une proposition
  non acceptée et la « Prochaine action » ne sont pas des décisions. Avant chaque envoi sur GitHub,
  même sur une branche (tout envoi est public pour toujours), vérifier qu'il n'y a aucune info privée ;
  en cas de doute, ne pas envoyer et demander. Attendre le « validé » du propriétaire seulement pour :
  - une **grande étape** : commencer ou terminer une étape ou sous-étape du plan (0.5, 1…) ;
  - une **autorisation que lui seul peut donner** : fusionner dans `main` ; toucher au code d'accès, à
    une barrière de sécurité, aux réglages GitHub (visibilité, Pages, accès, Actions) ; toucher à une
    tâche planifiée, un connecteur ou une clé ; créer ou supprimer un dépôt ou un compte ; effacer ce
    qui ne se récupère pas par git (données hors dépôt, réécriture d'historique, envoi forcé,
    étiquette) ; tout paiement ou abonnement, le domaine compris ; tout message à quelqu'un ; changer
    une règle de ce fichier ;
  - une **personnalisation difficile à changer plus tard** (ex. : `id` d'appli, domaine, nom de dépôt,
    format du contrat d'appli) : proposer des options et demander l'avis avant de la figer.
  Pas de pull request sauf demande. **Exception : la mémoire** (`docs/ETAT.md`, `docs/memoire/`) se
  tient à jour sans « validé », directement sur `main`, après avoir vérifié qu'elle ne contient aucune
  information privée.
- Avant chaque étape : un mini-rapport de quelques lignes (ce qui va être fait, modèle, effort,
  temps estimé).
- Le portail doit fonctionner dans tous les navigateurs (Chrome, Edge, Firefox, Safari, Samsung
  Internet), sur téléphone, tablette et ordinateur, au toucher, à la souris et au clavier.
- Environ toutes les 10 demandes : rappeler que la liste privée permet d'ajouter vite un projet ou
  une application, sans toucher au reste du portail, et faire le grand ménage de la mémoire.

## Mémoire du projet : grande si besoin, toujours optimisée

Dans un an, la mémoire pourra être grande. Chaque information doit pourtant rester à jour, à un seul
endroit, et n'être lue que quand elle sert.

### Trois niveaux

1. **`CLAUDE.md`**, lu à chaque session : les règles, qui changent rarement. 200 lignes au plus.
2. **`docs/ETAT.md`**, lu avant tout travail : ce qui est vrai aujourd'hui, et la carte des fichiers
   de sujet. 100 lignes environ au plus.
3. **`docs/memoire/<sujet>.md`**, lu seulement quand le sujet sert : le détail d'un sujet, 150 lignes
   environ chacun. Un fichier n'est créé que lorsqu'un sujet déborde de `ETAT.md` ; `ETAT.md` garde
   alors une ligne de résumé et le lien.

Hors du dépôt :

- **les notes de mémoire de Claude Code** : seulement ce qui n'est écrit dans aucun dépôt, jamais une
  copie de `CLAUDE.md` ou de `ETAT.md` ; mises à jour en place ;
- **l'historique git** : toutes les anciennes versions ; jamais lu d'office, consulté seulement si besoin.

La mémoire grandit en **largeur** (de nouveaux fichiers de sujet) ; en **épaisseur** (un fichier qui
gonfle) seulement par la règle 7.

### Règles

1. **Une information, un seul endroit.** Ailleurs, on renvoie vers lui.
2. **On réécrit, on n'ajoute pas.** Pas de journal qui s'allonge : un fichier de mémoire est mis à jour
   en place.
3. **Remplacé = supprimé**, tout de suite. L'historique git garde l'ancienne version.
4. **Terminé = condensé** en une ligne, ou supprimé s'il n'apporte plus rien.
5. **Contradiction** : la décision la plus récente du propriétaire l'emporte ; en cas de doute, lui
   demander.
6. **Que du vérifié, daté** : chaque fichier porte « vérifié le … ». Une information non revérifiée
   depuis 3 mois est contrôlée (dans le code, sur GitHub) au ménage suivant.
7. **Budgets revus** (les trois niveaux, fichiers futurs compris) : à chaque grand ménage, et dès qu'un
   fichier atteint 90 % du sien. Condenser d'abord ; si tout ce qui reste sert, proposer, chiffres à
   l'appui (lignes, coût de lecture), de découper ou d'augmenter le budget ; rien ne change sans
   « validé ». `CLAUDE.md` ne dépasse jamais 200 lignes (au-delà, selon Anthropic, les consignes sont
   moins bien suivies). Une ligne : 110 caractères au plus.

### Retrouver une information (recherche hybride)

1. **Par le sens, avec la carte** : `docs/ETAT.md` décrit chaque fichier de sujet en une ligne, avec des
   mots-clés. Lire la carte, puis n'ouvrir que les fichiers utiles.
2. **Par les mots exacts** : chercher dans les fichiers (nom, date, terme précis).
3. **Plus tard, un moteur de recherche par le sens** : à proposer quand la carte dépasse 100 lignes,
   quand il y a plus de 50 fichiers de sujet, ou quand une information existante a été ratée deux fois.
   Détail : `docs/memoire/recherche.md`.

### Fin de session (ou passage en nouvelle session) : récupérer, archiver, optimiser

1. **Récupérer** ce que la session a appris et qui n'est pas encore écrit : décisions, préférences du
   propriétaire, apprentissages techniques, fils ouverts.
2. **Archiver** : une note courte et datée, `docs/memoire/sessions/AAAA-MM-JJ-<sujet>.md`, neutre.
   Ce qui nomme les projets va dans `atelier-prive` (tant qu'il n'existe pas : dans une note de
   mémoire de Claude Code).
3. **Optimiser** : fusionner ce qui est durable dans `ETAT.md` ou un fichier de sujet ; au grand ménage
   suivant, condenser la note de session en une ligne ou la supprimer (l'historique git garde tout).
4. **Proposer** d'ouvrir une nouvelle session en Sonnet sur le dépôt Atelier, avec son premier message
   prêt (lire `docs/ETAT.md` et la dernière note de session).

### Quand optimiser

- **Tout de suite** : dès qu'une décision est remplacée.
- **À chaque fin d'étape** : `docs/ETAT.md` réécrit en entier, puis étiquette git `memoire-etape-<n>`.
- **Grand ménage, environ toutes les 10 demandes** : relire les trois niveaux et les notes de mémoire ;
  retirer doublons, obsolète et terminé ; revoir les budgets (règle 7) et les dates. Plus souvent quand
  beaucoup de décisions changent ; au moins une fois par mois quand le projet est calme.
- **Veille des outils de mémoire d'Anthropic, une fois par mois**, avec le ménage mensuel : suivre
  `docs/memoire/veille-anthropic.md`. Une nouveauté applicable est proposée au propriétaire, et
  installée seulement après son « validé ».
- **Après chaque ménage** : compte rendu de trois lignes au propriétaire (retiré, fusionné, mis à
  jour). Les suppressions évidentes (doublon, information remplacée) se font directement ; en cas de
  doute, demander avant. Supprimer une note de mémoire de Claude Code passe toujours par sa
  confirmation.

### Sauvegardes

- **`memoire-base`** : étiquette git sur la première version complète (fin de l'étape 0), gardée pour
  toujours.
- **`memoire-etape-<n>`** : garder les 3 plus récentes, retirer les plus anciennes (les versions restent
  dans l'historique git).
- **Pas d'archive permanente** : `docs/memoire/sessions/` ne garde que les notes récentes, vidées au
  grand ménage suivant.

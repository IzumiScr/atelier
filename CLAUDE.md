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

Si la tâche demande le modèle de la conversation, la faire directement. Sinon, la confier à un
sous-agent lancé avec ce modèle et cet effort. Pour une petite tâche, répondre directement : un
sous-agent repart de zéro et coûte plus cher.

Commencer chaque réponse par une ligne : « 🧠 Niveau : modèle, effort, raison ».
Finir chaque réponse par **1 à 10 propositions** concrètes de suite, numérotées, chacune en une ligne
avec l'effort estimé et une question oui / non. Rien n'est appliqué sans l'accord du propriétaire.
Une proposition refusée n'est plus reproposée : elle est notée en une ligne dans `docs/ETAT.md`.
Ne jamais dire avoir changé le modèle de la conversation : seul le propriétaire peut le faire
(`/model`, `/effort`).

## Règles du dépôt

- Ce dépôt est **public**, historique compris : ce qui y a été publié une fois reste lisible.
  N'y mettre **aucune information privée** :
  - ni nom, description ou adresse d'un projet privé, ni lien vers un dépôt privé ;
  - ni code d'accès, ni empreinte du code ;
  - ni e-mail, clé, mot de passe ou donnée personnelle.
- Écrire de façon neutre (« appli A », « appli B »). La correspondance avec les vrais projets est
  tenue dans un dépôt privé séparé.
- Ne rien créer ni modifier sans le « validé » du propriétaire. Exception : la mémoire
  (`docs/ETAT.md`, `docs/memoire/`) se tient à jour sans « validé », selon les règles ci-dessous.
  Changer une règle de ce fichier demande toujours le « validé ».
- Travailler sur une branche. Ne jamais fusionner sans son accord. Pas de pull request sauf demande.
  Exception : la mémoire (`docs/ETAT.md`, `docs/memoire/`) se modifie directement sur `main`, jamais
  sur une branche de travail, après avoir vérifié qu'elle ne contient aucune information privée.
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

1. **`CLAUDE.md`**, lu à chaque session : les règles, qui changent rarement. 150 lignes environ au plus.
2. **`docs/ETAT.md`**, lu avant tout travail : ce qui est vrai aujourd'hui, et la carte des fichiers
   de sujet. 100 lignes environ au plus.
3. **`docs/memoire/<sujet>.md`**, lu seulement quand le sujet sert : le détail d'un sujet, 150 lignes
   environ chacun. Un fichier n'est créé que lorsqu'un sujet déborde de `ETAT.md` ; `ETAT.md` garde
   alors une ligne de résumé et le lien.

Hors du dépôt :

- **les notes de mémoire de Claude Code** : seulement ce qui n'est écrit dans aucun dépôt, jamais une
  copie de `CLAUDE.md` ou de `ETAT.md` ; mises à jour en place ;
- **l'historique git** : toutes les anciennes versions ; jamais lu d'office, consulté seulement si besoin.

La mémoire grandit en **largeur** (de nouveaux fichiers de sujet), jamais en **épaisseur** (aucun
fichier qui gonfle).

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
7. **Budget dépassé** : condenser d'abord, sinon découper en fichiers de sujet.
8. **Neutre ici** ; ce qui nomme les projets va dans le dépôt privé, avec les mêmes règles.

### Retrouver une information (recherche hybride)

1. **Par le sens, avec la carte** : `docs/ETAT.md` décrit chaque fichier de sujet en une ligne, avec des
   mots-clés. Lire la carte, puis n'ouvrir que les fichiers utiles.
2. **Par les mots exacts** : chercher dans les fichiers (nom, date, terme précis).
3. **Plus tard, un moteur de recherche par le sens** : à proposer quand la carte dépasse 100 lignes,
   quand il y a plus de 50 fichiers de sujet, ou quand une information existante a été ratée deux fois.
   Détail : `docs/memoire/recherche.md`.

### Quand optimiser

- **Tout de suite** : dès qu'une décision est remplacée.
- **À chaque fin d'étape** : `docs/ETAT.md` réécrit en entier, puis étiquette git `memoire-etape-<n>`.
- **Grand ménage, environ toutes les 10 demandes** : relire les trois niveaux et les notes de mémoire ;
  retirer doublons, obsolète et terminé ; vérifier budgets et dates.
- **Rythme adapté** : plus souvent quand beaucoup de décisions changent ; quand le projet est calme,
  au moins une fois par mois (à la première session du mois).
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
- **Pas de dossier d'archives** : ce serait de la redondance.

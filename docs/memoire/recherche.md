# Retrouver une information dans la mémoire (recherche hybride)

Vérifié le 26/11/2026. Résumé : la carte de `docs/ETAT.md`, où Claude cherche par le sens, plus la
recherche par mots exacts. Un moteur de recherche par le sens s'ajoutera quand la mémoire sera grande.

## Aujourd'hui, sans outil de plus

1. **Par le sens, avec la carte** : chaque fichier de sujet a, dans `docs/ETAT.md`, une ligne de
   description et des mots-clés. Claude lit la carte, comprend la demande et n'ouvre que les fichiers
   utiles. C'est le principe des compétences de Claude Code : la description est toujours lue, le
   contenu seulement quand il sert.
2. **Par les mots exacts** : recherche dans les fichiers (`grep`) pour un nom, une date, un terme précis.
3. **Règles chargées à la demande**, dès qu'il y aura du code : fichiers `.claude/rules/` avec un champ
   `paths`, chargés seulement quand Claude touche les fichiers concernés.

Pour que la carte marche : une description claire et précise par fichier, des mots-clés en français,
avec les synonymes utiles.

## Quand ajouter un moteur de recherche par le sens

Dès qu'un de ces signaux apparaît :

- la carte dépasse 100 lignes, ou il y a plus de 50 fichiers de sujet ;
- Claude rate deux fois une information qui existait dans la mémoire.

Le choix du moteur se fait à ce moment-là, avec le « validé » du propriétaire.

## Moteurs possibles (à revérifier le moment venu)

- **Basic Memory, pointé sur `docs/memoire/`**
  - Pour : recherche hybride toute faite (mots exacts et sens, résultats fusionnés) ; les fichiers
    restent en Markdown dans le dépôt ; gratuit en local.
  - Contre : à installer à chaque session dans le cloud ; son modèle de sens par défaut est anglais (en
    choisir un multilingue) ; le téléchargement du modèle peut être bloqué par le réseau des sessions
    cloud : à tester.
- **Cloudflare Vectorize et Workers AI**
  - Pour : s'intègre au Cloudflare déjà prévu ; offre gratuite (30 millions de dimensions interrogées
    par mois, 5 millions stockées) ; pourra aussi servir la future bulle Claude.
  - Contre : plus de pièces (index à reconstruire à chaque mise à jour par une tâche GitHub, point
    d'accès protégé, réseau des sessions à ouvrir) ; modèle multilingue à vérifier dans le catalogue.
- **Index calculé par GitHub** (fichier de vecteurs dans le dépôt)
  - Pour : rien d'hébergé.
  - Contre : il faut quand même un modèle pour comprendre la question au moment de chercher.

## Outils écartés (comparaison du 26/11/2026)

- **claude-mem** : données sur la machine, perdues dans le cloud ; enregistre tout ; accumule au lieu de
  remplacer ; une partie est payante.
- **Mem0 / OpenMemory** : n'ajoute que (« rien n'est écrasé ») ; données chez un tiers, ou hébergement
  et clé d'IA à fournir.
- **Graphiti** : très lourd (base de graphes et clé d'IA), module encore expérimental.
- **Memory Bank** : son idée de structure fixe est reprise dans `ETAT.md` ; écarté parce que tous ses
  fichiers sont relus à chaque session.

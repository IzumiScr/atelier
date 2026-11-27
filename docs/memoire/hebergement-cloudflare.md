# Hébergement du portail chez Cloudflare

Vérifié le 27/11/2026. Mots-clés : Cloudflare, Workers, hébergement, déménagement, GitHub Pages, public/, build.

## Principe

- Le portail est un site de fichiers simples (aucun serveur). Cloudflare les publie tels quels.
- `tools/build-site.sh` copie **seulement** les fichiers du portail dans `public/` (jamais `CLAUDE.md`, `docs/`)
  et y ajoute `_headers` (pas d'indexation par les moteurs de recherche, pas de référent transmis).
- `wrangler.jsonc` : nom du Worker `atelier`, dossier publié `./public`. Ce nom doit être identique dans
  le tableau de bord Cloudflare, sinon la construction échoue.
- `public/` n'est pas dans le dépôt (`.gitignore`) : il est recréé à chaque publication.

## Vérifié (27/11/2026)

- Construction locale : 11 fichiers, 76 Ko ; chaque fichier du portail répond, `docs/` et `CLAUDE.md` absents.
- `wrangler deploy --dry-run` : configuration acceptée, rien d'envoyé.

## Connecter le dépôt (depuis le téléphone, une seule fois)

1. Tableau de bord Cloudflare, « Workers & Pages », « Create application », puis « GitHub ».
2. Autoriser GitHub pour le seul dépôt Atelier, puis le choisir.
3. Nom du Worker : `atelier`. Branche de production : `main`.
   Commande de construction : `bash tools/build-site.sh`. Commande de déploiement : `npx wrangler deploy`.
   Dossier racine : laisser vide. (Les noms exacts des champs sont à confirmer à l'écran.)
4. « Save and Deploy » : le portail s'ouvre sur une adresse en `workers.dev`.
5. Tester, puis donner le « validé » : alors seulement GitHub Pages est désactivé.

## Après le déménagement

- Domaine : `aportatelier.fr`, à ajouter au Worker une fois acheté (voir `ETAT.md`).
- Chaque nouvelle publication sur `main` met le portail à jour tout seul.

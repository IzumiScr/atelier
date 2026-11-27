#!/usr/bin/env bash
# Prépare public/ : seulement les fichiers du portail, jamais CLAUDE.md, docs/ ni les outils de travail.
# Cloudflare publie le contenu de public/ (voir wrangler.jsonc).
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf public
mkdir -p public
cp index.html app.js config.js fenetres.js projets.js style.css icone.svg manifest.webmanifest robots.txt public/
cp -r outils public/
# Le portail est personnel : pas d'indexation, pas de référent transmis.
cat > public/_headers <<'H'
/*
  X-Robots-Tag: noindex, nofollow
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
H
echo "Site prêt dans public/ :"
du -sh public

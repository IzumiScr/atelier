# Veille : les outils de mémoire d'Anthropic

Vérifié le 26/11/2026. Résumé : chaque mois, regarder si Anthropic a sorti ou amélioré un outil de
mémoire utile à l'Atelier, le proposer au propriétaire, et l'installer seulement après son « validé ».

## Quand

Chaque semaine pendant la phase de création (jusqu'au 26/11/2027), par la tâche planifiée « Atelier :
entretien de la mémoire », en pause depuis le 26/11/2026. En attendant, et après cette phase : au moins
une fois par mois, pendant les sessions (voir `CLAUDE.md`).

## Où regarder

- Mémoire de Claude Code : https://code.claude.com/docs/en/memory
- Nouveautés de Claude Code : https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- Outil mémoire de l'API : https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool
- Annonces d'Anthropic : https://www.anthropic.com/news
- Une recherche sur le web (« Anthropic Claude memory ») pour ce qui n'est pas encore documenté.

## État connu (à réécrire à chaque veille, jamais à rallonger)

- **Outil mémoire de l'API** (fichiers de mémoire gérés par l'application) : disponible depuis le
  29/09/2025. Applicable : pas à Claude Code ; candidat pour la future bulle Claude.
- **Mémoire automatique de Claude Code** (`MEMORY.md`) : sur la machine seulement, pas partagée avec les
  sessions dans le cloud (documentation officielle). Applicable : non, le travail se fait surtout dans
  le cloud.
- **Mémoire cloud de Claude Code** (notes gardées par Anthropic, partagées entre les sessions dans le
  cloud) : disponible et utilisée par ce projet, réduite à ce qui n'est écrit dans aucun dépôt.
- **« Auto Dream »** (consolidation automatique des fichiers de mémoire) : signalé par des blogs, pas
  confirmé officiellement. Applicable : à vérifier ; pourrait prendre en charge une partie du ménage.
- **« Dreaming »** (consolidation de la mémoire entre les sessions, pour les agents gérés de l'API) :
  aperçu de recherche depuis mai 2026, selon des sources tierces. Applicable : pas encore ; à surveiller
  jusqu'à sa sortie générale.

## Critères pour dire « applicable »

1. Marche depuis le téléphone et dans les sessions dans le cloud.
2. Gratuit, ou compris dans l'abonnement.
3. Aucune donnée privée chez un tiers ; respect du dépôt public.
4. Remplace ou consolide, sans accumuler.
5. Pas de doublon avec la mémoire du dépôt : sinon, garder une seule des deux.
6. Réversible : on peut revenir en arrière.

## Marche à suivre

1. Consulter les sources ci-dessus.
2. Réécrire « État connu » et la date de vérification, en place.
3. Si une nouveauté remplit les critères : préparer une proposition courte (ce que c'est, gains,
   limites, coût, comment revenir en arrière) et la soumettre au propriétaire.
4. Après son « validé » seulement : installer sur une branche, tester, fusionner avec son accord, puis
   mettre à jour `docs/ETAT.md` et ce fichier.
5. Sinon, seule la date de vérification change.

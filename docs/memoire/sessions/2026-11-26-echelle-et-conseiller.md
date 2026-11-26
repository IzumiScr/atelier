# Session du 26/11/2026 : échelle des modèles et conseiller

Vérifié le 26/11/2026. Note temporaire : à condenser au prochain grand ménage.

## Décidé

- **Échelle Haiku → Sonnet → Opus**, effort choisi à chaque échelon : règle dans `CLAUDE.md`, fusionnée
  dans `main` le 26/11/2026. Le propriétaire travaille en Haiku, effort très élevé (`xhigh`).
- **Fichier de réglages du dépôt** à créer : `.claude/settings.json`. Le propriétaire a accepté sa fusion
  dans `main` si le test du conseiller réussissait ; il a réussi. Contenu prévu :

```json
{
  "model": "haiku",
  "advisorModel": "sonnet",
  "modelSettings": { "claude-haiku-5-5": { "effortLevel": "xhigh" } }
}
```

## Appris (documentation officielle de Claude Code, et tests)

- `opusplan` : Opus en mode plan, Sonnet sinon. Testé le 26/11/2026 : il marche. « haikuplan » n'existe
  pas.
- **Le conseiller** (`advisor`, expérimental) : le modèle principal consulte un modèle plus fort, qui
  relit toute la conversation, puis il applique son avis. Avec Haiku, le conseiller peut être Sonnet ou
  Opus ; il ne s'active pas si le modèle principal est plus fort que lui. Activation : `/advisor sonnet`
  (dans le cloud, pour la session seulement) ou `advisorModel` dans `.claude/settings.json`. Son effort
  ne se choisit pas. Coût : compté dans le forfait, au tarif du conseiller. Un changement de conseiller
  ne prend effet qu'après `/compact` ou `/clear`.
- **Test du 26/11/2026** : un sous-agent Haiku, effort très élevé, a appelé le conseiller ; le journal
  de la session montre que Sonnet a répondu. Verdict du conseiller sur la règle : « suffisant », avec
  4 points à clarifier (voir « Fils ouverts »).
- **Effort** : Haiku accepte `xhigh`. Une variable d'environnement d'effort imposerait le même effort à
  tous les modèles et passerait avant tout le reste : à éviter. `modelSettings` règle un seul modèle.
- `.claude/settings.json` du dépôt vaut pour une session cloud à un seul dépôt, et sur ordinateur.

## Fils ouverts

1. Nouvelle session (dépôt Atelier seul ; `/model haiku`, `/effort xhigh`, `/advisor sonnet` avant la
   première demande) : créer le fichier de réglages ci-dessus et le fusionner dans `main`.
2. La session suivante vérifie qu'elle démarre seule en Haiku, effort très élevé, avec le conseiller.
   À vérifier : le modèle choisi à la création de la session peut passer avant le réglage `model`.
3. Grand ménage (dû) : condenser `CLAUDE.md` (179 lignes ; une ligne dépasse 110 caractères) et y
   clarifier les 4 points du conseiller : les sujets sensibles vont directement à Opus ; savoir si le
   conseiller est actif (outil `advisor` présent) ; une seule condition pour Opus « très élevé » ; où
   lire le modèle utilisé pour la ligne « 🧠 ». « Fin de session », point 4 : Haiku au lieu de Sonnet.

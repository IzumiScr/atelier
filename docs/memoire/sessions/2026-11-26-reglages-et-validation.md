# Session du 26/11/2026 (suite) : 0.4 réglages, nouvelle règle de validation

Vérifié le 26/11/2026. Note temporaire, à condenser ou supprimer au prochain grand ménage.

- **Dépôt privé** `atelier-prive` créé par le propriétaire (vide, privé).
- **0.4 faite et fusionnée dans `main`** : tous les réglages du portail dans `config.js` (nom, couleur de
  barre, adresse de base vide, durée de session, ralentissement des essais). Testée dans un navigateur
  automatisé ; la saisie du vrai code n'a pas pu être testée (à vérifier par le propriétaire).
- **Règles changées dans `CLAUDE.md`** (détail dans le fichier) :
  - présentation des réponses : essentiel en bas, résultat en analogie puis vulgarisé, « Court » et « Long » ;
  - validation seulement pour grande étape, autorisation réservée ou personnalisation difficile à changer.
    Texte relu par un sous-agent Opus avant écriture : il a ajouté la vérification avant chaque envoi public,
    les réglages GitHub, les effacements irréversibles, les paiements et les messages à des tiers.
- **Erreur évitée** : après une fusion, la session était restée sur `main` et y a commité une règle. Rien
  n'avait été poussé ; le commit a été rejoué sur la branche de travail. Leçon : après chaque fusion, revenir
  sur la branche de travail et vérifier la branche active avant de commiter.
- **Fil ouvert** : 0.5 (procédures de secours) puis 0.6, en nouvelle session Sonnet.

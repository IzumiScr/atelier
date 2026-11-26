# Archive de session : mise en place (26/11/2026)

Vérifié le 26/11/2026. Note à condenser au prochain grand ménage, puis à supprimer : les décisions
durables sont déjà dans `docs/ETAT.md` et les règles dans `CLAUDE.md`. L'historique git garde tout.

## Habitudes et préférences du propriétaire (observées)

- Il écrit souvent par dictée vocale : les mots peuvent être déformés (nom de domaine, par exemple).
  Confirmer l'orthographe lettre par lettre avant d'agir.
- Il répond par numéros ou par « oui / non » aux propositions.
- « Validé » autorise la création ; « valide et fusionne » autorise aussi la fusion dans `main`. Un
  « valider » seul n'autorise pas la fusion.
- Il préfère la qualité et l'économie à la vitesse : une étape lente et bien posée lui convient.
- Il veut une mémoire à un seul endroit, à jour, sans historique qui s'accumule ; il a accepté qu'elle
  se mette à jour directement dans `main`.
- Il veut un rappel de la liste privée environ toutes les 10 demandes.

## Apprentissages techniques

- Le modèle d'une conversation ne se change que par `/model` et `/effort`, tapés par le propriétaire.
  Seuls les sous-agents peuvent avoir un autre modèle (champs `model` et `effort`).
- Chaque message relit toute la conversation : environ 360 000 jetons ici, contre environ 45 000 au
  démarrage d'une session neuve. Les sessions courtes coûtent beaucoup moins cher.
- Une session lancée par une tâche planifiée n'a pas l'accès en écriture aux dépôts, et l'outil
  `add_repo` n'y existe pas : la tâche doit être recréée depuis la page des tâches planifiées de
  claude.ai, avec le dépôt attaché (à confirmer dans la documentation).
- Depuis une session, les sites en ligne (`github.io`, `pages.dev`) ne sont pas joignables : leur état
  se vérifie par GitHub (déploiements, branches), pas par l'adresse.
- La limite hebdomadaire de l'abonnement était en avertissement le 26/11/2026 (remise à zéro vers le
  02/12/2026).

## Fils ouverts à la fermeture

- 0.3 (niveaux d'accès) : deux questions en attente (code du portail puis code par e-mail ; un seul
  utilisateur ?).
- Dépôt privé `atelier-prive` : à créer par le propriétaire, puis à ajouter à la session.
- Tâche planifiée : en pause ; à recréer avec le dépôt attaché.
- Règle « fin de session » (récupérer, archiver, optimiser) : écrite sur la branche, en attente de
  « valide et fusionne ».
- Domaine `aportatelier.fr` : pas acheté ; compte Cloudflare : pas créé.
- Les informations qui nomment les autres projets du propriétaire sont dans une note de mémoire de
  Claude Code, en attendant `atelier-prive`.

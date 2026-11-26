# Le propriétaire : habitudes et apprentissages techniques

Vérifié le 26/11/2026. Résumé : comment travailler avec lui, et ce que l'on a appris de l'outil pendant
la mise en place. Issu de la note de session du 26/11/2026, condensée au grand ménage.

## Habitudes

- Il écrit souvent par dictée vocale : les mots peuvent être déformés (nom de domaine, par exemple).
  Confirmer l'orthographe lettre par lettre avant d'agir.
- Il répond par numéros ou par « oui / non » aux propositions.
- « Validé » autorise la création ; « valide et fusionne » autorise aussi la fusion dans `main`. Un
  « valider » seul n'autorise pas la fusion.
- Il préfère la qualité et l'économie à la vitesse : une étape lente et bien posée lui convient.
- Il veut une mémoire à un seul endroit, à jour, sans historique qui s'accumule ; il a accepté qu'elle
  se mette à jour directement dans `main`.
- Il veut des étapes pas à pas, depuis le téléphone, pour ce qu'il doit faire lui-même (dépôt, compte,
  achat).

## Apprentissages techniques

- Le modèle d'une conversation ne se change que par `/model` et `/effort`, tapés par le propriétaire.
  Seuls les sous-agents peuvent avoir un autre modèle (champs `model` et `effort`). Une commande ou une
  compétence personnalisée peut imposer un modèle, pour un seul tour.
- Coût d'une session : chaque message et chaque appel d'outil relit toute la conversation (le cache coûte
  environ un dixième d'un jeton neuf). Fin de la première session : environ 427 000 jetons de contexte
  et 35 millions de jetons relus au cumul, contre environ 45 000 au démarrage d'une session neuve.
  Leviers : sessions courtes ; `/compact` avec consignes (le résumé remplace tout l'historique) ; ne
  pas lire en entier les gros résultats (JSON, pages web, journaux : filtrer ou déléguer à un
  sous-agent) ; après une pause de plus d'une heure le cache est perdu et tout le contexte est réécrit :
  repartir d'une session neuve ou compactée.
- Une session lancée par une tâche planifiée n'a pas l'accès en écriture aux dépôts, et l'outil
  `add_repo` n'y existe pas : la tâche doit être recréée depuis la page des tâches planifiées de
  claude.ai, avec le dépôt attaché (à confirmer dans la documentation).
- Depuis une session, les sites en ligne (`github.io`, `pages.dev`) ne sont pas joignables : leur état
  se vérifie par GitHub (déploiements, branches), pas par l'adresse.
- La limite hebdomadaire de l'abonnement était en avertissement le 26/11/2026 (remise à zéro vers le
  02/12/2026).

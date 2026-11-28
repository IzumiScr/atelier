# Le propriétaire : habitudes et apprentissages techniques

Vérifié le 26/11/2026. Résumé : comment travailler avec lui, et ce que l'on a appris de l'outil pendant
la mise en place. Issu de la note de session du 26/11/2026, condensée au grand ménage.

## Habitudes

- Il écrit souvent par dictée vocale : les mots peuvent être déformés (nom de domaine, par exemple).
  Confirmer l'orthographe lettre par lettre avant d'agir.
- Il répond par numéros ou par « oui / non » aux propositions.
- Il préfère avancer étape par étape, une demande à la fois (27/11/2026) : une longue demande rend les
  changements difficiles et crée des contradictions.
- Sept propositions de suite l'ont fatigué (27/11/2026) : en donner 2 au plus, les plus utiles, dans l'ordre.
- Il veut plus d'autonomie (27/11/2026) : petites choses faites sans demander ; validation seulement pour
  une grande étape, un paiement, une clé ou un accès, une suppression définitive, un changement de règle.
  Il a suspendu la ligne « modèle et effort conseillés » ; le « résultat en analogie » est retiré pour de
  bon (28/11/2026, règle dans `CLAUDE.md`) ; il garde le « résultat vulgarisé » court et long.
- Quand les validations à chaque modification l'ont fatigué (26/11/2026), il a demandé de n'en garder
  que pour les grandes étapes et les autorisations : règle dans `CLAUDE.md`. Un « oui » par numéro
  autorise exactement ce que la proposition décrit, fusion comprise si elle la nomme.
- Il veut l'essentiel en bas de chaque réponse, collé aux propositions (format dans `CLAUDE.md`).
- Il préfère la qualité et l'économie à la vitesse : une étape lente et bien posée lui convient.
- Il veut une mémoire à un seul endroit, à jour, sans historique qui s'accumule ; il a accepté qu'elle
  se mette à jour directement dans `main`.
- Il veut des étapes pas à pas, depuis le téléphone, pour ce qu'il doit faire lui-même (dépôt, compte,
  achat).
- Une session = un projet : une session Atelier n'a que le dépôt `atelier` (plus `atelier-prive` quand
  il existera), jamais les dépôts privés des autres projets. Raisons : coût (chaque `CLAUDE.md` est relu à
  chaque message), consignes qui se contredisent, risque de fuite privé vers public, écriture par erreur.

## Apprentissages techniques

- Après une fusion dans `main`, revenir tout de suite sur la branche de travail, puis vérifier la branche
  active avant chaque commit (sinon un changement de règle peut être commité sur `main` par erreur).

- Le modèle d'une conversation ne se change que par `/model` et `/effort`, tapés par le propriétaire, une
  commande par message (suivie de texte, elle n'est pas reconnue). Un autre modèle peut aider : un
  sous-agent (champs `model` et `effort`), ou le conseiller (`/advisor`), qui relit toute la conversation.
  Une commande ou une compétence personnalisée peut imposer un modèle, pour un seul tour. `/clear` repart
  d'une conversation vide dans la même session ; `/resume` rouvre l'ancienne.
- Coût d'une session : chaque message et chaque appel d'outil relit toute la conversation (le cache coûte
  environ un dixième d'un jeton neuf). Fin de la première session : environ 427 000 jetons de contexte
  et 35 millions de jetons relus au cumul, contre environ 45 000 au démarrage d'une session neuve. La
  fenêtre est d'un million de jetons ; la conversation n'est résumée d'office que vers 900 000 (réglages
  de la session, 26/11/2026). Leviers : sessions courtes ; `/compact` avec consignes (le résumé remplace
  tout l'historique) ; ne pas lire en entier les gros résultats (JSON, pages web, journaux : filtrer ou
  déléguer à un sous-agent) ; après une pause de plus d'une heure le cache est perdu et tout le contexte
  est réécrit : repartir d'une session neuve ou compactée.
- Une session lancée par une tâche planifiée n'a pas l'accès en écriture aux dépôts, et l'outil
  `add_repo` n'y existe pas : la tâche doit être recréée depuis la page des tâches planifiées de
  claude.ai, avec le dépôt attaché (à confirmer dans la documentation).
- Depuis une session, les sites en ligne (`github.io`, `pages.dev`) ne sont pas joignables : leur état
  se vérifie par GitHub (déploiements, branches), pas par l'adresse.
- La limite hebdomadaire de l'abonnement était en avertissement le 26/11/2026 (remise à zéro vers le
  02/12/2026).
- Fable 5.2 (vérifié dans la documentation officielle le 26/11/2026) : 8 $ / 40 $ par million de jetons
  lus / écrits, soit 2 fois Opus 5.5. Sur le forfait Pro, il n'est pas inclus : crédits payants dès le
  premier message, prépayés, avec plafond mensuel possible (Réglages, Usage). L'effort le plus bas
  s'appelle `low`. Ne l'utiliser que si Opus à effort élevé ne suffit pas, jamais dans une longue
  session. Choix : `/model fable`.

# Atelier

Portail personnel : une page noire où s'ouvriront plusieurs fenêtres (Atlas OSINT, Religions, Voyage Japon, site d'entreprise, appartement, fiche technique 3D, Claude, Copilot…).

## Étape 1 (ce dépôt aujourd'hui)
- Page noire, pensée d'abord pour smartphone Android.
- Barrière d'accès : code d'accès **ou** lien secret (le code voyage après le `#` de l'adresse, il n'est jamais envoyé au serveur et il est effacé de la barre d'adresse dès l'ouverture).
- L'appareil reste déverrouillé 30 jours ; le cadenas en haut à droite reverrouille.
- Installable sur l'écran d'accueil Android (menu ⋮ › « Ajouter à l'écran d'accueil »).

## Page d'accueil des projets
Une fois la porte ouverte, l'Atelier affiche une carte par projet (Appartement, Atlas OSINT, site laser, Voyage Japon…) avec un bouton « Ouvrir le site » quand il est en ligne et « Voir sur GitHub ».
Pour ajouter ou modifier un projet : éditer `projets.js` (un bloc par projet), directement depuis GitHub sur le téléphone.

## Limite à connaître
Le site est **statique** : le contrôle du code se fait dans le navigateur. C'est une barrière légère (elle arrête les curieux et les moteurs de recherche), **pas** une vraie sécurité. Ne rien mettre de confidentiel dans ce dépôt : aucune clé, aucun mot de passe, aucune donnée privée. Les données restent dans OneDrive / les dépôts privés.

Le dépôt ne contient que l'**empreinte** du code (PBKDF2-SHA256, 300 000 itérations), pas le code lui-même.

## Changer le code
1. Ouvrir `outils/empreinte.html` (en local ou sur le site).
2. Saisir le nouveau code (long : 3–4 mots).
3. Copier les trois lignes obtenues dans `config.js`. Tous les appareils devront ressaisir le code.

## Publication
Settings › Pages › Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.

// RÉGLAGES DE L'ATELIER : le seul fichier à modifier pour changer le fonctionnement du portail.
// Ce fichier est public : il ne contient PAS le code d'accès, seulement son empreinte.
//
// Liste des réglages :
//   nom                  Nom affiché sur le portail et dans l'onglet du navigateur.
//   couleurBarre         Couleur de la barre du navigateur sur téléphone (ex. "#000000").
//   adresseBase          Adresse du portail (ex. "https://aportatelier.fr"). Laisser "" tant que le
//                        domaine n'est pas acheté ; elle servira aux adresses des applis (étape 1 et 2).
//   dureeSessionJours    Durée pendant laquelle un appareil reste déverrouillé (en jours).
//   ralentissementMs     Attente après un mauvais code, multipliée par le nombre d'échecs (en ms).
//   ralentissementMaxMs  Attente maximale entre deux essais (en ms).
//   sel, iterations, empreinte
//                        Barrière d'accès. Pour changer le code : ouvrir outils/empreinte.html,
//                        puis remplacer ces trois valeurs.
//
// Deux endroits restent à modifier à la main si besoin, car le navigateur les lit avant ce fichier :
// manifest.webmanifest (nom et couleur de l'appli installée) et style.css (couleurs et apparence).
window.ATELIER_CONFIG = {
  nom: "Atelier",
  couleurBarre: "#000000",
  adresseBase: "",
  dureeSessionJours: 30,
  ralentissementMs: 400,
  ralentissementMaxMs: 4000,
  sel: "1c2d4a7d0f4efa63075abebe4c3bdcd0",
  iterations: 300000,
  empreinte: "3af1218606e38d48b41d0fc2e4f4f642f43b4a24d006cf02afc3a146d1578acb"
};

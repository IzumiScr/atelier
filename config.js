// Configuration publique de la barrière d'accès.
// Ce fichier ne contient PAS le code d'accès, seulement son empreinte (PBKDF2-SHA256).
// Pour changer le code : ouvrir outils/empreinte.html, puis remplacer les valeurs ci-dessous.
window.ATELIER_CONFIG = {
  sel: "1c2d4a7d0f4efa63075abebe4c3bdcd0",
  iterations: 300000,
  empreinte: "3af1218606e38d48b41d0fc2e4f4f642f43b4a24d006cf02afc3a146d1578acb",
  // Durée pendant laquelle l'appareil reste déverrouillé (jours).
  dureeSessionJours: 30
};

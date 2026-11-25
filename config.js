// Configuration publique de la barrière d'accès.
// Ce fichier ne contient PAS le code d'accès, seulement son empreinte (PBKDF2-SHA256).
// Pour changer le code : ouvrir outils/empreinte.html, puis remplacer les valeurs ci-dessous.
window.ATELIER_CONFIG = {
  sel: "5a244d99f672d5177df94cee5ef219bd",
  iterations: 300000,
  empreinte: "1173b1d5f40560e739042af52ea556085623f158eaaa96e88df2fd8de3ac4a87",
  // Durée pendant laquelle l'appareil reste déverrouillé (jours).
  dureeSessionJours: 30
};

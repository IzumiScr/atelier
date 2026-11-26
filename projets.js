// Liste des projets affichés sur la page d'accueil de l'Atelier.
// Pour ajouter ou modifier un projet : copier un bloc { ... } et changer les valeurs.
//   site   : adresse du site en ligne (laisser "" s'il n'est pas encore publié)
//   depot  : adresse du dépôt GitHub
//   etat   : "en-ligne", "en-cours" ou "a-venir" (couleur de la pastille)
// Ne rien mettre de confidentiel ici : ce fichier est public.
window.ATELIER_PROJETS = [
  {
    nom: "Appartement d'Achères",
    description: "Aménagement en 3D du 2 pièces, avec l'historique avant / après de chaque modification.",
    site: "https://izumiscr.github.io/appartement-acheres/",
    depot: "https://github.com/IzumiScr/appartement-acheres",
    etat: "en-ligne",
    note: "Site en ligne"
  },
  {
    nom: "Atlas OSINT",
    description: "Atelier de recherche en sources ouvertes, traçable et vérifiable, avec une toile 3D.",
    site: "",
    depot: "https://github.com/IzumiScr/atlas-osint",
    etat: "en-cours",
    note: "Version 0.1 · mise en ligne Cloudflare à faire"
  },
  {
    nom: "Site décapage laser",
    description: "Site de l'entreprise de nettoyage et décapage laser (78, Paris, Île-de-France) et demande de devis.",
    site: "",
    depot: "https://github.com/IzumiScr/site-decapage-laser",
    etat: "a-venir",
    note: "Cahier des charges prêt · site à construire"
  },
  {
    nom: "Voyage au Japon",
    description: "Album photo et souvenirs du voyage au Japon en 2025.",
    site: "",
    depot: "https://github.com/IzumiScr/Voyage-Japon",
    etat: "a-venir",
    note: "Dépôt créé · album à construire"
  },
  {
    nom: "Atelier",
    description: "Ce portail : la porte d'entrée vers tous les projets.",
    site: "",
    depot: "https://github.com/IzumiScr/atelier",
    etat: "en-ligne",
    note: "Vous êtes ici"
  }
];

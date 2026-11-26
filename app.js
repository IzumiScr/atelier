(() => {
  "use strict";
  const CFG = window.ATELIER_CONFIG;
  const CLE = "atelier.session";
  const $ = (id) => document.getElementById(id);

  // --- Réglages d'affichage (config.js) ---
  if (CFG.nom) {
    document.title = CFG.nom;
    document.querySelectorAll("[data-nom]").forEach((el) => { el.textContent = CFG.nom; });
  }
  if (CFG.couleurBarre) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", CFG.couleurBarre);
  }

  // --- Empreinte PBKDF2 (Web Crypto) ---
  const hexVersOctets = (h) => new Uint8Array(h.match(/../g).map((x) => parseInt(x, 16)));
  const octetsVersHex = (b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
  async function empreinte(code) {
    const cle = await crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits(
      { name: "PBKDF2", hash: "SHA-256", salt: hexVersOctets(CFG.sel), iterations: CFG.iterations }, cle, 256);
    return octetsVersHex(bits);
  }
  const normaliser = (c) => c.trim().toLowerCase();

  // --- Session locale (cet appareil) ---
  function sessionValide() {
    try {
      const s = JSON.parse(localStorage.getItem(CLE) || "null");
      return !!s && s.e === CFG.empreinte && s.exp > Date.now();
    } catch { return false; }
  }
  function ouvrirSession() {
    try {
      localStorage.setItem(CLE, JSON.stringify({ e: CFG.empreinte, exp: Date.now() + CFG.dureeSessionJours * 864e5 }));
    } catch { /* navigation privée : l'accès vaut pour cet onglet seulement */ }
  }
  function fermerSession() { try { localStorage.removeItem(CLE); } catch {} }

  // --- Page d'accueil : cartes des projets (liste dans projets.js) ---
  const ETATS = { "en-ligne": "En ligne", "en-cours": "En cours", "a-venir": "À venir" };
  const lienSur = (url) => /^https:\/\//.test(url || "") ? url : "";
  function creerLien(url, texte, classe) {
    const a = document.createElement("a");
    a.href = url; a.textContent = texte; a.className = classe;
    a.target = "_blank"; a.rel = "noopener noreferrer";
    return a;
  }
  function afficherProjets() {
    const liste = $("liste-projets");
    if (!liste || liste.childElementCount) return;
    for (const p of window.ATELIER_PROJETS || []) {
      const li = document.createElement("li");
      li.className = "projet";
      const tete = document.createElement("div");
      tete.className = "projet-tete";
      const h = document.createElement("h2");
      h.textContent = p.nom;
      const pastille = document.createElement("span");
      const etat = ETATS[p.etat] ? p.etat : "a-venir";
      pastille.className = "pastille " + etat;
      pastille.textContent = ETATS[etat];
      tete.append(h, pastille);
      const desc = document.createElement("p");
      desc.className = "projet-desc";
      desc.textContent = p.description || "";
      li.append(tete, desc);
      if (p.note) {
        const note = document.createElement("p");
        note.className = "projet-note";
        note.textContent = p.note;
        li.append(note);
      }
      const actions = document.createElement("div");
      actions.className = "projet-actions";
      if (lienSur(p.site)) actions.append(creerLien(p.site, "Ouvrir le site", "btn-principal"));
      if (lienSur(p.depot)) actions.append(creerLien(p.depot, "Voir sur GitHub", "btn-second"));
      li.append(actions);
      liste.append(li);
    }
  }

  // --- Affichage ---
  let minuterieHorloge;
  function afficherBureau() {
    $("porte").hidden = true;
    $("bureau").hidden = false;
    const tic = () => { $("horloge").textContent = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); };
    tic(); clearInterval(minuterieHorloge); minuterieHorloge = setInterval(tic, 15000);
    afficherProjets();
    document.dispatchEvent(new CustomEvent("atelier:pret")); // point d'accroche pour l'étape 2
  }
  function afficherPorte(msg = "") {
    $("bureau").hidden = true;
    $("porte").hidden = false;
    $("message").textContent = msg;
    $("code").value = "";
  }

  async function essayer(code) {
    if (!code) return false;
    return (await empreinte(normaliser(code))) === CFG.empreinte;
  }

  // --- Lien secret : le code voyage dans le fragment (#...), jamais envoyé au serveur ---
  async function depuisLien() {
    const frag = decodeURIComponent(location.hash.slice(1));
    if (!frag) return false;
    history.replaceState(null, "", location.pathname + location.search); // on efface le code de la barre d'adresse
    const code = frag.startsWith("code=") ? frag.slice(5) : frag;
    if (await essayer(code)) { ouvrirSession(); return true; }
    return false;
  }

  let echecs = 0;
  $("form-acces").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const btn = $("btn-entrer");
    btn.disabled = true; $("message").textContent = "";
    const ok = await essayer($("code").value);
    if (ok) { echecs = 0; ouvrirSession(); afficherBureau(); }
    else {
      echecs++;
      const carte = $("form-acces");
      carte.classList.remove("secoue"); void carte.offsetWidth; carte.classList.add("secoue");
      $("message").textContent = "Code incorrect.";
      $("code").select();
      await new Promise((r) => setTimeout(r, Math.min(CFG.ralentissementMs * echecs, CFG.ralentissementMaxMs))); // ralentit les essais en série
    }
    btn.disabled = false;
  });

  $("btn-verrou").addEventListener("click", () => { fermerSession(); afficherPorte(); });

  (async () => {
    if (!window.crypto?.subtle) { afficherPorte("Ouvrez ce lien en HTTPS (navigateur trop ancien ou page non sécurisée)."); return; }
    if (sessionValide() || (await depuisLien())) afficherBureau();
    else afficherPorte();
  })();
})();

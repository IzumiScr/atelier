// GESTIONNAIRE DE FENÊTRES DE L'ATELIER (étape 2)
// Ouvrir, déplacer, redimensionner, réduire, agrandir et fermer des fenêtres,
// à la souris, au doigt et au clavier.
// Sur un écran étroit (téléphone en portrait), chaque fenêtre prend tout l'écran,
// la barre du bas sert à passer de l'une à l'autre et le bouton « retour » d'Android la réduit.
//
// Pour ouvrir une fenêtre depuis un autre fichier :
//   Atelier.ouvrir("notes")                                     une appli interne (liste APPS ci-dessous)
//   Atelier.ouvrir({ nom: "Exemple", adresse: "https://…" })    une page web dans une fenêtre
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const plan = $("plan"), calque = $("calque"), taches = $("taches"), panneau = $("panneau-lanceur");
  const etroit = window.matchMedia("(max-width: 720px)");
  const TAILLE_MIN = { l: 260, h: 180 };
  const BORD_VISIBLE = 80; // une fenêtre ne peut pas sortir entièrement de l'écran

  // ---------- Applis internes ----------
  const APPS = {
    notes: {
      nom: "Bloc-notes", icone: "📝", unique: true,
      contenu() {
        const zone = document.createElement("textarea");
        zone.className = "app-notes";
        zone.placeholder = "Écrivez ici… (gardé sur cet appareil)";
        zone.spellcheck = true;
        try { zone.value = localStorage.getItem("atelier.notes") || ""; } catch {}
        zone.addEventListener("input", () => { try { localStorage.setItem("atelier.notes", zone.value); } catch {} });
        return zone;
      }
    },
    guide: {
      nom: "Mode d'emploi", icone: "❔", unique: true,
      contenu() {
        const d = document.createElement("div");
        d.className = "app-guide";
        d.innerHTML = `
          <h3>Sur ordinateur ou tablette</h3>
          <ul>
            <li><b>Déplacer</b> : attraper la barre du haut de la fenêtre.</li>
            <li><b>Redimensionner</b> : tirer un bord ou le coin en bas à droite.</li>
            <li><b>Agrandir</b> : bouton ▢ ou double-clic sur la barre du haut.</li>
            <li><b>Clavier</b> : sur la barre du haut, flèches = déplacer, Maj + flèches = redimensionner.</li>
          </ul>
          <h3>Sur téléphone</h3>
          <ul>
            <li>Chaque fenêtre prend tout l'écran.</li>
            <li>La barre du bas liste les fenêtres ouvertes : toucher pour passer de l'une à l'autre.</li>
            <li>Le bouton <b>retour</b> du téléphone, ou <b>–</b>, réduit la fenêtre.</li>
          </ul>
          <h3>Partout</h3>
          <ul>
            <li><b>Applications</b> (en bas) ouvre le lanceur.</li>
            <li>Le cadenas ferme toutes les fenêtres et reverrouille.</li>
          </ul>`;
        return d;
      }
    }
  };

  // Projets publiés (projets.js) : ouverts dans une fenêtre si « ouverture: "fenetre" », sinon dans un onglet.
  const adresseSure = (url) => (/^https:\/\//.test(url || "") ? url : "");
  function projetsEnLigne() {
    return (window.ATELIER_PROJETS || []).filter((p) => adresseSure(p.site || p.adresse));
  }

  // ---------- État ----------
  const fenetres = new Map(); // id -> { el, titre, app, x, y, l, h, reduite, agrandie }
  let compteur = 0, zMax = 10, active = null;

  const dims = () => ({ L: calque.clientWidth, H: calque.clientHeight });
  const borner = (v, min, max) => Math.max(min, Math.min(max, v));

  function appliquerGeometrie(f) {
    const { L, H } = dims();
    f.l = borner(f.l, Math.min(TAILLE_MIN.l, L), L);
    f.h = borner(f.h, Math.min(TAILLE_MIN.h, H), H);
    f.x = borner(f.x, BORD_VISIBLE - f.l, L - BORD_VISIBLE);
    f.y = borner(f.y, 0, H - 44);
    Object.assign(f.el.style, { left: f.x + "px", top: f.y + "px", width: f.l + "px", height: f.h + "px" });
  }

  // ---------- Création d'une fenêtre ----------
  function ouvrir(cible) {
    const app = typeof cible === "string" ? APPS[cible] : cible;
    if (!app) return null;
    if (app.unique) {
      for (const f of fenetres.values()) if (f.app === app) { afficher(f); return f; }
    }
    const id = "f" + ++compteur;
    const el = document.createElement("section");
    el.className = "fenetre";
    el.id = id;
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", app.nom);

    const tete = document.createElement("header");
    tete.className = "fenetre-tete";
    tete.tabIndex = 0;
    tete.title = "Déplacer (glisser) · Agrandir (double-clic)";
    const titre = document.createElement("span");
    titre.className = "fenetre-titre";
    titre.textContent = (app.icone ? app.icone + "  " : "") + app.nom;
    const boutons = document.createElement("span");
    boutons.className = "fenetre-boutons";
    const bouton = (classe, texte, etiquette, action) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "fb " + classe; b.textContent = texte;
      b.title = etiquette; b.setAttribute("aria-label", etiquette);
      b.addEventListener("click", (e) => { e.stopPropagation(); action(); });
      return b;
    };
    const f = { el, app, x: 0, y: 0, l: 0, h: 0, reduite: false, agrandie: false };
    const adresse = adresseSure(app.adresse);
    if (adresse) boutons.append(bouton("fb-onglet", "↗", "Ouvrir dans un onglet", () => window.open(adresse, "_blank", "noopener")));
    boutons.append(
      bouton("fb-reduire", "–", "Réduire", () => reduire(f)),
      bouton("fb-agrandir", "▢", "Agrandir", () => basculerAgrandir(f)),
      bouton("fb-fermer", "×", "Fermer", () => fermer(f))
    );
    tete.append(titre, boutons);

    const corps = document.createElement("div");
    corps.className = "fenetre-corps";
    if (adresse) {
      const cadre = document.createElement("iframe");
      cadre.src = adresse;
      cadre.title = app.nom;
      cadre.loading = "lazy";
      cadre.referrerPolicy = "no-referrer";
      cadre.allow = "clipboard-write; fullscreen";
      const aide = document.createElement("p");
      aide.className = "fenetre-aide";
      aide.textContent = "Page vide ? Certains sites refusent de s'afficher dans une fenêtre : ";
      const lien = document.createElement("a");
      lien.href = adresse; lien.target = "_blank"; lien.rel = "noopener noreferrer";
      lien.textContent = "l'ouvrir dans un onglet";
      aide.append(lien);
      corps.append(cadre, aide);
    } else if (app.contenu) {
      corps.append(app.contenu());
    }
    el.append(tete, corps);

    for (const sens of ["e", "s", "se", "w", "sw"]) {
      const poignee = document.createElement("div");
      poignee.className = "poignee p-" + sens;
      poignee.dataset.sens = sens;
      el.append(poignee);
    }
    calque.append(el);

    // Position de départ : en cascade
    const { L, H } = dims();
    const n = fenetres.size % 8;
    f.l = Math.min(640, L - 48);
    f.h = Math.min(460, H - 48);
    f.x = Math.min(24 + n * 28, Math.max(0, L - f.l));
    f.y = Math.min(16 + n * 28, Math.max(0, H - f.h));
    appliquerGeometrie(f);

    // Chip dans la barre du bas
    f.puce = document.createElement("button");
    f.puce.type = "button";
    f.puce.className = "puce";
    f.puce.textContent = (app.icone ? app.icone + " " : "") + app.nom;
    f.puce.title = app.nom;
    f.puce.addEventListener("click", () => {
      if (!f.reduite && active === f && !etroit.matches) reduire(f);
      else afficher(f);
    });
    taches.append(f.puce);

    brancherGestes(f, tete);
    el.addEventListener("pointerdown", () => devant(f), true);
    el.addEventListener("focusin", () => devant(f));
    fenetres.set(id, f);
    afficher(f);
    return f;
  }

  // ---------- Actions ----------
  function devant(f) {
    if (active === f && f.el.style.zIndex == zMax) return;
    f.el.style.zIndex = ++zMax;
    active = f;
    majApparence();
  }
  function afficher(f) {
    f.reduite = false;
    f.el.hidden = false;
    devant(f);
    if (etroit.matches) entreeHistorique();
    majApparence();
  }
  function reduire(f) {
    f.reduite = true;
    f.el.hidden = true;
    // Téléphone : réduire ramène à l'accueil ; ordinateur : la fenêtre suivante passe devant
    if (active === f) active = etroit.matches ? null : premierVisible();
    majApparence();
  }
  function basculerAgrandir(f) {
    f.agrandie = !f.agrandie;
    f.el.classList.toggle("agrandie", f.agrandie);
    devant(f);
  }
  function fermer(f) {
    f.el.remove();
    f.puce.remove();
    fenetres.delete(f.el.id);
    if (active === f) active = premierVisible();
    majApparence();
  }
  function fermerTout() { for (const f of [...fenetres.values()]) fermer(f); }
  function premierVisible() {
    let meilleur = null;
    for (const f of fenetres.values()) {
      if (!f.reduite && (!meilleur || +f.el.style.zIndex > +meilleur.el.style.zIndex)) meilleur = f;
    }
    return meilleur;
  }
  function majApparence() {
    for (const f of fenetres.values()) {
      const estActive = f === active && !f.reduite;
      f.el.classList.toggle("active", estActive);
      f.puce.classList.toggle("active", estActive);
      f.puce.classList.toggle("reduite", f.reduite);
      f.puce.setAttribute("aria-pressed", String(estActive));
    }
    document.body.classList.toggle("a-fenetres", fenetres.size > 0);
    // Téléphone : une seule fenêtre visible à la fois (celle de devant)
    plan.classList.toggle("fenetre-ouverte", etroit.matches && !!active && !active.reduite);
    if (active) active.puce.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  // ---------- Glisser / redimensionner (souris, doigt, stylet) ----------
  function brancherGestes(f, tete) {
    let geste = null, dernierTap = 0;

    const debut = (e, type, sens) => {
      if (e.button > 0 || etroit.matches || (type === "deplacer" && f.agrandie)) return;
      e.preventDefault();
      devant(f);
      geste = { type, sens, id: e.pointerId, px: e.clientX, py: e.clientY, x: f.x, y: f.y, l: f.l, h: f.h, bouge: false };
      e.currentTarget.setPointerCapture(e.pointerId);
      document.body.classList.add("glisse");
    };
    const mouvement = (e) => {
      if (!geste || e.pointerId !== geste.id) return;
      const dx = e.clientX - geste.px, dy = e.clientY - geste.py;
      if (Math.abs(dx) + Math.abs(dy) > 3) geste.bouge = true;
      if (geste.type === "deplacer") { f.x = geste.x + dx; f.y = geste.y + dy; }
      else {
        const s = geste.sens;
        if (s.includes("e")) f.l = Math.max(TAILLE_MIN.l, geste.l + dx);
        if (s.includes("s")) f.h = Math.max(TAILLE_MIN.h, geste.h + dy);
        if (s.includes("w")) {
          const l = Math.max(TAILLE_MIN.l, geste.l - dx);
          f.x = geste.x + (geste.l - l); f.l = l;
        }
      }
      appliquerGeometrie(f);
    };
    const fin = (e) => {
      if (!geste || e.pointerId !== geste.id) return;
      const tap = geste.type === "deplacer" && !geste.bouge;
      geste = null;
      document.body.classList.remove("glisse");
      if (tap) { // double tape sur la barre = agrandir
        const t = Date.now();
        if (t - dernierTap < 350) { basculerAgrandir(f); dernierTap = 0; } else dernierTap = t;
      }
    };

    tete.addEventListener("pointerdown", (e) => { if (!e.target.closest("button")) debut(e, "deplacer"); });
    for (const p of f.el.querySelectorAll(".poignee")) {
      p.addEventListener("pointerdown", (e) => debut(e, "redim", p.dataset.sens));
      p.addEventListener("pointermove", mouvement);
      p.addEventListener("pointerup", fin);
      p.addEventListener("pointercancel", fin);
    }
    tete.addEventListener("pointermove", mouvement);
    tete.addEventListener("pointerup", fin);
    tete.addEventListener("pointercancel", fin);

    // Clavier : flèches = déplacer, Maj + flèches = redimensionner, Entrée = agrandir
    tete.addEventListener("keydown", (e) => {
      const pas = e.altKey ? 2 : 20;
      const d = { ArrowLeft: [-pas, 0], ArrowRight: [pas, 0], ArrowUp: [0, -pas], ArrowDown: [0, pas] }[e.key];
      if (e.key === "Enter") { e.preventDefault(); basculerAgrandir(f); return; }
      if (e.key === "Escape") { e.preventDefault(); reduire(f); return; }
      if (!d || etroit.matches || f.agrandie) return;
      e.preventDefault();
      if (e.shiftKey) { f.l += d[0]; f.h += d[1]; } else { f.x += d[0]; f.y += d[1]; }
      appliquerGeometrie(f);
    });
  }

  // ---------- Bouton « retour » d'Android (mode téléphone) ----------
  function entreeHistorique() {
    if (!(history.state && history.state.atelierFenetre)) history.pushState({ atelierFenetre: true }, "");
  }
  window.addEventListener("popstate", () => {
    if (etroit.matches && active && !active.reduite) reduire(active);
  });

  // ---------- Lanceur ----------
  function construireLanceur() {
    const grille = $("grille-apps");
    grille.textContent = "";
    const ajouter = (icone, nom, sousTitre, action) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "tuile";
      const i = document.createElement("span"); i.className = "tuile-icone"; i.textContent = icone;
      const n = document.createElement("span"); n.className = "tuile-nom"; n.textContent = nom;
      b.append(i, n);
      if (sousTitre) { const s = document.createElement("span"); s.className = "tuile-sous"; s.textContent = sousTitre; b.append(s); }
      b.addEventListener("click", () => { fermerLanceur(); action(); });
      grille.append(b);
    };
    for (const [id, app] of Object.entries(APPS)) ajouter(app.icone, app.nom, "", () => ouvrir(id));
    for (const p of projetsEnLigne()) {
      const adresse = adresseSure(p.site || p.adresse);
      const dansFenetre = p.ouverture === "fenetre";
      ajouter(p.icone || "🗂️", p.nom, dansFenetre ? "" : "Onglet",
        () => dansFenetre ? ouvrir({ nom: p.nom, icone: p.icone, adresse }) : window.open(adresse, "_blank", "noopener"));
    }
  }
  function ouvrirLanceur() {
    construireLanceur();
    panneau.hidden = false;
    $("btn-lanceur").setAttribute("aria-expanded", "true");
    const premier = panneau.querySelector(".tuile");
    if (premier) premier.focus({ preventScroll: true });
  }
  function fermerLanceur() {
    panneau.hidden = true;
    $("btn-lanceur").setAttribute("aria-expanded", "false");
  }
  $("btn-lanceur").addEventListener("click", () => (panneau.hidden ? ouvrirLanceur() : fermerLanceur()));
  panneau.addEventListener("click", (e) => { if (e.target === panneau) fermerLanceur(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panneau.hidden) fermerLanceur(); });

  // ---------- Divers ----------
  $("btn-verrou").addEventListener("click", () => { fermerLanceur(); fermerTout(); });
  window.addEventListener("resize", () => { for (const f of fenetres.values()) appliquerGeometrie(f); });
  etroit.addEventListener("change", majApparence);

  window.Atelier = { ouvrir, fermerTout, apps: APPS };
})();

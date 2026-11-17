// Bygger alla sidor på lovisadocs.se från innehall.mjs. Kör: node bygg.mjs
// Resultatet är vanlig statisk HTML i den här mappen:
//   index.html, pr/, copywriting/, content/        (svenska)
//   en/index.html, en/pr/, en/copywriting/, en/content/   (engelska)
//   texter/<artikel>/                               (artiklarna, på svenska)

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";

const k = (await import(pathToFileURL(resolve("innehall.mjs")).href + "?" + Date.now())).default;

const SPRAK = ["sv", "en"];
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const t = (v, L) => (v && typeof v === "object" && !Array.isArray(v) && ("sv" in v || "en" in v) ? v[L] ?? v.sv : v);
const telHref = "tel:+46" + k.telefon.replace(/\D/g, "").replace(/^0/, "");
const fullNamn = `${k.namn.fornamn} ${k.namn.efternamn}`;
const varnaFil = (f) => { if (f && !existsSync(f)) console.warn(`  Saknas: ${f}`); };

const ORD = {
  om: { sv: ["Om", "mig"], en: ["About", "me"], nav: { sv: "Om mig", en: "About" } },
  spar: { sv: ["Ett fokus", "i taget"], en: ["One focus", "at a time"] },
  event: { sv: ["Event & PR"], en: ["Events & PR"], nav: { sv: "Event & PR", en: "Events & PR" } },
  ugc: { sv: ["Content &", "UGC"], en: ["Content &", "UGC"], nav: { sv: "Content", en: "Content" } },
  produkt: { sv: ["Produktfoto"], en: ["Product photography"], nav: { sv: "Produktfoto", en: "Products" } },
  foto: { sv: ["Bakom", "kameran"], en: ["Behind", "the camera"], nav: { sv: "Foto", en: "Photo" } },
  text: { sv: ["Copy"], en: ["Copy"], nav: { sv: "Copywriting", en: "Copywriting" } },
  erfarenhet: { sv: ["Erfarenhet", "hittills"], en: ["Experience", "so far"], nav: { sv: "Erfarenhet", en: "Experience" } },
  utbildning: { sv: ["Utbildning"], en: ["Education"] }, // ingen menylänk (borttagen 2026-11-16)
  kontakt: { sv: ["Hör av", "er!"], en: ["Get in", "touch!"], nav: { sv: "Kontakt", en: "Contact" } },
};
const UI = {
  meny: { sv: "Meny", en: "Menu" },
  hoppa: { sv: "Hoppa till innehållet", en: "Skip to content" },
  annatSprak: { sv: "In English", en: "På svenska" },
  annatSprakKort: { sv: "EN", en: "SV" },
  las: { sv: "Läs texten", en: "Read the piece" },
  pasvenska: { sv: "", en: " (in Swedish)" },
  nyFlik: { sv: "(öppnas i ny flik)", en: "(opens in a new tab)" },
  ring: { sv: "Ring", en: "Call" },
  telefon: { sv: "Telefon", en: "Phone" },
  plats: { sv: "Plats", en: "Location" },
  mejl: { sv: "Mejl", en: "Email" },
  ort: { sv: "Baserad i", en: "Based in" },
  sparText: {
    sv: "Söker du någon för en viss roll? Här är samma portfölj med fokus på ett område i taget.",
    en: "Hiring for a specific role? Here is the same portfolio, focused on one area at a time.",
  },
};

// ---------- sökvägar ----------
const sidPath = (L, mapp) => (L === "en" ? "en/" : "") + (mapp ? mapp + "/" : "");
const djup = (p) => p.split("/").filter(Boolean).length;
const upp = (d) => "../".repeat(d) || "./";

// ---------- byggstenar ----------
const rubrik = (del, L, tag = "h2") => {
  return `<${tag} class="rubrik">${esc(ORD[del][L].join(" "))}</${tag}>`;
};
const stycken = (arr) => arr.map((p) => `<p>${esc(p)}</p>`).join("\n        ");

function delOm(sida, L, r) {
  return `
    <section class="del del-om" id="om" aria-labelledby="om-r">
      <div class="om-grid">
        <div id="om-r">${rubrik("om", L)}</div>
        <div class="om-text">
          <p class="ingress">${esc(t(sida.ingress, L))}</p>
          ${stycken(t(k.om, L))}
        </div>
      </div>
    </section>`;
}

function delSpar(sida, L, r) {
  const spar = ["pr", "copywriting", "content"].map((id, i) => {
    const s = k.sidor[id];
    const b = s.sparBild;
    if (b) varnaFil(b.bild);
    return `
          <li class="spar-kort spar-kort-${i + 1}"><a class="spar-lank" href="${r}${sidPath(L, s.mapp)}">
            ${b ? `<span class="spar-bild"><img src="${r}${b.bild}" alt="${esc(t(b.alt, L))}" loading="lazy"${b.position ? ` style="object-position:${b.position}"` : ""}></span>` : ""}
            <span class="spar-text">
              <span class="spar-titel">${esc(t(s.titel, L))}</span>
              <span class="spar-adress">lovisadocs.se/${s.mapp}</span>
            </span>
          </a></li>`;
  }).join("");
  return `
    <section class="del del-spar" aria-labelledby="spar-r">
      <div id="spar-r">${rubrik("spar", L)}</div>
      <ul class="spar-lista" role="list">${spar}
      </ul>
    </section>`;
}

function delEvent(sida, L, r) {
  const [forsta, ...resten] = t(k.event.text, L);
  const media = (k.event.bilder || []).map((b, i) => {
    if (b.video) {
      varnaFil(b.video); varnaFil(b.poster);
      return `<figure class="event-media event-media-${i + 1}"><video${b.position ? ` style="object-position:${b.position}"` : ""} src="${r}${b.video}" poster="${r}${b.poster}" autoplay muted loop playsinline preload="metadata" aria-label="${esc(t(b.alt, L))}" data-loop></video></figure>`;
    }
    varnaFil(b.bild);
    return `<figure class="event-media event-media-${i + 1}"><img src="${r}${b.bild}" alt="${esc(t(b.alt, L))}" loading="lazy"></figure>`;
  }).join("\n        ");
  const fakta = (k.event.fakta || []).map((f) => `<div><dt class="etikett">${esc(t(f.rubrik, L))}</dt><dd>${esc(t(f.text, L))}</dd></div>`).join("");
  return `
    <section class="del del-event" id="event" aria-labelledby="event-r">
      <div id="event-r">${rubrik("event", L)}</div>
      <!-- Texten (k.event.text, kund, fakta) är borttagen 2026-11-16; finns kvar i innehall.mjs. -->
      ${media ? `<div class="event-kollage">
        ${media}
      </div>` : ""}
      ${fakta ? `<dl class="event-fakta">${fakta}</dl>` : ""}
    </section>`;
}

const LJUD_IKON = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" fill="currentColor"/><g class="ljud-av" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m16 9.5 5 5M21 9.5l-5 5"/></g><g class="ljud-pa" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></g></svg>`;

function delUgc(sida, L, r, sidId) {
  // Videorna ligger i en vågrät remsa som man bläddrar i (svep, skrollhjul eller knapparna).
  // "sidor" på en video begränsar var den visas (t.ex. bara content-sidan).
  const videor = k.ugc.filter((u) => !u.sidor || u.sidor.includes(sidId));
  const kort = videor.map((u) => {
    varnaFil(u.video); varnaFil(u.poster);
    return `
          <li class="ugc-kort"><figure class="ugc-ram">
            <div class="ugc-video">
              <video src="${r}${u.video}" poster="${r}${u.poster}" muted playsinline preload="none" data-auto aria-label="${esc(u.kund)}, ${esc(t(u.typ, L))}"></video>
              <button class="ugc-ljud" type="button" aria-pressed="false" aria-label="${L === "en" ? "Sound on" : "Slå på ljud"}" data-pa="${L === "en" ? "Sound on" : "Slå på ljud"}" data-av="${L === "en" ? "Sound off" : "Stäng av ljud"}">${LJUD_IKON}</button>
            </div>
            <figcaption><span class="ugc-kund">${esc(u.kund)}</span><span class="ugc-typ">${esc(t(u.typ, L))}</span></figcaption>
          </figure></li>`;
  }).join("");
  const knapp = (riktning, text, d) => `<button class="ugc-knapp" type="button" data-riktning="${riktning}" aria-label="${text}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  return `
    <section class="del del-band del-ugc" id="content" aria-labelledby="ugc-r">
      <div class="inre">
        <div class="ugc-topp">
          <div id="ugc-r">${rubrik("ugc", L)}</div>
          <div class="ugc-knappar">${knapp("-1", L === "en" ? "Previous videos" : "Föregående videor", "M15 5l-7 7 7 7")}${knapp("1", L === "en" ? "Next videos" : "Nästa videor", "M9 5l7 7-7 7")}</div>
        </div>
        <ul class="ugc-remsa" role="list" tabindex="0" aria-label="${L === "en" ? "Videos, scroll sideways" : "Videor, bläddra i sidled"}">${kort}
        </ul>
      </div>
    </section>`;
}

function delProdukt(sida, L, r) {
  const p = k.produkt;
  const bilder = p.bilder.map((b, i) => {
    varnaFil(b.bild);
    return `<figure class="produkt-bild produkt-bild-${i + 1}"><img src="${r}${b.bild}" alt="${esc(t(b.alt, L))}" loading="lazy"></figure>`;
  }).join("\n        ");
  return `
    <section class="del del-produkt" id="produkt" aria-labelledby="produkt-r">
      <div class="produkt-topp">
        <div id="produkt-r">${rubrik("produkt", L)}</div>
        <p class="produkt-kund">${L === "en" ? "For" : "För"} ${esc(p.kund)}</p>
      </div>
      <div class="produkt-grid">
        ${bilder}
      </div>
    </section>`;
}

function delFoto(sida, L, r) {
  // Bilderna läggs två och två i kolumner: [stående, liggande], [liggande, stående], ...
  // Rubriken ligger inne i första bilden.
  const fig = (b, i) => {
    varnaFil(b.bild);
    const rubrikHtml = i === 0 ? `<h2 class="foto-rubrik" id="foto-r">${esc(ORD.foto[L].join(" "))}</h2>` : "";
    return `<figure class="foto foto-${b.storlek}${i === 0 ? " foto-forsta" : ""}"><img src="${r}${b.bild}" alt="${esc(t(b.alt, L))}" loading="lazy">${rubrikHtml}</figure>`;
  };
  const kol = [];
  for (let i = 0; i < k.foto.length; i += 2) kol.push(`<div class="foto-kol">${k.foto.slice(i, i + 2).map((b, j) => fig(b, i + j)).join("")}</div>`);
  return `
    <section class="del del-foto" id="foto" aria-labelledby="foto-r">
      <div class="foto-grid">
        ${kol.join("\n        ")}
      </div>
    </section>`;
}

function delText(sida, L, r, sidId) {
  const urval = k.texter.filter((x) => sidId === "start" || x.spar.includes(sidId));
  const stora = urval.filter((x) => x.sida);
  const lankar = urval.filter((x) => !x.sida);
  const fran = sidId === "start" ? "" : `?fran=${sidId}`;
  const storaHtml = stora.map((x) => {
    varnaFil(x.bild);
    return `
        <a class="text-stor" href="${r}texter/${x.sida}/${fran}">
          <img src="${r}${x.bild}" alt="" loading="lazy">
          <span class="etikett">${esc(t(x.kund, L))}, ${esc(t(x.typ, L)).toLowerCase()}</span>
          <span class="text-titel">${esc(x.titel)}</span>
          <span class="text-las">${esc(t(UI.las, L))}${esc(t(UI.pasvenska, L))}</span>
        </a>`;
  }).join("");
  const lankHtml = lankar.map((x, i) => {
    const domän = new URL(x.lank).hostname.replace(/^www\./, "");
    if (x.bild) varnaFil(x.bild);
    return `
          <li class="text-kort text-kort-${i + 1}"><a class="text-forhand" href="${esc(x.lank)}" target="_blank" rel="noopener">
            ${x.bild ? `<span class="text-forhand-bild"><img src="${r}${x.bild}" alt="" loading="lazy"${x.position ? ` style="object-position:${x.position}"` : ""}><span class="text-doman">${esc(domän)}</span></span>` : `<span class="text-doman">${esc(domän)}</span>`}
            <span class="etikett">${esc(t(x.kund, L))}, ${esc(t(x.typ, L)).toLowerCase()}</span>
            <span class="text-titel">${esc(x.titel)}</span>
            ${x.utdrag ? `<span class="text-utdrag">${esc(t(x.utdrag, L))}</span>` : ""}
            <span class="text-las">${esc(t(UI.las, L))}${esc(t(UI.pasvenska, L))}<span class="dold"> ${esc(t(UI.nyFlik, L))}</span></span>
          </a></li>`;
  }).join("");
  return `
    <section class="del del-band del-text" id="text" aria-labelledby="text-r">
      <div class="inre">
        <div id="text-r">${rubrik("text", L)}</div>
        ${stora.length ? `<div class="text-stora">${storaHtml}\n        </div>` : ""}
        ${lankar.length ? `<ul class="text-kort-lista" role="list">${lankHtml}\n        </ul>` : ""}
      </div>
    </section>`;
}

function delErfarenhet(sida, L) {
  const rader = k.erfarenhet.map((e) => `
        <li class="cv-rad">
          <p class="cv-tid">${esc(t(e.tid, L))}</p>
          <div>
            <h3 class="cv-var">${esc(t(e.var, L))}</h3>
            <ul class="cv-punkter">${t(e.punkter, L).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
        </li>`).join("");
  return `
    <section class="del del-cv" id="erfarenhet" aria-labelledby="cv-r">
      <div id="cv-r">${rubrik("erfarenhet", L)}</div>
      <ol class="cv-lista" role="list">${rader}
      </ol>
    </section>`;
}

function delUtbildning(sida, L, r) {
  const [examen, ...ovrigt] = k.utbildning;
  const fler = ovrigt.map((u) => `<li>${esc(t(u.titel, L))}${t(u.var, L) ? `, ${esc(t(u.var, L))}` : ""}</li>`).join("");
  if (examen.logga) varnaFil(examen.logga);
  if (examen.sigill) varnaFil(examen.sigill);
  return `
    <section class="del del-utb" id="utbildning" aria-labelledby="utb-r">
      <div id="utb-r">${rubrik("utbildning", L)}</div>
      <div class="utb-kort">
        ${examen.logga ? `<img class="utb-logga" src="${r}${examen.logga}" alt="${esc(t(examen.var, L))}" width="94" height="75">` : ""}
        <div class="utb-examen">
          <p class="utb-titel">${esc(t(examen.titel, L))}</p>
          ${examen.amne ? `<p class="utb-amne">${L === "en" ? "in" : "inom"} ${esc(t(examen.amne, L))}</p>` : ""}
          <p class="utb-var">${esc(t(examen.var, L))}</p>
          ${fler ? `<ul class="utb-fler" role="list">${fler}</ul>` : ""}
        </div>
        ${examen.sigill ? `<img class="utb-sigill" src="${r}${examen.sigill}" alt="" aria-hidden="true">` : ""}
      </div>
    </section>`;
}

// "Hör av er!" ligger i foten (id="kontakt"); delen själv ger bara luft under sista avsnittet.
function delKontakt() { return ""; }

const DELAR = { produkt: delProdukt, om: delOm, spar: delSpar, event: delEvent, ugc: delUgc, foto: delFoto, text: delText, erfarenhet: delErfarenhet, utbildning: delUtbildning, kontakt: delKontakt };
const ANKARE = { produkt: "produkt", om: "om", event: "event", ugc: "content", foto: "foto", text: "text", erfarenhet: "erfarenhet", utbildning: "utbildning", kontakt: "kontakt" };

// ---------- fot ----------
const LINKEDIN_IKON = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>`;
function fot(L, slutLank, r, sparLankar = "") {
  if (k.fotBild) varnaFil(k.fotBild);
  return `
  <footer class="fot" id="kontakt" aria-labelledby="kontakt-r">
    <div class="fot-topp">
      ${k.fotBild ? `<div class="fot-ram"><img class="fot-bild" src="${r}${k.fotBild}" alt="${esc(fullNamn)}" loading="lazy" width="1120" height="1500"></div>` : ""}
      <div class="fot-innehall">
    <h2 class="fot-rubrik" id="kontakt-r">${esc(ORD.kontakt[L].join(" "))}</h2>
    <ul class="fot-kontakt" role="list">
      <li><span class="fot-etikett">${esc(t(UI.telefon, L))}</span><a href="${telHref}">${esc(k.telefon)}</a></li>
      <li><span class="fot-etikett">${esc(t(UI.plats, L))}</span><span>${esc(k.ort)}</span></li>
      <li><span class="fot-etikett">${esc(t(UI.mejl, L))}</span><a href="mailto:${k.epost}">${esc(k.epost)}</a></li>
    </ul>
      </div>
    </div>
    <div class="fot-rad">
      <p>© ${new Date().getFullYear()} ${esc(fullNamn)}</p>
      ${sparLankar}
      <div class="fot-hoger">
        ${slutLank}
        <a class="fot-ikon" href="${esc(k.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn ${esc(t(UI.nyFlik, L))}">${LINKEDIN_IKON}</a>
      </div>
    </div>
  </footer>`;
}

// ---------- sidmall ----------
function huvud({ L, titel, beskrivning, r, sokbar, kanonisk, alternativ }) {
  return `<!doctype html>
<html lang="${L}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(titel)}</title>
  <meta name="description" content="${esc(beskrivning)}">
  ${sokbar ? "" : '<meta name="robots" content="noindex, nofollow">'}
  ${kanonisk ? `<link rel="canonical" href="${kanonisk}">` : ""}
  ${(alternativ || []).map((a) => `<link rel="alternate" hreflang="${a.L}" href="${a.href}">`).join("\n  ")}
  <meta property="og:title" content="${esc(titel)}">
  <meta property="og:description" content="${esc(beskrivning)}">
  <meta property="og:image" content="${k.doman}/${k.portratt}">
  <meta name="theme-color" content="#e6e3df">
  <link rel="icon" href="${r}media/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${r}fonts/schibsted.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${r}style.css">
</head>`;
}

function byggSida(sidId, L) {
  const sida = k.sidor[sidId];
  const path = sidPath(L, sida.mapp);
  const r = upp(djup(path));
  const annat = L === "sv" ? "en" : "sv";
  const hem = `${r}${path}`;
  const navDelar = sida.delar.filter((d) => ORD[d].nav && d !== "kontakt");
  const nav = navDelar.map((d) => `<a href="#${ANKARE[d]}">${esc(t(ORD[d].nav, L))}</a>`).join("");
  const titel = sidId === "start" ? `${fullNamn} – ${t(sida.roll, L)}` : `${fullNamn} – ${t(sida.titel, L)}`;
  const sokbar = sidId === "start" && !k.forhandsvisning;

  const html = `${huvud({
    L, titel, beskrivning: t(sida.ingress, L), r, sokbar,
    kanonisk: sokbar ? `${k.doman}/${path}` : "",
    alternativ: sokbar ? SPRAK.map((x) => ({ L: x, href: `${k.doman}/${sidPath(x, sida.mapp)}` })) : [],
  })}
<body>
  <a class="hoppa" href="#innehall">${esc(t(UI.hoppa, L))}</a>
  <header class="topp">
    <a class="logga" href="${hem}">${esc(k.namn.fornamn)}<span class="logga-efternamn"> ${esc(k.namn.efternamn)}</span></a>
    <nav class="topp-nav" aria-label="${esc(t(UI.meny, L))}">${nav}</nav>
    <div class="topp-hoger">
      <a class="topp-kontakt" href="#kontakt">${esc(t(ORD.kontakt.nav, L))}</a>
      <a class="sprak" href="${r}${sidPath(annat, sida.mapp)}" hreflang="${annat}" lang="${annat}" aria-label="${esc(t(UI.annatSprak, L))}">${t(UI.annatSprakKort, L)}</a>
    </div>
  </header>

  <main id="innehall">
    <section class="hero">
      <h1 class="hero-namn">
        <span class="hero-fornamn">${esc(k.namn.fornamn)}</span>
        <span class="hero-efternamn">${esc(k.namn.efternamn)}</span>
      </h1>
      <figure class="hero-bild"><img src="${r}${k.portratt}" alt="" width="1001" height="1500"></figure>
      <div class="hero-fot">
        <p class="hero-roll">${esc(t(sida.roll, L))}</p>
        <p class="hero-lankar"><a href="mailto:${k.epost}">${esc(k.epost)}</a><a href="${telHref}">${esc(k.telefon)}</a></p>
      </div>
    </section>
${sida.delar.map((d) => DELAR[d](sida, L, r, sidId)).join("\n")}
  </main>

${fot(L, `<a href="${r}${sidPath(annat, sida.mapp)}" hreflang="${annat}" lang="${annat}">${esc(t(UI.annatSprak, L))}</a>`, r,
  // Bara startsidan länkar till spåren; spårsidorna länkar aldrig till varandra.
  sidId === "start" ? `<nav class="fot-spar" aria-label="${L === "en" ? "Focused versions" : "Fokuserade versioner"}">${["pr", "copywriting", "content"].map((id) => `<a href="${r}${sidPath(L, k.sidor[id].mapp)}">/${k.sidor[id].mapp}</a>`).join("")}</nav>` : "")}
  <script src="${r}app.js" defer></script>
</body>
</html>
`;
  skriv(path + "index.html", html);
}

function byggArtikel(slug) {
  const a = k.artiklar[slug];
  const path = `texter/${slug}/`;
  const r = upp(djup(path));
  const meta = k.texter.find((x) => x.sida === slug);
  const byline = meta && t(meta.typ, "sv").includes("foto") ? "Text och foto" : "Text";
  varnaFil(a.toppbild.bild); varnaFil(a.pdf);
  const kropp = a.stycken.map((s) => {
    if (typeof s === "object") {
      varnaFil(s.bild);
      return `<figure class="art-bild${s.stor === "hog" ? " art-bild-hog" : ""}"><img src="${r}${s.bild}" alt="${esc(s.alt)}" loading="lazy"></figure>`;
    }
    return s.startsWith("– ") ? `<p class="art-citat">${esc(s)}</p>` : `<p>${esc(s)}</p>`;
  }).join("\n      ");
  const html = `${huvud({ L: "sv", titel: `${a.rubrik} – ${fullNamn}`, beskrivning: a.ingress.at(-1), r, sokbar: !k.forhandsvisning })}
<body class="artikel-sida">
  <a class="hoppa" href="#innehall">Hoppa till texten</a>
  <header class="topp">
    <a class="logga" href="${r}" data-tillbaka>${esc(k.namn.fornamn)}<span class="logga-efternamn"> ${esc(k.namn.efternamn)}</span></a>
    <div class="topp-hoger"><a class="topp-kontakt" href="${r}" data-tillbaka>Tillbaka till portföljen</a></div>
  </header>
  <main id="innehall">
    <article class="artikel">
      <header class="art-huvud">
        <p class="etikett">${esc(t(meta?.kund, "sv") || "")}</p>
        <h1 class="art-rubrik">${esc(a.rubrik)}</h1>
        ${a.ingress.map((p) => `<p class="art-ingress">${esc(p)}</p>`).join("\n        ")}
        <p class="art-byline">${byline}: ${esc(fullNamn)}</p>
      </header>
      <figure class="art-topp"><img src="${r}${a.toppbild.bild}" alt="${esc(a.toppbild.alt)}"></figure>
      <div class="art-kropp">
      ${kropp}
      </div>
      <p class="art-pdf"><a href="${r}${a.pdf}" target="_blank" rel="noopener">Öppna originalet som PDF</a></p>
    </article>
  </main>
${fot("sv", `<a href="${r}" data-tillbaka>Tillbaka till portföljen</a>`, r)}
  <script src="${r}app.js" defer></script>
</body>
</html>
`;
  skriv(path + "index.html", html);
}

function skriv(fil, html) {
  mkdirSync(dirname(resolve(fil)), { recursive: true });
  writeFileSync(fil, html.replace(/\n\s*\n\s*\n/g, "\n\n"));
  console.log("  " + fil);
}

varnaFil(k.portratt);
for (const L of SPRAK) for (const id of Object.keys(k.sidor)) byggSida(id, L);
for (const slug of Object.keys(k.artiklar)) byggArtikel(slug);
console.log(k.forhandsvisning ? "Klart (förhandsvisning: dold för Google)." : "Klart.");

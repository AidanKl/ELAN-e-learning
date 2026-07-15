/* ============================================================
   ELAN E-learning — eigen beheeromgeving (geen Decap, geen OAuth)
   - Leest en schrijft de bestanden in content/ via de GitHub-API
   - Opslaan vereist eenmalig een "beheersleutel" (fine-grained
     GitHub-token met alleen Contents: Read/write op deze repo)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Instellingen: repo automatisch afleiden ----------
     Op GitHub Pages is de URL <eigenaar>.github.io/<repo>/...
     Werkt dat niet (eigen domein), dan vraagt de app er eenmalig om. */
  var CFG_KEY = "elan-admin-cfg";
  var TOKEN_KEY = "elan-admin-token";

  function detectConfig() {
    var opgeslagen = null;
    try { opgeslagen = JSON.parse(localStorage.getItem(CFG_KEY)); } catch (e) {}
    if (opgeslagen && opgeslagen.owner && opgeslagen.repo) return opgeslagen;
    var host = location.hostname;             // bv. aidan.github.io
    var pad = location.pathname.split("/").filter(Boolean); // ["elan-elearning","admin"]
    if (host.endsWith(".github.io") && pad.length >= 1) {
      return { owner: host.split(".")[0], repo: pad[0], branch: "main" };
    }
    return null;
  }

  var CFG = detectConfig();
  if (!CFG) {
    var owner = prompt("Repo-eigenaar (GitHub-gebruikersnaam of organisatie):") || "";
    var repo  = prompt("Repo-naam:") || "";
    CFG = { owner: owner.trim(), repo: repo.trim(), branch: "main" };
    localStorage.setItem(CFG_KEY, JSON.stringify(CFG));
  }

  var API = "https://api.github.com/repos/" + CFG.owner + "/" + CFG.repo;

  function token() { return localStorage.getItem(TOKEN_KEY) || ""; }

  /* ---------- Hulpfuncties ---------- */
  function el(tag, attrs, kinderen) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") e.className = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.slice(0,2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    });
    (kinderen || []).forEach(function (kind) { e.appendChild(kind); });
    return e;
  }
  function toast(tekst, soort) {
    var t = el("div", { class: "toast " + (soort || "info"), text: tekst });
    document.getElementById("melding").appendChild(t);
    setTimeout(function () { t.remove(); }, 5000);
  }
  function b64decode(s) {
    return decodeURIComponent(escape(atob(s.replace(/\n/g, ""))));
  }
  function b64encode(s) {
    return btoa(unescape(encodeURIComponent(s)));
  }

  /* ---------- GitHub-API ---------- */
  function apiGet(pad) {
    var headers = { "Accept": "application/vnd.github+json" };
    if (token()) headers["Authorization"] = "Bearer " + token();
    return fetch(API + pad + (pad.indexOf("?") < 0 ? "?" : "&") + "ref=" + CFG.branch,
                 { headers: headers })
      .then(function (r) {
        if (!r.ok) throw new Error("GitHub gaf " + r.status + " op " + pad);
        return r.json();
      });
  }
  function apiPut(pad, bericht, inhoud, sha) {
    if (!token()) return Promise.reject(new Error("GEEN_SLEUTEL"));
    var body = { message: bericht, content: b64encode(inhoud), branch: CFG.branch };
    if (sha) body.sha = sha;
    return fetch(API + "/contents/" + pad, {
      method: "PUT",
      headers: { "Accept": "application/vnd.github+json",
                 "Authorization": "Bearer " + token(),
                 "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(function (r) {
      if (r.status === 401 || r.status === 403)
        throw new Error("De beheersleutel is ongeldig of heeft geen schrijfrechten.");
      if (r.status === 409)
        throw new Error("Conflict: het bestand is intussen elders gewijzigd. Herlaad en probeer opnieuw.");
      if (!r.ok) throw new Error("Opslaan mislukte (GitHub " + r.status + ").");
      return r.json();
    });
  }

  /* ---------- Frontmatter lezen/schrijven ---------- */
  function parseBestand(ruw) {
    if (ruw.slice(0, 3) !== "---") return { data: {}, body: ruw };
    var regels = ruw.split("\n");
    var einde = -1;
    for (var i = 1; i < regels.length; i++) {
      if (regels[i].trim() === "---") { einde = i; break; }
    }
    if (einde < 0) return { data: {}, body: ruw };
    var fm = regels.slice(1, einde).join("\n");
    var body = regels.slice(einde + 1).join("\n").trim();
    return { data: jsyaml.load(fm) || {}, body: body };
  }
  function maakBestand(data) {
    var yamlTekst = jsyaml.dump(data, { lineWidth: 100, noRefs: true });
    return "---\n" + yamlTekst + "---\n";
  }

  /* ---------- Toestand ---------- */
  var modules = [];   // {pad, naam, sha, data}
  var naslag  = [];
  var actief  = null; // huidige selectie

  /* ---------- Lijsten laden ---------- */
  function laadAlles() {
    Promise.all([
      apiGet("/contents/content/modules"),
      apiGet("/contents/content/naslag")
    ]).then(function (res) {
      modules = res[0].filter(function (f) { return f.name.slice(-3) === ".md"; });
      naslag  = res[1].filter(function (f) { return f.name.slice(-3) === ".md"; });
      toonLijsten();
    }).catch(function (e) {
      toast("Kon de inhoud niet laden: " + e.message, "fout");
    });
  }

  function toonLijsten() {
    var lm = document.getElementById("lijst-modules");
    var ln = document.getElementById("lijst-naslag");
    lm.innerHTML = ""; ln.innerHTML = "";
    modules.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
    modules.forEach(function (f) {
      lm.appendChild(el("button", { text: f.name.replace(".md", ""),
        onclick: function (ev) { kies(f, "module", ev.target); } }));
    });
    naslag.forEach(function (f) {
      ln.appendChild(el("button", { text: f.name.replace(".md", ""),
        onclick: function (ev) { kies(f, "naslag", ev.target); } }));
    });
  }

  function kies(f, soort, knop) {
    document.querySelectorAll("#lijst button").forEach(function (b) {
      b.classList.remove("actief");
    });
    if (knop) knop.classList.add("actief");
    apiGet("/contents/" + f.path).then(function (info) {
      var geparsed = parseBestand(b64decode(info.content));
      actief = { pad: f.path, sha: info.sha, soort: soort,
                 data: geparsed.data, body: geparsed.body,
                 naam: f.name };
      if (soort === "module") toonModuleEditor();
      else toonNaslagEditor();
    }).catch(function (e) { toast(e.message, "fout"); });
  }

  /* ---------- Module-editor ---------- */
  var BLOKTYPES = [
    ["tekst", "Tekst"], ["tip", "Tip (groen)"], ["letop", "Let op (geel)"],
    ["valkuil", "Valkuil (rood)"], ["todo", "Nog aan te vullen"],
    ["code", "Codeblok"], ["inklap", "Inklapbaar"], ["tabel", "Tabel"]
  ];

  function veld(labelTekst, invoerEl, hint) {
    var kinderen = [el("label", { text: labelTekst }), invoerEl];
    if (hint) kinderen.push(el("div", { class: "hint", text: hint }));
    return el("div", { class: "veld" }, kinderen);
  }
  function tekstInvoer(waarde) {
    var i = el("input", { type: "text" }); i.value = waarde || ""; return i;
  }
  function tekstVak(waarde, mono) {
    var t = el("textarea", { class: mono ? "code" : "" });
    t.value = waarde || ""; return t;
  }

  function lijstVeld(items, placeholder) {
    // bewerkbare lijst van tekstregels (benodigdheden / naslag)
    var houder = el("div", {});
    function rij(waarde) {
      var i = el("input", { type: "text", placeholder: placeholder || "" });
      i.value = waarde || "";
      var weg = el("button", { class: "icoonknop rood", text: "✕", type: "button",
        onclick: function () { r.remove(); } });
      var r = el("div", { class: "lijstveld-item" }, [i, weg]);
      return r;
    }
    (items || []).forEach(function (w) { houder.appendChild(rij(w)); });
    var plus = el("button", { class: "icoonknop", text: "+ regel toevoegen", type: "button",
      onclick: function () { houder.insertBefore(rij(""), plus); } });
    houder.appendChild(plus);
    houder.lees = function () {
      return Array.from(houder.querySelectorAll("input"))
        .map(function (i) { return i.value.trim(); })
        .filter(function (v) { return v; });
    };
    return houder;
  }

  function blokKaart(blok) {
    var kaart = el("div", { class: "blok-kaart type-" + (blok.type || "tekst") });
    var typeSel = el("select", {});
    BLOKTYPES.forEach(function (t) {
      var o = el("option", { value: t[0], text: t[1] });
      if (t[0] === blok.type) o.selected = true;
      typeSel.appendChild(o);
    });
    var velden = el("div", {});

    function bouwVelden() {
      velden.innerHTML = "";
      var t = typeSel.value;
      kaart.className = "blok-kaart type-" + t;
      if (t === "tip" || t === "letop" || t === "valkuil" || t === "inklap") {
        velden.appendChild(veld("Kop", kaart._kop = tekstInvoer(blok.kop ||
          { tip: "Tip", letop: "Let op", valkuil: "Valkuil", inklap: "" }[t])));
      }
      if (t === "code") {
        var sel = el("select", {});
        ["text","r","python","sql","bash"].forEach(function (l) {
          var o = el("option", { value: l, text: l });
          if (l === blok.taal) o.selected = true; sel.appendChild(o);
        });
        velden.appendChild(veld("Taal", kaart._taal = sel));
      }
      var mono = (t === "code" || t === "tabel");
      velden.appendChild(veld(t === "tabel" ? "Tabel (Markdown: | kolom | kolom |)" : "Inhoud",
        kaart._inhoud = tekstVak(blok.inhoud, mono)));
    }
    typeSel.addEventListener("change", bouwVelden);

    var omhoog = el("button", { class: "icoonknop", text: "↑", type: "button", title: "Omhoog",
      onclick: function () { var p = kaart.previousElementSibling;
        if (p && p.classList.contains("blok-kaart")) kaart.parentNode.insertBefore(kaart, p); } });
    var omlaag = el("button", { class: "icoonknop", text: "↓", type: "button", title: "Omlaag",
      onclick: function () { var n = kaart.nextElementSibling;
        if (n && n.classList.contains("blok-kaart")) kaart.parentNode.insertBefore(n, kaart); } });
    var weg = el("button", { class: "icoonknop rood", text: "✕ blok", type: "button",
      onclick: function () { if (confirm("Dit blok verwijderen?")) kaart.remove(); } });

    kaart.appendChild(el("div", { class: "blok-kop" },
      [typeSel, el("span", { class: "spacer" }), omhoog, omlaag, weg]));
    kaart.appendChild(velden);
    bouwVelden();

    kaart.lees = function () {
      var t = typeSel.value;
      var uit = { type: t, inhoud: kaart._inhoud.value };
      if (kaart._kop) uit.kop = kaart._kop.value;
      if (t === "code") uit.taal = kaart._taal.value;
      return uit;
    };
    return kaart;
  }

  function subKaart(sub) {
    var kaart = el("div", { class: "sub-kaart" });
    var titelIn = tekstInvoer(sub.subtitel);
    var blokken = el("div", {});
    (sub.blokken || []).forEach(function (b) { blokken.appendChild(blokKaart(b)); });
    var plus = el("button", { class: "icoonknop", text: "+ blok toevoegen", type: "button",
      onclick: function () { blokken.appendChild(blokKaart({ type: "tekst", inhoud: "" })); } });
    var omhoog = el("button", { class: "icoonknop", text: "↑", type: "button", title: "Omhoog",
      onclick: function () { var p = kaart.previousElementSibling;
        if (p && p.classList.contains("sub-kaart")) kaart.parentNode.insertBefore(kaart, p); } });
    var omlaag = el("button", { class: "icoonknop", text: "↓", type: "button", title: "Omlaag",
      onclick: function () { var n = kaart.nextElementSibling;
        if (n && n.classList.contains("sub-kaart")) kaart.parentNode.insertBefore(n, kaart); } });
    var weg = el("button", { class: "icoonknop rood", text: "✕ subhoofdstuk", type: "button",
      onclick: function () { if (confirm("Heel dit subhoofdstuk verwijderen?")) kaart.remove(); } });

    kaart.appendChild(el("div", { class: "blok-kop" },
      [el("strong", { text: "Subhoofdstuk" }), el("span", { class: "spacer" }), omhoog, omlaag, weg]));
    kaart.appendChild(veld("Titel", titelIn));
    kaart.appendChild(blokken);
    kaart.appendChild(plus);

    kaart.lees = function () {
      return { subtitel: titelIn.value,
               blokken: Array.from(blokken.children)
                 .filter(function (c) { return c.lees; })
                 .map(function (c) { return c.lees(); }) };
    };
    return kaart;
  }

  function toonModuleEditor() {
    var d = actief.data;
    var paneel = document.getElementById("editor-paneel");
    document.getElementById("welkom-paneel").style.display = "none";
    paneel.style.display = "block";
    paneel.innerHTML = "";
    paneel.appendChild(el("h2", { text: "Module bewerken — " + actief.naam }));

    var volgorde = tekstInvoer(d.volgorde);
    var menutitel = tekstInvoer(d.menutitel);
    var titel = tekstInvoer(d.titel);
    var balk = el("input", { type: "checkbox" });
    balk.checked = d.toon_balk !== false;
    var intro = tekstVak(d.intro);
    var benodigd = lijstVeld(d.benodigdheden, "bv. Toegang tot het codeboek");
    var naslagVeld = lijstVeld(d.naslag, "bv. **Codeboek** — github.com/elan-dcc/...");

    var rij1 = el("div", { class: "rij" }, [
      veld("Volgorde (00–99)", volgorde, "Bepaalt de plek in het menu"),
      veld("Menutitel", menutitel)
    ]);

    var subs = el("div", {});
    (d.subhoofdstukken || []).forEach(function (s) { subs.appendChild(subKaart(s)); });
    var subPlus = el("button", { class: "breed", text: "+ Subhoofdstuk toevoegen", type: "button",
      onclick: function () { subs.appendChild(subKaart({ subtitel: "", blokken: [] })); } });

    var balkVeld = el("div", { class: "veld" }, [
      el("label", { text: "Fase-voortgangsbalk tonen?" }), balk ]);

    var opslaan = el("button", { class: "primair", text: "Opslaan & publiceren",
      onclick: function () { slaModuleOp(opslaan); } });

    paneel.appendChild(rij1);
    paneel.appendChild(veld("Paginatitel", titel));
    paneel.appendChild(balkVeld);
    paneel.appendChild(veld("Introductie — 'Wat gebeurt er in deze fase?'", intro));
    paneel.appendChild(veld("'Wat heb je nodig?' (lijst)", benodigd));
    paneel.appendChild(el("h2", { text: "Subhoofdstukken" }));
    paneel.appendChild(subs);
    paneel.appendChild(subPlus);
    paneel.appendChild(veld("Naslag bij deze fase (lijst)", naslagVeld));
    paneel.appendChild(el("div", { class: "actiebalk" }, [opslaan,
      el("span", { class: "hint", text: "Na opslaan herbouwt de site zichzelf (1–2 min)." })]));

    paneel._lees = function () {
      return {
        volgorde: volgorde.value.trim(),
        menutitel: menutitel.value,
        titel: titel.value,
        toon_balk: balk.checked,
        intro: intro.value,
        benodigdheden: benodigd.lees(),
        subhoofdstukken: Array.from(subs.children)
          .filter(function (c) { return c.lees; })
          .map(function (c) { return c.lees(); }),
        naslag: naslagVeld.lees()
      };
    };
  }

  function slaModuleOp(knop) {
    var data = document.getElementById("editor-paneel")._lees();
    schrijf(actief.pad, maakBestand(data),
            "Module bijgewerkt: " + actief.naam, knop);
  }

  /* ---------- Naslag-editor ---------- */
  function toonNaslagEditor() {
    var d = actief.data;
    var paneel = document.getElementById("editor-paneel");
    document.getElementById("welkom-paneel").style.display = "none";
    paneel.style.display = "block";
    paneel.innerHTML = "";
    paneel.appendChild(el("h2", { text: "Naslagpagina bewerken — " + actief.naam }));

    var titel = tekstInvoer(d.titel);
    var slug = tekstInvoer(d.slug);
    var body = tekstVak(d.body || actief.body, false);
    body.style.minHeight = "420px";

    var opslaan = el("button", { class: "primair", text: "Opslaan & publiceren",
      onclick: function () {
        var uit = { titel: titel.value, slug: slug.value, body: body.value };
        schrijf(actief.pad, maakBestand(uit),
                "Naslag bijgewerkt: " + actief.naam, opslaan);
      } });

    paneel.appendChild(el("div", { class: "rij" }, [
      veld("Paginatitel", titel), veld("Bestandsnaam (slug)", slug)]));
    paneel.appendChild(veld("Inhoud (Markdown; !!!-blokken en tabellen toegestaan)", body));
    paneel.appendChild(el("div", { class: "actiebalk" }, [opslaan,
      el("span", { class: "hint", text: "Na opslaan herbouwt de site zichzelf (1–2 min)." })]));
  }

  /* ---------- Nieuwe module ---------- */
  document.getElementById("btn-nieuw").addEventListener("click", function () {
    var slug = prompt("Bestandsnaam voor de nieuwe module (bv. 09-nieuwe-fase):");
    if (!slug) return;
    slug = slug.trim().replace(/\.md$/, "").replace(/[^a-z0-9\-]/gi, "-").toLowerCase();
    var volgorde = (slug.match(/^(\d{2})/) || [null, "99"])[1];
    var sjabloon = {
      volgorde: volgorde, menutitel: "Nieuwe module", titel: "Nieuwe module",
      toon_balk: true, intro: "", benodigdheden: [],
      subhoofdstukken: [{ subtitel: "Eerste subhoofdstuk",
        blokken: [{ type: "tekst", inhoud: "Schrijf hier de inhoud." }] }],
      naslag: []
    };
    schrijf("content/modules/" + slug + ".md", maakBestand(sjabloon),
            "Nieuwe module: " + slug, null, true);
  });

  /* ---------- Opslaan (gedeeld) ---------- */
  function schrijf(pad, inhoud, bericht, knop, isNieuw) {
    if (!token()) { vraagSleutel(); return; }
    if (knop) { knop.disabled = true; knop.textContent = "Bezig met opslaan…"; }
    apiPut(pad, bericht, inhoud, isNieuw ? null : actief.sha)
      .then(function (res) {
        toast("Opgeslagen. De site wordt nu automatisch herbouwd.", "ok");
        if (isNieuw) { laadAlles(); }
        else if (res.content && res.content.sha) { actief.sha = res.content.sha; }
      })
      .catch(function (e) {
        if (e.message === "GEEN_SLEUTEL") vraagSleutel();
        else toast(e.message, "fout");
      })
      .finally(function () {
        if (knop) { knop.disabled = false; knop.textContent = "Opslaan & publiceren"; }
      });
  }

  /* ---------- Beheersleutel ---------- */
  function vraagSleutel() {
    var uitleg =
      "Om te kunnen opslaan is eenmalig een beheersleutel nodig.\n\n" +
      "Zo maak je die (2 minuten):\n" +
      "1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens\n" +
      "2. Generate new token; kies bij Repository access alléén deze repo (" + CFG.owner + "/" + CFG.repo + ")\n" +
      "3. Bij Permissions → Repository permissions → Contents: Read and write\n" +
      "4. Genereer en kopieer de sleutel, en plak hem hieronder.\n\n" +
      "De sleutel wordt alleen in deze browser bewaard.";
    var sleutel = prompt(uitleg, "");
    if (sleutel && sleutel.trim()) {
      localStorage.setItem(TOKEN_KEY, sleutel.trim());
      toast("Beheersleutel bewaard. Probeer nu opnieuw op te slaan.", "ok");
      sleutelStatus();
    }
  }
  document.getElementById("btn-sleutel").addEventListener("click", function () {
    if (token() && confirm("Er is al een beheersleutel bewaard.\nOK = sleutel vervangen, Annuleren = sleutel verwijderen.")) {
      vraagSleutel();
    } else if (token()) {
      localStorage.removeItem(TOKEN_KEY);
      toast("Beheersleutel verwijderd uit deze browser.", "info");
      sleutelStatus();
    } else {
      vraagSleutel();
    }
  });
  function sleutelStatus() {
    var s = document.getElementById("sleutel-status");
    s.textContent = token()
      ? "✓ Er is een beheersleutel bewaard in deze browser — opslaan is mogelijk."
      : "ℹ Er is nog geen beheersleutel ingesteld. Bekijken kan; bij de eerste keer opslaan wordt erom gevraagd.";
  }

  /* ---------- Start ---------- */
  sleutelStatus();
  laadAlles();
})();

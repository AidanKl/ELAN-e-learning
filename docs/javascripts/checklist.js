/* ============================================================
   Checklist-poort: de "Volgende fase"-knop wordt pas actief
   als alle vakjes zijn aangevinkt. Voortgang wordt in de
   browser onthouden (localStorage), per module.
   De checklist-items komen uit het bestand checklist-data.js.
   ============================================================ */
(function () {
  function init() {
    var poort = document.querySelector(".checklist-poort");
    if (!poort) return;

    var volgorde = poort.getAttribute("data-volgorde");
    var data = (window.ELAN_CHECKLISTS && window.ELAN_CHECKLISTS[volgorde]) || null;

    // Vind de "Volgende fase"-knop op de pagina (laatste primaire knop)
    var knoppen = document.querySelectorAll("a.md-button--primary");
    var volgendeKnop = null;
    knoppen.forEach(function (k) {
      if (/volgende|terug naar welkom/i.test(k.textContent)) volgendeKnop = k;
    });

    if (!data || !data.items || data.items.length === 0) {
      // Geen checklist gedefinieerd voor deze module: niets blokkeren.
      poort.remove();
      return;
    }

    var storageKey = "elan-checklist-" + volgorde;
    var opgeslagen = {};
    try { opgeslagen = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch (e) {}

    // Bouw de checklist-kaart
    var kaart = document.createElement("div");
    kaart.className = "checklist-kaart";
    var titel = document.createElement("h3");
    titel.textContent = data.titel || "Voordat je verdergaat";
    kaart.appendChild(titel);

    var uitleg = document.createElement("p");
    uitleg.innerHTML = "Vink aan wat je hebt gelezen of bekeken. De knop " +
      "<strong>“Volgende fase”</strong> wordt daarna actief.";
    kaart.appendChild(uitleg);

    var lijst = document.createElement("div");
    lijst.className = "checklist-items";

    var vakjes = [];
    data.items.forEach(function (tekst, i) {
      var id = storageKey + "-" + i;
      var rij = document.createElement("label");
      rij.className = "checklist-item";
      var box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !!opgeslagen[i];
      box.addEventListener("change", function () { sync(); });
      var span = document.createElement("span");
      span.innerHTML = tekst;
      rij.appendChild(box);
      rij.appendChild(span);
      lijst.appendChild(rij);
      vakjes.push(box);
    });
    kaart.appendChild(lijst);
    poort.appendChild(kaart);

    function sync() {
      var alles = true;
      var staat = {};
      vakjes.forEach(function (b, i) { staat[i] = b.checked; if (!b.checked) alles = false; });
      try { localStorage.setItem(storageKey, JSON.stringify(staat)); } catch (e) {}
      if (volgendeKnop) {
        if (alles) {
          volgendeKnop.classList.remove("knop-vergrendeld");
          volgendeKnop.removeAttribute("aria-disabled");
          volgendeKnop.title = "";
        } else {
          volgendeKnop.classList.add("knop-vergrendeld");
          volgendeKnop.setAttribute("aria-disabled", "true");
          volgendeKnop.title = "Vink eerst alle punten af";
        }
      }
    }

    // Blokkeer klikken zolang vergrendeld
    if (volgendeKnop) {
      volgendeKnop.addEventListener("click", function (e) {
        if (volgendeKnop.classList.contains("knop-vergrendeld")) {
          e.preventDefault();
          kaart.classList.add("schud");
          setTimeout(function () { kaart.classList.remove("schud"); }, 500);
        }
      });
    }
    sync();
  }

  // MkDocs Material laadt pagina's dynamisch; init bij elke navigatie.
  if (window.document$) {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();

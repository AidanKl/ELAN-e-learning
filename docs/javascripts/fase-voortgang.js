/* ============================================================
   Fase-voortgang: kleurt de stepper bovenaan elke module.

   Bron van de status is de checklist-poort onderaan elke fase
   (zie checklist.js). Die bewaart per fase in localStorage:
       elan-checklist-05  ->  {"0":true,"1":false,...}
   Dit script telt die vinkjes en zet per stap een klasse:
       af          alle punten afgevinkt
       bezig       een deel afgevinkt
       (geen)      nog niets afgevinkt of geen checklist

   Let op: dit script moet ná checklist-data.js worden geladen
   (zie de volgorde in extra_javascript in mkdocs.yml).
   ============================================================ */
(function () {

  function statusVan(volgorde) {
    var data = (window.ELAN_CHECKLISTS && window.ELAN_CHECKLISTS[volgorde]) || null;
    if (!data || !data.items || data.items.length === 0) return "";

    var opgeslagen = {};
    try {
      opgeslagen = JSON.parse(localStorage.getItem("elan-checklist-" + volgorde)) || {};
    } catch (e) { opgeslagen = {}; }

    var aantal = 0;
    for (var i = 0; i < data.items.length; i++) {
      if (opgeslagen[i]) aantal++;
    }
    if (aantal === 0) return "";
    return aantal === data.items.length ? "af" : "bezig";
  }

  function ververs() {
    var balk = document.querySelector(".fase-balk");
    if (!balk) return;

    var afgerond = 0, metChecklist = 0;

    balk.querySelectorAll(".fb-stap").forEach(function (stap) {
      var volgorde = stap.getAttribute("data-volgorde");
      stap.classList.remove("af", "bezig");
      var status = statusVan(volgorde);
      if (status) stap.classList.add(status);

      var data = (window.ELAN_CHECKLISTS && window.ELAN_CHECKLISTS[volgorde]) || null;
      if (data && data.items && data.items.length) {
        metChecklist++;
        if (status === "af") afgerond++;
      }

      // Toegankelijkheid: status ook in tekst, niet alleen in kleur.
      var naam = stap.querySelector(".fb-label");
      var label = naam ? naam.textContent : volgorde;
      stap.setAttribute("title",
        label + " — " + (status === "af" ? "afgerond"
                        : status === "bezig" ? "deels afgerond"
                        : "nog niet afgerond"));
    });

    var teller = balk.parentNode.querySelector(".fase-teller");
    if (!teller && metChecklist) {
      teller = document.createElement("p");
      teller.className = "fase-teller";
      balk.parentNode.insertBefore(teller, balk.nextSibling);
    }
    if (teller) {
      teller.textContent = afgerond + " van " + metChecklist + " fasen afgerond";
    }
  }

  // Eén keer registreren, niet bij elke paginanavigatie opnieuw:
  // vink je onderaan de pagina iets aan, dan werkt de balk meteen bij.
  document.addEventListener("change", function (e) {
    if (e.target && e.target.closest && e.target.closest(".checklist-item")) {
      setTimeout(ververs, 0);
    }
  });

  function init() {
    ververs();
  }

  // MkDocs Material laadt pagina's dynamisch; init bij elke navigatie.
  if (window.document$) {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();

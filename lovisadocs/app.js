// Artikelsidorna: länken "Tillbaka" går till spåret man kom ifrån (?fran=copywriting),
// så att en spårsida aldrig leder vidare till de andra spåren.
(function () {
  var fran = new URLSearchParams(location.search).get("fran");
  if (!fran || !/^(pr|copywriting|content)$/.test(fran)) return;
  document.querySelectorAll("[data-tillbaka]").forEach(function (a) {
    a.setAttribute("href", a.getAttribute("href") + fran + "/");
  });
})();

// Bara en video spelar åt gången.
// (Tysta loopar, data-loop, räknas inte.)
// (Tysta loopar, data-loop, och tysta autovideor, data-auto, räknas inte.)
document.addEventListener("play", function (e) {
  var v0 = e.target;
  if (v0.hasAttribute("data-loop") || (v0.hasAttribute("data-auto") && v0.muted)) return;
  document.querySelectorAll("video:not([data-loop])").forEach(function (v) {
    if (v === v0) return;
    if (v.hasAttribute("data-auto")) { v.muted = true; synkaLjud(v); } else v.pause();
  });
}, true);

function synkaLjud(v) {
  var b = v.parentNode.querySelector(".ugc-ljud");
  if (!b) return;
  b.setAttribute("aria-pressed", String(!v.muted));
  b.setAttribute("aria-label", v.muted ? b.dataset.pa : b.dataset.av);
}

// UGC-videorna spelas en i taget, från vänster: när en tar slut börjar nästa
// (och remsan bläddrar fram den om den inte syns). Allt pausar när avsnittet
// är utanför bild. Klick på en video spelar just den; ljudknappen slår på ljud,
// och ljudet följer med till nästa video. Den som vill slippa rörelse eller
// sparar data får vanliga kontroller i stället.
document.querySelectorAll(".ugc-remsa").forEach(function (remsa) {
  var videor = Array.prototype.slice.call(remsa.querySelectorAll("video[data-auto]"));
  if (!videor.length) return;
  var lugn = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var spara = navigator.connection && navigator.connection.saveData;
  if (lugn || spara || !("IntersectionObserver" in window)) {
    videor.forEach(function (v) { v.controls = true; });
    return;
  }
  var nu = 0, synlig = false;

  function visa(v) {
    var kort = v.closest(".ugc-kort"), r = remsa.getBoundingClientRect(), k = kort.getBoundingClientRect();
    if (k.left < r.left - 2 || k.right > r.right + 2) remsa.scrollBy({ left: k.left - r.left, behavior: "smooth" });
  }
  function spela(i) {
    var ljud = !videor[nu].muted; // ljudet följer med till nästa video
    videor.forEach(function (v, j) {
      v.closest(".ugc-kort").toggleAttribute("data-spelar", j === i);
      if (j !== i) { v.pause(); v.muted = true; synkaLjud(v); }
    });
    nu = i;
    var v = videor[i];
    v.preload = "auto";
    v.muted = !ljud; synkaLjud(v);
    if (v.ended) v.currentTime = 0;
    visa(v);
    var lov = v.play();
    if (lov && lov.catch) lov.catch(function () { v.muted = true; synkaLjud(v); v.play().catch(function () {}); });
  }

  new IntersectionObserver(function (poster) {
    synlig = poster[0].isIntersecting;
    if (synlig) spela(nu); else videor[nu].pause();
  }, { threshold: 0.35 }).observe(remsa);

  videor.forEach(function (v, i) {
    v.loop = false;
    v.addEventListener("ended", function () { if (i === nu) spela((i + 1) % videor.length); });
    v.addEventListener("click", function () {
      if (i === nu && !v.paused) v.pause(); else spela(i);
    });
    var b = v.parentNode.querySelector(".ugc-ljud");
    if (b) b.addEventListener("click", function () {
      var pa = i !== nu ? true : v.muted; // ljud på en annan video = slå på där
      nu = i; v.muted = !pa;
      spela(i);
    });
  });
});

// Den som vill slippa rörelse får stillbilden i stället för loopen.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[data-loop]").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); });
}

// Videoremsan: knapparna bläddrar ett kort i taget och syns bara när allt inte ryms.
document.querySelectorAll(".del-ugc").forEach(function (del) {
  var remsa = del.querySelector(".ugc-remsa");
  if (!remsa) return;
  var knappar = del.querySelectorAll(".ugc-knapp");
  function uppdatera() {
    var max = remsa.scrollWidth - remsa.clientWidth;
    del.toggleAttribute("data-skrollar", max > 4);
    knappar[0].disabled = remsa.scrollLeft <= 4;
    knappar[1].disabled = remsa.scrollLeft >= max - 4;
  }
  knappar.forEach(function (k) {
    k.addEventListener("click", function () {
      var kort = remsa.querySelector(".ugc-kort");
      var steg = kort ? kort.getBoundingClientRect().width + parseFloat(getComputedStyle(remsa).columnGap || 0) : remsa.clientWidth * 0.8;
      remsa.scrollBy({ left: steg * Number(k.dataset.riktning), behavior: "smooth" });
    });
  });
  remsa.addEventListener("scroll", uppdatera, { passive: true });
  window.addEventListener("resize", uppdatera);
  uppdatera();
});

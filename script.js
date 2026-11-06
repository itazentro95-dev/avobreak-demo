/* AvoBreak, i18n (FR default, EN toggle) + depth engine */
(function(){
"use strict";
document.documentElement.classList.add("js");

var I18N = {
fr:{
"meta.title":"AvoBreak : bar à avocat, Eaux-Vives, Genève",
"top.addr":"Rue Adrien-Lachenal 6, Eaux-Vives",
"top.hours":"Du lundi au vendredi, 10 h 30 à 14 h 00",
"nav.carte":"La carte","nav.images":"En images","nav.rituel":"Le rituel","nav.visite":"Visite",

"hero.t1":"L'avocat,","hero.t2":"en éventail.",
"hero.sub":"Salades, poke bowls et toasts à l'avocat, faits maison, le midi seulement.",
"hero.cta1":"Voir la carte","hero.cta2":"Appeler la cuisine",
"hero.press":"Sélectionné par Genève Tourisme dans « Manger sain à Genève »",
"hero.ticket1":"Midi seulement","hero.ticket2":"10 h 30 à 14 h 00, en semaine",
"hero.imgAlt":"Avocat tranché en éventail sur une assiette en céramique, à côté d'un toast au levain",
"strip.1b":"En semaine","strip.1s":"le midi seulement",
"strip.2b":"Fait maison","strip.2s":"« healthy homemade food »",
"strip.3b":"Terrasse","strip.3s":"au soleil, aux Eaux-Vives",
"strip.4b":"Genève Tourisme","strip.4s":"sélection « Manger sain »",
"carte.title":"Cinq assiettes, un fruit.",
"carte.lede":"La maison construit tout autour de l'avocat. Voici ce que sa propre carte, et Genève Tourisme, racontent d'elle.",
"dish.1t":"Avocado toast","dish.1d":"La signature : l'avocat en éventail sur toast. Coloré, frais, Genève Tourisme le dit « très Instagram ».","dish.1tag":"La signature",
"dish.2t":"Avocado brunch","dish.2d":"Le brunch de la maison, construit autour de l'avocat, pour les midis qui prennent leur temps.","dish.2tag":"Le brunch",
"dish.3t":"Tataki de thon","dish.3d":"Le thon juste saisi, à la japonaise, la touche fraîche de la carte.","dish.3tag":"Le saisi",
"dish.4t":"Tuna bowl","dish.4d":"Le poke bowl au thon de la maison, frais, coloré, complet.","dish.4tag":"Le bowl",
"dish.5t":"Tofu bowl","dish.5d":"Le bowl végétal au tofu, la réponse de la maison aux envies légères.","dish.5tag":"Le végétal",
"dish.6t":"Salades","dish.6d":"Les salades du midi, composées fraîches au comptoir.","dish.6tag":"Le frais",
"carte.note":"La carte vit au rythme des jours : cette page ne montre pas de prix, car la maison n'en publie pas en ligne. Un plat vous fait envie ? Appelez avant de passer.",
"gal.title":"Le vert, en profondeur.",
"gal.1a":"Avocado toast avec œuf poché, radis et graines","gal.1c":"L'avocado toast, en gros plan",
"gal.2a":"Poke bowl au tataki de thon, avocat et edamame","gal.2c":"Le tuna bowl et son tataki",
"gal.3a":"Bowl végétal au tofu grillé, avocat, quinoa et patate douce","gal.3c":"Le tofu bowl, tout végétal",
"gal.4a":"Au comptoir : les mains composent un bowl de salade fraîche","gal.4c":"Au comptoir, fait maison",
"gal.hint":"Faites glisser pour parcourir →",
"rit.title":"Une journée de trois heures et demie.",
"rit.lede":"AvoBreak ne sert que le midi, du lundi au vendredi. Toute la maison tient dans ce court créneau, et c'est ce qui fait son charme.",
"rit.1t":"Le comptoir ouvre","rit.1d":"Tout est fait maison, préparé pour le service du midi : avocats ouverts à la commande, salades composées, bowls montés au comptoir.",
"rit.2t":"La terrasse se remplit","rit.2d":"Aux Eaux-Vives, la pause de midi se prend dehors quand le soleil est là, Genève Tourisme la recommande pour les déjeuners ensoleillés.",
"rit.3t":"Rideau","rit.3d":"Le service se termine. On se retrouve le prochain jour de semaine, dès 10 h 30, même rue, même éventail.",
"ter.alt":"Terrasse ensoleillée : tables en bois, plantes, un avocado toast et un café",
"ter.quote":"« Ever dreamt of an avocado bar? AvoBreak has done it! »",
"ter.cite":"Genève Tourisme, « Manger sain à Genève » (en anglais)",
"vis.title":"Rue Adrien-Lachenal 6.",
"vis.hoursT":"Horaires","vis.monfri":"Lundi à vendredi","vis.sat":"Samedi","vis.closed1":"Fermé","vis.sun":"Dimanche","vis.closed2":"Fermé",
"vis.hoursNote":"Horaires selon le profil Google de la maison, un doute ? Un coup de fil avant de passer.",
"vis.contactT":"Nous trouver","vis.addrL":"Adresse","vis.telL":"Téléphone","vis.fbPage":"La page de la maison",
"vis.ctaCall":"Appeler","vis.ctaDir":"Itinéraire",
"foot.note":"Site conceptuel de démonstration, non officiel. Les photographies sont des images d'ambiance générées ; les informations (adresse, horaires, carte) proviennent des profils publics de la maison et de Genève Tourisme, et restent à confirmer par l'établissement.",
"mob.call":"Appeler","mob.carte":"La carte","mob.dir":"Itinéraire"
},
en:{
"meta.title":"AvoBreak: avocado bar, Eaux-Vives, Geneva",
"top.addr":"Rue Adrien-Lachenal 6, Eaux-Vives",
"top.hours":"Monday to Friday, 10:30 AM to 2:00 PM",
"nav.carte":"The menu","nav.images":"Gallery","nav.rituel":"The ritual","nav.visite":"Visit",

"hero.t1":"The avocado,","hero.t2":"fanned out.",
"hero.sub":"Salads, poke bowls and avocado toasts, all homemade, at lunchtime only.",
"hero.cta1":"See the menu","hero.cta2":"Call the kitchen",
"hero.press":"Selected by Geneva Tourism in “Healthy eating in Geneva”",
"hero.ticket1":"Lunch only","hero.ticket2":"10:30 AM to 2:00 PM, weekdays",
"hero.imgAlt":"Avocado sliced into a fan on a ceramic plate, next to a slice of sourdough toast",
"strip.1b":"Weekdays","strip.1s":"lunchtime only",
"strip.2b":"Homemade","strip.2s":"“healthy homemade food”",
"strip.3b":"Terrace","strip.3s":"in the sun, in Eaux-Vives",
"strip.4b":"Geneva Tourism","strip.4s":"“Healthy eating” selection",
"carte.title":"Five plates, one fruit.",
"carte.lede":"The house builds everything around the avocado. Here is what its own menu, and Geneva Tourism, say about it.",
"dish.1t":"Avocado toast","dish.1d":"The signature: avocado fanned over toast. Colourful and fresh, Geneva Tourism calls it very Instagram-friendly.","dish.1tag":"The signature",
"dish.2t":"Avocado brunch","dish.2d":"The house brunch, built around the avocado, for lunches that take their time.","dish.2tag":"The brunch",
"dish.3t":"Tuna tataki","dish.3d":"Tuna lightly seared, Japanese-style, the fresh note on the menu.","dish.3tag":"The seared one",
"dish.4t":"Tuna bowl","dish.4d":"The house poke bowl with tuna, fresh, colourful, complete.","dish.4tag":"The bowl",
"dish.5t":"Tofu bowl","dish.5d":"The plant-based tofu bowl, the house's answer to lighter appetites.","dish.5tag":"The plant-based one",
"dish.6t":"Salads","dish.6d":"The lunchtime salads, composed fresh at the counter.","dish.6tag":"The fresh one",
"carte.note":"The menu lives day by day: this page shows no prices, because the house publishes none online. Fancy a dish? Call before you come.",
"gal.title":"Green, in depth.",
"gal.1a":"Avocado toast with a poached egg, radish and seeds","gal.1c":"The avocado toast, up close",
"gal.2a":"Poke bowl with tuna tataki, avocado and edamame","gal.2c":"The tuna bowl and its tataki",
"gal.3a":"Plant-based bowl with grilled tofu, avocado, quinoa and sweet potato","gal.3c":"The tofu bowl, all plants",
"gal.4a":"At the counter: hands composing a fresh salad bowl","gal.4c":"At the counter, homemade",
"gal.hint":"Swipe to browse →",
"rit.title":"A day of three and a half hours.",
"rit.lede":"AvoBreak serves lunch only, Monday to Friday. The whole house fits inside that short window, and that is its charm.",
"rit.1t":"The counter opens","rit.1d":"Everything is homemade, prepared for the lunch service: avocados opened to order, salads composed, bowls built at the counter.",
"rit.2t":"The terrace fills up","rit.2d":"In Eaux-Vives, the lunch break is taken outside when the sun is out, Geneva Tourism recommends it for sunny lunches.",
"rit.3t":"Curtain","rit.3d":"Service ends. See you on the next weekday, from 10:30 AM, same street, same fan.",
"ter.alt":"Sunny terrace: wooden tables, plants, an avocado toast and a coffee",
"ter.quote":"“Ever dreamt of an avocado bar? AvoBreak has done it!”",
"ter.cite":"Geneva Tourism, “Healthy eating in Geneva”",
"vis.title":"Rue Adrien-Lachenal 6.",
"vis.hoursT":"Opening hours","vis.monfri":"Monday to Friday","vis.sat":"Saturday","vis.closed1":"Closed","vis.sun":"Sunday","vis.closed2":"Closed",
"vis.hoursNote":"Hours per the house's Google profile, in doubt? A quick call before you set off.",
"vis.contactT":"Find us","vis.addrL":"Address","vis.telL":"Phone","vis.fbPage":"The house's page",
"vis.ctaCall":"Call","vis.ctaDir":"Directions",
"foot.note":"Unofficial concept demo site. The photographs are generated atmosphere images; the information (address, hours, menu) comes from the house's public profiles and Geneva Tourism, and remains to be confirmed by the business.",
"mob.call":"Call","mob.carte":"Menu","mob.dir":"Directions"
}};

var KEY = "avobreak-lang";
function applyLang(lang){
  var dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
    var k = el.getAttribute("data-i18n-alt");
    if (dict[k] != null) el.setAttribute("alt", dict[k]);
  });
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
  });
  try{ localStorage.setItem(KEY, lang); }catch(e){}
}
document.querySelectorAll(".lang-btn").forEach(function(b){
  b.addEventListener("click", function(){ applyLang(b.getAttribute("data-lang")); });
});
var saved = "fr";
try{ saved = localStorage.getItem(KEY) || "fr"; }catch(e){}
if (saved && saved !== "fr") applyLang(saved);

/* ---------- reveals ---------- */
var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){ en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, {threshold:.12});
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add("is-in"); });
}

/* ---------- depth engine (skipped under reduced motion) ---------- */
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduced) return;

var fine = window.matchMedia("(pointer: fine)").matches;
var fans = document.querySelectorAll("[data-plx]");
var heroImg = document.querySelector(".hero-img");
var heroFrame = document.querySelector("[data-tilt]");
var terraceImg = document.getElementById("terraceImg");
var fanDivider = document.getElementById("fanDivider");
var track = document.getElementById("galleryTrack");
var gFrames = track ? track.querySelectorAll(".g-frame") : [];
var hero = document.querySelector(".hero");
var terrace = document.querySelector(".terrace");
var carte = document.querySelector(".carte");

var target = {sy: window.scrollY, tiltX:0, tiltY:0};
var state = {sy: window.scrollY, tiltX:0, tiltY:0};

if (fine && heroFrame){
  hero.addEventListener("pointermove", function(e){
    var r = heroFrame.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - .5;
    var y = (e.clientY - r.top) / r.height - .5;
    target.tiltY = x * 8;   /* ≤4° each way */
    target.tiltX = -y * 8;
  });
  hero.addEventListener("pointerleave", function(){ target.tiltX = 0; target.tiltY = 0; });
}
if (track){
  track.addEventListener("scroll", function(){ updateGallery(); }, {passive:true});
}
function updateGallery(){
  if (!track) return;
  var mid = track.getBoundingClientRect().left + track.clientWidth/2;
  gFrames.forEach(function(f){
    var r = f.getBoundingClientRect();
    var d = (r.left + r.width/2 - mid) / track.clientWidth; /* -0.5..0.5 */
    var rot = Math.max(-11, Math.min(11, d * -18));
    f.style.transform = "rotateY(" + rot.toFixed(2) + "deg)";
  });
}
function progress(el){
  var r = el.getBoundingClientRect();
  var vh = window.innerHeight;
  var p = (vh - r.top) / (vh + r.height);
  return Math.max(0, Math.min(1, p));
}
function frame(){
  target.sy = window.scrollY;
  state.sy += (target.sy - state.sy) * .08;
  state.tiltX += (target.tiltX - state.tiltX) * .08;
  state.tiltY += (target.tiltY - state.tiltY) * .08;

  /* hero fan planes */
  var hp = progress(hero);
  fans.forEach(function(f){
    var rate = parseFloat(f.getAttribute("data-plx")) || 0;
    var y = (hp - .5) * rate * 320;
    f.style.transform = "translate(-50%, " + y.toFixed(1) + "px)";
  });
  if (heroImg){
    var hy = (hp - .5) * -26;
    heroImg.style.transform = "scale(1.12) translateY(" + hy.toFixed(1) + "px)";
  }
  if (heroFrame){
    heroFrame.style.transform = "rotateX(" + state.tiltX.toFixed(2) + "deg) rotateY(" + state.tiltY.toFixed(2) + "deg)";
  }
  if (fanDivider && carte){
    var cp = progress(carte);
    fanDivider.style.transform = "rotate(" + ((cp - .5) * 14).toFixed(2) + "deg)";
  }
  if (terraceImg && terrace){
    var tp = progress(terrace);
    terraceImg.style.transform = "scale(1.14) translateY(" + ((tp - .5) * -30).toFixed(1) + "px)";
  }
  requestAnimationFrame(frame);
}
updateGallery();
requestAnimationFrame(frame);
})();

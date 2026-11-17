// ============================================================
//  ALLT INNEHÅLL PÅ LOVISADOCS.SE
//  Ändra här och kör sedan:  node bygg.mjs
//  Text som finns på två språk skrivs { sv: "...", en: "..." }.
//  Rader märkta UTKAST är skrivna av Claude och ska läsas av Lovisa.
// ============================================================

export default {
  // Sätt till false när sidan ska synas på Google (startsidan).
  // Spårsidorna (/pr, /copywriting, /content) är alltid dolda för Google.
  forhandsvisning: true,
  doman: "https://lovisadocs.se",

  namn: { fornamn: "Lovisa", efternamn: "Rydeberg Öhrnell" },
  epost: "lovissaohr@hotmail.com",
  telefon: "073-899 84 99",
  linkedin: "https://www.linkedin.com/in/lovisa-rydeberg-%C3%B6hrnell-b14113206/",
  ort: "Stockholm",
  portratt: "media/lovisa-laptop.webp", // toppbilden (2026-11-16); tidigare media/lovisa-portratt.webp
  fotBild: "media/lovisa-pall.webp", // bilden i foten, vid "Hör av er!"

  // ---------- SIDORNA ----------
  // Varje spår är en egen sida som bara visar sina egna delar och
  // aldrig länkar till de andra spåren. Startsidan visar allt.
  // "delar" bestämmer ordningen på sidan.
  sidor: {
    start: {
      mapp: "",
      roll: { sv: "Kommunikatör och journalist i Stockholm", en: "Communicator and journalist in Stockholm" },
      ingress: {
        sv: "Pigg journalist i början av karriären men med gasen i botten. Glad, alert och med en hunger för att lära mig nya saker.",
        en: "A journalist early in my career, with my foot firmly on the gas. Upbeat, alert and hungry to learn new things.", // UTKAST (översättning)
      },
      delar: ["ugc", "event", "foto", "text", "utbildning", "kontakt"], // "spar" borttagen 2026-11-16, spårlänkarna ligger diskret i foten, // "om" och "erfarenhet" borttagna tills vidare
    },
    pr: {
      mapp: "pr",
      sparBild: { bild: "media/spar-pr.webp", position: "50% 30%", alt: { sv: "Lovisa vid Pecunios skylt på ett campusevent", en: "Lovisa by the Pecunio banner at a campus event" } }, // bilden i "Ett fokus i taget"
      titel: { sv: "PR och kommunikation", en: "PR and communications" },
      roll: { sv: "PR och kommunikation", en: "PR and communications" },
      ingress: { // UTKAST
        sv: "Jag planerar, samordnar och ser till att det blir av. Från marknadsföringsevent på universitet runt om i Sverige till porträtt och reportage som får människor och varumärken att synas.",
        en: "I plan, coordinate and make things happen. From marketing events at universities across Sweden to profiles and features that put people and brands in the spotlight.",
      },
      delar: ["event", "utbildning", "kontakt"], // "om" och "erfarenhet" borttagna tills vidare
    },
    copywriting: {
      mapp: "copywriting",
      sparBild: { bild: "media/lager157-spegel.webp", position: "50% 40%", alt: { sv: "Sminkning framför spegeln, från reportaget om Lager 157", en: "Make-up in front of the mirror, from the Lager 157 feature" } },
      titel: { sv: "Copywriting", en: "Copywriting" },
      roll: { sv: "Copywriter och skribent", en: "Copywriter and writer" },
      ingress: { // UTKAST
        sv: "Jag skriver texter som får folk att läsa vidare. Reportage och porträtt med människor i centrum, och copy för webb, kampanjer och sociala medier för varumärken som Kia och Scan.",
        en: "I write copy that makes people keep reading. Features and profiles with people at their heart, and copy for web, campaigns and social media for brands such as Kia and Scan.",
      },
      delar: ["text", "utbildning", "kontakt"], // "om" och "erfarenhet" borttagna tills vidare
    },
    content: {
      mapp: "content",
      sparBild: { bild: "media/spar-content.webp", position: "50% 30%", alt: { sv: "Lovisa i blå skjorta, ur en UGC-video för The Shirt Factory", en: "Lovisa in a blue shirt, from a UGC video for The Shirt Factory" } },
      titel: { sv: "Content och UGC", en: "Content and UGC" },
      roll: { sv: "Content creator och UGC", en: "Content creator and UGC" },
      ingress: { // UTKAST
        sv: "Jag skapar innehåll som känns äkta. UGC för varumärken, egen fotografering och redigering, och en TikTok som nådde en halv miljon visningar från ett tidigare okänt konto.",
        en: "I create content that feels real. UGC for brands, my own photography and editing, and a TikTok that reached half a million views from a previously unknown account.",
      },
      delar: ["ugc", "produkt", "foto", "utbildning", "kontakt"], // "om" och "erfarenhet" borttagna tills vidare
    },
  },

  // ---------- OM MIG ----------
  om: {
    sv: [
      "Jag heter Lovisa Rydeberg Öhrnell och är en nyutexaminerad kommunikatör med stort driv, nyfikenhet och intresse för produktion, projektledning och kreativt innehåll.",
      "Jag trivs i miljöer där det händer mycket och där jag får vara med och skapa, koordinera och bygga relationer. Genom studier, praktik och frilansuppdrag har jag fått erfarenhet av att driva projekt från idé till genomförande, med ansvar för allt från planering och logistik till innehållsproduktion och uppföljning.",
    ],
    en: [ // UTKAST (översättning)
      "I'm Lovisa Rydeberg Öhrnell, a newly graduated communicator with plenty of drive, curiosity and a real interest in production, project management and creative content.",
      "I thrive where things move fast and where I get to create, coordinate and build relationships. Through my studies, internships and freelance work I've run projects from idea to delivery, handling everything from planning and logistics to content production and follow-up.",
    ],
  },

  // ---------- EVENT ----------
  event: {
    kund: "Lexcampus.se / Pecunio.se",
    text: {
      sv: [
        "Ansvarade för att planera och genomföra marknadsföringsevent på universitet runt om i Sverige.",
        "Hade helhetsansvar för logistiken, inklusive reseplanering, material, kontakt med universitet och genomförandet på plats. Arbetade oftast självständigt och ansvarade även för att dokumentera eventen för sociala medier, antingen genom egen produktion eller genom att samordna fotograf och videograf.",
      ],
      en: [ // UTKAST (översättning)
        "Responsible for planning and running marketing events at universities across Sweden.",
        "Owned the logistics end to end, including travel, materials, contact with the universities and delivery on site. Mostly worked independently, and was also responsible for documenting the events for social media, either by producing the content myself or by coordinating a photographer and videographer.",
      ],
    },
    // Korta fakta under texten (hämtade ur CV:t och texten ovan).
    fakta: [
      // år borttaget 2026-11-16:       { rubrik: { sv: "När", en: "When" }, text: { sv: "2022–2024", en: "2022–2024" } },
      { rubrik: { sv: "Var", en: "Where" }, text: { sv: "Universitet runt om i Sverige", en: "Universities across Sweden" } },
      { rubrik: { sv: "Ansvar", en: "Role" }, text: { sv: "Planering, logistik och genomförande på plats", en: "Planning, logistics and delivery on site" } },
      { rubrik: { sv: "Innehåll", en: "Content" }, text: { sv: "Foto, video och inlägg för sociala medier", en: "Photo, video and posts for social media" } },
    ],
    // Kollaget: exakt fyra platser i den här ordningen.
    // 1 stor kvadrat, 2 hög (video eller bild), 3 och 4 små till höger.
    // En "video" spelas tyst och i loop som en rörlig bild.
    bilder: [
      { video: "media/event-skylt.mp4", poster: "media/event-skylt.jpg", position: "38% 55%", alt: { sv: "Lovisa pekar på Pecunio-skylten vid montern på campus", en: "Lovisa pointing at the Pecunio banner at the campus stand" } },
      // Tidigare här: media/event-pecunio-annons.webp (Pecunio-annonsen).
      { video: "media/event-monter-lovisa.mp4", poster: "media/event-monter-lovisa.jpg", alt: { sv: "Lovisa visar upp häften vid Pecunio-montern", en: "Lovisa showing booklets at the Pecunio stand" } },
      { bild: "media/event-lek.webp", alt: { sv: "Lovisa leder en lek med studenter på en gräsplan", en: "Lovisa leading a game with students on a field" } },
      { bild: "media/event-monter.webp", alt: { sv: "Pecunio-montern vid en damm på ett campus", en: "The Pecunio stand by a pond on a campus" } },
    ],
  },

  // ---------- CONTENT & UGC ----------
  ugc: [
    { video: "media/shirt-factory-3.mp4", poster: "media/shirt-factory-3.jpg", kund: "The Shirt Factory", typ: { sv: "UGC", en: "UGC" } },
    { video: "media/skjortor-veckan.mp4", poster: "media/skjortor-veckan.jpg", kund: "The Shirt Factory", typ: { sv: "UGC", en: "UGC" }, sidor: ["start", "content"] }, // en skjorta per veckodag, bara content-sidan
    // borttagen 2026-11-16:     { video: "media/protein.mp4", poster: "media/protein.jpg", kund: "Protein.se", typ: { sv: "Reklam, UGC", en: "Ad, UGC" }, grupp: { sv: "Reklam för Protein.se", en: "Ad for Protein.se" } },
    { video: "media/run-club-sproud.mp4", poster: "media/run-club-sproud.jpg", kund: "Ida-Louise x Sproud", typ: { sv: "Run club, event", en: "Run club, event" }, grupp: { sv: "Run club med Ida-Louise x Sproud", en: "Run club with Ida-Louise x Sproud" } }, // BEKRÄFTA rubrik och Lovisas roll
    // Nya 2026-11-16, på startsidan och content-sidan:
    { video: "media/imse-clay-workshop.mp4", poster: "media/imse-clay-workshop.jpg", kund: "Imse Studio", typ: { sv: "Clay workshop", en: "Clay workshop" }, grupp: { sv: "Clay workshop för Imse Studio", en: "Clay workshop for Imse Studio" }, sidor: ["start", "content"] }, // BEKRÄFTA kundnamnet
    { video: "media/shirt-factory-2.mp4", poster: "media/shirt-factory-2.jpg", kund: "The Shirt Factory", typ: { sv: "UGC", en: "UGC" } },
    // Videor i rad med samma kund samlas under en etikett: "UGC för <kund>",
    // eller texten i "grupp" om den finns. Alla visas i stående format.
    // Tidigare här (filerna finns kvar i media/): shirt-factory-1.mp4 (The Shirt Factory), hatstore-veckan.mp4, hatstore-mossor.mp4 (Hatstore).
  ],


  // ---------- FOTO ----------
  // Bilderna visas i fyra kolumner, två per kolumn. Varje kolumn ska ha
  // en stående ("hog") och en liggande ("bred") bild, annars blir kolumnerna olika höga.
  // Ordning: stående+liggande, liggande+stående, stående+liggande, liggande+stående.
  // ---------- PRODUKTFOTO (bara content-sidan, 2026-11-16) ----------
  produkt: {
    kund: "Protein.se",
    bilder: [
      { bild: "media/protein-kapslar.webp", alt: { sv: "Burk med Self Tanning-kapslar från Protein.se på en flätad bricka", en: "Jar of Protein.se Self Tanning capsules on a woven tray" } },
      { bild: "media/protein-pulver.webp", alt: { sv: "Burk med proteinpulver från Protein.se på marmor med eukalyptus", en: "Jar of Protein.se protein powder on marble with eucalyptus" } },
    ],
  },

  foto: [
    { bild: "media/foto-keps-rosa.webp", alt: { sv: "Porträtt i rosa keps framför röda vinrankor", en: "Portrait in a pink cap in front of red vines" }, storlek: "hog" },
    { bild: "media/lager157-studio.webp", alt: { sv: "Fotografering i studion hos Lager 157", en: "Photo shoot in the Lager 157 studio" }, storlek: "bred" },

    { bild: "media/foto-kontor-svartvit.webp", alt: { sv: "Svartvitt porträtt av en man vid sitt skrivbord", en: "Black and white portrait of a man at his desk" }, storlek: "bred" },
    { bild: "media/foto-keps-parkering.webp", alt: { sv: "Man i keps sitter mot en lyktstolpe på en parkering", en: "Man in a cap sitting against a lamp post in a car park" }, storlek: "hog" },

    { bild: "media/foto-grand.webp", alt: { sv: "Vit gränd med trappa i Portugal", en: "White alley with steps in Portugal" }, storlek: "hog" },
    { bild: "media/lager157-kladstang.webp", alt: { sv: "Stylist och modell vid klädstängerna hos Lager 157", en: "Stylist and model by the clothing rails at Lager 157" }, storlek: "bred" },

    { bild: "media/lager157-draperi.webp", alt: { sv: "Modell tittar fram bakom ett draperi vid skohyllan", en: "Model peeking out from behind a curtain by the shoe rack" }, storlek: "bred" },
    { bild: "media/foto-klippa.webp", alt: { sv: "Kapell på en klippa ovanför en vik", en: "Chapel on a cliff above a cove" }, storlek: "hog" },
  ],

  // ---------- TEXTER ----------
  // spar: vilka spår texten visas i (startsidan visar alla).
  // sida: en egen artikelsida på lovisadocs.se (se "artiklar" längre ner).
  texter: [
    {
      titel: "Mellan skolbänken och catwalken",
      kund: { sv: "Reportage", en: "Feature" },
      typ: { sv: "Text och foto", en: "Words and photos" },
      sida: "mellan-skolbanken-och-catwalken",
      bild: "media/lager157-spegel.webp",
      spar: ["copywriting", "pr"],
    },
    {
      titel: "Att vara ”oförklarligt barnlös”",
      kund: { sv: "Porträtt", en: "Profile" },
      typ: { sv: "Text", en: "Words" },
      sida: "oforklarligt-barnlos",
      bild: "media/ivf-natalie.webp",
      spar: ["copywriting"],
    },
    {
      titel: "Möt träningsprofilen, entreprenören och Kia-ambassadören Joanna Swica",
      kund: "Kia Story",
      typ: { sv: "Porträtt", en: "Profile" },
      lank: "https://story.kia.se/kia-ambassadoren-joanna-swica",
      bild: "media/text-kia-swica.webp", position: "50% 50%", // förhandsbild från sajten
      utdrag: "Hon strukturerar sitt liv i block för att få plats med både prestation och spontanitet. I sju år har Kia varit en självklar följeslagare på Joanna Swicas resor.", // ingressen på sidan
      spar: ["copywriting", "pr"],
    },
    {
      titel: "Kia Stonic uppdateras – fem saker som vässats",
      kund: "Kia Story",
      typ: { sv: "Webbartikel", en: "Web article" },
      lank: "https://story.kia.se/kia-stonic-uppdateras-fem-saker-som-vassats",
      bild: "media/text-kia-stonic.webp", position: "50% 60%", // förhandsbild från sajten
      utdrag: "Smidig i stan, trygg på längre resor och full av detaljer som gör körningen enklare och roligare. Här är fem nyheter du inte vill missa i Kia Stonic.", // ingressen på sidan
      spar: ["copywriting"],
    },
    {
      titel: "Leva med KOL",
      kund: "Levamedkol.se",
      typ: { sv: "Webbtext", en: "Web copy" },
      lank: "https://www.levamedkol.se/leva-med-kol/",
      bild: "media/text-kol.webp", position: "78% 40%", // förhandsbild från sajten
      utdrag: "Upptäck utmaningarna att leva med KOL och få värdefulla råd för att hantera sjukdomen. Berättelser, råd och stöd för både patienter och anhöriga.", // ingressen på sidan
      spar: ["copywriting"],
    },
    {
      titel: "Fläsk",
      kund: "Scan",
      typ: { sv: "Produktsida och guider", en: "Product page and guides" },
      lank: "https://www.scan.se/vara-produkter/flask/",
      bild: "media/text-scan.webp", position: "50% 45%", // förhandsbild från sajten
      utdrag: "Klassisk svensk husmanskost – från rimmat till rökt, från knaperstekt till långkokt. I pannkakan eller ärtsoppan, på grillen eller i pannan.", // ingressen på sidan
      spar: ["copywriting"],
    },
  ],

  // ---------- ERFARENHET ----------
  erfarenhet: [
    {
      tid: { sv: "Jan 2025 – nu", en: "Jan 2025 – present" },
      var: { sv: "Konsultarbete", en: "Consulting" },
      punkter: {
        sv: ["Projektledare och producent", "Event", "Copywriting", "Content creator, bland annat en TikTok med en halv miljon visningar från ett tidigare okänt konto"],
        en: ["Project manager and producer", "Events", "Copywriting", "Content creator, including a TikTok with half a million views from a previously unknown account"],
      },
    },
    {
      tid: { sv: "Sep 2025 – nu", en: "Sep 2025 – present" },
      var: "The Shirt Factory, Nordiska Kompaniet",
      punkter: {
        sv: ["Butiksarbete och kundservice", "Contentproduktion för sociala medier", "Foto, video och redigering för digitala kanaler"],
        en: ["Retail and customer service", "Content production for social media", "Photo, video and editing for digital channels"],
      },
    },
    {
      tid: { sv: "Sep – dec 2025", en: "Sep – Dec 2025" },
      var: { sv: "Praktik, Bizkit Havas (reklambyrå)", en: "Internship, Bizkit Havas (advertising agency)" },
      punkter: {
        sv: ["Copy för webb, kampanjer och sociala medier", "Kreativ konceptutveckling och kundpitcher", "Generativ AI i kreativa processer, främst Midjourney"],
        en: ["Copy for web, campaigns and social media", "Creative concept development and client pitches", "Generative AI in creative processes, mainly Midjourney"],
      },
    },
    {
      tid: { sv: "Aug 2022 – aug 2024", en: "Aug 2022 – Aug 2024" },
      var: { sv: "Marknadsföringsansvarig, Lexcampus.se (deltid)", en: "Head of marketing, Lexcampus.se (part time)" },
      punkter: {
        sv: ["Copywriter, creative och eventansvarig", "Producerade allt innehåll till sociala medier", "Organiserade event och höll dem på olika universitet i Sverige"],
        en: ["Copywriter, creative and event lead", "Produced all social media content", "Organised and hosted events at universities across Sweden"],
      },
    },
    {
      tid: { sv: "Apr 2021 – aug 2023", en: "Apr 2021 – Aug 2023" },
      var: { sv: "ICA Maxi, Nära och Kvantum (deltid)", en: "ICA Maxi, Nära and Kvantum (part time)" },
      punkter: {
        sv: ["Kassa", "Kundtjänst", "Plockning av varor"],
        en: ["Checkout", "Customer service", "Order picking"],
      },
    },
    {
      tid: { sv: "Jan 2019 – apr 2021", en: "Jan 2019 – Apr 2021" },
      var: "Hatstore AB",
      punkter: {
        sv: ["Kundservice via telefon, mejl och chatt", "Produktion av innehåll för TikTok och Instagram", "Medverkan i fotograferingar och marknadsföringsaktiviteter"],
        en: ["Customer service by phone, email and chat", "Content production for TikTok and Instagram", "Took part in photo shoots and marketing activities"],
      },
    },
  ],

  // ---------- UTBILDNING ----------
  utbildning: [
    // Inriktning bekräftad 2026-11-16: Media & Kommunikation.
    { titel: { sv: "Kandidatexamen", en: "Bachelor's degree" }, amne: { sv: "Media & Kommunikation", en: "Media & Communication" }, var: { sv: "Göteborgs universitet", en: "University of Gothenburg" }, logga: "media/gu-logga.svg", sigill: "media/gu-sigill.svg" }, // loggan från gu.se, vinröd
    // Bara examen visas just nu. Kurserna fanns här tidigare:
    // { titel: { sv: "Kurser i digital produktion, podcastproduktion och AI", en: "Courses in digital production, podcast production and AI" }, var: "" },
  ],

  // ---------- ARTIKLAR (egna sidor, på svenska) ----------
  // Texten är ordagrant från Lovisas PDF:er. Stycken som börjar med "– " blir citat.
  // { bild, text } lägger in en bild med bildtext.
  artiklar: {
    "mellan-skolbanken-och-catwalken": {
      rubrik: "Mellan skolbänken och catwalken: Elisabets balansakt hos Lager 157",
      toppbild: { bild: "media/lager157-studio.webp", alt: "Fotografen sitter på golvet och fotograferar Elisabet i studion" },
      ingress: [
        "I en morgon i Gällstad, Sverige, öppnas dörren till Lager 157s företagsbyggnad. Klockan är 08:00, och inuti vaknar kontoret till liv. Men av de anställda som gör sig redo för dagen är Elisabet, en 25-årig byggnadsingenjörsstudent som även arbetar som modell för Lager 157.",
        "För henne är livet en balansakt mellan akademiska böcker och catwalken. Följ med oss bakom kulisserna på en vanlig onsdag i Elisabets liv.",
      ],
      pdf: "media/mellan-skolbanken-och-catwalken.pdf",
      stycken: [
        "Vi parkerar utanför företaget Lager 157s byggnad i Gällstad. Det är en grå och tidig morgon, men stämningen är redan upplyftande.",
        "– Jag är alltid en minut sen in i studion, skrattar Elisabet, vår guide för dagen.",
        "För att nå studion måste vi traska genom kontorskorridorerna, passera chefer, kundtjänstspecialister och det kreativa teamet som ansvarar för företagets innehåll och webbsidor. Lager 157, känt för sitt avslappnade mode och vardagskläder, men idag får vi en inblick bakom kulisserna och ser mer än bara ytan.",
        "I ett hörn fyllt av skor i alla storlekar, kläder sorterade efter säsong och ett draperi som skymmer omklädningsytan, står Elisabet framför spegeln. Hon låter blicken svepa över sin necässär och plockar noggrant fram det hon behöver. Med en lugn precision börjar hon förbereda sig.",
        "– Det är lättare om jag sminkar mig själv. Jag känner mitt ansikte bäst, så det blir bättre på det sättet.",
        { bild: "media/lager157-spegel.webp", alt: "Elisabet sminkar sig framför spegeln", stor: "hog" },
        "Studiomanagern och fotografen rör sig metodiskt medan de förbereder studion. Ljudet av dämpade röster blandas med mjuka toner från musiken som fyller rummet och skapar en avslappnad stämning. Kläderna är omsorgsfullt utvalda och hänger prydligt på rad, redo för dagens session.",
        "Elisabet är 25 år gammal och studerar till byggnadsingenjör vid Jönköpings universitet. Hon har jobbat som modell för Lager 157 sedan några år tillbaka. För henne handlar det inte om att bygga en modellkarriär, utan om att ha roligt och ta chanser när de dyker upp.",
        "– Jag har aldrig velat satsa helhjärtat på att bli modell; konkurrensen är helt enkelt för hårt, förklarar Elisabet.",
        "Sminkningen sker på morgonen och följs av en längre fotografering innan en lunchrast. Elisabet kan dock inte lägga hela dagar på detta längre eftersom studierna kräver mycket av hennes tid. Efter dagens arbete i studion ska hon direkt till skolan för att delta i ett seminarium.",
        { bild: "media/lager157-kladstang.webp", alt: "Elisabet och en stylist vid klädstängerna i studion" },
        "Under fotograferingen märks det tydligt att kreatörsteamet och Elisabet har gjort detta länge och känner varandra väl. De engagerar sig i småprat om att köpa hus och skaffa hundar. I en liten stad vet alla var gatan är utan att behöva en karta att förhålla sig till.",
        "– Hår!, är det enda fotografen nämner, och Elisabet tar hand om resten.",
        "Den gemensamma förståelsen är påtaglig. Fraser som ”pall” och ”spegel” kräver ingen ytterligare förklaring.",
        { bild: "media/lager157-draperi.webp", alt: "Elisabet tittar fram bakom draperiet vid skohyllan" },
        "Men vad skiljer Elisabets historia från den vanliga? Statistiska centralbyrån (SCB) avslöjar att 17 procent av unga i Sverige i åldern 15–34 år aldrig har haft någon kontakt med arbetsmarknaden under sina studier.",
        "För Elisabet handlar det om att hitta balansen mellan arbete och studier. Det är inte alltid lätt att vara student samtidigt som man modellar, men det handlar om att göra det som man älskar och orkar med.",
        "– Det är därför jag har satt andra intressen åt sidan det här året och fokuserar på mina studier först. Sedan modellerar jag, och om jag har tid, tränar jag eller tar långa promenader med min hund.",
        { bild: "media/lager157-bilen.webp", alt: "Elisabet lutar sig mot en bil utanför Lager 157" },
        "Efter några intensiva timmar av ombyten, poser och glädje, byter Elisabet till sina vardagskläder. Med ett leende på läpparna och en växande aptit beger hon sig mot skolan, redo för en ny utmaning.",
        "Elisabets berättelse är en påminnelse om att det är möjligt att balansera både skola och passion så länge man är passionerad nog och orkar. Oavsett om du är en hängiven student eller en blomstrande modell, är vägen din att forma. Det handlar om att följa dina drömmar och våga ta chanser när de dyker upp, precis som Elisabet gör varje onsdag.",
      ],
    },
    "oforklarligt-barnlos": {
      rubrik: "Att vara ”oförklarligt barnlös”",
      toppbild: { bild: "media/ivf-natalie.webp", alt: "Natalie Nilsson i en trädgård" },
      ingress: [
        "– Det jobbigaste med IVF är inte IVF. Det är att vara ofrivilligt barnlös och inte kunna kontrollera sin framtid",
        "Natalie och hennes man Ahmed försökte skaffa barn i flera år. De var unga, friska och läkarna kunde inte förklara varför paret inte kunde bli med barn. Det tog paret fyra IVF för att lyckas bli gravida.",
      ],
      pdf: "media/att-vara-oforklarligt-barnlos.pdf",
      stycken: [
        "Natalie Nilsson, håller sin ettårige son Anwar bredvid sig. Han är glad och pratar för sig själv när han springer för att räkna stenarna på vägen och de nedfallna löven under träden. Pappa Ahmed är på jobbet och Natalie har precis hämtat Anwar från dagis. Det ser ut som ett vanligt familjefoto, en mammas vardag. Det var dock inte självklart att den här dagen skulle komma. Natalie är trettiotre år gammal. Hon är frisk och har ett bra liv, men länge trodde hon aldrig att hon skulle få barn.",
        "Natalie och Ahmed började försöka få ett barn runt 2017. Efter ungefär ett år utan framgång vände de sig till landstinget - eller provrörsbefruktning. Hos Landstinget får du tre gratisförsök.",
        "– Från början tyckte jag nog inte att det var så värst jobbigt, man har ju så stora förhoppningar på att det ska fungera. Det vara bara att göra, man stänger nog av sig lite och tvingar sig själv genom processen, förklarar Natalie.",
        "Inget hände vid första försöket. Inget hände vid andra försöket, och ju längre det gick – desto svårare blev det för Natalie att låtsas som att inget var fel och fortsätta kämpa.",
        "För att få genomgå IVF måste du uppfylla vissa krav. Du måste prova själv i minst ett år, du måste bo på samma adress och ditt BMI får inte vara för högt. När du börjar behöver du några prover och en gynekologisk undersökning för kolla så att allt ser rätt ut.",
        "– Allt såg bra ut, på oss båda, så vi blev kallade ”oförklarligt barnlösa”. En sak som störde mig och spökade i min hjärna var rädslan att det fanns en annan anledning – att man inte passar som par, berättar Natalie.",
        "För Natalie blev det en intern kamp att hålla inne eller låtsas att hon mådde bra och försöka slåss med alla hormoner.",
        "– Jag är en problemlösare in i märgen och försöker alltid hitta olika sätt att fixa saker. Men detta kunde jag inte kontrollera. Inte ens lite… att inte själv kunna bestämma över sin framtid var brutalt för mig. Det visade sig i tankarna jag började få. Jag började intala mig själv att jag inte alls vill ha barn och att jag inte trivs i min relation.",
        "Efter undersökningen får paret behandling. De ordineras olika mediciner som tas genom en spruta i magen och ibland besökte de en klinik för att kontrollera äggstockarnas status. När insättningsdagen kom fick Natalies man inte följa med henne in.",
        "– Jag låg och grät. Inte bara för det gjorde ont utan för jag tyckte att det var jobbigt mentalt, berättar Natalie.",
        "När äggplockningen är klar vet du omedelbart hur många ägg de tog ut. Natalie tar ut tio-tolv stycken varje gång, vilket är normalt. Men antalet ägg garanterar ingenting.",
        "– Ett mantra som ständigt sägs av läkare är ”allt som krävs är ett ägg, det gyllene ägget”, förklarar Natalie.",
        "Redan dagen efter får du veta hur många ägg som överlevde befruktningen. För Natalie brukar de vara sex stycken – vilket fortfarande är bra. Nu får du vänta ytterligare några dagar för nu ska de se hur cellerna delar sig i ägget. Vissa slutar utvecklas och vissa delar sig onormalt eller långsamt. Det sista steget är insättning.",
        "– Insättningen gör inte ont, känns som ett gyn-besök. Men sedan måste man vänta i 14 dagar för att se om det har fungerat. Dessa 14 dagar är fruktansvärda. Det jobbigaste med IVF är inte IVF. Det är att vara ofrivilligt barnlös och inte kunna kontrollera sin framtid.",
        { bild: "media/ivf-lekplats.webp", alt: "Natalie lyfter upp sin son Anwar i ett lekplatståg" },
        "Men när telefonen ringde var det fortfarande en besvikelse – det tredje försöket hade inte lyckats. Efter tre misslyckade försök hos landstinget stannade paret. Vad händer nu?",
        "– Jag började tveka på hela mitt liv. Jag funderade på om jag inte ville ha barn och om jag skulle lämna min man. Då är jag ju inte ofrivilligt barnlös och då jag har själv bestämt min framtid.",
        "Natalie var inte redo att ge upp än. Paret bestämde sig till slut för att ta ett lån och ge det ett sista försök på en privat klinik. Kliniken garanterade pengarna tillbaka om det inte lyckades på tre försök och paret var villiga att ta den chansen – trots att oddsen var emot dem.",
        "Den 19 augusti 2022 föddes en liten pojke, Anwar. Den lille sonen som glatt leker med sin mamma på lekplatsen.",
      ],
    },
  },
};

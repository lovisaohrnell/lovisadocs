# Design – lovisadocs.se

Grunden är Lovisas eget Canva-utkast ("Lovisa – Webbplats", Canva 2), som hon valt (koncept B, 2026-11-14). Behåll hennes uttryck; förfina, byt inte ut.

## Typografi (ändrat 2026-11-15)
Ett enda typsnitt, Schibsted Grotesk, för allt. Alla rubriker har samma vikt (600), samma färg (vinrött) och tät spärrning; inga serifer, inga kursiva versaler.

## Färger (ändrat 2026-11-15): grått, vitt, rosa, vinrött
- `--bg #e6e3df` ljusgrått: sidans grund
- starkare rosa `--rosa-stark #f4b4b0`: bandet med Content & UGC. Videorna i en vågrät remsa (2026-11-16): vita rundade ramar som polaroider med kund och typ under, varannan förskjuten nedåt. Fyra syns åt gången på dator (2,6 på surfplatta); fler nås genom att bläddra med svep, skrollhjul eller de runda vinröda knapparna bredvid rubriken (syns bara när allt inte ryms). Mobil: kort på 62 % av bredden, nästa kort tittar in.
- `--rosa #f0cfc8`: bandet med Copywriting (vinröd text på rosa, ca 9,5:1). Externa texter visas som förhandskort (2026-11-16) i två förskjutna kolumner: rundad bild med domänen som rosa bricka, etikett, rubrik, ingressen (max 3 rader), "Läs texten".
- `--vin #5b2220`: alla rubriker, namnet, loggan, texttitlar och länkdetaljer
- `--ink #231b1a` brödtext, `--mjuk #5c5250` sekundär text

## Typsnitt (lokalt, OFL)
- Schibsted Grotesk 400–600 + italic. Kursiv bara i små etiketter (kursiv gemen).

## Principer
- Ordning på startsidan (2026-11-15): Content & UGC direkt efter toppen, sedan Event & PR (bara rubrik + kollage med två tysta loopar och två foton; texten och fakta borttagna 2026-11-16), Foto, Copywriting (rosa band), Utbildning (vitt rundat kort: GU-loggan i vinrött, Kandidatexamen stort, GU-sigillet som svagt vattenmärke till höger), Hör av er (Ett fokus i taget borttaget 2026-11-16; länkarna /pr, /copywriting, /content ligger diskret i fotens nedre rad, bara på startsidan). Om mig och Erfarenhet är borttagna tills vidare.
- Ett fokus i taget (2026-11-16): tre lika stora stående bilder (7:10) i rad, med spårets namn och adress i vitt centrerat nertill över en mörk tonad nederkant; en per rad på mobil. Ingen introtext. Bilderna styrs av `sparBild` i innehall.mjs.
- Bilder tar plats: bilden på Lovisa vid laptopen i toppen (randig skjorta och rosa tulpaner, byttes in 2026-11-16), fotokollage kant till kant (2026-11-16, ingen marginal mot sidkanterna): fyra kolumner (stående + liggande per kolumn), tätt mellanrum, ingen förskjutning, rubriken "Bakom kameran" i vitt uppe till vänster i första bilden, videor i telefonramar.
- Inga pilar efter länkar, inga mellanpunkter, inga likadana kortrutnät. Länklistor är rader med linjer.
- Rörelse bara som små hover-förskjutningar; respekterar prefers-reduced-motion.
- Foten (2026-11-16): samma grå bakgrund som sidan (testat rosa och vinrött först). Till vänster bilden på Lovisa vid pallen (fotBild i innehall.mjs) i en vinröd ram som UGC-videorna, till höger "Hör av er!" stort i vinrött och Telefon, Plats, Mejl som rader med vinröd kursiv etikett. Sist en tunn rad med © och språklänk + LinkedIn-ikon. Mobil: bilden överst. Foten har id="kontakt".
- Produktfoto (2026-11-16, bara /content): rubrik + "För Protein.se" till höger, en stående och en liggande bild (4fr/7fr) med rundade hörn, nederkanterna i linje.
- UGC-videorna (2026-11-16) spelas en i taget från vänster, tyst, när avsnittet syns; när en tar slut startar nästa (remsan bläddrar fram den), sist går tillbaka till första. De som inte spelar är lätt nedtonade. Klick på en video spelar just den; ljudknappen slår på ljud och ljudet följer med till nästa. Pausar utanför bild. Minska rörelse eller datasparläge ger vanliga kontroller utan autoplay.

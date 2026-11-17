# lovisadocs.se

Lovisa Rydeberg Öhrnells portfolio. Det är en statisk sajt, alltså vanliga HTML-filer utan databas och utan inloggning.

## Så hänger det ihop
- `innehall.mjs`: **all text, alla länkar och alla bilder står här.** Det är den enda fil du normalt behöver ändra.
- `bygg.mjs`: gör om innehållet till färdiga sidor. Netlify kör det automatiskt vid varje ändring.
- `style.css`: utseendet (färger, typsnitt, layout).
- `app.js`: videouppspelning och några små funktioner.
- `media/`: bilder och videor. `fonts/`: typsnittet Schibsted Grotesk.
- `index.html`, `en/`, `pr/`, `copywriting/`, `content/` och `texter/` skapas av `bygg.mjs`. Ändra inte i dem för hand.

## Sidorna
- `lovisadocs.se` och `lovisadocs.se/en`: allt, och de syns på Google.
- `/pr`, `/copywriting` och `/content` (även under `/en/`): egna sidor att skicka till rekryterare. De länkar aldrig till varandra och syns aldrig på Google. Längst ner på startsidan finns diskreta länkar till dem.

## Ändra något
**Enklast:** öppna `innehall.mjs` på github.com, klicka på pennan, ändra texten och klicka på "Commit changes". Sajten uppdateras efter ungefär en minut.

**Med AI:** be Claude eller Codex om ändringen, till exempel "Lägg till en ny text i Copywriting med den här länken". Den ändrar `innehall.mjs`.

**På datorn:**
```bash
node bygg.mjs                 # bygger sidorna
npx serve .                   # förhandsvisning på http://localhost:3000
git add -A && git commit -m "Ny text" && git push
```

## Ny bild eller video
Lägg filen i `media/`. Bilder ska helst vara `.webp` och högst cirka 1600 px breda, videor `.mp4` på 720 px bredd. Lägg sedan till filnamnet i `innehall.mjs`.

## Konton
- **Kod:** GitHub, på Lovisas konto.
- **Hosting:** Netlify, på Lovisas konto. Det kopplas till GitHub och bygger om sajten vid varje ändring.
- **Domän:** lovisadocs.se hos Loopia, i Lovisas namn. DNS pekar mot Netlify.

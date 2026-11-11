# Radio BM

De website van Radio Battle Madness: podcastafleveringen van YouTube en eigen muziek.

## Online zetten met GitHub Pages

1. Maak een (gratis) account op github.com en klik op **New repository**. Geef het een naam, bijvoorbeeld `radio-bm`, kies **Public** en klik op **Create repository**.
2. Klik op **uploading an existing file** en sleep de inhoud van deze map erin: `index.html`, `inhoud.js`, `README.md` en de mappen `afbeeldingen` en `muziek`. Klik op **Commit changes**.
3. Ga naar **Settings → Pages**. Kies bij *Branch* `main` en de map `/ (root)` en klik op **Save**.
4. Na een minuut of twee staat de site op `https://<jouw-gebruikersnaam>.github.io/radio-bm/`.

## Afleveringen en muziek toevoegen

Alles staat in **`inhoud.js`**. Open dat bestand op GitHub, klik op het potloodje en pas het aan. Bovenin het bestand staat precies hoe.

- **Aflevering**: voeg een blok toe met nummer, titel, datum en de YouTube-link. De video speelt daarna direct op de site af.
- **Nummer**: upload het audiobestand (mp3 of m4a) naar de map `muziek` en voeg een blok toe met de titel en `bestand: "muziek/bestandsnaam.mp3"`.

Na **Commit changes** is de site binnen een paar minuten bijgewerkt.

## Goed om te weten

- Een video speelt alleen af op de site als *Insluiten toestaan* aan staat bij die video in YouTube Studio. Dat staat standaard aan.
- GitHub accepteert bestanden tot 100 MB, ruim genoeg voor een nummer.
- Bestandsnamen zijn hoofdlettergevoelig: `Arena.mp3` en `arena.mp3` zijn voor de site verschillende bestanden. Gebruik het liefst geen spaties.
- Wil je de site eerst op je eigen computer bekijken? Dubbelklik op `index.html`.

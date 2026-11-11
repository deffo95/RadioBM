# Radio BM

De website van Radio Battle Madness: podcastafleveringen van YouTube en eigen muziek, met een beheerpagina om alles op de site zelf bij te houden.

## Online zetten met GitHub Pages

1. Maak een (gratis) account op github.com en klik op **New repository**. Geef het een naam, bijvoorbeeld `radio-bm`, kies **Public** en klik op **Create repository**.
2. Klik op **uploading an existing file** en sleep de inhoud van deze map erin: `index.html`, `beheer.html`, `inhoud.js`, `README.md` en de mappen `afbeeldingen` en `muziek`. Klik op **Commit changes**.
3. Ga naar **Settings → Pages**. Kies bij *Branch* `main` en de map `/ (root)` en klik op **Save**.
4. Na een minuut of twee staat de site op `https://<jouw-gebruikersnaam>.github.io/radio-bm/`.

## Beheer op de site

Ga naar `https://<jouw-gebruikersnaam>.github.io/radio-bm/beheer.html`. Er staat geen link naar deze pagina op de site; bewaar hem als bladwijzer.

### Eenmalig: een sleutel (token) maken

Het beheer slaat je wijzigingen op in je repository. Daarvoor heb je een sleutel nodig die alleen bij deze site kan:

1. Ga op GitHub naar **Settings → Developer settings → Personal access tokens → Fine-grained tokens** en klik op **Generate new token**.
2. Kies bij **Repository access** voor **Only select repositories** en selecteer alleen `radio-bm`.
3. Zet onder **Permissions → Repository permissions** de optie **Contents** op **Read and write**.
4. Kies een vervaldatum en klik op **Generate token**. Kopieer de sleutel en plak hem op de beheerpagina.

Gebruikersnaam en repository vult de beheerpagina zelf in. Deel de sleutel met niemand. Is hij verlopen, maak dan een nieuwe en log opnieuw in.

### Werken in het beheer

- **Afleveringen**: plak de YouTube-link, vul titel, nummer en datum in en klik op *Aflevering toevoegen*. Je ziet meteen de thumbnail als controle. Bestaande afleveringen kun je bewerken of verwijderen.
- **Muziek**: kies een mp3- of m4a-bestand (max. 50 MB), geef het een titel en klik op *Nummer toevoegen*. Met de pijltjes zet je de nummers in de juiste volgorde.
- **Publiceren**: je wijzigingen staan eerst klaar. Klik onderaan op **Publiceren** om alles in één keer online te zetten. De site is daarna binnen 1 à 2 minuten bijgewerkt.

## Met de hand aanpassen

Alles staat in **`inhoud.js`**. Je kunt dat bestand ook op GitHub zelf openen, op het potloodje klikken en aanpassen. Muziekbestanden staan in de map `muziek`.

## Goed om te weten

- Een video speelt alleen af op de site als *Insluiten toestaan* aan staat bij die video in YouTube Studio. Dat staat standaard aan.
- Verwijder je een nummer in het beheer, dan wordt het bestand bij het publiceren ook uit de map `muziek` gehaald.
- Wil je de site eerst op je eigen computer bekijken? Dubbelklik op `index.html`. Het beheer werkt alleen op de online site.

/*
  RADIO BM — inhoud van de site
  ==============================
  Dit is het enige bestand dat je hoeft aan te passen.

  NIEUWE AFLEVERING TOEVOEGEN
  Kopieer een blok tussen { en } in de lijst "afleveringen" en vul het in:
    nummer:       het nummer van de aflevering
    titel:        de titel
    datum:        als "JJJJ-MM-DD", bijvoorbeeld "2026-11-11"
    youtube:      de link naar de video op YouTube
    omschrijving: een korte tekst (mag leeg blijven: "")
  De nieuwste aflevering (hoogste nummer) staat vanzelf bovenaan.

  NIEUW NUMMER TOEVOEGEN
  1. Zet het audiobestand (bijvoorbeeld een .mp3) in de map "muziek".
  2. Voeg hieronder een blok toe aan de lijst "muziek":
    titel:    de titel van het nummer
    artiest:  de artiest (mag leeg blijven: "")
    bestand:  "muziek/" + de exacte bestandsnaam, bijvoorbeeld "muziek/arena-anthem.mp3"
  Nummers worden afgespeeld in de volgorde van deze lijst.

  Let op: zet tussen twee blokken altijd een komma.
*/

window.RADIO_BM = {
  afleveringen: [
    {
      nummer: 6,
      titel: "Aflevering 6",
      datum: "2026-11-08",
      youtube: "https://www.youtube.com/watch?v=veBNjinJpCo",
      omschrijving: ""
    },
    {
      nummer: 1,
      titel: "Voorbeeld: welkom bij Radio BM",
      datum: "2026-10-28",
      youtube: "",
      omschrijving: "De eerste aflevering van de podcast over Battle Madness."
    }
  ],

  muziek: [
    // {
    //   titel: "Arena Anthem",
    //   artiest: "Radio BM",
    //   bestand: "muziek/arena-anthem.mp3"
    // },
  ]
};

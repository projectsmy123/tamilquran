# Tamil Qur'an Recitation Aid - Surah Al-Fatihah Prototype v3

This is a no-build GitHub Pages prototype. Upload these files directly to the repository root:

- `index.html`
- `styles.css`
- `app.js`
- `README.md`

## v3 changes

- Arabic units inside each word box are now laid out right-to-left.
- Tapping a word box plays the corresponding word audio.
- Each ayah now has Play and Stop buttons. Play uses Sheikh Mahmoud Khalil Al-Husary ayah audio. Stop pauses at the current position; pressing Play again resumes from that paused position.

## Audio note

This prototype streams audio from external HTTPS sources, so the reader needs internet access. Word audio uses Quran Foundation/Quran.com word-by-word paths. Ayah audio uses the EveryAyah Al-Husary ayah-file path pattern.

## Data note

King Fahad Tamil translation fields are placeholders. Replace `translation` values in `app.js` only after you have the verified approved Tamil translation text.

## GitHub Pages settings

Use:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`


## v4 correction

- Corrected Surah 1:5 word 1 (`إِيَّاكَ`) so the Arabic includes the alif madd and displays visually right-to-left as a normal shaped Arabic word.
- Applied the same correction to the repeated `إِيَّاكَ` in Surah 1:5.


## Translation source

The Tamil translation displayed after each continuous transliteration is from QuranEnc.com: Tamil translation by Sheikh Abdul Hameed Baqavi, version 2021-01-07 / V1.0.1. Keep this attribution when publishing.

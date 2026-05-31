const STORAGE_KEY = "tamil-quran-fatiha-v2-settings";

const settings = loadSettings();

const fatiha = [
  {
    ayah: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      {
        arabic: "بِسْمِ",
        tamilBox: "Bிஸ்மி",
        rule: "Direct word sound: ba-sin-meem. The meem carries kasra.",
        units: [
          { ar: "بِ", ta: "Bி", rule: "baa with kasra" },
          { ar: "سْ", ta: "ஸ்", rule: "seen sakinah" },
          { ar: "مِ", ta: "மி", rule: "meem with kasra" }
        ]
      },
      {
        arabic: "اللَّهِ",
        tamilBox: "ல்லாஹி",
        rule: "Connected reading: hamzatul-wasl is silent; the sound continues as llaahi.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent in connected reading" },
          { ar: "ل", ta: "ல்", rule: "laam" },
          { ar: "لّٰ", ta: "லா", rule: "shaddah + dagger alif/madd" },
          { ar: "هِ", ta: "ஹி", rule: "haa with kasra" }
        ]
      },
      {
        arabic: "الرَّحْمَٰنِ",
        tamilBox: "ர்-ரஹ்மானி",
        rule: "Laam shamsiyyah: the laam merges into raa. Madd on maa sound.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "رَّ", ta: "ர்-ர", rule: "merged raa with shaddah" },
          { ar: "حْ", ta: "ஹ்", rule: "haa/ḥaa sound approximation" },
          { ar: "مَٰ", ta: "மா", rule: "madd tabee'i, 2 counts" },
          { ar: "نِ", ta: "னி", rule: "noon with kasra" }
        ]
      },
      {
        arabic: "الرَّحِيمِ",
        tamilBox: "ர்-ரஹீம்",
        rule: "Laam shamsiyyah merges into raa. Final stop may be read as raheem.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "رَّ", ta: "ர்-ர", rule: "merged raa with shaddah" },
          { ar: "حِ", ta: "ஹி", rule: "ḥaa with kasra" },
          { ar: "ي", ta: "ஈ", rule: "madd sound" },
          { ar: "مِ", ta: "ம்", rule: "final stop uses meem sound" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "Bிஸ்மி" },
      { word: 2, text: "ல்லாஹி" },
      { word: 3, text: "ர்-ரஹ்மானி" },
      { word: 4, text: "ர்-ரஹீம்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:1 here.]",
    notes: [
      "اللَّهِ: hamzatul-wasl is not pronounced when continuing.",
      "الرَّحْمَٰنِ / الرَّحِيمِ: laam shamsiyyah merges into ر.",
      "Final stop pronunciation of الرَّحِيمِ is represented as ரஹீம்."
    ]
  },
  {
    ayah: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    words: [
      {
        arabic: "الْحَمْدُ",
        tamilBox: "அல்ஹமது",
        rule: "Qamariyyah laam stays clear before ح.",
        units: [
          { ar: "ا", ta: "அ", rule: "initial alif/hamzah sound" },
          { ar: "لْ", ta: "ல்", rule: "qamariyyah laam clear" },
          { ar: "حَ", ta: "ஹ", rule: "ḥaa approximation" },
          { ar: "مْ", ta: "ம்", rule: "meem sakinah clear" },
          { ar: "دُ", ta: "து", rule: "daal with dammah" }
        ]
      },
      {
        arabic: "لِلَّهِ",
        tamilBox: "லில்லாஹி",
        rule: "Read as lillaahi with shaddah/madd on laam.",
        units: [
          { ar: "لِ", ta: "லி", rule: "laam with kasra" },
          { ar: "لّٰ", ta: "ல்லா", rule: "shaddah + madd" },
          { ar: "هِ", ta: "ஹி", rule: "haa with kasra" }
        ]
      },
      {
        arabic: "رَبِّ",
        tamilBox: "ரப்பி",
        rule: "Shaddah on baa gives doubled sound.",
        units: [
          { ar: "رَ", ta: "ர", rule: "raa with fatha" },
          { ar: "بِّ", ta: "ப்பி", rule: "baa with shaddah + kasra" }
        ]
      },
      {
        arabic: "الْعَالَمِينَ",
        tamilBox: "அல்-ஆலமீன்",
        rule: "Qamariyyah laam before ع. Final stop ends as aalameen.",
        units: [
          { ar: "ا", ta: "அ", rule: "initial alif" },
          { ar: "لْ", ta: "ல்", rule: "qamariyyah laam clear" },
          { ar: "عَٰ", ta: "ஆ", rule: "ayn + madd approximation" },
          { ar: "لَ", ta: "ல", rule: "laam with fatha" },
          { ar: "مِ", ta: "மி", rule: "meem with kasra" },
          { ar: "ينَ", ta: "ஈன்", rule: "long final een at stop" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "அல்ஹமது" },
      { word: 2, text: "லில்லாஹி" },
      { word: 3, text: "ரப்பில்" },
      { word: 4, text: "ஆலமீன்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:2 here.]",
    notes: [
      "الْحَمْدُ: qamariyyah laam remains clear.",
      "رَبِّ: shaddah is shown by doubled Tamil sound.",
      "الْعَالَمِينَ: final stop is represented as ஆலமீன்."
    ]
  },
  {
    ayah: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      {
        arabic: "الرَّحْمَٰنِ",
        tamilBox: "அர்-ரஹ்மானி",
        rule: "Laam shamsiyyah merges into raa.",
        units: [
          { ar: "ا", ta: "அ", rule: "starting form shown when beginning" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "رَّ", ta: "ர்-ர", rule: "raa with shaddah" },
          { ar: "حْ", ta: "ஹ்", rule: "ḥaa approximation" },
          { ar: "مَٰ", ta: "மா", rule: "madd tabee'i" },
          { ar: "نِ", ta: "னி", rule: "noon with kasra" }
        ]
      },
      {
        arabic: "الرَّحِيمِ",
        tamilBox: "ர்-ரஹீம்",
        rule: "Laam shamsiyyah merges into raa. Final stop as raheem.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent in connected reading" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "رَّ", ta: "ர்-ர", rule: "raa with shaddah" },
          { ar: "حِ", ta: "ஹி", rule: "ḥaa with kasra" },
          { ar: "ي", ta: "ஈ", rule: "madd sound" },
          { ar: "مِ", ta: "ம்", rule: "final stop meem" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "அர்-ரஹ்மானி" },
      { word: 2, text: "ர்-ரஹீம்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:3 here.]",
    notes: [
      "Both words use laam shamsiyyah into ر.",
      "Tamil output follows connected recitation rather than raw spelling."
    ]
  },
  {
    ayah: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    words: [
      {
        arabic: "مَالِكِ",
        tamilBox: "மாலிகி",
        rule: "Madd tabee'i on alif: maa.",
        units: [
          { ar: "مَ", ta: "ம", rule: "meem with fatha" },
          { ar: "ا", ta: "ா", rule: "alif madd, 2 counts" },
          { ar: "لِ", ta: "லி", rule: "laam with kasra" },
          { ar: "كِ", ta: "கி", rule: "kaaf with kasra" }
        ]
      },
      {
        arabic: "يَوْمِ",
        tamilBox: "யவ்மி",
        rule: "Leen-like yawm sound.",
        units: [
          { ar: "يَ", ta: "ய", rule: "yaa with fatha" },
          { ar: "وْ", ta: "வ்", rule: "waw sakinah" },
          { ar: "مِ", ta: "மி", rule: "meem with kasra" }
        ]
      },
      {
        arabic: "الدِّينِ",
        tamilBox: "த்-தீன்",
        rule: "Laam shamsiyyah merges into daal with shaddah.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "دِّ", ta: "த்-தீ", rule: "daal with shaddah + long ee" },
          { ar: "ي", ta: "", silent: true, rule: "included in தீ sound" },
          { ar: "نِ", ta: "ன்", rule: "final stop noon" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "மாலிகி" },
      { word: 2, text: "யவ்மி" },
      { word: 3, text: "த்-தீன்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:4 here.]",
    notes: [
      "الدِّينِ: written laam is silent/merged because of shamsiyyah rule.",
      "Final stop represented as தீன்."
    ]
  },
  {
    ayah: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    words: [
      {
        arabic: "إِيَّاكَ",
        tamilBox: "இய்யாக",
        rule: "Shaddah on yaa gives iyyaa.",
        units: [
          { ar: "إِ", ta: "இ", rule: "hamzah with kasra" },
          { ar: "يَّ", ta: "ய்யா", rule: "yaa with shaddah + madd" },
          { ar: "كَ", ta: "க", rule: "kaaf with fatha" }
        ]
      },
      {
        arabic: "نَعْبُدُ",
        tamilBox: "நஃBுது",
        rule: "Ayn is marked with ஃ. Baa uses B convention.",
        units: [
          { ar: "نَ", ta: "ந", rule: "noon with fatha" },
          { ar: "عْ", ta: "ஃ", rule: "ayn marker" },
          { ar: "بُ", ta: "Bு", rule: "baa with dammah" },
          { ar: "دُ", ta: "து", rule: "daal with dammah" }
        ]
      },
      {
        arabic: "وَ",
        tamilBox: "வ",
        rule: "Wa is read as va/wa convention.",
        units: [
          { ar: "وَ", ta: "வ", rule: "waw with fatha" }
        ]
      },
      {
        arabic: "إِيَّاكَ",
        tamilBox: "இய்யாக",
        rule: "Repeated iyyaaka.",
        units: [
          { ar: "إِ", ta: "இ", rule: "hamzah with kasra" },
          { ar: "يَّ", ta: "ய்யா", rule: "yaa with shaddah + madd" },
          { ar: "كَ", ta: "க", rule: "kaaf with fatha" }
        ]
      },
      {
        arabic: "نَسْتَعِينُ",
        tamilBox: "நஸ்தஈன்",
        rule: "Final stop represented as nasta'een.",
        units: [
          { ar: "نَ", ta: "ந", rule: "noon with fatha" },
          { ar: "سْ", ta: "ஸ்", rule: "seen sakinah" },
          { ar: "تَ", ta: "த", rule: "taa with fatha" },
          { ar: "عِ", ta: "ஃஇ", rule: "ayn with kasra marker" },
          { ar: "ي", ta: "ஈ", rule: "long ee" },
          { ar: "نُ", ta: "ன்", rule: "final stop noon" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "இய்யாக" },
      { word: 2, text: "நஃBுது" },
      { word: 3, text: "வ" },
      { word: 4, text: "இய்யாக" },
      { word: 5, text: "நஸ்தஈன்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:5 here.]",
    notes: [
      "إِيَّاكَ: shaddah on ي is represented by ய்யா.",
      "ع uses ஃ marker as a temporary Tamil recitation convention."
    ]
  },
  {
    ayah: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    words: [
      {
        arabic: "اهْدِنَا",
        tamilBox: "இஹ்தினா",
        rule: "Starting hamzatul-wasl is pronounced at verse start.",
        units: [
          { ar: "ا", ta: "இ", rule: "starting hamzatul-wasl" },
          { ar: "هْ", ta: "ஹ்", rule: "haa sakinah" },
          { ar: "دِ", ta: "தி", rule: "daal with kasra" },
          { ar: "نَا", ta: "னா", rule: "noon + alif madd" }
        ]
      },
      {
        arabic: "الصِّرَاطَ",
        tamilBox: "ஸ்-ஸிராத்",
        rule: "Laam shamsiyyah merges into ص. Heavy ص and ط need tajweed attention.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent in connected reading" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "صِّ", ta: "ஸ்-ஸி", rule: "heavy ṣaad with shaddah" },
          { ar: "رَا", ta: "ரா", rule: "raa + madd" },
          { ar: "طَ", ta: "த்", rule: "heavy taa; stop approximation" }
        ]
      },
      {
        arabic: "الْمُسْتَقِيمَ",
        tamilBox: "அல்-முஸ்தகீம்",
        rule: "Qamariyyah laam before meem; final stop as mustaqeem.",
        units: [
          { ar: "ا", ta: "அ", rule: "initial alif" },
          { ar: "لْ", ta: "ல்", rule: "qamariyyah laam clear" },
          { ar: "مُ", ta: "மு", rule: "meem with dammah" },
          { ar: "سْ", ta: "ஸ்", rule: "seen sakinah" },
          { ar: "تَ", ta: "த", rule: "taa with fatha" },
          { ar: "قِ", ta: "கீ", rule: "qaaf + long ee approximation" },
          { ar: "يمَ", ta: "ம்", rule: "final stop meem" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "இஹ்தின" },
      { word: 2, text: "ஸ்-ஸிராத" },
      { word: 3, text: "ல்-முஸ்தகீம்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:6 here.]",
    notes: [
      "الصِّرَاطَ: shamsiyyah merge into ص.",
      "ص and ط are heavy letters; color/tooltip should teach tafkheem.",
      "الْمُسْتَقِيمَ: qamariyyah laam remains clear before م."
    ]
  },
  {
    ayah: 7,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    words: [
      {
        arabic: "صِرَاطَ",
        tamilBox: "ஸிராத்",
        rule: "Heavy ṣaad and taa need tafkheem attention.",
        units: [
          { ar: "صِ", ta: "ஸி", rule: "heavy ṣaad" },
          { ar: "رَا", ta: "ரா", rule: "raa + alif madd" },
          { ar: "طَ", ta: "த்", rule: "heavy taa; stop approximation" }
        ]
      },
      {
        arabic: "الَّذِينَ",
        tamilBox: "ல்லதீன்",
        rule: "Laam shamsiyyah merges into ذ with shaddah.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "ذِّ", ta: "ல்ல", rule: "merged dhal/thaal approximation" },
          { ar: "ي", ta: "தீ", rule: "long ee sound" },
          { ar: "نَ", ta: "ன்", rule: "final stop noon" }
        ]
      },
      {
        arabic: "أَنْعَمْتَ",
        tamilBox: "அன்அம்த",
        rule: "Noon sakinah before ع: izhaar, clear noon.",
        units: [
          { ar: "أَ", ta: "அ", rule: "hamzah with fatha" },
          { ar: "نْ", ta: "ன்", rule: "izhaar before ع" },
          { ar: "عَ", ta: "அ", rule: "ayn marker can be refined" },
          { ar: "مْ", ta: "ம்", rule: "meem sakinah" },
          { ar: "تَ", ta: "த", rule: "taa with fatha" }
        ]
      },
      {
        arabic: "عَلَيْهِمْ",
        tamilBox: "அலைஹிம்",
        rule: "Ayn + lay + him.",
        units: [
          { ar: "عَ", ta: "அ", rule: "ayn marker can be refined" },
          { ar: "لَيْ", ta: "லை", rule: "leen sound" },
          { ar: "هِ", ta: "ஹி", rule: "haa with kasra" },
          { ar: "مْ", ta: "ம்", rule: "meem sakinah" }
        ]
      },
      {
        arabic: "غَيْرِ",
        tamilBox: "ஃகைரி",
        rule: "Ghayn is approximated with ஃக. Review final convention.",
        units: [
          { ar: "غَ", ta: "ஃக", rule: "ghayn approximation" },
          { ar: "يْ", ta: "ய்", rule: "yaa sakinah" },
          { ar: "رِ", ta: "ரி", rule: "raa with kasra" }
        ]
      },
      {
        arabic: "الْمَغْضُوبِ",
        tamilBox: "அல்-மஃக்தூBி",
        rule: "Qamariyyah laam before meem. Heavy ض needs review.",
        units: [
          { ar: "ا", ta: "அ", rule: "initial alif" },
          { ar: "لْ", ta: "ல்", rule: "qamariyyah laam clear" },
          { ar: "مَ", ta: "ம", rule: "meem with fatha" },
          { ar: "غْ", ta: "ஃக்", rule: "ghayn sakinah approximation" },
          { ar: "ضُ", ta: "து", rule: "heavy daad approximation" },
          { ar: "و", ta: "ூ", rule: "long oo" },
          { ar: "بِ", ta: "Bி", rule: "baa with kasra" }
        ]
      },
      {
        arabic: "عَلَيْهِمْ",
        tamilBox: "அலைஹிம்",
        rule: "Repeated alayhim.",
        units: [
          { ar: "عَ", ta: "அ", rule: "ayn marker can be refined" },
          { ar: "لَيْ", ta: "லை", rule: "leen sound" },
          { ar: "هِ", ta: "ஹி", rule: "haa with kasra" },
          { ar: "مْ", ta: "ம்", rule: "meem sakinah" }
        ]
      },
      {
        arabic: "وَلَا",
        tamilBox: "வலா",
        rule: "Wa-laa.",
        units: [
          { ar: "وَ", ta: "வ", rule: "waw with fatha" },
          { ar: "لَا", ta: "லா", rule: "laam + alif madd" }
        ]
      },
      {
        arabic: "الضَّالِّينَ",
        tamilBox: "த்-தாள்லீன்",
        rule: "Laam shamsiyyah merges into heavy ض. Long madd and final stop as daalleen.",
        units: [
          { ar: "ا", ta: "", silent: true, rule: "hamzatul-wasl silent" },
          { ar: "لْ", ta: "", silent: true, rule: "laam shamsiyyah merged" },
          { ar: "ضَّ", ta: "த்-தா", rule: "heavy daad with shaddah + madd" },
          { ar: "ا", ta: "", silent: true, rule: "included in தா" },
          { ar: "لِّ", ta: "ல்லீ", rule: "laam with shaddah + long ee" },
          { ar: "ينَ", ta: "ன்", rule: "final stop noon" }
        ]
      }
    ],
    continuous: [
      { word: 1, text: "ஸிராத" },
      { word: 2, text: "ல்லதீன" },
      { word: 3, text: "அன்அம்த" },
      { word: 4, text: "அலைஹிம்" },
      { word: 5, text: "ஃகைரி" },
      { word: 6, text: "ல்-மஃக்தூBி" },
      { word: 7, text: "அலைஹிம்" },
      { word: 8, text: "வலா" },
      { word: 9, text: "த்-தாள்லீன்" }
    ],
    translation: "[Paste verified King Fahad Tamil translation for 1:7 here.]",
    notes: [
      "أَنْعَمْتَ: noon sakinah before ع is izhaar.",
      "Several heavy letters occur: ص, ط, غ, ض.",
      "الضَّالِّينَ: shamsiyyah merge into ض and long madd.",
      "Tamil conventions for ع, غ, ص, ض, ط should be reviewed before full publication."
    ]
  }
];

function loadSettings() {
  try {
    return {
      theme: "dark",
      showTranslation: true,
      showNotes: false,
      compactMode: false,
      fontScale: 1,
      ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
    };
  } catch {
    return { theme: "dark", showTranslation: true, showNotes: false, compactMode: false, fontScale: 1 };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function wordColor(ayahNumber, wordIndex) {
  const hue = (ayahNumber * 53 + wordIndex * 37) % 360;
  return `hsl(${hue} 82% 58%)`;
}

function unitColor(unitIndex, totalUnits) {
  const hue = (unitIndex * 137.508 + totalUnits * 19) % 360;
  return `hsl(${hue} 88% 62%)`;
}

function makeEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function applySettings() {
  document.body.classList.toggle("light", settings.theme === "light");
  document.body.classList.toggle("compact", Boolean(settings.compactMode));
  document.documentElement.style.setProperty("--reader-scale", String(settings.fontScale));

  document.getElementById("showTranslation").checked = settings.showTranslation;
  document.getElementById("showNotes").checked = settings.showNotes;
  document.getElementById("compactMode").checked = settings.compactMode;

  document.querySelectorAll(".translation-block").forEach((el) => el.classList.toggle("is-hidden", !settings.showTranslation));
  document.querySelectorAll(".notes-block").forEach((el) => el.classList.toggle("is-hidden", !settings.showNotes));
}

function renderAyahNav() {
  const nav = document.getElementById("ayahNav");
  nav.innerHTML = "";
  fatiha.forEach((ayah) => {
    const a = makeEl("a", "ayah-chip", `1:${ayah.ayah}`);
    a.href = `#ayah-${ayah.ayah}`;
    nav.appendChild(a);
  });
}

function render() {
  const app = document.getElementById("app");
  const template = document.getElementById("ayahTemplate");
  app.innerHTML = "";

  fatiha.forEach((ayah) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".ayah-card");
    card.id = `ayah-${ayah.ayah}`;

    node.querySelector(".ayah-label").textContent = `Surah 1 • Ayah ${ayah.ayah}`;
    node.querySelector(".ayah-title").textContent = ayah.arabic;
    node.querySelector(".ayah-number").textContent = `1:${ayah.ayah}`;

    const grid = node.querySelector(".word-grid");
    ayah.words.forEach((word, wordIndexZero) => {
      const wordIndex = wordIndexZero + 1;
      const color = wordColor(ayah.ayah, wordIndex);
      const box = makeWordBox(ayah, word, wordIndex, color);
      grid.appendChild(box);
    });

    const continuous = node.querySelector(".continuous-tamil");
    ayah.continuous.forEach((part) => {
      const el = makeEl("span", "cont-word", part.text);
      const color = wordColor(ayah.ayah, part.word);
      el.style.setProperty("--word-color", color);
      el.style.color = color;
      continuous.appendChild(el);
    });

    const plainTamil = ayah.continuous.map((p) => p.text).join(" ");
    node.querySelector(".copy-tamil").addEventListener("click", () => copyText(plainTamil));
    node.querySelector(".translation-text").textContent = ayah.translation;
    node.querySelector(".copy-translation").addEventListener("click", () => copyText(ayah.translation));

    const notesList = node.querySelector(".notes-list");
    ayah.notes.forEach((note) => notesList.appendChild(makeEl("li", "", note)));

    app.appendChild(node);
  });

  applySettings();
}

function makeWordBox(ayah, word, wordIndex, wordBorderColor) {
  const box = makeEl("button", "word-box");
  box.type = "button";
  box.style.setProperty("--word-color", wordBorderColor);
  box.setAttribute("aria-label", `Word ${wordIndex}: ${word.arabic}. Tamil: ${word.tamilBox}`);

  const wordNumber = makeEl("div", "word-number", `Word ${wordIndex}`);
  const arabicRow = makeEl("div", "arabic-row");
  const tamilRow = makeEl("div", "tamil-rtl-row");

  word.units.forEach((unit, unitIndexZero) => {
    const unitIndex = unitIndexZero + 1;
    const unitColorValue = unitColor(unitIndex, word.units.length);
    const arUnit = makeEl("span", `unit${unit.silent ? " silent" : ""}`, unit.ar);
    const taUnit = makeEl("span", `unit${unit.silent ? " silent" : ""}`, unit.ta);
    arUnit.style.color = unitColorValue;
    taUnit.style.color = unitColorValue;
    arUnit.title = unit.rule || "";
    taUnit.title = unit.rule || "";
    arabicRow.appendChild(arUnit);
    tamilRow.appendChild(taUnit);
  });

  const tamilPlain = makeEl("div", "tamil-plain", word.tamilBox);

  box.appendChild(wordNumber);
  box.appendChild(arabicRow);
  box.appendChild(tamilRow);
  box.appendChild(tamilPlain);
  box.addEventListener("click", () => openWordDialog(ayah, word, wordIndex, wordBorderColor));
  return box;
}

function openWordDialog(ayah, word, wordIndex, wordBorderColor) {
  const dialog = document.getElementById("wordDialog");
  const content = document.getElementById("dialogContent");
  content.innerHTML = "";

  const title = makeEl("h2", "dialog-title", `1:${ayah.ayah} • Word ${wordIndex}`);
  const ar = makeEl("p", "dialog-arabic", word.arabic);
  const ta = makeEl("p", "dialog-tamil", word.tamilBox);
  ta.style.color = wordBorderColor;
  const rule = makeEl("p", "dialog-rule", word.rule);

  const table = makeEl("div", "unit-table");
  word.units.forEach((unit, idx) => {
    const row = makeEl("div", "unit-row");
    const color = unitColor(idx + 1, word.units.length);
    const arCell = makeEl("span", "unit-cell arabic-cell", unit.ar || "—");
    const taCell = makeEl("span", "unit-cell tamil-cell", unit.ta || "silent / merged");
    const noteCell = makeEl("span", "unit-note", unit.rule || "");
    arCell.style.color = color;
    taCell.style.color = color;
    row.appendChild(arCell);
    row.appendChild(taCell);
    row.appendChild(noteCell);
    table.appendChild(row);
  });

  content.append(title, ar, ta, rule, table);
  dialog.showModal();
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

function bindControls() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    settings.theme = settings.theme === "light" ? "dark" : "light";
    saveSettings();
    applySettings();
  });

  document.getElementById("showTranslation").addEventListener("change", (event) => {
    settings.showTranslation = event.target.checked;
    saveSettings();
    applySettings();
  });

  document.getElementById("showNotes").addEventListener("change", (event) => {
    settings.showNotes = event.target.checked;
    saveSettings();
    applySettings();
  });

  document.getElementById("compactMode").addEventListener("change", (event) => {
    settings.compactMode = event.target.checked;
    saveSettings();
    applySettings();
  });

  document.getElementById("increaseFont").addEventListener("click", () => {
    settings.fontScale = Math.min(1.4, Number((settings.fontScale + 0.08).toFixed(2)));
    saveSettings();
    applySettings();
  });

  document.getElementById("decreaseFont").addEventListener("click", () => {
    settings.fontScale = Math.max(0.82, Number((settings.fontScale - 0.08).toFixed(2)));
    saveSettings();
    applySettings();
  });
}

renderAyahNav();
render();
bindControls();

const letterPalette = [
  "#ff6b6b", "#4dabf7", "#51cf66", "#ffd43b", "#cc5de8", "#20c997",
  "#ff922b", "#74c0fc", "#f06595", "#94d82d", "#9775fa", "#66d9e8",
  "#ffa8a8", "#a9e34b", "#ffc078", "#b197fc", "#63e6be", "#e599f7"
];

function wordColor(ayahNumber, wordIndex) {
  const hue = (ayahNumber * 47 + wordIndex * 71) % 360;
  return `hsl(${hue} 78% 58%)`;
}

function unitColor(wordIndex, unitIndex) {
  return letterPalette[(wordIndex * 5 + unitIndex * 3) % letterPalette.length];
}

const fatiha = [
  {
    ayah: 1,
    title: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      { note: "Direct: ba-sin-meem. Meem has kasra.", units: [
        { ar: "بِ", ta: "Bி" }, { ar: "سْ", ta: "ஸ்" }, { ar: "مِ", ta: "மி" }
      ]},
      { note: "Connected reading: initial hamzatul-wasl is silent; read as llaahi.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "ل", ta: "ல்" }, { ar: "لّٰ", ta: "லா" }, { ar: "هِ", ta: "ஹி" }
      ]},
      { note: "Laam shamsiyyah merges into raa; connected sound: r-rahmaani.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "رَّ", ta: "ர்-ர" }, { ar: "حْ", ta: "ஹ்" }, { ar: "مَٰ", ta: "மா" }, { ar: "نِ", ta: "னி" }
      ]},
      { note: "Laam shamsiyyah merges into raa; final stop may end as raheem.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "رَّ", ta: "ர்-ர" }, { ar: "حِ", ta: "ஹி" }, { ar: "ي", ta: "ஈ" }, { ar: "مِ", ta: "மி" }
      ]}
    ],
    continuous: ["Bிஸ்மி", "ல்லாஹிர்", "ரஹ்மானிர்", "ரஹீம்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:1 here.]",
    notes: ["Hamzatul-wasl in اللَّهِ is not pronounced when continuing.", "الرَّحْمَٰنِ and الرَّحِيمِ use Laam Shamsiyyah/idghaam into ر.", "Final word can be stopped as ரஹீம்."]
  },
  {
    ayah: 2,
    title: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    words: [
      { note: "Qamariyyah laam stays clear before ح.", units: [
        { ar: "ا", ta: "அ" }, { ar: "لْ", ta: "ல்" }, { ar: "حَ", ta: "ஹ" }, { ar: "مْ", ta: "ம்" }, { ar: "دُ", ta: "து" }
      ]},
      { note: "Read as lillaahi.", units: [
        { ar: "لِ", ta: "லி" }, { ar: "لّٰ", ta: "ல்லா" }, { ar: "هِ", ta: "ஹி" }
      ]},
      { note: "Shaddah on baa gives doubled ப/ப் sound.", units: [
        { ar: "رَ", ta: "ர" }, { ar: "بِّ", ta: "ப்பி" }
      ]},
      { note: "Qamariyyah laam before ع. Continuous reading attaches the l sound after rabbi.", units: [
        { ar: "ا", ta: "அ" }, { ar: "لْ", ta: "ல்" }, { ar: "عَٰ", ta: "ஆ" }, { ar: "لَ", ta: "ல" }, { ar: "مِ", ta: "மி" }, { ar: "ينَ", ta: "ஈன்" }
      ]}
    ],
    continuous: ["அல்ஹம்து", "லில்லாஹி", "ரப்பில்", "ஆலமீன்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:2 here.]",
    notes: ["الْحَمْدُ keeps clear laam because ح is qamariyyah.", "رَبِّ has shaddah; Tamil box uses doubled sound.", "End of verse may stop as ஆலமீன்."]
  },
  {
    ayah: 3,
    title: "الرَّحْمَٰنِ الرَّحِيمِ",
    words: [
      { note: "Laam shamsiyyah merges into raa.", units: [
        { ar: "ا", ta: "அ", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "رَّ", ta: "ர்-ர" }, { ar: "حْ", ta: "ஹ்" }, { ar: "مَٰ", ta: "மா" }, { ar: "نِ", ta: "னி" }
      ]},
      { note: "Laam shamsiyyah merges into raa.", units: [
        { ar: "ا", ta: "அ", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "رَّ", ta: "ர்-ர" }, { ar: "حِ", ta: "ஹி" }, { ar: "ي", ta: "ஈ" }, { ar: "مِ", ta: "மி" }
      ]}
    ],
    continuous: ["அர்-ரஹ்மானிர்", "ரஹீம்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:3 here.]",
    notes: ["Both words contain sun-letter merging into ر.", "Final word can be stopped as ரஹீம்."]
  },
  {
    ayah: 4,
    title: "مَالِكِ يَوْمِ الدِّينِ",
    words: [
      { note: "Madd tabee'i on alif: maa.", units: [
        { ar: "مَ", ta: "ம" }, { ar: "ا", ta: "ா" }, { ar: "لِ", ta: "லி" }, { ar: "كِ", ta: "கி" }
      ]},
      { note: "Leen sound in yawm.", units: [
        { ar: "يَ", ta: "ய" }, { ar: "وْ", ta: "வ்" }, { ar: "مِ", ta: "மி" }
      ]},
      { note: "Laam shamsiyyah merges into daal with shaddah.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "دِّ", ta: "த்-தீ" }, { ar: "ي", ta: "" }, { ar: "نِ", ta: "ன்" }
      ]}
    ],
    continuous: ["மாலிகி", "யவ்மித்-தீன்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:4 here.]",
    notes: ["الدِّينِ uses sun-letter merging; the ل is not pronounced.", "Final stop commonly ends as தீன்."]
  },
  {
    ayah: 5,
    title: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    words: [
      { note: "Shaddah on yaa gives iyyaa.", units: [
        { ar: "إِ", ta: "இ" }, { ar: "يَّ", ta: "ய்யா" }, { ar: "كَ", ta: "க" }
      ]},
      { note: "Ayn is shown with ஃ marker; baa is shown with B style.", units: [
        { ar: "نَ", ta: "ந" }, { ar: "عْ", ta: "ஃ" }, { ar: "بُ", ta: "Bு" }, { ar: "دُ", ta: "து" }
      ]},
      { note: "Wa is read as வ.", units: [
        { ar: "وَ", ta: "வ" }
      ]},
      { note: "Shaddah on yaa gives iyyaa.", units: [
        { ar: "إِ", ta: "இ" }, { ar: "يَّ", ta: "ய்யா" }, { ar: "كَ", ta: "க" }
      ]},
      { note: "Seen + taa + ayn; final stop may end as ஈன்.", units: [
        { ar: "نَ", ta: "ந" }, { ar: "سْ", ta: "ஸ்" }, { ar: "تَ", ta: "த" }, { ar: "عِ", ta: "ஃஇ" }, { ar: "ي", ta: "ஈ" }, { ar: "نُ", ta: "ன்" }
      ]}
    ],
    continuous: ["இய்யாக", "நஃBுது", "வ", "இய்யாக", "நஸ்தஈன்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:5 here.]",
    notes: ["إِيَّاكَ has shaddah on ي.", "ع is represented with a Tamil marker for now; this convention can be adjusted."]
  },
  {
    ayah: 6,
    title: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    words: [
      { note: "Starting hamzatul-wasl is pronounced at verse start.", units: [
        { ar: "ا", ta: "இ" }, { ar: "هْ", ta: "ஹ்" }, { ar: "دِ", ta: "தி" }, { ar: "نَا", ta: "னா" }
      ]},
      { note: "Laam shamsiyyah merges into ṣaad; heavy letter needs tajweed note.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "صِّ", ta: "ஸ்-ஸி" }, { ar: "رَا", ta: "ரா" }, { ar: "طَ", ta: "த்" }
      ]},
      { note: "Qamariyyah laam before meem; continuous reading links as al-mustaqeem.", units: [
        { ar: "ا", ta: "அ" }, { ar: "لْ", ta: "ல்" }, { ar: "مُ", ta: "மு" }, { ar: "سْ", ta: "ஸ்" }, { ar: "تَ", ta: "த" }, { ar: "قِ", ta: "கீ" }, { ar: "يمَ", ta: "ம்" }
      ]}
    ],
    continuous: ["இஹ்தினஸ்-ஸிராதல்-முஸ்தகீம்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:6 here.]",
    notes: ["الصِّرَاطَ has sun-letter merging and tafkheem on ص/ط.", "الْمُسْتَقِيمَ has qamariyyah laam before م."]
  },
  {
    ayah: 7,
    title: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    words: [
      { note: "Heavy ṣaad; Tamil convention can be refined.", units: [
        { ar: "صِ", ta: "ஸி" }, { ar: "رَا", ta: "ரா" }, { ar: "طَ", ta: "த்" }
      ]},
      { note: "Laam shamsiyyah merges into dhaal/ذ with shaddah.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "ذِّ", ta: "ல்-ல" }, { ar: "ي", ta: "தீ" }, { ar: "نَ", ta: "ன்" }
      ]},
      { note: "Noon before ayn: izhaar; keep clear noon.", units: [
        { ar: "أَ", ta: "அ" }, { ar: "نْ", ta: "ன்" }, { ar: "عَ", ta: "ஃஅ" }, { ar: "مْ", ta: "ம்" }, { ar: "تَ", ta: "த" }
      ]},
      { note: "Ayn/haa sequence; final meem is pronounced in connected reading.", units: [
        { ar: "عَ", ta: "அ" }, { ar: "لَيْ", ta: "லை" }, { ar: "هِ", ta: "ஹி" }, { ar: "مْ", ta: "ம்" }
      ]},
      { note: "Ghayn is approximated; heavy articulation should be taught by tooltip.", units: [
        { ar: "غَ", ta: "ஃக" }, { ar: "يْ", ta: "ய்" }, { ar: "رِ", ta: "ரி" }
      ]},
      { note: "Qamariyyah laam before meem; daad is heavy.", units: [
        { ar: "ا", ta: "அ" }, { ar: "لْ", ta: "ல்" }, { ar: "مَ", ta: "ம" }, { ar: "غْ", ta: "ஃக்" }, { ar: "ضُ", ta: "து" }, { ar: "و", ta: "ூ" }, { ar: "بِ", ta: "Bி" }
      ]},
      { note: "Repeated عليهم.", units: [
        { ar: "عَ", ta: "அ" }, { ar: "لَيْ", ta: "லை" }, { ar: "هِ", ta: "ஹி" }, { ar: "مْ", ta: "ம்" }
      ]},
      { note: "Wa-laa.", units: [
        { ar: "وَ", ta: "வ" }, { ar: "لَا", ta: "லா" }
      ]},
      { note: "Laam shamsiyyah merges into heavy daad; madd on long aa and final leen/long ending.", units: [
        { ar: "ا", ta: "", silent: true }, { ar: "لْ", ta: "", silent: true }, { ar: "ضَّ", ta: "த்-தா" }, { ar: "ا", ta: "" }, { ar: "لِّ", ta: "ல்லீ" }, { ar: "ينَ", ta: "ன்" }
      ]}
    ],
    continuous: ["ஸிராதல்-லதீன", "அன்அம்த", "அலைஹிம்", "ஃகைரில்", "மஃக்தூBி", "அலைஹிம்", "வலத்-தாள்லீன்"],
    translation: "[Paste verified King Fahad Tamil translation for 1:7 here.]",
    notes: ["This verse has several heavy letters: ص, ط, غ, ض.", "أَنْعَمْتَ has izhaar because نْ is before ع.", "الضَّالِّينَ has sun-letter merging into ض and long madd.", "Tamil phonetic choices for ص/ض/غ/ع should be reviewed before final publication."]
  }
];

const app = document.getElementById("app");
const template = document.getElementById("ayahTemplate");

function span(text, className, style = {}) {
  const el = document.createElement("span");
  el.textContent = text;
  if (className) el.className = className;
  Object.assign(el.style, style);
  return el;
}

function render() {
  app.innerHTML = "";

  fatiha.forEach((ayah) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".ayah-card");
    node.querySelector(".ayah-label").textContent = `Surah 1 • Ayah ${ayah.ayah}`;
    node.querySelector(".ayah-title").textContent = "Al-Fatihah";
    node.querySelector(".ayah-number").textContent = `1:${ayah.ayah}`;

    const grid = node.querySelector(".word-grid");
    ayah.words.forEach((word, wordIdx) => {
      const wIndex = wordIdx + 1;
      const wColor = wordColor(ayah.ayah, wIndex);
      const box = document.createElement("section");
      box.className = "word-box";
      box.style.setProperty("--word-color", wColor);
      box.title = word.note || "";

      const arabicRow = document.createElement("div");
      arabicRow.className = "arabic-row";
      const tamilRow = document.createElement("div");
      tamilRow.className = "tamil-rtl-row";

      word.units.forEach((unit, unitIdx) => {
        const color = unitColor(wIndex, unitIdx + 1);
        const arSpan = span(unit.ar, `unit${unit.silent ? " silent" : ""}`, { "--unit-color": color });
        const taSpan = span(unit.ta, `unit${unit.silent ? " silent" : ""}`, { "--unit-color": color });
        arSpan.style.color = color;
        taSpan.style.color = color;
        if (unit.silent) {
          arSpan.title = "Silent / merged in connected reading";
          taSpan.title = "Silent / merged in connected reading";
        }
        arabicRow.appendChild(arSpan);
        tamilRow.appendChild(taSpan);
      });

      const meta = document.createElement("div");
      meta.className = "word-meta";
      meta.textContent = `Word ${wIndex}`;

      box.appendChild(arabicRow);
      box.appendChild(tamilRow);
      box.appendChild(meta);
      grid.appendChild(box);
    });

    const cont = node.querySelector(".continuous-tamil");
    ayah.continuous.forEach((text, idx) => {
      const color = wordColor(ayah.ayah, Math.min(idx + 1, ayah.words.length));
      const word = span(text, "cont-word");
      word.style.setProperty("--word-color", color);
      word.style.color = color;
      cont.appendChild(word);
    });

    node.querySelector(".translation-text").textContent = ayah.translation;

    const notesList = node.querySelector(".notes-list");
    ayah.notes.forEach((note) => {
      const li = document.createElement("li");
      li.textContent = note;
      notesList.appendChild(li);
    });

    app.appendChild(node);
  });

  syncControls();
}

function syncControls() {
  const showTranslation = document.getElementById("toggleTranslation").checked;
  const showNotes = document.getElementById("toggleNotes").checked;
  document.querySelectorAll(".translation-block").forEach((el) => el.classList.toggle("is-hidden", !showTranslation));
  document.querySelectorAll(".notes-block").forEach((el) => el.classList.toggle("is-hidden", !showNotes));
  document.body.classList.toggle("compact", document.getElementById("compactMode").checked);
}

["toggleTranslation", "toggleNotes", "compactMode"].forEach((id) => {
  document.getElementById(id).addEventListener("change", syncControls);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

render();

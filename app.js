const STORAGE_KEY = "tamil-quran-full-v9-settings";
const QURAN_API = "https://api.quran.com/api/v4";
const QURAN_AUDIO_BASE = "https://audio.qurancdn.com/";
const QURANENC_TRANSLATION_KEY = "tamil_baqavi";
const QURANENC_API = "https://quranenc.com/api/v1/translation/sura";
const AYAH_AUDIO_BASE = "https://everyayah.com/data/Husary_64kbps/";
const RECITER = "Sheikh Mahmoud Khalil Al-Husary";
const TRANSLATION_SOURCE = "QuranEnc.com — Tamil translation: Abdul Hameed Baqavi (tamil_baqavi).";
const ENGINE_NOTICE = "Auto Tamil engine v0.1";

const surahs = [
  [1,"Al-Fātiḥah","அல்பாத்திஹா",7],[2,"Al-Baqarah","அல்பகரா",286],[3,"Āl ʿImrān","ஆல இம்ரான்",200],[4,"An-Nisāʾ","அந்நிஸா",176],[5,"Al-Māʾidah","அல்மாயிதா",120],[6,"Al-Anʿām","அல்அன்ஆம்",165],[7,"Al-Aʿrāf","அல்அஃராஃப்",206],[8,"Al-Anfāl","அல்அன்பால்",75],[9,"At-Tawbah","அத்தவ்பா",129],[10,"Yūnus","யூனுஸ்",109],
  [11,"Hūd","ஹூத்",123],[12,"Yūsuf","யூஸுப்",111],[13,"Ar-Raʿd","அர்ரஃத்",43],[14,"Ibrāhīm","இப்ராஹீம்",52],[15,"Al-Ḥijr","அல்ஹிஜ்ர்",99],[16,"An-Naḥl","அந்நஹ்ல்",128],[17,"Al-Isrāʾ","அல்இஸ்ரா",111],[18,"Al-Kahf","அல்கஹ்ஃப்",110],[19,"Maryam","மர்யம்",98],[20,"Ṭā-Hā","தாஹா",135],
  [21,"Al-Anbiyāʾ","அல்அன்பியா",112],[22,"Al-Ḥajj","அல்ஹஜ்",78],[23,"Al-Muʾminūn","அல்முஃமினூன்",118],[24,"An-Nūr","அந்நூர்",64],[25,"Al-Furqān","அல்ஃபுர்கான்",77],[26,"Ash-Shuʿarāʾ","அஷ்ஷுஅரா",227],[27,"An-Naml","அந்நம்ல்",93],[28,"Al-Qaṣaṣ","அல்கஸஸ்",88],[29,"Al-ʿAnkabūt","அல்அன்கபூத்",69],[30,"Ar-Rūm","அர்ரூம்",60],
  [31,"Luqmān","லுக்மான்",34],[32,"As-Sajdah","அஸ்ஸஜ்தா",30],[33,"Al-Aḥzāb","அல்அஹ்ஸாப்",73],[34,"Sabaʾ","ஸபா",54],[35,"Fāṭir","ஃபாதிர்",45],[36,"Yā-Sīn","யாஸீன்",83],[37,"Aṣ-Ṣāffāt","அஸ்ஸாஃப்பாத்",182],[38,"Ṣād","ஸாத்",88],[39,"Az-Zumar","அஸ்ஸுமர்",75],[40,"Ghāfir","ஃகாஃபிர்",85],
  [41,"Fuṣṣilat","ஃபுஸ்ஸிலத்",54],[42,"Ash-Shūrā","அஷ்ஷூரா",53],[43,"Az-Zukhruf","அஸ்ஸுக்ருஃப்",89],[44,"Ad-Dukhān","அத்துகான்",59],[45,"Al-Jāthiyah","அல்ஜாதியா",37],[46,"Al-Aḥqāf","அல்அஹ்காஃப்",35],[47,"Muḥammad","முஹம்மத்",38],[48,"Al-Fatḥ","அல்ஃபத்ஹ்",29],[49,"Al-Ḥujurāt","அல்ஹுஜுராத்",18],[50,"Qāf","காஃப்",45],
  [51,"Adh-Dhāriyāt","அத்தாரியாத்",60],[52,"Aṭ-Ṭūr","அத்தூர்",49],[53,"An-Najm","அந்நஜ்ம்",62],[54,"Al-Qamar","அல்கமர்",55],[55,"Ar-Raḥmān","அர்ரஹ்மான்",78],[56,"Al-Wāqiʿah","அல்வாகிஆ",96],[57,"Al-Ḥadīd","அல்ஹதீத்",29],[58,"Al-Mujādilah","அல்முஜாதிலா",22],[59,"Al-Ḥashr","அல்ஹஷ்ர்",24],[60,"Al-Mumtaḥanah","அல்மும்தஹினா",13],
  [61,"Aṣ-Ṣaff","அஸ்ஸஃப்",14],[62,"Al-Jumuʿah","அல்ஜுமுஆ",11],[63,"Al-Munāfiqūn","அல்முனாஃபிகூன்",11],[64,"At-Taghābun","அத்தகாபுன்",18],[65,"Aṭ-Ṭalāq","அத்தலாக்",12],[66,"At-Taḥrīm","அத்தஹ்ரீம்",12],[67,"Al-Mulk","அல்முல்க்",30],[68,"Al-Qalam","அல்கலம்",52],[69,"Al-Ḥāqqah","அல்ஹாக்கா",52],[70,"Al-Maʿārij","அல்மஆரிஜ்",44],
  [71,"Nūḥ","நூஹ்",28],[72,"Al-Jinn","அல்ஜின்",28],[73,"Al-Muzzammil","அல்முஸ்ஸம்மில்",20],[74,"Al-Muddaththir","அல்முத்தத்திர்",56],[75,"Al-Qiyāmah","அல்கியாமா",40],[76,"Al-Insān","அல்இன்ஸான்",31],[77,"Al-Mursalāt","அல்முர்ஸலாத்",50],[78,"An-Nabaʾ","அந்நபஅ",40],[79,"An-Nāziʿāt","அந்நாஸிஆத்",46],[80,"ʿAbasa","அபஸ",42],
  [81,"At-Takwīr","அத்தக்வீர்",29],[82,"Al-Infiṭār","அல்இன்பிதார்",19],[83,"Al-Muṭaffifīn","அல்முதஃபிஃபீன்",36],[84,"Al-Inshiqāq","அல்இன்ஷிகாக்",25],[85,"Al-Burūj","அல்புரூஜ்",22],[86,"Aṭ-Ṭāriq","அத்தாரிக்",17],[87,"Al-Aʿlā","அல்அஃலா",19],[88,"Al-Ghāshiyah","அல்காஷியா",26],[89,"Al-Fajr","அல்ஃபஜ்ர்",30],[90,"Al-Balad","அல்பலத்",20],
  [91,"Ash-Shams","அஷ்ஷம்ஸ்",15],[92,"Al-Layl","அல்லைல்",21],[93,"Aḍ-Ḍuḥā","அத்துஹா",11],[94,"Ash-Sharḥ","அஷ்ஷர்ஹ்",8],[95,"At-Tīn","அத்தீன்",8],[96,"Al-ʿAlaq","அல்அலக்",19],[97,"Al-Qadr","அல்கத்ர்",5],[98,"Al-Bayyinah","அல்பய்யினா",8],[99,"Az-Zalzalah","அஸ்ஸல்ஸலா",8],[100,"Al-ʿĀdiyāt","அல்ஆதியாத்",11],
  [101,"Al-Qāriʿah","அல்காரிஆ",11],[102,"At-Takāthur","அத்தகாசுர்",8],[103,"Al-ʿAṣr","அல்அஸ்ர்",3],[104,"Al-Humazah","அல்ஹுமஸா",9],[105,"Al-Fīl","அல்ஃபீல்",5],[106,"Quraysh","குரைஷ்",4],[107,"Al-Māʿūn","அல்மாஊன்",7],[108,"Al-Kawthar","அல்கவ்ஸர்",3],[109,"Al-Kāfirūn","அல்காஃபிரூன்",6],[110,"An-Naṣr","அந்நஸ்ர்",3],
  [111,"Al-Masad","அல்மஸத்",5],[112,"Al-Ikhlāṣ","அல்இக்லாஸ்",4],[113,"Al-Falaq","அல்ஃபலக்",5],[114,"An-Nās","அந்நாஸ்",6]
];

const state = {
  surah: Number(localStorage.getItem("lastSurah")) || 1,
  ayahIndex: Number(localStorage.getItem("lastAyahIndex")) || 0,
  cache: new Map(),
  currentData: null,
  currentAyahAudio: null
};

const els = {
  surahSelect: document.getElementById("surahSelect"),
  ayahSelect: document.getElementById("ayahSelect"),
  reader: document.getElementById("reader"),
  prev: document.getElementById("prevAyahBtn"),
  next: document.getElementById("nextAyahBtn"),
  play: document.getElementById("playAyahBtn"),
  stop: document.getElementById("stopAyahBtn"),
  status: document.getElementById("audioStatus")
};

const audio = new Audio();
audio.preload = "metadata";

init();

function init() {
  populateSurahSelect();
  setupEvents();
  loadSurah(state.surah, state.ayahIndex);
}

function populateSurahSelect() {
  els.surahSelect.innerHTML = surahs.map(([id, en, ta, count]) => `<option value="${id}">${id}. ${ta} — ${en} (${count})</option>`).join("");
  els.surahSelect.value = String(state.surah);
  populateAyahSelect(state.surah);
}

function populateAyahSelect(surahNumber) {
  const s = surahs.find(row => row[0] === Number(surahNumber));
  const count = s ? s[3] : 1;
  els.ayahSelect.innerHTML = Array.from({ length: count }, (_, i) => `<option value="${i}">${i + 1}</option>`).join("");
  if (state.ayahIndex >= count) state.ayahIndex = count - 1;
  els.ayahSelect.value = String(state.ayahIndex);
}

function setupEvents() {
  els.surahSelect.addEventListener("change", () => {
    state.surah = Number(els.surahSelect.value);
    state.ayahIndex = 0;
    populateAyahSelect(state.surah);
    loadSurah(state.surah, 0);
  });
  els.ayahSelect.addEventListener("change", () => {
    state.ayahIndex = Number(els.ayahSelect.value);
    renderCurrentAyah();
  });
  els.prev.addEventListener("click", () => moveAyah(-1));
  els.next.addEventListener("click", () => moveAyah(1));
  els.play.addEventListener("click", playCurrentAyah);
  els.stop.addEventListener("click", pauseAudio);

  let startX = 0;
  els.reader.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  els.reader.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 52) moveAyah(dx < 0 ? 1 : -1);
  }, { passive: true });

  audio.addEventListener("ended", () => {
    els.play.textContent = "▶ Play";
    els.status.textContent = RECITER;
  });
}

async function loadSurah(surahNumber, ayahIndex = 0) {
  stopAndResetAudio();
  state.surah = surahNumber;
  state.ayahIndex = ayahIndex;
  localStorage.setItem("lastSurah", String(state.surah));
  localStorage.setItem("lastAyahIndex", String(state.ayahIndex));
  populateAyahSelect(state.surah);
  showLoading();

  try {
    let data = state.cache.get(surahNumber);
    if (!data) {
      const [quranData, translationData] = await Promise.all([
        fetchQuranSurah(surahNumber),
        fetchTranslationSurah(surahNumber).catch(() => ({}))
      ]);
      data = buildSurahData(surahNumber, quranData, translationData);
      state.cache.set(surahNumber, data);
    }
    state.currentData = data;
    renderCurrentAyah();
  } catch (error) {
    console.error(error);
    if (surahNumber === 1) {
      state.currentData = buildFatihaFallback();
      renderCurrentAyah();
    } else {
      renderError("Could not load this surah. Check internet connection, then try again.");
    }
  }
}

async function fetchQuranSurah(surahNumber) {
  const allVerses = [];
  let page = 1;
  let totalPages = 1;
  do {
    const url = `${QURAN_API}/verses/by_chapter/${surahNumber}?language=en&words=true&fields=text_uthmani,text_imlaei,text_uthmani_tajweed&word_fields=text_uthmani,text_imlaei,audio_url&per_page=50&page=${page}`;
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    if (!res.ok) throw new Error(`Quran API error ${res.status}`);
    const json = await res.json();
    allVerses.push(...(json.verses || []));
    totalPages = json.pagination?.total_pages || 1;
    page += 1;
  } while (page <= totalPages);
  return allVerses;
}

async function fetchTranslationSurah(surahNumber) {
  const res = await fetch(`${QURANENC_API}/${QURANENC_TRANSLATION_KEY}/${surahNumber}`, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error(`QuranEnc error ${res.status}`);
  const json = await res.json();
  const list = Array.isArray(json) ? json : (json.result || json.verses || []);
  const map = {};
  list.forEach(item => {
    const n = Number(item.aya || item.ayah || item.verse_number);
    map[n] = stripHtml(item.translation || item.text || "");
  });
  return map;
}

function buildSurahData(surahNumber, verses, translationMap) {
  return {
    surah: surahNumber,
    meta: surahs.find(s => s[0] === surahNumber),
    ayahs: verses.map(v => {
      const sourceWords = (v.words || []).filter(w => w.char_type_name !== "end");
      const words = sourceWords.map((w, i) => {
        const arabic = w.text_uthmani || w.text_imlaei || "";
        const engine = transliterateWord(arabic, i, sourceWords);
        return {
          arabic,
          position: w.position || i + 1,
          audioUrl: w.audio_url ? QURAN_AUDIO_BASE + w.audio_url : null,
          units: engine.units,
          tamilBox: engine.text,
          rule: engine.rule
        };
      });
      return {
        surah: surahNumber,
        ayah: v.verse_number,
        verseKey: v.verse_key || `${surahNumber}:${v.verse_number}`,
        arabic: v.text_uthmani || v.text_imlaei || "",
        words,
        continuous: buildContinuous(words),
        translation: translationMap[v.verse_number] || ""
      };
    })
  };
}

function buildContinuous(words) {
  return words.map((word, index) => {
    const clean = word.tamilBox.replace(/\s+/g, "").replace(/^-/, "");
    return { word: index + 1, text: clean };
  });
}

function showLoading() {
  els.reader.innerHTML = `<section class="loading-card"><div class="spinner"></div><p>Loading Surah ${state.surah}…</p></section>`;
}
function renderError(message) {
  els.reader.innerHTML = `<section class="error-card"><p>${escapeHtml(message)}</p><button class="pill-btn" onclick="location.reload()">Reload</button></section>`;
}

function renderCurrentAyah() {
  if (!state.currentData) return;
  const ayahs = state.currentData.ayahs;
  if (!ayahs.length) return renderError("No ayah data found.");
  state.ayahIndex = Math.max(0, Math.min(state.ayahIndex, ayahs.length - 1));
  localStorage.setItem("lastAyahIndex", String(state.ayahIndex));
  els.ayahSelect.value = String(state.ayahIndex);
  const ayah = ayahs[state.ayahIndex];
  const wordColors = ayah.words.map((_, i) => wordColor(i, ayah.words.length));

  els.reader.innerHTML = `
    <article class="ayah-page" data-ayah="${ayah.verseKey}">
      <div class="ayah-head">
        <div class="ayah-title">
          <div class="ayah-key">${escapeHtml(ayah.verseKey)}</div>
          <div class="ayah-meta">${escapeHtml(state.currentData.meta?.[2] || "")} · ${escapeHtml(state.currentData.meta?.[1] || "")}</div>
        </div>
        <div class="engine-badge">${ENGINE_NOTICE}</div>
      </div>
      <div class="words-grid">
        ${ayah.words.map((word, i) => renderWordBox(word, i, wordColors[i])).join("")}
      </div>
      <section class="block">
        <h2 class="block-title">Continuous Tamil Transliteration</h2>
        <div class="continuous-tamil">
          ${ayah.continuous.map((part, i) => `<span class="continuous-word" style="color:${wordColors[i] || '#111'}">${escapeHtml(part.text)}</span>`).join(" ")}
        </div>
      </section>
      <section class="block">
        <h2 class="block-title">Abdul Hameed Baqavi Tamil Translation</h2>
        <div class="translation">${escapeHtml(ayah.translation || "Translation loading/unavailable for this ayah.")}</div>
        <div class="translation-source">${TRANSLATION_SOURCE}</div>
      </section>
    </article>
  `;

  document.querySelectorAll(".word-box").forEach(box => {
    box.addEventListener("click", () => {
      const idx = Number(box.dataset.index);
      playWord(ayah.words[idx], idx);
    });
  });
  els.status.textContent = `${RECITER} · ${ayah.verseKey}`;
}

function renderWordBox(word, i, color) {
  return `
    <button class="word-box" data-index="${i}" type="button" style="color:${color}" aria-label="Play word ${i + 1}">
      <div class="word-label">WORD ${i + 1}</div>
      <div class="arabic-units">
        ${word.units.map(u => `<span class="arabic-unit" style="color:${u.color}">${escapeHtml(u.ar)}</span>`).join("")}
      </div>
      <div class="tamil-units">
        ${word.units.map(u => u.ta ? `<span class="tamil-unit" title="${escapeHtml(u.rule || '')}" style="color:${u.color}">${escapeHtml(u.ta)}</span>` : "").join("")}
      </div>
    </button>
  `;
}

function moveAyah(delta) {
  const currentSurah = surahs.find(s => s[0] === state.surah);
  const max = state.currentData?.ayahs?.length || currentSurah?.[3] || 1;
  const nextIndex = state.ayahIndex + delta;
  stopAndResetAudio();
  if (nextIndex >= 0 && nextIndex < max) {
    state.ayahIndex = nextIndex;
    renderCurrentAyah();
    return;
  }
  const surahNext = state.surah + (delta > 0 ? 1 : -1);
  if (surahNext < 1 || surahNext > 114) return;
  const nextSurahMeta = surahs.find(s => s[0] === surahNext);
  const ayahIndex = delta > 0 ? 0 : (nextSurahMeta[3] - 1);
  state.surah = surahNext;
  els.surahSelect.value = String(state.surah);
  populateAyahSelect(state.surah);
  loadSurah(state.surah, ayahIndex);
}

function playCurrentAyah() {
  const ayah = state.currentData?.ayahs?.[state.ayahIndex];
  if (!ayah) return;
  const src = ayahAudioUrl(ayah.surah, ayah.ayah);
  if (audio.src !== src) audio.src = src;
  audio.play().then(() => {
    els.play.textContent = "▶ Resume";
    els.status.textContent = `Playing ${ayah.verseKey} · ${RECITER}`;
  }).catch(() => {
    els.status.textContent = "Audio could not start. Tap play again.";
  });
}
function pauseAudio() {
  audio.pause();
  els.play.textContent = "▶ Resume";
  els.status.textContent = "Paused. Press Play to resume.";
}
function stopAndResetAudio() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  els.play.textContent = "▶ Play";
}
function playWord(word, idx) {
  if (!word?.audioUrl) {
    els.status.textContent = `Word ${idx + 1} audio unavailable.`;
    return;
  }
  audio.pause();
  audio.src = word.audioUrl;
  audio.play().then(() => {
    els.status.textContent = `Playing word ${idx + 1}`;
    els.play.textContent = "▶ Play";
  }).catch(() => {
    els.status.textContent = "Word audio could not start. Tap again.";
  });
}
function ayahAudioUrl(surah, ayah) {
  return `${AYAH_AUDIO_BASE}${String(surah).padStart(3, "0")}${String(ayah).padStart(3, "0")}.mp3`;
}

// ---------------------- Tamil transliteration engine ----------------------
const FATHA = "\u064E", DAMMA = "\u064F", KASRA = "\u0650", SUKUN = "\u0652", SHADDA = "\u0651", DAGGER = "\u0670";
const TANWEEN_FATHA = "\u064B", TANWEEN_DAMMA = "\u064C", TANWEEN_KASRA = "\u064D";
const DIACRITICS_RE = /[\u064B-\u065F\u0670\u06D6-\u06ED]/;
const BASE_RE = /[\u0621-\u064A\u0671\u0672\u0673\u0675]/;
const SHAMSI = new Set(["ت","ث","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ل","ن"]);
const ALIF_LIKE = new Set(["ا","أ","إ","آ","ٱ"]);

const C = {
  "ب":"B", "ت":"த", "ث":"ஸ", "ج":"ஜ", "ح":"ஹ", "خ":"க்ஹ",
  "د":"த", "ذ":"ழ", "ر":"ர", "ز":"ஸ", "س":"ஸ", "ش":"ஷ",
  "ص":"ஸ", "ض":"ழ", "ط":"த", "ظ":"ழ", "ع":"ஃ", "غ":"ஃக",
  "ف":"ஃப", "ق":"க", "ك":"க", "ل":"ல", "م":"ம", "ن":"ந",
  "ه":"ஹ", "ة":"த", "و":"வ", "ي":"ய", "ى":"ய", "ء":"'"
};

function transliterateWord(rawWord, wordIndex, allWords) {
  const parsed = parseArabic(rawWord);
  const units = [];
  const bases = parsed.map(u => u.base);
  const startsAl = isAlWord(parsed);
  const isSolar = startsAl && parsed[2] && SHAMSI.has(parsed[2].base);
  const isQamari = startsAl && parsed[2] && !SHAMSI.has(parsed[2].base);
  let skip = new Set();

  for (let i = 0; i < parsed.length; i++) {
    const u = parsed[i];
    const next = parsed[i + 1];
    let ta = "";
    let rule = "direct sound";

    if (startsAl && i === 0) {
      ta = wordIndex === 0 ? "அ" : "";
      rule = wordIndex === 0 ? "initial hamzatul-wasl / alif sound" : "hamzatul-wasl silent in connected reading";
    } else if (startsAl && i === 1 && u.base === "ل") {
      if (isSolar) {
        ta = "";
        rule = "laam shamsiyyah merged/silent";
      } else if (isQamari) {
        ta = wordIndex === 0 ? "ல்" : "ல்";
        rule = "laam qamariyyah clear";
      }
    } else if (skip.has(i)) {
      ta = "";
      rule = "included in previous long vowel";
    } else {
      const longInfo = detectLongVowel(parsed, i);
      if (longInfo) {
        ta = tamilForUnit(u, longInfo.vowel, isSolar && i === 2);
        rule = longInfo.rule;
        if (longInfo.skipNext) skip.add(i + 1);
      } else {
        ta = tamilForUnit(u, null, isSolar && i === 2);
        rule = ruleForUnit(u);
      }
    }

    units.push({ ar: u.text, ta, rule, color: letterColor(i, parsed.length) });
  }

  const text = units.map(u => u.ta).join("").replace(/\s+/g, "");
  let rule = startsAl ? (isSolar ? "Al + solar letter: laam merged" : "Al + moon letter: laam clear") : "Generated direct Tamil transliteration";
  return { units, text, rule };
}

function parseArabic(word) {
  const chars = Array.from(word).filter(ch => ch !== "ـ");
  const units = [];
  for (const ch of chars) {
    if (BASE_RE.test(ch)) {
      units.push({ base: ch, marks: "", text: ch });
    } else if (DIACRITICS_RE.test(ch) && units.length) {
      units[units.length - 1].marks += ch;
      units[units.length - 1].text += ch;
    }
  }
  return units;
}

function isAlWord(parsed) {
  return parsed.length >= 3 && ALIF_LIKE.has(parsed[0].base) && parsed[1].base === "ل";
}

function detectLongVowel(parsed, i) {
  const u = parsed[i];
  const next = parsed[i + 1];
  if (!u) return null;
  if (u.marks.includes(DAGGER)) return { vowel: "aa", rule: "dagger alif / madd tabee'i", skipNext: false };
  if (u.marks.includes(FATHA) && next && ["ا","ى"].includes(next.base) && !hasShortVowel(next)) return { vowel: "aa", rule: "alif madd, 2 counts", skipNext: true };
  if (u.marks.includes(KASRA) && next && next.base === "ي" && !hasShortVowel(next)) return { vowel: "ee", rule: "yaa madd, 2 counts", skipNext: true };
  if (u.marks.includes(DAMMA) && next && next.base === "و" && !hasShortVowel(next)) return { vowel: "oo", rule: "waw madd, 2 counts", skipNext: true };
  return null;
}
function hasShortVowel(u) { return [FATHA, DAMMA, KASRA, TANWEEN_FATHA, TANWEEN_DAMMA, TANWEEN_KASRA].some(m => u.marks.includes(m)); }

function tamilForUnit(u, forcedVowel = null, doubled = false) {
  if (ALIF_LIKE.has(u.base)) return tamilForHamzaLike(u);
  if (u.base === "ء") return tamilForHamzaLike(u);
  if (u.base === "ة") return tamilForConsonant("த", u, forcedVowel, doubled);
  const base = C[u.base] || u.base;
  return tamilForConsonant(base, u, forcedVowel, doubled || u.marks.includes(SHADDA));
}

function tamilForHamzaLike(u) {
  if (u.base === "آ") return "ஆ";
  if (u.marks.includes(KASRA)) return "இ";
  if (u.marks.includes(DAMMA)) return "உ";
  if (u.marks.includes(FATHA)) return "அ";
  return "ஆ";
}

function tamilForConsonant(base, u, forcedVowel, doubled) {
  const vowel = forcedVowel || vowelOf(u);
  let sound = applyVowel(base, doubled ? "dead" : vowel);
  if (doubled) sound += applyVowel(base, vowel);
  if (u.marks.includes(TANWEEN_FATHA) || u.marks.includes(TANWEEN_DAMMA) || u.marks.includes(TANWEEN_KASRA)) {
    sound += "ன்";
  }
  return sound;
}

function vowelOf(u) {
  if (u.marks.includes(KASRA)) return "i";
  if (u.marks.includes(DAMMA)) return "u";
  if (u.marks.includes(FATHA)) return "a";
  if (u.marks.includes(SUKUN)) return "dead";
  return "a";
}

function applyVowel(base, vowel) {
  if (base === "ஃ" || base === "'") {
    if (vowel === "i") return "இ";
    if (vowel === "u") return "உ";
    if (vowel === "aa") return "ஆ";
    if (vowel === "ee") return "ஈ";
    if (vowel === "oo") return "ஊ";
    if (vowel === "dead") return "ஃ";
    return "அ";
  }
  const last = Array.from(base).pop();
  const canUseTamilMarks = /[கஙசஜஞடணதநபமயரலவழளறனஹஷஸ]/.test(last);
  if (!canUseTamilMarks) {
    if (vowel === "i") return base + "ி";
    if (vowel === "u") return base + "ு";
    if (vowel === "aa") return base + "ா";
    if (vowel === "ee") return base + "ீ";
    if (vowel === "oo") return base + "ூ";
    if (vowel === "dead") return base + "்";
    return base;
  }
  if (vowel === "i") return base + "ி";
  if (vowel === "u") return base + "ு";
  if (vowel === "aa") return base + "ா";
  if (vowel === "ee") return base + "ீ";
  if (vowel === "oo") return base + "ூ";
  if (vowel === "dead") return base + "்";
  return base;
}

function ruleForUnit(u) {
  if (u.marks.includes(SHADDA)) return "shaddah / doubled sound";
  if (u.marks.includes(SUKUN)) return "sukoon / consonant stop";
  if (u.marks.includes(TANWEEN_FATHA) || u.marks.includes(TANWEEN_DAMMA) || u.marks.includes(TANWEEN_KASRA)) return "tanween sound";
  return "direct letter-vowel sound";
}

// ---------------------- fallback and utilities ----------------------
function buildFatihaFallback() {
  const manual = [
    { ayah: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", continuous: ["Bபிஸ்மி","ல்லாஹிர்","ரஹ்மானிர்","ரஹீம்"], translation: "அளவற்ற அருளாளனும், நிகரற்ற அன்புடையோனுமாகிய அல்லாஹ்வின் திருப்பெயரால் (ஓதுகிறேன்)" },
    { ayah: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", continuous: ["அல்ஹம்து","லில்லாஹி","ரBப்Bபில்","'ஆலமீன்"], translation: "எல்லாப் புகழும் அல்லாஹ்வுக்கே! (அவன்தான்) அகிலத்தார் அனைவரையும் படைத்து வளர்த்து தகுந்த முறையில் பக்குவப்படுத்துபவன்." },
    { ayah: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", continuous: ["அர்-ரஹ்மானிர்","-ரஹீம்"], translation: "(அவன்தான்) அளவற்ற அருளாளன், நிகரற்ற அன்புடையவன்," },
    { ayah: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", continuous: ["மாலிகி","யவ்மித்","-தீன்"], translation: "தீர்ப்பு நாளின் அதிபதி(யும் அவனே)." },
    { ayah: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", continuous: ["இய்யாக","நஃபுது","வ","இய்யாக","நஸ்தஈன்"], translation: "(இறைவா!) உன்னையே நாங்கள் வணங்குகிறோம்; உன்னிடமே நாங்கள் உதவியும் தேடுகிறோம்." },
    { ayah: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", continuous: ["இஹ்தினஸ்","-ஸிராதல்","-முஸ்தகீம்"], translation: "நீ எங்களை நேரான வழியில் நடத்துவாயாக!" },
    { ayah: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", continuous: ["ஸிராத","ல்லதீன","அன்அம்த","அலைஹிம்","ஃகைரி","ல்-மஃக்தூBி","அலைஹிம்","வலழ்","-ழால்லீன்"], translation: "நீ எவர்களுக்கு அருள் புரிந்தாயோ அவர்களின் வழியில்; கோபிக்கப்பட்டவர்களின் வழியிலும் அல்ல, வழி தவறியவர்களின் வழியிலும் அல்ல." }
  ];
  return {
    surah: 1,
    meta: surahs[0],
    ayahs: manual.map(item => {
      const rawWords = item.arabic.split(/\s+/);
      const words = rawWords.map((w, i) => {
        const engine = transliterateWord(w, i, rawWords);
        if (item.continuous[i]) {
          const taText = item.continuous[i];
          engine.units = engine.units.map((u, j) => ({ ...u, ta: j === 0 ? taText : "" }));
          engine.text = taText;
        }
        return { arabic: w, position: i + 1, audioUrl: `${QURAN_AUDIO_BASE}wbw/001_${String(item.ayah).padStart(3,"0")}_${String(i+1).padStart(3,"0")}.mp3`, units: engine.units, tamilBox: engine.text, rule: engine.rule };
      });
      return { surah: 1, ayah: item.ayah, verseKey: `1:${item.ayah}`, arabic: item.arabic, words, continuous: item.continuous.map((text, i) => ({ word: i + 1, text })), translation: item.translation };
    })
  };
}

function wordColor(i, total) {
  const hue = (145 + i * 137.508) % 360;
  return `hsl(${hue.toFixed(1)} 82% 42%)`;
}
function letterColor(i, total) {
  const hue = (215 + i * 67.7) % 360;
  return `hsl(${hue.toFixed(1)} 88% 48%)`;
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[ch]));
}
function stripHtml(value) {
  const div = document.createElement("div");
  div.innerHTML = String(value || "");
  return div.textContent || div.innerText || "";
}

// script.js
const questions = [
  {
    question: "你在一個陌生的城市度過假期時，你最想要的氛圍是？",
    answers: [
      { text: "熱鬧人群與市集的活力感", type: "柑橘木質" },
      { text: "午後巷弄咖啡香的寧靜", type: "花果琥珀" },
      { text: "充滿異國香料的市集味道", type: "辛香東方" },
      { text: "海風吹拂下的自由氣息", type: "水感清新" }
    ]
  },
  {
    question: "以下哪一種畫面最能描繪你的理想午後？",
    answers: [
      { text: "陽光灑落的木質書房與咖啡香", type: "柑橘木質" },
      { text: "大自然中的青草與花香", type: "綠意花香" },
      { text: "老屋裡熟悉的皮革與香草氣味", type: "琥珀皮革" },
      { text: "潮濕霧氣中瀰漫著清新氣息", type: "水感清新" }
    ]
  },
  {
    question: "你最喜歡的香味記憶來自哪裡？",
    answers: [
      { text: "柑橘皮被剝開時釋放出的清新氣味", type: "柑橘木質" },
      { text: "一杯莓果花茶冒出的甜香氣息", type: "花果琥珀" },
      { text: "充滿神秘感的異國香料市場", type: "辛香東方" },
      { text: "海邊吹來夾帶著鹽味的風", type: "水感清新" }
    ]
  },
  {
    question: "朋友對你的第一印象可能是？",
    answers: [
      { text: "親切又富有陽光氣息", type: "柑橘木質" },
      { text: "溫柔細膩、值得信賴", type: "花果琥珀" },
      { text: "獨立有主見，有自己的風格", type: "辛香東方" },
      { text: "自然不做作，像一陣清新微風", type: "水感清新" }
    ]
  },
  {
    question: "你偏好的穿衣風格是？",
    answers: [
      { text: "簡約自然，重視材質與舒適度", type: "木質調" },
      { text: "柔美文藝，注重細節層次", type: "花果琥珀" },
      { text: "帶點神秘氣息的異國風格", type: "辛香東方" },
      { text: "輕盈清爽，如空氣般自在", type: "水感清新" }
    ]
  },
  {
    question: "如果你是一種香味，你會是？",
    answers: [
      { text: "早晨陽光中的柑橘香氣", type: "柑橘木質" },
      { text: "盛夏果園中的花果香", type: "花果琥珀" },
      { text: "藏書房裡的木頭與皮革", type: "琥珀皮革" },
      { text: "清晨霧氣裡的青草與水氣", type: "水感清新" }
    ]
  }
];

const results = {
  "柑橘木質": {
    title: "溫暖柑橘木質調",
    image: "images/citrus.jpg",
    description: "你散發著令人安心的力量，像日光穿透林間，予人溫暖與希望。你的香氣帶有柑橘的清新與木質的沉穩，總能令人放鬆與依賴。"
  },
  "花果琥珀": {
    title: "柔和花果琥珀調",
    image: "images/amber.jpg",
    description: "你如同午後果茶般溫柔而具有層次，擁有細膩的情感與迷人的魅力，是人群中的療癒系靈魂。"
  },
  "辛香東方": {
    title: "神秘辛香東方調",
    image: "images/spicy.jpg",
    description: "你擁有無法被輕易定義的魅力，散發著探索與冒險的精神。就像異國的香料氣味，神秘又令人著迷。"
  },
  "水感清新": {
    title: "清新水感調",
    image: "images/aqua.jpg",
    description: "你如同海風般自由、透明而不造作，總是帶來一股讓人安心的氣場，是身邊人的清流存在。"
  },
  "琥珀皮革": {
    title: "復古琥珀皮革調",
    image: "images/leather.jpg",
    description: "你擁有深沉穩重的靈魂，像老屋裡的皮革與書香，充滿故事與魅力，讓人忍不住想一探究竟。"
  },
  "綠意花香": {
    title: "自然綠意花香調",
    image: "images/green.jpg",
    description: "你與自然有著深刻連結，如同森林與晨霧中盛開的花朵，清新脫俗、充滿生機與療癒力。"
  }
};

const startBtn = document.getElementById("start-btn");
const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const questionContainer = document.getElementById("question-container");
const resultContent = document.getElementById("result-content");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let typeScores = {};

startBtn.addEventListener("click", () => {
  introSection.classList.remove("active");
  quizSection.classList.add("active");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<h2>${q.question}</h2>`;
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.type));
    questionContainer.appendChild(btn);
  });
}

function selectAnswer(type) {
  typeScores[type] = (typeScores[type] || 0) + 1;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizSection.classList.remove("active");
  resultSection.classList.add("active");

  const topType = Object.entries(typeScores).sort((a, b) => b[1] - a[1])[0][0];
  const result = results[topType];
  resultContent.innerHTML = `
    <img src="${result.image}" alt="${result.title}" />
    <h2>${result.title}</h2>
    <p>${result.description}</p>
  `;
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  typeScores = {};
  resultSection.classList.remove("active");
  introSection.classList.add("active");
});

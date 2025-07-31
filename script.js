
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
      { text: "陽光灑落的木質書房與咖啡香", type: "木質調" },
      { text: "大自然中的青草與花香", type: "綠意花香" },
      { text: "老屋裡熟悉的皮革與香草氣味", type: "琥珀皮革" },
      { text: "潮濕霧氣中瀰漫著清新氣息", type: "水感清新" }
    ]
  }
  // 題目 3~6 可在此補上
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
  }
  // 其他香氣類型可補上
};

let currentQuestionIndex = 0;
let typeScores = {};

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestionIndex];
  const container = document.getElementById("question-container");
  container.innerHTML = `<h2>${q.question}</h2>`;
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.type));
    container.appendChild(btn);
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
  document.getElementById("quiz").classList.remove("active");
  document.getElementById("result").classList.add("active");

  const topType = Object.entries(typeScores).sort((a, b) => b[1] - a[1])[0][0];
  const result = results[topType];
  const container = document.getElementById("result-content");
  container.innerHTML = `
    <img src="${result.image}" alt="${result.title}" />
    <h2>${result.title}</h2>
    <p>${result.description}</p>
  `;
}

document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  typeScores = {};
  document.getElementById("result").classList.remove("active");
  document.getElementById("intro").classList.add("active");
});

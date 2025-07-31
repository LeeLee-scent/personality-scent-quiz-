
const questions = [
  { question: "你早晨醒來的第一個念頭？", answers: [
    { text: "享受靜謐獨處", type: "沉香型" },
    { text: "迎接新的冒險", type: "柑橘型" }
  ] },
  // 其他題目省略...
];

let currentQuestionIndex = 0;
let answerCount = {};

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<h2>${current.question}</h2>` +
    current.answers.map(a => `<button onclick="selectAnswer('${a.type}')">${a.text}</button>`).join("<br>");
}

function selectAnswer(type) {
  answerCount[type] = (answerCount[type] || 0) + 1;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let result = Object.entries(answerCount).sort((a,b)=>b[1]-a[1])[0][0];
  questionContainer.innerHTML = `<h2>你的香氣人格是：${result}</h2>`;
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", showQuestion);
showQuestion();

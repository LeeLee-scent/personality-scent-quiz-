// script.js - 香氣心靈指引測驗
const questions = [
  {
    question: "Q1. 回想最近這段時間，你最常感到心靈上的空缺是什麼？",
    image: "images/q1.jpg",
    answers: [
      { text: "A. 缺乏方向，渴望思緒清晰", type: "cloud" },
      { text: "B. 情感起伏，渴望內在平靜", type: "water" },
      { text: "C. 感到疲憊，渴望被激勵", type: "fire" },
      { text: "D. 腳步不穩，渴望安定感", type: "rainbow" }
    ]
  },
  {
    question: "Q2. 在一個寧靜的午後，哪種景象最能觸動你的內心？",
    image: "images/q2.jpg",
    answers: [
      { text: "A. 獨自品茗，享受文字與思考的時刻", type: "cloud" },
      { text: "B. 聆聽一段能觸動心弦的音樂", type: "water" },
      { text: "C. 動手完成一件充滿熱情的手作", type: "fire" },
      { text: "D. 整理房間，將空間打理得井然有序", type: "rainbow" }
    ]
  },
  {
    question: "Q3. 當你感到壓力時，最常選擇什麼方式來釋放？",
    image: "images/q3.jpg",
    answers: [
      { text: "A. 抽離情境，給自己一個放空的時間", type: "cloud" },
      { text: "B. 允許自己哭泣，讓情緒自然流動", type: "water" },
      { text: "C. 投入一場酣暢淋漓的運動", type: "fire" },
      { text: "D. 做一頓美食，用味覺安撫自己", type: "rainbow" }
    ]
  },
  {
    question: "Q4. 想像你是一個旅人，你最想探索哪一種地方？",
    image: "images/q4.jpg",
    answers: [
      { text: "A. 充滿歷史的古老圖書館", type: "cloud" },
      { text: "B. 潮汐變幻的無人海邊", type: "water" },
      { text: "C. 炙熱且充滿挑戰的火山", type: "fire" },
      { text: "D. 紮根於土地的寧靜森林", type: "rainbow" }
    ]
  },
  {
    question: "Q5. 你的朋友最常向你尋求什麼樣的幫助？",
    image: "images/q5.jpg",
    answers: [
      { text: "A. 清晰的建議與客觀的分析", type: "cloud" },
      { text: "B. 溫柔的傾聽與情感的支持", type: "water" },
      { text: "C. 鼓舞與行動的能量", type: "fire" },
      { text: "D. 實際的幫助與安定的力量", type: "rainbow" }
    ]
  },
  {
    question: "Q6. 哪種生活方式最吸引你？",
    image: "images/q6.jpg",
    answers: [
      { text: "A. 簡約而有規律，思緒不被干擾", type: "cloud" },
      { text: "B. 充滿情感，與愛的人緊密連結", type: "water" },
      { text: "C. 自由而熱情，不斷探索新事物", type: "fire" },
      { text: "D. 腳踏實地，享受當下的平凡美好", type: "rainbow" }
    ]
  }
];

const results = {
  cloud: {
    title: "靜心之徑",
    image: "images/result_cloud.jpg",
    hashtags: ["#思緒之流", "#靜心覺察", "#內在智慧"],
    description: "親愛的靈魂旅人，你的選擇顯示，你正處於一個需要**『內在靜心』**的階段。你的心智或許正在尋找清晰，渴望從雜亂的思緒中解脫。這不是性格，而是一個邀請：邀請你停下來，為自己創造一個寧靜的空間，讓你的智慧之光重新閃耀。",
    analysis: "你的能量此刻與奧修禪卡**『靜心』(Meditation)**的牌卡相應。這張牌提醒你，真正的力量來自於放空與覺察。**木質調與草本香氣**，如檀香、雪松、迷迭香，能為你創造一個堅實的靜心空間，幫助你紮根於當下，讓心靈像一片晴朗的天空般澄澈。"
  },
  water: {
    title: "療癒之泉",
    image: "images/result_water.jpg",
    hashtags: ["#情感之海", "#流動之心", "#愛的連結"],
    description: "親愛的靈魂旅人，你正經歷一場深層的內在清洗。或許有些情感的烏雲籠罩，或是過往的疲憊正在湧現。這不是軟弱的時刻，而是一個珍貴的訊號：你的靈魂渴望被**『療癒與滋養』**，並與內在的愛重新連結。",
    analysis: "你的能量此刻與奧修禪卡**『內在之聲』(Inner Voice)**的牌卡相應。這張牌提醒你，向內聆聽，你的直覺會指引你走向平靜。**花香調與水生香氣**，如玫瑰、茉莉、橙花，能像輕柔的流水般，安撫你緊繃的神經，並滋養你的心靈，讓你感到被愛與支持。"
  },
  fire: {
    title: "啟程的火焰",
    image: "images/result_fire.jpg",
    hashtags: ["#生命之火", "#行動勇氣", "#熱情創造"],
    description: "親愛的靈魂旅人，你正站在一個充滿潛力與新冒險的起點。你的內在之火正在燃燒，充滿了勇氣與行動的渴望。這股強大的能量有時讓你過於專注於前方，而忘了停下來感受當下微風的拂過。這是一個召喚你**『勇敢躍入未知』**的時刻。",
    analysis: "你的能量此刻與奧修禪卡**『勇氣』(Courage)**的牌卡相應。這張牌提醒你，真正的勇氣不是無所畏懼，而是允許自己去感受，然後再帶著這份感受向前。**辛辣與柑橘香氣**，如佛手柑、生薑、葡萄柚，能為你注入活力與熱情，提醒你生命的冒險充滿了喜悅與力量。"
  },
  rainbow: {
    title: "豐盛之林",
    image: "images/result_rainbow.jpg",
    hashtags: ["#大地之根", "#物質豐盛", "#當下滿足"],
    description: "親愛的靈魂旅人，你正尋求一種深刻的**『穩定感』**。你可能感到有些漂浮不定，或渴望找到一個能讓你安心停泊的港灣。這是一個重新與你的根源連結，並找回內在力量的時刻。豐盛並非來自外在，而是來自你對當下的全然接納。",
    analysis: "你的能量此刻與奧修禪卡**『豐盛』(Abundance)**的牌卡相應。這張牌提醒你，真正的豐盛來自於你與大地的連結。**麝香與溫暖木質調**，如岩蘭草、廣藿香、琥珀，能為你提供堅實的支撐，讓你感到腳踏實地，並在簡單的物質生活中找到內在的滿足與平靜。"
  }
};

// State
let current = 0;
// 關鍵修正：將計分變數名稱改為奧修禪卡花色
let scores = { cloud: 0, water: 0, fire: 0, rainbow: 0 };
const total = questions.length;
let currentSelection = null;

// Elements
const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');
const quiz = document.getElementById('quiz');
const questionTitle = document.getElementById('questionTitle');
const answersDiv = document.getElementById('answers');
const questionImage = document.getElementById('questionImage');
const progressText = document.getElementById('progressText');
const nextBtn = document.getElementById('nextBtn');
const resultSection = document.getElementById('result');
const resultTitle = document.getElementById('resultTitle');
const resultImage = document.getElementById('resultImage');
const resultDesc = document.getElementById('resultDesc');
const resultHashtags = document.getElementById('resultHashtags');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');

const logo = document.querySelector('.site-header .logo');
const introTitleContainer = document.querySelector('.intro-title-container');
const introTitleLeft = document.querySelector('.intro-title-left');
const introTitleRight = document.querySelector('.intro-title-right');
const introTextWrapper = document.querySelector('.intro-text-wrapper');

// 動畫效果
function typeText(element, text, speed = 50, callback) {
  element.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

function animateIntroPage() {
  logo.style.animation = 'fadeInUp 1s forwards';

  logo.addEventListener('animationend', () => {
    introTitleContainer.style.opacity = 1;
    typeText(introTitleLeft, '測一測', 100, () => {
      typeText(introTitleRight, '你的風格香', 100, () => {
        introTextWrapper.style.animation = 'fadeIn 1s forwards';
        startBtn.style.animation = 'fadeIn 1s forwards';
      });
    });
  }, { once: true });
}

document.addEventListener('DOMContentLoaded', animateIntroPage);

startBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  quiz.classList.remove('hidden');
  current = 0;
  scores = { cloud: 0, water: 0, fire: 0, rainbow: 0 };
  renderQuestion();
});

function renderQuestion() {
  const q = questions[current];
  questionImage.src = q.image;
  progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
  answersDiv.innerHTML = '';
  currentSelection = null;
  q.answers.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.style.color = "#3b2f2f";
    btn.dataset.type = a.type;
    btn.addEventListener('click', () => selectAnswer(btn));
    answersDiv.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  typeText(questionTitle, q.question);
}

function selectAnswer(selectedBtn) {
  const selectedType = selectedBtn.dataset.type;

  answersDiv.querySelectorAll('button').forEach(b => {
    b.classList.remove('selected');
  });

  selectedBtn.classList.add('selected');
  currentSelection = selectedType;

  if (currentSelection && current < total - 1) {
    nextBtn.style.display = 'inline-block';
  } else if (currentSelection && current === total - 1) {
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', () => {
  if (currentSelection) {
    scores[currentSelection]++;
    current++;
    if (current < total) {
      renderQuestion();
    } else {
      showResult();
    }
  }
});


function showResult() {
  quiz.classList.add('hidden');
  resultSection.classList.remove('hidden');
  let highest = 'cloud';
  let max = -1;
  for (const k in scores) {
    if (scores[k] > max) { max = scores[k]; highest = k; }
  }
  const r = results[highest];

  // 更新結果頁面
  resultTitle.textContent = r.title;
  resultImage.src = r.image;

  // 顯示標籤
  resultHashtags.innerHTML = r.hashtags.map(tag => `<div>${tag}</div>`).join('');

  // 結合描述和分析
  resultDesc.innerHTML = `<p>${r.description}</p><p>${r.analysis}</p>`;
}

restartBtn.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
});

shareBtn.addEventListener('click', () => {
  const highest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const resultText = results[highest].title;
  const shareText = `我的香氣心靈指引是【${resultText}】！快來測測看你是哪一種吧！\n${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: '香氣心靈指引測驗',
      text: shareText,
      url: window.location.href
    }).catch((error) => console.log('分享失敗', error));
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('結果已複製到剪貼簿，可以去貼給朋友囉！');
    }).catch((err) => {
      console.error('無法複製到剪貼簿', err);
    });
  }
});

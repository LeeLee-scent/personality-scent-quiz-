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
    spiritual_message: "親愛的靈魂旅人，你的內在此刻正在尋求一份全然的安靜與澄澈。你的心智或許正被繁雜的訊息所淹沒，這是一個來自你靈魂深處的邀請：停下來，回到內在的家，為自己清理出一個能夠清晰思考的空間。",
    energy_insight: "你的能量此刻與奧修禪卡**『靜心』(Meditation)**的牌卡相應。你不需要向外尋找答案，因為所有的智慧都已在你心中。這張牌提醒你，真正的力量來自於放空與覺察。",
    fragrance_guide: "這款香氣將是你的心靈地圖。**木質調與草本香氣**，如**檀香、雪松、迷迭香**，能為你創造一個堅實的靜心空間，幫助你紮根於當下，讓心靈像一片晴朗的天空般澄澈。",
    mindful_ritual: "每日清晨，點燃此香氛，靜坐三分鐘。什麼都不做，只是專注於呼吸和香氣，感受當下的存在。讓香氣引導你，慢慢回到內在的平靜核心。"
  },
  water: {
    title: "療癒之泉",
    image: "images/result_water.jpg",
    hashtags: ["#情感之海", "#流動之心", "#愛的連結"],
    spiritual_message: "親愛的靈魂旅人，你的心是一片廣闊的海洋，此刻正經歷潮汐般的起伏。或許有些情緒的烏雲籠罩，或是過往的疲憊正在湧現。這不是軟弱的時刻，而是一個珍貴的訊號：你的靈魂渴望被無條件地接納與療癒。",
    energy_insight: "你的能量此刻與奧修禪卡**『內在之聲』(Inner Voice)**的牌卡相應。你所擁有的直覺是無價的禮物，它能指引你穿越情感的迷霧。允許自己去感受所有情緒，因為真正的療癒始於愛與接納。",
    fragrance_guide: "這款香氣將是你的溫柔懷抱。**花香調與水生香氣**，如**玫瑰、茉莉、橙花**，能像輕柔的流水般，安撫你緊繃的神經，並滋養你的心靈，讓你感到被愛與支持。",
    mindful_ritual: "每晚睡前，點燃此香氛，將注意力帶到你的心臟。感受每一次呼吸，並對自己說：「我愛你，我接受你所有的樣子。」讓香氣溫柔地包裹你，進入深層的休憩。"
  },
  fire: {
    title: "啟程的火焰",
    image: "images/result_fire.jpg",
    hashtags: ["#生命之火", "#行動勇氣", "#熱情創造"],
    spiritual_message: "親愛的靈魂旅人，你正站在一個充滿潛力與新冒險的起點。你的內在之火正在燃燒，充滿了勇氣與行動的渴望。這股強大的能量有時讓你過於專注於前方，而忘了停下來感受當下微風的拂過。這是一個召喚你**『勇敢躍入未知』**的時刻。",
    energy_insight: "你的能量此刻與奧修禪卡**『勇氣』(Courage)**的牌卡相應。這張牌提醒你，真正的勇氣不是無所畏懼，而是允許自己去感受，然後再帶著這份感受向前。",
    fragrance_guide: "這款香氣將是你的活力泉源。**辛辣與柑橘香氣**，如**佛手柑、生薑、葡萄柚**，能為你注入活力與熱情，提醒你生命的冒險充滿了喜悅與力量。",
    mindful_ritual: "每日早晨，點燃此香氛，進行一個簡短的儀式。深吸一口氣，讓香氣充滿你的肺腑，然後大聲（或在心中）對自己說：「我充滿活力，我信任我的每一步。」"
  },
  rainbow: {
    title: "豐盛之林",
    image: "images/result_rainbow.jpg",
    hashtags: ["#大地之根", "#物質豐盛", "#當下滿足"],
    spiritual_message: "親愛的靈魂旅人，你正尋求一種深刻的**『穩定感』**。你可能感到有些漂浮不定，或渴望找到一個能讓你安心停泊的港灣。這是一個重新與你的根源連結，並找回內在力量的時刻。",
    energy_insight: "你的能量此刻與奧修禪卡**『豐盛』(Abundance)**的牌卡相應。這張牌提醒你，真正的豐盛來自於你與大地的連結。當你與自己的根源相連，你便能體驗到生命中的富足與圓滿。",
    fragrance_guide: "這款香氣將是你的心靈庇護所。**麝香與溫暖木質調**，如**岩蘭草、廣藿香、琥珀**，能為你提供堅實的支撐，讓你感到腳踏實地，並在簡單的物質生活中找到內在的滿足與平靜。",
    mindful_ritual: "每天結束一天行程後，點燃此香氛，靜坐五分鐘。感受你的身體與呼吸，將所有的擔憂都交給香氣。對自己說：「我感到安全，我紮根於此。」"
  }
};

// State
let current = 0;
let scores = { cloud: 0, water: 0, fire: 0, rainbow: 0 };
const total = questions.length;
let currentSelection = null;
let preloadedImages = {}; 

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
const resultSubtitle = document.querySelector('.result-subtitle');
const resultTitle = document.getElementById('resultTitle');
const resultImageContainer = document.querySelector('.result-image-container');
const resultImage = document.getElementById('resultImage');

// 新增的獨立結果區塊元素
const resultSpiritualMessage = document.getElementById('resultSpiritualMessage');
const resultEnergyInsight = document.getElementById('resultEnergyInsight');
const resultFragranceGuide = document.getElementById('resultFragranceGuide');
const resultMindfulRitual = document.getElementById('resultMindfulRitual');


const resultHashtags = document.getElementById('resultHashtags');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const resultElements = [
  resultSubtitle,
  resultTitle,
  resultImageContainer,
  resultHashtags,
  resultSpiritualMessage,
  resultEnergyInsight,
  resultFragranceGuide,
  resultMindfulRitual,
  restartBtn,
  shareBtn
];

// Intro Page Elements
const logo = document.querySelector('.site-header .logo');
const introTitleLeft = document.querySelector('.intro-title-left');
const introTitleRight = document.querySelector('.intro-title-right');
const introTextWrapper = document.querySelector('.intro-text-wrapper');

// Utility Functions
function typeText(element, text, speed = 50, callback) {
  element.innerHTML = ''; 
  element.classList.add('typewriter-effect'); 
  let i = 0;
  function typing() {
    if (i < text.length) {
      if (text.charAt(i) === '<') {
        let tagEnd = text.indexOf('>', i);
        element.innerHTML += text.substring(i, tagEnd + 1);
        i = tagEnd + 1;
      } else {
        element.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(typing, speed);
    } else {
      element.classList.remove('typewriter-effect');
      if (callback) callback();
    }
  }
  typing();
}

/**
 * 圖片預載函式
 */
function preloadImages() {
  const imagePromises = Object.values(results).map(result => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = result.image;
      img.onload = () => {
        preloadedImages[result.image] = img;
        resolve();
      };
      img.onerror = reject;
    });
  });
  return Promise.all(imagePromises);
}

// Function to handle the intro page animation sequence
async function animateIntroPage() {
  logo.style.animation = 'fadeInUp 2s forwards';
  startBtn.disabled = true;
  await preloadImages();
  
  setTimeout(() => {
    introTitleLeft.style.opacity = '1';
    typeText(introTitleLeft, '測一測', 100, () => {
      introTitleRight.style.opacity = '1';
      typeText(introTitleRight, '你的心靈香氣', 100, () => {
        introTextWrapper.style.animation = 'fadeIn 2s forwards';
        setTimeout(() => {
          startBtn.style.animation = 'fadeInUp 2s forwards';
          startBtn.disabled = false;
        }, 1500);
      });
    });
  }, 1500);
}

// Function to animate the quiz question title
function animateQuizQuestion(text) {
  typeText(questionTitle, text);
}

// 分段動畫函式
function animateResultPage(resultData) {
  resultSubtitle.textContent = "你的心靈指引是";
  resultTitle.textContent = resultData.title;
  resultImage.src = preloadedImages[resultData.image].src;
  resultHashtags.innerHTML = resultData.hashtags.map(tag => `<div class="result-hashtag">${tag}</div>`).join('');
  
  resultSpiritualMessage.innerHTML = `<p>${resultData.spiritual_message}</p>`;
  resultEnergyInsight.innerHTML = `<div class="result-separator"></div><p><strong>能量洞見：</strong>${resultData.energy_insight}</p>`;
  resultFragranceGuide.innerHTML = `<div class="result-separator"></div><p><strong>香氛指引：：</strong>${resultData.fragrance_guide}</p>`;
  resultMindfulRitual.innerHTML = `<div class="result-separator"></div><p><strong>禪心儀式：</strong>${resultData.mindful_ritual}</p>`;
  
  let delay = 0;
  [resultSubtitle, resultTitle, resultImageContainer, resultHashtags, resultSpiritualMessage, resultEnergyInsight, resultFragranceGuide, resultMindfulRitual].forEach(element => {
    setTimeout(() => {
      element.style.animation = 'fadeInUp 1s forwards';
    }, delay);
    delay += 200;
  });
  
  setTimeout(() => {
    restartBtn.style.animation = 'fadeInUp 1s forwards';
    shareBtn.style.animation = 'fadeInUp 1s forwards';
  }, delay + 500);
}

// Event Listeners
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
    btn.dataset.type = a.type;
    btn.addEventListener('click', () => selectAnswer(btn));
    answersDiv.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  
  animateQuizQuestion(q.question);
}

function selectAnswer(selectedBtn) {
  const selectedType = selectedBtn.dataset.type;
  
  answersDiv.querySelectorAll('button').forEach(b => {
    b.classList.remove('selected');
  });
  
  selectedBtn.classList.add('selected');
  currentSelection = selectedType;
  
  if (currentSelection) {
    nextBtn.style.display = 'inline-block';
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
    if (scores.hasOwnProperty(k) && scores[k] > max) {
      max = scores[k];
      highest = k;
    }
  }
  const r = results[highest];
  animateResultPage(r);
}

restartBtn.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
  
  resultElements.forEach(element => {
    element.style.animation = 'none';
    element.style.opacity = '0';
  });
  
  logo.style.animation = 'none';
  introTitleLeft.textContent = '';
  introTitleRight.textContent = '';
  introTextWrapper.style.animation = 'none';
  startBtn.style.animation = 'none';
  
  logo.style.animation = '';
  introTitleLeft.style.opacity = '0';
  introTitleRight.style.opacity = '0';
  introTextWrapper.style.opacity = '0';
  startBtn.style.opacity = '0';
  
  animateIntroPage();
});

shareBtn.addEventListener('click', () => {
  const highest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const resultText = results[highest].title;
  const shareText = `我的心靈香氣是【${resultText}】！快來測測看你是哪一種吧！\n${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: '心靈香氣測驗',
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

const form = document.getElementById("quiz-form");
const result = document.getElementById("result");

const scentResults = {
  citrus: {
    title: "🍊 活力柑橘型：太陽下的灑脫冒險者",
    desc: "你像陽光灑在草地上，總是充滿朝氣、正能量滿滿，是朋友之間的能量發電機。你喜歡冒險，熱愛探索，也懂得享受當下的每個跳動心跳。",
    notes: "佛手柑、葡萄柚、甜橙、粉紅胡椒",
    feeling: "明亮、清新、開朗、充滿動能",
    scene: "戶外野餐、夏日旅行、公路冒險",
    quote: "「世界太大了，不去看怎麼對得起自己的好奇心？」"
  },
  woody: {
    title: "🪵 靜謐沉香型：穩重的靈魂漫遊者",
    desc: "你總是安靜卻有力量，在人群中不喧嘩、不張揚，卻總讓人忍不住靠近。你像一座老樹，給人安穩與庇護，內心深處藏著堅定信念與溫柔直覺。",
    notes: "沉香、雪松、乳香、廣藿香",
    feeling: "安定、內斂、沈穩、有層次",
    scene: "靜夜閱讀、雨天咖啡館、山林獨行",
    quote: "「你的沉默，不是疏離，而是最有力量的溫柔。」"
  },
  floral: {
    title: "🌸 柔美花香型：感性的內在療癒者",
    desc: "你細膩、敏感，擅長讀懂他人情緒，在不經意中就療癒了他人。你不需強烈表達，卻總能在人心留下一抹餘韻，如同香水裡的尾韻，深刻動人。",
    notes: "白玫瑰、梔子花、小蒼蘭、牡丹",
    feeling: "優雅、感性、柔和、溫暖",
    scene: "午後曬書、香氛浴、音樂空間",
    quote: "「你不需討好誰，你本身就是那朵無人取代的花。」"
  },
  earthy: {
    title: "🍃 自然木質型：貼近本質的靈性實踐者",
    desc: "你總是渴望與自然為伍，生活對你而言，是與節奏同步、與土地連結。你是療癒自己也療癒別人的存在，是在人群中默默築起平衡的力量。",
    notes: "雪松、香根草、橡苔、鼠尾草",
    feeling: "中性、自然、深遠、樸實不俗",
    scene: "森林浴、瑜伽時光、日光冥想",
    quote: "「你是一棵無聲生長的樹，穩穩立在世界中間。」"
  },
  sweet: {
    title: "🍬 甜香花果型：療癒人心的溫柔創作者",
    desc: "你是一道甜點氣息般的存在，總能輕輕觸動人心，讓人在你身邊感到被照顧。你是朋友眼中最貼心的存在，內心住著一個擁抱夢想的創作者。",
    notes: "荔枝、黑醋栗、麝香、香草",
    feeling: "甜美、輕柔、可親、有記憶感",
    scene: "手作時光、老屋咖啡館、慵懶午睡",
    quote: "「你不是為了取悅別人而甜，而是為了守護內心而溫柔。」"
  },
  soap: {
    title: "🧼 極簡皂感型：優雅有界線的自由者",
    desc: "你擁有高敏銳度與清晰的自我界線，對美感有著直覺的追求。不過度、不造作，你像一瓶純粹的皂感香，簡單卻難忘，輕輕帶出獨有質感。",
    notes: "白麝香、香皂調、佛手柑、棉花香",
    feeling: "極簡、清爽、理性、俐落",
    scene: "極簡室內、雨後衣櫃、日常洗衣香",
    quote: "「你不需要成為誰，你已是最乾淨純粹的氣味。」"
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const answers = [...form.elements]
    .filter((el) => el.checked)
    .map((el) => el.value);

  const counts = {};
  answers.forEach((val) => {
    counts[val] = (counts[val] || 0) + 1;
  });

  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const resultData = scentResults[dominant];

  result.innerHTML = `
    <h2>${resultData.title}</h2>
    <p>${resultData.desc}</p>
    <ul>
      <li><strong>代表香氣調性：</strong>${resultData.notes}</li>
      <li><strong>個性氣味筆記：</strong>${resultData.feeling}</li>
      <li><strong>適合你的香氣場景：</strong>${resultData.scene}</li>
    </ul>
    <blockquote>${resultData.quote}</blockquote>
  `;
  result.classList.remove("hidden");
});

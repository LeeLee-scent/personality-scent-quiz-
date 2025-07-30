import React, { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "你最嚮往哪種生活方式？",
    options: [
      { text: "陽光與冒險，隨時都在路上", type: "citrus" },
      { text: "在山林中冥想與閱讀", type: "woody" },
      { text: "沉浸在花園裡的午後陽光", type: "floral" },
      { text: "療癒人心、分享手作生活", type: "sweet" },
      { text: "維持極簡生活與優雅步調", type: "soap" },
      { text: "自然、裸感、與土地連結", type: "earthy" },
    ],
  },
  {
    question: "朋友們都怎麼形容你？",
    options: [
      { text: "開朗又活潑，氣氛製造機", type: "citrus" },
      { text: "總是安定人心的存在", type: "woody" },
      { text: "細膩又有同理心", type: "floral" },
      { text: "甜美親切，像棉花糖一樣", type: "sweet" },
      { text: "理性有界線，很有質感", type: "soap" },
      { text: "與自然同步，有靈性氣質", type: "earthy" },
    ],
  },
  {
    question: "你最喜歡的香氣場景是？",
    options: [
      { text: "戶外野餐、公路旅行", type: "citrus" },
      { text: "雨夜書房、老屋咖啡館", type: "woody" },
      { text: "音樂空間、陽光浴缸", type: "floral" },
      { text: "老屋手作、甜點與畫筆", type: "sweet" },
      { text: "乾淨房間、洗衣香氣", type: "soap" },
      { text: "森林步道、冥想靜心", type: "earthy" },
    ],
  },
  {
    question: "假日的你會選擇？",
    options: [
      { text: "安排一場說走就走的旅程", type: "citrus" },
      { text: "宅在家進行靈性儀式", type: "woody" },
      { text: "與好友在家泡茶聊心事", type: "floral" },
      { text: "做甜點、畫畫或創作", type: "sweet" },
      { text: "收納整理、買香氛清潔品", type: "soap" },
      { text: "帶瑜珈墊到山林中呼吸", type: "earthy" },
    ],
  },
  {
    question: "如果你是一瓶香水，你會是？",
    options: [
      { text: "柑橘調，像陽光般明亮", type: "citrus" },
      { text: "木質調，沉穩有力量", type: "woody" },
      { text: "花香調，細緻而餘韻悠長", type: "floral" },
      { text: "果香甜香，甜卻不膩", type: "sweet" },
      { text: "皂感香氣，純淨簡約", type: "soap" },
      { text: "自然草本調，貼近本質", type: "earthy" },
    ],
  },
  {
    question: "你心中的香氛品牌應該是？",
    options: [
      { text: "有故事感、靈魂自由奔放", type: "citrus" },
      { text: "低調奢華、有厚度與哲思", type: "woody" },
      { text: "療癒柔軟，氣質如詩", type: "floral" },
      { text: "溫柔可親，有記憶感", type: "sweet" },
      { text: "簡約設計，重視細節", type: "soap" },
      { text: "自然原萃，崇尚純淨生活", type: "earthy" },
    ],
  },
];

const results = {
  citrus: {
    title: "🍊 活力柑橘型：太陽下的灑脫冒險者",
    description:
      "你像陽光灑在草地上，總是充滿朝氣、正能量滿滿，是朋友之間的能量發電機。你喜歡冒險，熱愛探索，也懂得享受當下的每個跳動心跳。",
  },
  woody: {
    title: "🪵 靜謐沉香型：穩重的靈魂漫遊者",
    description:
      "你總是安靜卻有力量，在人群中不喧嘩、不張揚，卻總讓人忍不住靠近。你像一座老樹，給人安穩與庇護，內心深處藏著堅定信念與溫柔直覺。",
  },
  floral: {
    title: "🌸 柔美花香型：感性的內在療癒者",
    description:
      "你細膩、敏感，擅長讀懂他人情緒，在不經意中就療癒了他人。你不需強烈表達，卻總能在人心留下一抹餘韻，如同香水裡的尾韻，深刻動人。",
  },
  sweet: {
    title: "🍬 甜香花果型：療癒人心的溫柔創作者",
    description:
      "你是一道甜點氣息般的存在，總能輕輕觸動人心，讓人在你身邊感到被照顧。你是朋友眼中最貼心的存在，內心住著一個擁抱夢想的創作者。",
  },
  soap: {
    title: "🧼 極簡皂感型：優雅有界線的自由者",
    description:
      "你擁有高敏銳度與清晰的自我界線，對美感有著直覺的追求。不過度、不造作，你像一瓶純粹的皂感香，簡單卻難忘，輕輕帶出獨有質感。",
  },
  earthy: {
    title: "🍃 自然木質型：貼近本質的靈性實踐者",
    description:
      "你總是渴望與自然為伍，生活對你而言，是與節奏同步、與土地連結。你是療癒自己也療癒別人的存在，是在人群中默默築起平衡的力量。",
  },
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (type) => {
    setAnswers([...answers, type]);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    const typeCount = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
    const finalType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
    const result = results[finalType];

    return (
      <main className="result p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">你的香氣人格是：</h2>
        <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
        <p className="text-lg leading-relaxed">{result.description}</p>
        <p className="mt-6 text-sm text-gray-500">Powered by LeeLee Scent Studio</p>
      </main>
    );
  }

  return (
    <main className="quiz p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Q{step + 1}. {questions[step].question}</h2>
      <ul className="space-y-3">
        {questions[step].options.map((option, i) => (
          <li key={i}>
            <button
              className="w-full text-left bg-white p-4 border border-gray-300 rounded-lg hover:bg-orange-50"
              onClick={() => handleAnswer(option.type)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

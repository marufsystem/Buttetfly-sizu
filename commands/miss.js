module.exports.config = {
  name: "miss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Send a missing you message",
  commandCategory: "emotions",
  usages: ".miss",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const quotes = [
    "🕊️ আমি শুধু ভাবি, যদি আজ তুমি পাশে থাকতে... কতটা ভালো লাগত।",
    "💌 তোমার অভাবটা খুব বেশি অনুভব করছি আজ, জানো? Maruf খুব মিস করছে তোমাকে।",
    "💭 অনেক মানুষ থাকে জীবনে, কিন্তু কিছু মানুষ মনের ভিতর থেকে যায়... তুমিই তার একজন।",
    "🖤 তোমার স্মৃতি গুলোই এখন আমার সঙ্গী… প্রতিটা নিঃশ্বাসে তুমি যেন গেঁথে আছো।",
    "😢 আজ রাতটা একটু বেশিই নিরব... কারণ, Maruf তোকে খুব বেশি মিস করছে।",
    "🌙 দূরে থেকেও তুমি কতটা কাছে... এ অনুভূতিটা বোঝানো যায় না।",
    "🥀 কখনো কখনো মানুষকে না পাওয়ার ব্যথাটাই সবচেয়ে বেশি ভালোবাসার প্রমাণ।",
    "😭 শুধু একটা জিনিস চাই আজ... তোমার একটা মেসেজ, যেটা বলবে – 'তুমিও আমাকে মিস করছো'।"
  ];

  const msg = quotes[Math.floor(Math.random() * quotes.length)];
  return api.sendMessage(msg, event.threadID, event.messageID);
};

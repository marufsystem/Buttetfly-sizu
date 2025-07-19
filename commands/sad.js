module.exports.config = {
  name: "sad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Send a sad quote",
  commandCategory: "emotions",
  usages: ".sad",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const quotes = [
    "💔 কিছু কষ্ট আছে, যা বোঝানো যায় না, শুধু বয়ে বেড়াতে হয়…",
    "😔 হাসি মুখের আড়ালে কত কান্না লুকিয়ে থাকে, কেউ জানে না।",
    "🥀 আমি ভালো নেই, বলার মতো কেউ নেই — এমন একটা বাস্তবতা খুব কঠিন।",
    "🖤 সবকিছু থাকার পরও যখন মন খারাপ থাকে… তখন বুঝতে পারি, ভেতরে ভাঙা কিছু রয়ে গেছে।",
    "😭 রাতের অন্ধকারে অনেকেই কাঁদে, কারণ সেখানে কেউ দেখেনা…",
    "💭 ‘Maruf’ ও মাঝে মাঝে নিজের কষ্ট কাউকে বলে না, শুধু চুপচাপ সয়ে যায়।",
    "😩 আজ মনটা বলছে, হারিয়ে যাই... কোথাও, যেখানে কেউ চিনবে না আমাকে।",
    "😶 জীবনে কিছু কথা থাকে, না বললেও বোঝা যায়… আবার কিছু কষ্ট থাকে, বললেও কেউ বোঝে না।"
  ];

  const msg = quotes[Math.floor(Math.random() * quotes.length)];
  return api.sendMessage(msg, event.threadID, event.messageID);
};

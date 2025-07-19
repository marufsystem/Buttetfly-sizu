module.exports.config = {
  name: "alone",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Express lonely and sad quotes",
  commandCategory: "emotions",
  usages: ".alone",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const quotes = [
    "🌑 চারপাশে মানুষ থাকলেও মনটা কেন এত একা লাগে?",
    "🕯️ কিছু অনুভব বোঝাতে শব্দ লাগে না... শুধু নিরবতা যথেষ্ট।",
    "🖤 আমি হাসি, কারণ কান্না কেউ দেখতে চায় না।",
    "😶‍🌫️ একা থাকাটা খারাপ না, খারাপ হলো ভুল মানুষকে কাছে পাওয়া।",
    "🥀 কেউ যখন বলে 'আমি আছি', তখনও নিজেকে খুব একা লাগে... ঠিক Maruf এর মতো।",
    "🕊️ মাঝে মাঝে মনে হয় আমি একা নই, বরং আমার সঙ্গে আমার নিঃসঙ্গতা আছেই।",
    "💭 কিছু কথা কাউকে বললে বোঝে না, না বললেও বোঝে না।",
    "🌫️ রাতের একাকীত্বে শুধু নিজের নিঃশ্বাসটাই নিজের সাথী।"
  ];

  const message = quotes[Math.floor(Math.random() * quotes.length)];
  return api.sendMessage(message, event.threadID, event.messageID);
};

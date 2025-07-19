module.exports.config = {
  name: "quote",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Sends a motivational or Islamic quote",
  commandCategory: "fun",
  usages: ".quote",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const quotes = [
    "🕋 আল্লাহর উপর ভরসা করো, তিনিই তোমার পথ খুলে দেবেন।",
    "💫 Never give up. Great things take time.",
    "🕊️ ‘Indeed, in the remembrance of Allah do hearts find rest.’ — Qur'an 13:28",
    "🌸 সবর করো, তুমি যেটা হারিয়েছো, আল্লাহ তার চেয়েও ভালো কিছু দিবেন।",
    "✨ Believe in yourself. You’re stronger than you think."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return api.sendMessage(randomQuote, event.threadID);
};

module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Send a sweet love message",
  commandCategory: "fun",
  usages: ".love @mention",
  cooldowns: 5
};

const loveLines = [
  "তোমার জন্য হৃদয়টা কেমন যেন কাঁপে... 💓",
  "তুমি একটা অনুভব, তুমি একটা অভ্যাস 😘",
  " তুমি আমার এমনি একজন 😌 যারে এক জনমে ভালোবেসে ভরভে না এ মন😌💖",
  "তোমার চোখে আমি ডুবে যেতে চাই... 🌊💖",
  "তুমি পাশে থাকলেই সব ঠিক লাগে 💫",
  "প্রেম মানে শুধু ভালোবাসা না, তুমি মানেই প্রেম! 🥰"
];

module.exports.run = async ({ api, event }) => {
  const mention = Object.keys(event.mentions || {})[0];
  const name = mention ? event.mentions[mention].replace("@", "") : "প্রিয়";

  const message = `💌 ${name},\n\n${loveLines[Math.floor(Math.random() * loveLines.length)]}`;
  api.sendMessage(message, event.threadID, event.messageID);
};

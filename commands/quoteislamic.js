const quotes = [
  "🕋 'যে ব্যক্তি এক ওয়াক্ত নামাজ ইচ্ছাকৃতভাবে ছেড়ে দেয়, সে যেন তার ঈমান হারিয়েছে।' — হাদিস",
  "💖 'আল্লাহ তাঁর বান্দার চেয়েও বেশি রহিম।'",
  "🌙 'তুমি যখন আল্লাহর কাছে থাকো, দুনিয়ার কেউ তোমাকে কষ্ট দিতে পারবে না।'",
  "🕌 'নামাজ তোমার কাছে ভার মনে হলেও জান্নাত খুব হালকা নয়।'",
  "🤲 'দোয়া কখনো ফেলে দেওয়া হয় না, হয় কবুল হয়, নয়তো বিপদ দূর হয়, নয়তো আখিরাতে পুরস্কার হয়।'"
];

module.exports.config = {
  name: "quoteislamic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Send a random Islamic motivational quote",
  commandCategory: "motivation",
  usages: ".quoteislamic",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  api.sendMessage(random, event.threadID);
};

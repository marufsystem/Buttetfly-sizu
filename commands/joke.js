const jokes = [
  "😂 শিক্ষক: নামতা বলো ২ এর।\nছাত্র: ২ এর নামতা তো আমি ফেইসবুকে ব্লক করে দিয়েছি স্যার!",
  "🤣 ডাক্তার: আপনার বয়স কত?\nরোগী: জানি না, জন্মদিনে কেক ছোট লাগতো, এখন বড় লাগে!",
  "😜 পোলা: তুই কেমনে পাস করলি?\nমাইয়া: গুগল মা, ChatGPT বাবা!",
  "😂 ম্যাডাম: প্রেমে পড়ছো কেন?\nছাত্র: কারণ নামাজের সময় ছুটে যেতে হয় না, ও নিজেই বলে ‘আল্লাহ ডাকতেছে, চল’!"
];

module.exports.config = {
  name: "joke",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Random Bengali jokes",
  commandCategory: "fun",
  usages: ".joke",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  api.sendMessage(random, event.threadID);
};

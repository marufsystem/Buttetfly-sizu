module.exports.config = {
  name: "dare",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Give a random dare challenge",
  commandCategory: "fun",
  usages: ".dare",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const dares = [
    "গ্রুপে সবাইকে Good Morning বলো এখনই! 🌞",
    "যাকে dislike করো, তাকে publicly compliment করো 😅",
    "নিজের একটা অদ্ভুত ছবি দাও group এ 📸",
    "যাকে পছন্দ করো, তাকে inbox এ 'ভালোবাসি' বলো ❤️",
    "৩০ সেকেন্ড ধরে নাচার ভিডিও দাও! 😂",
    "নিজের ফোনের ওয়ালপেপার group এ শেয়ার করো!",
    "৩ জনকে tag করে বলো 'তোমরা awesome!' ✨",
    "এই group এর নাম কী রাখবে যদি তুমিই admin হও?",
    "তোমার ফোনে এখন যে গান চলছে তার নাম বলো 🎵",
    "তোমার প্রথম crush কে ছিলো? 😍"
  ];

  const randomDare = dares[Math.floor(Math.random() * dares.length)];
  return api.sendMessage(`🔥 Dare Time!\n\n👉 ${randomDare}`, event.threadID, event.messageID);
};

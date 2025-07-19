module.exports.config = {
  name: "breakup",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Express heartbreak messages",
  commandCategory: "emotions",
  usages: ".breakup",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const lines = [
    "💔 ভালোবাসি বলার মানুষটা এখন আর ভালোবাসে না... টের পেয়েও কিছু বলতে পারি না।",
    "🥀 ভালোবাসা থেকে দূরত্ব — ঠিক যেন নিঃশ্বাসের অভাব।",
    "😔 সে বলে 'ভালো থেকো', কিন্তু জানে না আমি তাতে মরে যাচ্ছি।",
    "🖤 যার জন্য বদলে গিয়েছিলাম, সে-ই বদলে দিল।",
    "😶‍🌫️ আমরা দুইজনই ভালোবাসতাম, কিন্তু একসাথে থাকতে পারিনি।",
    "💌 সেই দিনগুলো আর আসবে না, শুধু স্মৃতিগুলো রয়ে যাবে... Maruf আজও ভুলতে পারেনি।",
    "😭 কখনো কখনো সবচেয়ে আপন মানুষটাই সবচেয়ে বেশি কষ্ট দেয়।",
    "🕊️ শেষ বিদায়টা বলার সাহস আমার ছিল না… তাই চুপচাপ বিদায় নিয়েছি।"
  ];

  const message = lines[Math.floor(Math.random() * lines.length)];
  return api.sendMessage(message, event.threadID, event.messageID);
};

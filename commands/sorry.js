module.exports.config = {
  name: "sorry",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Say sorry in an emotional way",
  commandCategory: "emotions",
  usages: ".sorry",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const sorryMsgs = [
    "🥺 ভুল করে ফেলেছি… প্লিজ মাফ করে দিও।",
    "😢 আমি জানি আমি কষ্ট দিয়েছি… কিন্তু বিশ্বাস করো, মনটা সত্যিই ভালো ছিল।",
    "🕊️ কখনো ইচ্ছে করে কষ্ট দিইনি… শুধু একটু ভালোবাসা চেয়েছিলাম।",
    "🙏 যদি পারো মাফ করে দিও… আমি অপেক্ষা করবো তোমার ক্ষমার জন্য।",
    "💔 আমি ভুল বুঝেছি, ভুল করেছি… Maruf এর পক্ষ থেকে একটুখানি ক্ষমা চাচ্ছি।",
    "😓 আমার ভুলে যদি কষ্ট পেয়ে থাকো, অনুগ্রহ করে মাফ করো…",
    "🌧️ একটা 'sorry' দিয়ে সব ঠিক হয় না জানি… তবুও বলছি: I'm sorry!"
  ];

  const msg = sorryMsgs[Math.floor(Math.random() * sorryMsgs.length)];
  return api.sendMessage(msg, event.threadID, event.messageID);
};

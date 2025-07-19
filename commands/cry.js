module.exports.config = {
  name: "cry",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Send a random crying quote or message",
  commandCategory: "fun",
  usages: ".cry",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const cries = [
    "😢 আজ মনটা খুব খারাপ...",
    "💔 যারা ভালোবাসে, তারাই কাঁদায় বেশি...",
    "🥀 তুমি ছিলে বলে সবকিছু সুন্দর ছিলো… এখন শুধু খালি খালি লাগে।",
    "😭 একা থাকা অনেক কষ্টের, কিন্তু কারো সাথে থেকে একা লাগা আরও বেশি কষ্টের!",
    "💔 কোনোদিন বুঝবে না, কতটা ভালোবেসেছিলাম তোমায়…",
    "😞 কারো জীবনে না থেকেও কতটা থাকা যায়… সেটা আমি শিখে গেছি।",
    "🖤 তুমি ছিলে বলেই তো আমি আজো অপেক্ষায়…",
    "🥺 ভুলে যেও না, আমি আজও তোমার অপেক্ষায় আছি।",
    "😓 সবাই বলে 'সব ঠিক হয়ে যাবে'… কিন্তু কবে?",
    "😔 একা একা হাসতে হাসতে কাঁদা শিখে গেছি।"
  ];

  const msg = cries[Math.floor(Math.random() * cries.length)];
  return api.sendMessage(msg, event.threadID, event.messageID);
};

module.exports.config = {
  name: "truth",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Ask a random truth question",
  commandCategory: "fun",
  usages: ".truth",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const questions = [
    "তোমার প্রথম প্রেম কবে হয়েছিল?",
    "কাউকে এখনো পছন্দ করো? নাম বলো!",
    "জীবনে সবচেয়ে বড় মিথ্যা কী বলছো?",
    "তুমি কি কখনো কাউকে প্রপোজ করেছো?",
    "তুমি কি গোপনে কারো প্রোফাইল stalk করো?",
    "তুমি কি কাউকে নিজের GF/BF বানাতে চাও group থেকে?",
    "তুমি কি প্রেমে পড়েছো কিন্তু বলা হয়নি?",
    "তুমি কি তোমার বন্ধুকে কখনো জেলাস করেছো?",
    "তুমি কি কখনো মনে মনে group er কাউকে ভালোবেসে ফেলেছো?",
    "তোমার ক্রাশ এখন কে?"
  ];

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  return api.sendMessage(`😳 Truth Time!\n\n👉 ${randomQuestion}`, event.threadID, event.messageID);
};

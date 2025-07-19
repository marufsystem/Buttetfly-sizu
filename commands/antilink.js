// commands/antilink.js

module.exports.config = {
  name: "antilink",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Block link sharing in groups",
  commandCategory: "moderation",
  usages: ".antilink [on/off]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  const setting = args[0];

  if (!["on", "off"].includes(setting)) {
    return api.sendMessage("🔐 ব্যবহার:\n.antilink on / .antilink off", threadID, messageID);
  }

  global.antilink[threadID] = setting === "on";
  return api.sendMessage(`✅ Antilink system ${setting === "on" ? "চালু" : "বন্ধ"} করা হয়েছে।`, threadID);
};

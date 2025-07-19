// commands/setname.js

module.exports.config = {
  name: "setname",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Change bot's name",
  commandCategory: "admin",
  usages: ".setname [new name]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const newName = args.join(" ");
  if (!newName) return api.sendMessage("📛 দয়া করে একটি নাম দাও\nউদাহরণ: .setname Butterfly Sizu🦋", event.threadID);

  try {
    await api.changeNickname(newName, event.threadID, api.getCurrentUserID());
    api.sendMessage(`✅ বটের নাম সফলভাবে বদলানো হয়েছে:\n👉 ${newName}`, event.threadID);
  } catch (err) {
    console.error("SetName Error:", err);
    api.sendMessage("❌ নাম পরিবর্তন করা যায়নি।", event.threadID);
  }
};

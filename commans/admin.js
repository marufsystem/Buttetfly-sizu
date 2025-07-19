// commands/admin.js
module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Admin command to send global messages",
  commandCategory: "admin",
  usages: "[message]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const adminID = "100070782965051"; // ✅ Maruf Billah's UID
  if (event.senderID !== adminID) return api.sendMessage("❌ Only the owner (Maruf Billah) can use this command!", event.threadID);

  const msg = args.join(" ");
  if (!msg) return api.sendMessage("⚠️ কিছু লিখো যা পাঠাতে চাও।\nUsage: admin [message]", event.threadID);

  let success = 0;
  let failed = 0;

  for (const threadID of global.allThreadID) {
    try {
      await api.sendMessage(`📢 Notification from Admin (Maruf Billah):\n\n${msg}`, threadID);
      success++;
    } catch (err) {
      failed++;
    }
  }

  return api.sendMessage(`✅ পাঠানো হয়েছে ${success} গ্রুপে\n❌ ব্যর্থ হয়েছে ${failed} টিতে`, event.threadID);
};

// commands/logger.js
module.exports.config = {
  name: "logger",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Notify admin when bot is added or removed from group",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};

module.exports.handleEvent = async ({ event, api }) => {
  const adminID = "100070782965051"; // ✅ Maruf Billah

  if (event.logMessageType === "log:subscribe" && event.author !== event.threadID) {
    try {
      const threadInfo = await api.getThreadInfo(event.threadID);
      const addedBy = await api.getUserInfo(event.author);

      const msg = `📌 Bot Added to Group:
👥 Group Name: ${threadInfo.name || "Unknown"}
🆔 Group ID: ${event.threadID}
👤 Added by: ${addedBy[event.author].name} (${event.author})`;

      await api.sendMessage(msg, adminID);
    } catch (err) {
      console.error("Logger Add Error:", err);
    }
  }

  if (event.logMessageType === "log:unsubscribe" && event.leftParticipantFbId === api.getCurrentUserID()) {
    try {
      const threadInfo = await api.getThreadInfo(event.threadID);

      const msg = `📌 Bot Removed from Group:
👥 Group Name: ${threadInfo.name || "Unknown"}
🆔 Group ID: ${event.threadID}
❌ Removed by: Unknown`;

      await api.sendMessage(msg, adminID);
    } catch (err) {
      console.error("Logger Remove Error:", err);
    }
  }
};

module.exports.run = () => {};

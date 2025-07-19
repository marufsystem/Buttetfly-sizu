// commands/unban.js

module.exports.config = {
  name: "unban",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Unban a user",
  commandCategory: "admin",
  usages: ".unban [mention or reply]",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  let uid;
  if (event.type === "message_reply") uid = event.messageReply.senderID;
  else if (Object.keys(event.mentions).length > 0) uid = Object.keys(event.mentions)[0];
  else return api.sendMessage("⚠️ কাউকে reply বা mention করো!", event.threadID);

  global.data.userBanned.delete(uid);
  return api.sendMessage(`✅ UID: ${uid} এখন UNBANNED!`, event.threadID);
};

// commands/ban.js

module.exports.config = {
  name: "ban",
  version: "1.0.0",
  hasPermssion: 2, // Admin only
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Ban a user from using the bot",
  commandCategory: "admin",
  usages: ".ban [mention or reply]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, Users }) => {
  let uid;
  if (event.type === "message_reply") uid = event.messageReply.senderID;
  else if (Object.keys(event.mentions).length > 0) uid = Object.keys(event.mentions)[0];
  else return api.sendMessage("⚠️ কাউকে reply বা mention করো!", event.threadID);

  global.data.userBanned.set(uid, true);
  return api.sendMessage(`🚫 UID: ${uid} কে BAN করা হয়েছে।`, event.threadID);
};

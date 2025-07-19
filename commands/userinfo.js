// commands/userinfo.js

module.exports.config = {
  name: "userinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Get info about a user",
  commandCategory: "info",
  usages: ".userinfo [mention or reply]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args, Users }) => {
  let uid = event.senderID;
  if (event.type === "message_reply") uid = event.messageReply.senderID;
  else if (Object.keys(event.mentions).length > 0) uid = Object.keys(event.mentions)[0];

  try {
    const name = await Users.getNameUser(uid);
    const gender = (await api.getUserInfo(uid))[uid].gender === 2 ? "👦 ছেলে" : "👧 মেয়ে";
    const profileUrl = `https://facebook.com/${uid}`;

    const msg = `👤 ইউজার ইনফো:\n\n👑 নাম: ${name}\n🆔 UID: ${uid}\n🚻 Gender: ${gender}\n🔗 প্রোফাইল: ${profileUrl}`;
    return api.sendMessage(msg, event.threadID, event.messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ ইউজার ইনফো আনতে সমস্যা হচ্ছে।", event.threadID);
  }
};

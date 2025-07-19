module.exports.config = {
  name: "kiss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Tag someone to send a kiss",
  commandCategory: "fun",
  usages: ".kiss @user",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("💋 কাকে কিস দিবা তা ট্যাগ করো আগে!", threadID, messageID);
  }

  const name = mentions[mentionIDs[0]].replace("@", "");
  const senderName = global.data.userName.get(event.senderID) || "Someone";

  const msg = `😘 ${senderName} এক কিস পাঠিয়েছে তোমার জন্য, ${name}!\n\n💋💋💋💋💋`;

  return api.sendMessage(msg, threadID, messageID);
};

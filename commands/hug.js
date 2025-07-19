module.exports.config = {
  name: "hug",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Give someone a warm hug",
  commandCategory: "fun",
  usages: ".hug @user",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("🤗 কাউকে ট্যাগ করো জড়িয়ে ধরার জন্য!", threadID, messageID);
  }

  const name = mentions[mentionIDs[0]].replace("@", "");
  const senderName = global.data.userName.get(event.senderID) || "Someone";

  const msg = `🤗 ${senderName} তোমাকে এক টা আদরপূর্ণ জড়িয়ে ধরলো, ${name}!\n\n🫂 মমতা দিয়ে ঘেরা একটুখানি Hug!`;

  return api.sendMessage(msg, threadID, messageID);
};

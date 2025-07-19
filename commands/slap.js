module.exports.config = {
  name: "slap",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Give someone a playful slap",
  commandCategory: "fun",
  usages: ".slap @user",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, mentions, senderID } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("👋 কারে চড় মারবা? Tag করো আগে!", threadID, messageID);
  }

  const targetName = mentions[mentionIDs[0]].replace("@", "");
  const senderName = global.data.userName.get(senderID) || "Someone";

  const messages = [
    `😡 ${senderName} রাগ করে ঠাস করে ${targetName}-কে এক চড় মারলো!`,
    `😂 ${senderName} মজা করে ${targetName}-কে চড় দিলো!`,
    `🙃 ${targetName}, সাবধান! ${senderName} কিন্তু এবার রাগছে!`,
    `👋 ঠাস!! ${targetName}, তুমি কি কিছু করছো বলো তো?`
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  return api.sendMessage(randomMsg, threadID, messageID);
};

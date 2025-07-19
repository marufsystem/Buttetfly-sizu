// commands/help.js
module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Show all commands and their usage.",
  commandCategory: "info",
  usages: "[command name]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const prefix = global.config.PREFIX || ".";
  const allCommands = [...global.client.commands.keys()];

  // যদি নির্দিষ্ট কমান্ড চায়
  if (args[0]) {
    const cmd = args[0].toLowerCase();
    if (!global.client.commands.has(cmd)) {
      return api.sendMessage(`❌ ${cmd} নামে কোনো কমান্ড পাওয়া যায়নি!`, event.threadID, event.messageID);
    }
    const thisCmd = global.client.commands.get(cmd);
    let msg = `🔹 Command: ${prefix}${thisCmd.config.name}\n`;
    msg += `📋 Description: ${thisCmd.config.description || "No description"}\n`;
    msg += `🗂 Category: ${thisCmd.config.commandCategory || "N/A"}\n`;
    msg += `⚡ Usage: ${prefix}${thisCmd.config.usages || thisCmd.config.name}\n`;
    msg += `👤 Permission: ${thisCmd.config.hasPermssion == 2 ? "Admin Only" : "Everyone"}\n`;
    msg += `© Credits: ${thisCmd.config.credits || "Unknown"}`;
    return api.sendMessage(msg, event.threadID, event.messageID);
  }

  // সব কমান্ডের লিস্ট
  let msg = "🌸 Bot Available Commands 🌸\n";
  msg += "------------------------------\n";
  allCommands.forEach(cmd => {
    msg += `• ${prefix}${cmd}\n`;
  });
  msg += "\nকোনো কমান্ড সম্পর্কে জানতে:\n";
  msg += `উদাহরণ: ${prefix}help azan\n`;

  api.sendMessage(msg, event.threadID, event.messageID);
};

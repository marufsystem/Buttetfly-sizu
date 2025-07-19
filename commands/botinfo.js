// commands/botinfo.js

const os = require("os");

module.exports.config = {
  name: "botinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Show bot info & status",
  commandCategory: "utility",
  usages: ".botinfo",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;

  const msg = `
🧠 Bot Info:
• নাম: 💫Butterfly🦋 Sizu💟
• মালিক: Maruf Billah
• কমান্ড সংখ্যা: ${global.client.commands.size}
• চালু রয়েছে: ${hours}h ${minutes}m ${seconds}s
• মেমোরি ব্যবহার: ${memoryUsage.toFixed(2)} MB
• সিস্টেম: ${os.type()} ${os.arch()} (${os.platform()})
`;

  api.sendMessage(msg.trim(), event.threadID);
};

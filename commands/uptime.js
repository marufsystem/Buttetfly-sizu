// commands/uptime.js

module.exports.config = {
  name: "uptime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Shows how long the bot has been running",
  commandCategory: "system",
  usages: ".uptime",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  const timeString = `${hours}h ${minutes}m ${seconds}s`;
  const startTime = new Date(global.client.timeStart || Date.now()).toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour12: true
  });

  const msg = `🟢 Bot Uptime: ${timeString}
🚀 Started At: ${startTime}`;

  api.sendMessage(msg, event.threadID, event.messageID);
};

// commands/ping.js

module.exports.config = {
  name: "ping",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Check bot status",
  commandCategory: "utility",
  usages: ".ping",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const ping = Date.now() - event.timestamp;
  const time = global.client.getTime("fullTime");
  const date = global.client.getTime("fullDate");

  const msg = `✅ Bot is active!
📅 Date: ${date}
⏰ Time: ${time}
📶 Ping: ${ping}ms`;

  api.sendMessage(msg, event.threadID, event.messageID);
};

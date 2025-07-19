// includes/listen.js

const moment = require("moment-timezone");

module.exports = async function ({ api, models }) {
  api.listenMqtt(async (err, event) => {
    if (err) return console.error("Listen Error:", err);

    if (event.type !== "message" || !event.body) return;

    const threadID = event.threadID;
    const message = event.body;
    const senderID = event.senderID;
    const prefix = global.config.PREFIX || ".";

    // যদি prefix দিয়ে শুরু না হয়, ignore করো
    if (!message.startsWith(prefix)) return;

    // command ও args বের করো
    const args = message.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    // command খুঁজে পাও
    const command = global.client.commands.get(commandName);
    if (!command) return;

    // cooldown check
    const cooldowns = global.client.cooldowns;
    const now = Date.now();

    if (!cooldowns.has(commandName)) cooldowns.set(commandName, new Map());
    const timestamps = cooldowns.get(commandName);
    const cooldownAmount = (command.config.cooldowns || 3) * 1000;

    if (timestamps.has(senderID)) {
      const expiration = timestamps.get(senderID) + cooldownAmount;
      if (now < expiration) return;
    }

    timestamps.set(senderID, now);
    setTimeout(() => timestamps.delete(senderID), cooldownAmount);

    try {
      await command.run({
        api,
        event,
        args,
        models
      });
    } catch (err) {
      console.error("❌ Command Error:", err);
      return api.sendMessage("❗কমান্ড চালাতে সমস্যা হয়েছে।", threadID);
    }
  });
};

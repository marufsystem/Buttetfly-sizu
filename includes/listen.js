// includes/listen.js

const moment = require("moment-timezone");

module.exports = async function ({ api, models }) {
  api.listenMqtt(async (err, event) => {
    if (err) return console.error("❌ Listen Error:", err);
    if (event.type !== "message" || !event.body) return;

    const threadID = event.threadID;
    const message = event.body;
    const senderID = event.senderID;
    const prefix = global.config.PREFIX || ".";

    // ✅ 🔒 Antilink system
    if (
      global.antilink[threadID] &&
      /(https?:\/\/)?(www\.)?(facebook|whatsapp|t\.me|instagram|youtube|discord)\.com/.test(message)
    ) {
      return api.sendMessage("🚫 দয়া করে গ্রুপে লিংক শেয়ার করবেন না!", threadID);
    }

    // ✅ Ignore if no prefix
    if (!message.startsWith(prefix)) return;

    const args = message.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();
    const command = global.client.commands.get(commandName);
    if (!command) return;

    // ✅ Cooldown
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

    if (global.data.userBanned.has(senderID)) {
    return api.sendMessage("⛔ দুঃখিত, তুমি বট ইউজ করতে পারবে না (Banned)।", threadID);
    }
    // ✅ Run command
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

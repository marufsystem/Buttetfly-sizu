// commands/setprefix.js

const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "setprefix",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Change command prefix",
  commandCategory: "admin",
  usages: ".setprefix [new prefix]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const newPrefix = args[0];
  if (!newPrefix) return api.sendMessage("⚠️ দয়া করে একটি নতুন prefix দাও।\nযেমন: `.setprefix !`", event.threadID);

  const configPath = path.join(__dirname, "..", "config.json");
  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    config.PREFIX = newPrefix;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    api.sendMessage(`✅ নতুন prefix সেট করা হয়েছে: \`${newPrefix}\``, event.threadID);
  } catch (err) {
    console.error("Prefix Update Error:", err);
    api.sendMessage("❌ prefix পরিবর্তন করতে সমস্যা হয়েছে।", event.threadID);
  }
};

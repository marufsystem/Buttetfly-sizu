// commands/restart.js

module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 2, // Admin only
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Restart the bot",
  commandCategory: "admin",
  usages: ".restart",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("♻️ রিস্টার্ট হচ্ছে... একটু অপেক্ষা করো!", event.threadID, () => {
    process.exit(1); // This will trigger a restart if you're using process manager
  });
};

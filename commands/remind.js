module.exports.config = {
  name: "remind",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Set a custom reminder",
  commandCategory: "utility",
  usages: ".remind <time><s|m|h> <message>",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) return api.sendMessage("⏰ ব্যবহারঃ .remind 10m পানি খাও", event.threadID);

  const timeStr = args[0];
  const message = args.slice(1).join(" ");
  const unit = timeStr.slice(-1);
  const value = parseInt(timeStr.slice(0, -1));

  if (isNaN(value) || !"smh".includes(unit)) {
    return api.sendMessage("❌ ভুল টাইম ফরম্যাট! (s = seconds, m = minutes, h = hours)", event.threadID);
  }

  const ms = unit === "s" ? value * 1000 : unit === "m" ? value * 60 * 1000 : value * 60 * 60 * 1000;

  api.sendMessage(`✅ ঠিক আছে! আমি তোমাকে ${timeStr} পর মনে করিয়ে দেবো:\n👉 "${message}"`, event.threadID);

  setTimeout(() => {
    api.sendMessage(`🔔 মনে করিয়ে দিচ্ছি:\n${message}`, event.threadID);
  }, ms);
};

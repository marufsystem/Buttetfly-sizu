// commands/azan.js
const path = require("path");
const fs = require("fs");

module.exports.config = {
  name: "azan",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Auto-send Azan reminder (Dhaka, 2025)",
  commandCategory: "utility",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  // Manually call: show today's azan times
  const azanTimes = require(path.resolve(__dirname, "../data/azanTimes.json"));
  const today = new Date().toISOString().slice(0, 10);
  const todayAzan = azanTimes[today];
  if (!todayAzan) return api.sendMessage("আজকের জন্য কোন আজান সময় পাওয়া যায়নি।", event.threadID);
  let msg = `🕌 আজকের আজান সময় (Dhaka):\n`;
  for (const [namaz, time] of Object.entries(todayAzan)) {
    msg += `\n${namaz}: ${time}`;
  }
  api.sendMessage(msg, event.threadID);
};

module.exports.onLoad = async function({ api }) {
  const azanTimes = require(path.resolve(__dirname, "../data/azanTimes.json"));
  const CHECK_INTERVAL = 30 * 1000; // ৩০ সেকেন্ড পরপর চেক
  let lastSent = {}; // prevent double sending

  function checkAzan() {
    const today = new Date();
    const dateKey = today.toISOString().slice(0, 10);
    const times = azanTimes[dateKey];
    if (!times) return setTimeout(checkAzan, CHECK_INTERVAL);

    const now = today.getHours().toString().padStart(2, "0") + ":" +
                today.getMinutes().toString().padStart(2, "0");
    Object.entries(times).forEach(([namaz, time]) => {
      if (now === time && lastSent[namaz] !== dateKey) {
        const msg = `🚸নামাজের বিরতি🚸\n(${namaz} ওয়াক্ত)\n\n‼️--আযান হচ্ছে --‼️ 😊\n°°মানে আল্লাহ তোমাকে ডাকছে°° 😍\n°°সবাই নামাজ পড়ে আসো°° 🤲\n‼️--হতেও তো পারে আল্লাহর সাথে এটাই তোমার শেষ যোগাযোগ --‼️ 💙🥀\n\n🕰 আজানের সময়: ${time}\n📵 NO TEXT 🚫 @everyone`;
        for (const tid of global.allThreadID || []) {
          api.sendMessage(msg, tid);
        }
        lastSent[namaz] = dateKey;
      }
    });
    setTimeout(checkAzan, CHECK_INTERVAL);
  }
  checkAzan();
};

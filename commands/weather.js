const axios = require("axios");

module.exports.config = {
  name: "weather",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "শহরের আবহাওয়ার তথ্য দেখাবে",
  commandCategory: "utility",
  usages: ".weather [শহরের নাম]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const city = args.join(" ");
  if (!city) return api.sendMessage("📍 একটি শহরের নাম লিখুন। উদাহরণঃ `.weather Dhaka`", event.threadID);

  try {
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4f4376fc79cd4e8eb48170634251907&q=${city}`);
    const d = res.data;

    const msg = `
🌤️ আবহাওয়া রিপোর্ট: ${d.location.name}, ${d.location.country}
📅 তারিখ ও সময়: ${d.location.localtime}
🌡️ তাপমাত্রা: ${d.current.temp_c}°C
☁️ আবহাওয়ার অবস্থা: ${d.current.condition.text}
💨 বাতাস: ${d.current.wind_kph} km/h
💧 আর্দ্রতা: ${d.current.humidity}%
    `.trim();

    api.sendMessage(msg, event.threadID);
  } catch (err) {
    console.log("Weather Error:", err);
    return api.sendMessage("❌ শহরের নাম সঠিক নয় অথবা সার্ভারে সমস্যা হয়েছে।", event.threadID);
  }
};

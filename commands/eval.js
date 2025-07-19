module.exports.config = {
  name: "eval",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Run JavaScript code",
  commandCategory: "admin",
  usages: "[code]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  if (event.senderID !== "100070782965051") return api.sendMessage("⛔ Only owner (Maruf Billah) can use this command.", event.threadID);

  try {
    const code = args.join(" ");
    let result = eval(code);
    if (typeof result === "object") result = JSON.stringify(result, null, 2);
    api.sendMessage(`✅ Output:\n${result}`, event.threadID);
  } catch (e) {
    api.sendMessage(`❌ Error:\n${e}`, event.threadID);
  }
};

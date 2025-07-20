module.exports = async function ({ api, event }) {
  const log = `[EVENT] ${event.logMessageType}`;
  console.log(log);

  if (event.logMessageType === "log:subscribe") {
    return api.sendMessage("💫 স্বাগতম! আমি 💫Butterfly🦋 Sizu💟 বট! 😊", event.threadID);
  }

  if (event.logMessageType === "log:unsubscribe") {
    console.log("কেউ গ্রুপ ছেড়ে দিলো।");
  }
};

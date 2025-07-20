module.exports = async function ({ api, event }) {
  if (!event.body) return;

  const message = event.body.toLowerCase();

  if (message.includes("hello")) {
    return api.sendMessage("Hi! 💫 আমি আছি এখানে, Butterfly🦋 Sizu💟!", event.threadID);
  }

  if (message.includes("maruf")) {
    return api.sendMessage("Maruf Billah ভাই এখন ব্যস্ত, কিন্তু আমি তো আছি! 😎", event.threadID);
  }

  // add more keywords below as needed
};

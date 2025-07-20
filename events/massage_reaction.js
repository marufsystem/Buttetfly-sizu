module.exports = async function ({ api, event }) {
  const { reaction, messageID, threadID } = event;
  console.log(`রিয়্যাক্ট করলো: ${reaction}`);

  if (reaction === "❤️") {
    return api.sendMessage("ভালবাসা ফিরিয়ে দিলাম! 💟", threadID, messageID);
  }

  if (reaction === "😡") {
    return api.sendMessage("রাগ করো না প্লিজ 🥺", threadID, messageID);
  }
};

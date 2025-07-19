// commands/bio.js

module.exports.config = {
  name: "bio",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "✅Sizu💟🦋 & Maruf System💫",
  description: "Change bot's Facebook bio",
  commandCategory: "admin",
  usages: ".bio [new bio text]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const newBio = args.join(" ");
  if (!newBio) return api.sendMessage("⚠️ দয়া করে বায়ো লেখো!\nউদাহরণ: .bio I am Butterfly Sizu🦋", event.threadID);

  api.changeBio(newBio, (err) => {
    if (err) return api.sendMessage("❌ বায়ো আপডেট করতে সমস্যা হয়েছে:\n" + err, event.threadID);
    return api.sendMessage(`✅ বায়ো আপডেট হয়েছে:\n\n${newBio}`, event.threadID);
  });
};

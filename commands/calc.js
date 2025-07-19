module.exports.config = {
  name: "calc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Simple calculator command",
  commandCategory: "utility",
  usages: ".calc [expression]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (!args[0]) return api.sendMessage("🧮 দয়া করে কিছু সংখ্যা ও অপারেশন দাও!\n\nউদাহরণ: .calc 5+10*2", event.threadID);

    const expression = args.join(" ");
    // Only allow digits and math operators
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
      return api.sendMessage("❌ শুধুমাত্র সংখ্যা ও গাণিতিক চিহ্ন ব্যবহার করো!", event.threadID);
    }

    const result = eval(expression);
    api.sendMessage(`📊 Result: ${result}`, event.threadID, event.messageID);
  } catch (err) {
    api.sendMessage("❗গণনা করতে সমস্যা হয়েছে।\nভুল expression দিয়েছো কি?", event.threadID);
  }
};

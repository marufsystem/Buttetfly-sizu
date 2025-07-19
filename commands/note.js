const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "note",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sizu💟🦋 & Maruf System💫",
  description: "Save or read your personal notes",
  commandCategory: "utility",
  usages: ".note save <title> | <message> or .note <title>",
  cooldowns: 5
};

const notesDir = path.join(__dirname, "..", "data", "notes");
if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });

module.exports.run = async ({ api, event, args }) => {
  const input = args.join(" ");
  const sender = event.senderID;

  if (input.startsWith("save ")) {
    const content = input.slice(5).split("|");
    if (content.length < 2) return api.sendMessage("⚠️ Format: .note save title | message", event.threadID);

    const [title, message] = content.map(x => x.trim());
    const filepath = path.join(notesDir, `${sender}_${title}.txt`);
    fs.writeFileSync(filepath, message, "utf8");

    return api.sendMessage(`✅ Note saved as '${title}'`, event.threadID);
  } else {
    const filepath = path.join(notesDir, `${sender}_${input.trim()}.txt`);
    if (!fs.existsSync(filepath)) return api.sendMessage("❌ এই নামে কোনো নোট খুঁজে পাওয়া যায়নি।", event.threadID);

    const message = fs.readFileSync(filepath, "utf8");
    return api.sendMessage(`📝 Note: ${input}\n\n${message}`, event.threadID);
  }
};

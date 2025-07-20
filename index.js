// 💫 Butterfly🦋 Sizu💟 - Main Bot Entry

const fs = require("fs-extra");
const path = require("path");
const moment = require("moment-timezone");
const axios = require("axios");
const login = require("./includes/fca-priyan/login"); // Or fca-unofficial if you use that
const chalk = require("chalk");
const log = require("./utils/logger.js"); // or log.js if you renamed

global.client = {};
global.config = require("./config.json");
global.package = require("./package.json");

global.language = {};
global.commands = new Map();
global.events = new Map();
global.cooldowns = new Map();
global.antilink = new Map();
global.allThreadID = [];

////////////////////////////////////////
// 🧠 Load language file (English now)
const langData = require("./languages/en.lang");
for (const key in langData) {
  const val = langData[key];
  global.language[key] = (...args) => {
    if (!val) return key;
    return typeof val === "string"
      ? val
      : val[Math.floor(Math.random() * val.length)].replace(/\{(\d+)\}/g, (_, i) => args[i] || "");
  };
}

////////////////////////////////////////
// 🧠 Load all command modules
const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.config && command.run) global.commands.set(command.config.name, command);
}

////////////////////////////////////////
// 🧠 Load all event modules (optional)
if (fs.existsSync(path.join(__dirname, "events"))) {
  const eventFiles = fs.readdirSync(path.join(__dirname, "events")).filter(file => file.endsWith(".js"));
  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    global.events.set(event.config.name, event);
  }
}

////////////////////////////////////////
// 📲 Start the bot login
(async function startBot() {
  try {
    log("Logging in to Facebook...", "🌐 Login");

    const api = await login({ appState: require("./appstate.json") });
    global.api = api;

    log("Logged in as: " + api.getCurrentUserID(), "💫 Sizu");

    // Send startup message to admin (optional)
    const adminID = global.config.ADMIN || "100070782965051";
    api.sendMessage("✅ 💫Butterfly🦋 Sizu💟 bot is now online!", adminID);

    // Listen to messages
    api.listenMqtt(async (err, event) => {
      if (err) return console.error(err);
      require("./includes/handle")(api, event);
    });
  } catch (err) {
    log("❌ Login Failed: " + err, "ERROR");
  }
})();

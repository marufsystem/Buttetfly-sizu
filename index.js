const moment = require("moment-timezone");
const { readdirSync, readFileSync, writeFileSync, existsSync } = require("fs-extra");
const { join, resolve } = require("path");
const logger = require("./utils/log");
const login = require("./includes/fca-priyan/login");

// MAIN GLOBALS
global.client = {
  commands: new Map(),
  events: new Map(),
  cooldowns: new Map(),
  eventRegistered: [],
  handleSchedule: [],
  handleReaction: [],
  handleReply: [],
  mainPath: process.cwd(),
  configPath: "",
  getTime: (type) => {
    switch (type) {
      case "seconds": return moment.tz("Asia/Dhaka").format("ss");
      case "minutes": return moment.tz("Asia/Dhaka").format("mm");
      case "fullHour": return moment.tz("Asia/Dhaka").format("HH");
      case "fullDay": return moment.tz("Asia/Dhaka").format("DD");
      case "month": return moment.tz("Asia/Dhaka").format("MM");
      case "fullYear": return moment.tz("Asia/Dhaka").format("YYYY");
      case "fullTime": return moment.tz("Asia/Dhaka").format("HH:mm:ss");
      case "fullDate": return moment.tz("Asia/Dhaka").format("DD/MM/YYYY");
      case "fullDateTime": return moment.tz("Asia/Dhaka").format("HH:mm:ss DD/MM/YYYY");
    }
  }
};
global.data = {
  threadInfo: new Map(),
  threadData: new Map(),
  userName: new Map(),
  userBanned: new Map(),
  threadBanned: new Map(),
  commandBanned: new Map(),
  threadAllowNSFW: [],
  allUserID: [],
  allCurrenciesID: [],
  allThreadID: []
};

global.config = {};
global.language = {};
global.antilink = {};

try {
  global.client.configPath = join(global.client.mainPath, "config.json");
  const configValue = require(global.client.configPath);
  for (const key in configValue) global.config[key] = configValue[key];
  logger.log("✅ Loaded config.json");
} catch {
  logger.log("❌ config.json not found!", "error");
  process.exit(1);
}

const appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
let appState;
try {
  appState = require(appStateFile);
} catch {
  logger.log("❌ appstate.json not found!", "error");
  process.exit(1);
}

async function onBot() {
  login({ appState }, async (err, api) => {
    if (err) return logger.log(JSON.stringify(err), "error");
    api.setOptions(global.config.FCAOption || {});
    writeFileSync(appStateFile, JSON.stringify(api.getAppState(), null, "\t"));
    global.client.api = api;
    global.client.timeStart = Date.now();

    // Fetch all subscribed thread IDs for broadcast (like Azan)
    global.allThreadID = [];
    try {
      const threads = await api.getThreadList(100, null, ["INBOX"]);
      global.allThreadID = threads.filter(t => t.isSubscribed).map(t => t.threadID);
      logger.log(`🟢 Thread IDs fetched: ${global.allThreadID.length}`);
    } catch (e) {
      logger.log("⚠️ Failed to fetch threads.", "warn");
    }

    // Load commands
    for (const file of readdirSync(join(global.client.mainPath, "commands")).filter(f => f.endsWith(".js"))) {
      try {
        const cmd = require(join(global.client.mainPath, "commands", file));
        if (cmd.config?.name) global.client.commands.set(cmd.config.name, cmd);
      } catch (e) {
        logger.log(`❌ Failed to load command: ${file}`, "error");
      }
    }

    // Load events
    for (const file of readdirSync(join(global.client.mainPath, "events")).filter(f => f.endsWith(".js"))) {
      try {
        const evt = require(join(global.client.mainPath, "events", file));
        if (evt.config?.name) global.client.events.set(evt.config.name, evt);
      } catch (e) {
        logger.log(`❌ Failed to load event: ${file}`, "error");
      }
    }

    // Start main bot listener
    require("./includes/listen")({ api });
    logger.log("💫 Bot started! (✅Sizu💟🦋 & Maruf System💫)");
  });
}

onBot();

process.on("unhandledRejection", (reason) => {
  logger.log("Unhandled Promise rejection: " + reason, "warn");
});

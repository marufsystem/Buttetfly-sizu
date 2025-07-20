const moment = require("moment-timezone");
const { readdirSync, readFileSync, writeFileSync, existsSync } = require("fs-extra");
const { join, resolve } = require("path");
const log = require("./utils/log");
const login = require("./includes/fca-priyan/login");

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
    const time = moment().tz("Asia/Dhaka");
    switch (type) {
      case "seconds": return time.format("ss");
      case "minutes": return time.format("mm");
      case "fullHour": return time.format("HH");
      case "fullDay": return time.format("DD");
      case "month": return time.format("MM");
      case "fullYear": return time.format("YYYY");
      case "fullTime": return time.format("HH:mm:ss");
      case "fullDate": return time.format("DD/MM/YYYY");
      case "fullDateTime": return time.format("HH:mm:ss DD/MM/YYYY");
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
  const configData = require(global.client.configPath);
  Object.assign(global.config, configData);
  log("✅ config.json loaded");
} catch {
  log("❌ config.json missing!", "ERROR");
  process.exit(1);
}

const appStatePath = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
let appState;
try {
  appState = require(appStatePath);
} catch {
  log("❌ appstate.json missing!", "ERROR");
  process.exit(1);
}

async function startBot() {
  login({ appState }, async (err, api) => {
    if (err) return log("❌ Login failed: " + JSON.stringify(err), "ERROR");

    api.setOptions(global.config.FCAOption || {});
    writeFileSync(appStatePath, JSON.stringify(api.getAppState(), null, 2));
    global.client.api = api;
    global.client.timeStart = Date.now();

    // Load threads
    try {
      const threads = await api.getThreadList(100, null, ["INBOX"]);
      global.allThreadID = threads.filter(t => t.isSubscribed).map(t => t.threadID);
      log(`📥 Threads fetched: ${global.allThreadID.length}`);
    } catch {
      log("⚠️ Couldn't fetch thread list", "WARN");
    }

    // Load commands
    const commandPath = join(global.client.mainPath, "commands");
    const commandFiles = readdirSync(commandPath).filter(f => f.endsWith(".js"));
    for (const file of commandFiles) {
      try {
        const cmd = require(join(commandPath, file));
        if (cmd.config?.name) global.client.commands.set(cmd.config.name, cmd);
      } catch (e) {
        log(`❌ Failed to load command ${file}`, "ERROR");
      }
    }

    // Load events
    const eventPath = join(global.client.mainPath, "events");
    const eventFiles = readdirSync(eventPath).filter(f => f.endsWith(".js"));
    for (const file of eventFiles) {
      try {
        const evt = require(join(eventPath, file));
        global.client.events.set(file.split(".")[0], evt);
      } catch (e) {
        log(`❌ Failed to load event ${file}`, "ERROR");
      }
    }

    // Listen
    require("./includes/listen")({ api });
    log("💫 Bot started successfully! | ✅Sizu💟🦋 & Maruf System💫", "READY");
  });
}

startBot();

process.on("unhandledRejection", (reason) => {
  log("Unhandled rejection: " + reason, "WARN");
});

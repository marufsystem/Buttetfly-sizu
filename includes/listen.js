const logger = require("../utils/log");

module.exports = function ({ api }) {
  logger("🟢 Listening for messages...");

  api.listenMqtt(async (err, event) => {
    if (err) return logger("❌ Error in listener: " + JSON.stringify(err), "ERROR");

    const { body, senderID, threadID, messageID } = event;

    // Ignore self messages
    if (senderID == api.getCurrentUserID()) return;

    // Handle commands
    if (body && body.startsWith(global.config.PREFIX)) {
      const args = body.slice(global.config.PREFIX.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command = global.client.commands.get(commandName);
      if (command) {
        try {
          await command.run({ api, event, args });
        } catch (err) {
          logger(`❌ Error executing command: ${commandName}\n${err.stack}`, "ERROR");
          api.sendMessage("⚠️ Something went wrong executing this command.", threadID);
        }
      }
    }
  });
};

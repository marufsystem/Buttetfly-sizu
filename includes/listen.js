const { readdirSync } = require("fs-extra");
const path = require("path");
const logger = require("../utils/log");

module.exports = function ({ api }) {
  api.listenMqtt(async (err, event) => {
    if (err) return logger(`❌ Listen error: ${err}`, "ERROR");
    if (!event || !event.type) return;

    const { type, threadID, messageID, senderID, body } = event;

    // Block bot from replying to itself
    if (senderID == api.getCurrentUserID()) return;

    // Handle message event
    if (type === "message" || type === "message_reply") {
      const commandName = body?.split(" ")[0]?.toLowerCase();
      const command = global.client.commands.get(commandName?.replace(global.config.PREFIX, ""));

      if (command && command.run) {
        try {
          await command.run({
            api,
            event,
            args: body.split(" ").slice(1),
            Users: global.Users,
            Threads: global.Threads,
            client: global.client,
            global,
          });
        } catch (e) {
          logger(`❌ Error in command '${commandName}': ${e}`, "ERROR");
        }
      }
    }

    // Future: add event handlers (e.g. reactions, schedule, etc.)
  });

  logger("🎧 Listening for messages...", "READY");
};

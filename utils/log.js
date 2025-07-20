const chalk = require("chalk");
const moment = require("moment-timezone");

function log(content, type = "INFO") {
  const time = moment().tz("Asia/Dhaka").format("HH:mm:ss");
  switch (type.toUpperCase()) {
    case "INFO":
      console.log(`${chalk.green.bold("[ INFO ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
    case "WARN":
      console.log(`${chalk.yellow.bold("[ WARN ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
    case "ERROR":
      console.log(`${chalk.red.bold("[ ERROR ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
    case "READY":
      console.log(`${chalk.cyan.bold("[ READY ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
    case "STARTING":
      console.log(`${chalk.blue.bold("[ START ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
    default:
      console.log(`${chalk.white.bold("[ LOG ]")} ${chalk.gray(`[${time}]`)} › ${content}`);
      break;
  }
}

module.exports = log;

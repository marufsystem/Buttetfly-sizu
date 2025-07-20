module.exports = function log(text, type = "LOG") {
  const time = new Date().toLocaleTimeString("en-US", { hour12: true });
  console.log(`[ ${type} | ${time} ] - ${text}`);
};

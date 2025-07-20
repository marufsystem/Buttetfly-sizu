const login = require("fca-priyan");

module.exports = function ({ appState }, callback) {
  login({ appState }, (err, api) => {
    if (err) return callback(err, null);
    
    api.setOptions({
      listenEvents: true,
      forceLogin: true,
      autoMarkRead: true,
      logLevel: "silent"
    });

    return callback(null, api);
  });
};

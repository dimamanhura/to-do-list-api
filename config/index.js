const config = require("./config");

module.exports = env => {
  env = env || "development";
  return Object.assign({ env }, config["production"], config[env]);
};

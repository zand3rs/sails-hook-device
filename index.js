/**
 * sails-hook-device
 *
 */

var path = require("path");
var DeviceHook = require(path.join(__dirname, "lib", "device_hook"));

module.exports = function(sails) {
  return new DeviceHook(sails);
};

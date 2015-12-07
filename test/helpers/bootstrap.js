var cwd = process.cwd();
var path = require("path");

global.Device = require(path.join(cwd, "lib", "device"));
global.SailsHook = require(path.join(cwd, "lib", "sails_hook"));

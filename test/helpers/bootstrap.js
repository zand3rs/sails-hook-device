var cwd = process.cwd();
var path = require("path");

global.Device = require(path.join(cwd, "lib", "device"));

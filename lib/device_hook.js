/**
 * DeviceHook
 *
 */

module.exports = DeviceHook;


var path = require("path");
var SailsHook = require(path.join(__dirname, "sails_hook"));
var Device = require(path.join(__dirname, "device"));

//==============================================================================
//-- constructor

DeviceHook.prototype = Object.create(SailsHook.prototype);

function DeviceHook() {
  var self = this;

  //-- super
  SailsHook.apply(self, Array.prototype.slice.call(arguments));

  //-- set routes
  self.before("all /*", function(req, res, next) {
    var userAgent = req.headers["user-agent"];

    //-- set device
    req.device = new Device(userAgent);
    next();
  });
}

//==============================================================================

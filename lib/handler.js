/**
 * handler
 *
 */

module.exports = handler;


var path = require("path");
var Device = require(path.join(__dirname, "device"));

//==============================================================================

function handler(req, res, next) {
  var userAgent = req.headers["user-agent"];

  //-- set device
  req.device = new Device(userAgent);

  return next();
}

//==============================================================================

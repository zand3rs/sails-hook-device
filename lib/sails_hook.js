/**
 * SailsHook
 *
 */

module.exports = SailsHook;


//==============================================================================
//-- constructor

function SailsHook(sails) {
  var self = this;

  Object.defineProperty(self, "sails", {
    get: function() {
      return sails;
    }
  });

  Object.defineProperty(self, "routes", {
    value: {},
    enumerable: true
  });
}

//==============================================================================
//-- public instance methods

SailsHook.prototype.initialize = function(done) {
  done();
};

//------------------------------------------------------------------------------

SailsHook.prototype.before = function(route, handler) {
  var self = this;
  var before = self.routes["before"] || {};
  before[(route || "").toLowerCase()] = handler;

  self.routes["before"] = before;
};

//------------------------------------------------------------------------------

SailsHook.prototype.after = function(route, handler) {
  var self = this;
  var after = self.routes["after"] || {};
  after[(route || "").toLowerCase()] = handler;

  self.routes["after"] = after;
};

//==============================================================================

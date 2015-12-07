/**
 * SailsHook
 *
 */

module.exports = SailsHook;


//==============================================================================
//-- constructor

function SailsHook(sails) {
  var self = this;
  self._sails = sails;
  self._routes = {};

  Object.defineProperty(self, "sails", {
    get: function() {
      return self._sails;
    }
  });

  Object.defineProperty(self, "routes", {
    get: function() {
      return self._routes;
    }
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
  var before = self._routes["before"] || {};
  before[(route || "").toLowerCase()] = handler;

  self._routes["before"] = before;
};

//------------------------------------------------------------------------------

SailsHook.prototype.after = function(route, handler) {
  var self = this;
  var after = self._routes["after"] || {};
  after[(route || "").toLowerCase()] = handler;

  self._routes["after"] = after;
};

//==============================================================================

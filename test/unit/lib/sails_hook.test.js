require("node-test-helper");

describe(TEST_NAME, function() {

  describe("constructor", function() {
    it("should not throw exception", function() {
      expect(function() { new SailsHook() }).to.not.throw(Error);
      expect(function() { new SailsHook({}) }).to.not.throw(Error);
    });

    it("should be successful", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.be.an.instanceof(SailsHook);
    });
  });

  describe("#sails", function() {
    it("should exist", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.have.property("sails");
    });

    it("should be equal to the constructor argument", function() {
      var sails = {};
      var sailsHook = new SailsHook(sails);
      expect(sailsHook).to.have.property("sails", sails);
    });
  });

  describe("#routes", function() {
    it("should exist", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.have.property("routes");
    });

    it("should be an empty object", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.have.property("routes")
                       .that.is.an("object")
                       .that.is.empty;
    });
  });

  describe("#initialize()", function() {
    it("should exist", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.respondTo("initialize");
    });

    it("should execute the callback argument", function() {
      var sailsHook = new SailsHook({});
      var callback = sinon.spy();
      sailsHook.initialize(callback);
      expect(callback.called).to.be.true;
    });
  });

  describe("#before()", function() {
    it("should exist", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.respondTo("before");
    });

    it("should add the handler to the routes using a lowercased route string", function() {
      var sailsHook = new SailsHook({});
      var route = "GET /*";
      var handler = function(req, res, next) {};

      sailsHook.before(route, handler);
      expect(sailsHook).to.have.deep.property("routes.before")
                       .with.property(route.toLowerCase())
                       .that.equals(handler);
    });
  });

  describe("#after()", function() {
    it("should exist", function() {
      var sailsHook = new SailsHook({});
      expect(sailsHook).to.respondTo("after");
    });

    it("should add the handler to the routes using a lowercased route string", function() {
      var sailsHook = new SailsHook({});
      var route = "ALL /*";
      var handler = function(req, res, next) {};

      sailsHook.after(route, handler);
      expect(sailsHook).to.have.deep.property("routes.after")
                       .with.property(route.toLowerCase())
                       .that.equals(handler);
    });
  });

});

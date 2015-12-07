require("node-test-helper");

describe(TEST_NAME, function() {

  describe("constructor", function() {
    it("should not throw exception", function() {
      expect(function() { new DeviceHook() }).to.not.throw(Error);
      expect(function() { new DeviceHook({}) }).to.not.throw(Error);
    });

    it("should be successful", function() {
      var deviceHook = new DeviceHook({});
      expect(deviceHook).to.be.an.instanceof(SailsHook);
      expect(deviceHook).to.be.an.instanceof(DeviceHook);
    });

    it("should define a before all /* route", function() {
      var deviceHook = new DeviceHook({});
      expect(deviceHook).to.have.deep.property("routes.before.all /*");
    });
  });

});

require("node-test-helper");

describe(TEST_NAME, function() {
  var req, res, next;

  beforeEach(function() {
    req = { headers: {} }; res = {}; next = sinon.spy();
  });

  it("should set device property", function() {
    handler(req, res, next);
    expect(req).to.have.property("device")
               .that.is.an.instanceof(Device);
  });

  it("should execute the callback argument", function() {
    handler(req, res, next);
    expect(next.called).to.be.true;
  });

});

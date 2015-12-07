require("node-test-helper");

describe(TEST_NAME, function() {
  var ua_iOS1 = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143";
  var ua_iOS2 = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3";
  var ua_iOS3 = "Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3";

  var ua_Android1 = "Mozilla/5.0 (Linux; Android 6.0; H220 Build/MRA58Y; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Mobile Safari/537.36";
  var ua_Android2 = "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19";
  var ua_Android3 = "Mozilla/5.0 (Linux; Android 5.1; Google Nexus 5 - 5.1.0 - API 22 - 1080x1920 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36"

  var ua_Mac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36";
  var ua_iPad = "Mozilla/5.0 (iPad; CPU iPad OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143";
  var ua_Tablet = "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Safari/535.19";

  describe("constructor", function() {
    it("should not throw exception", function() {
      expect(function() { new Device() }).to.not.throw(Error);
      expect(function() { new Device("") }).to.not.throw(Error);
      expect(function() { new Device({}) }).to.not.throw(Error);
    });

    it("should be successful", function() {
      var device = new Device("Mozilla/5.0");
      expect(device).to.be.an.instanceof(Device);
    });
  });

  describe("#ios", function() {
    it("should be true", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_iOS3 = new Device(ua_iOS3);

      expect(dev_iOS1).to.have.property("ios").that.is.true;
      expect(dev_iOS2).to.have.property("ios").that.is.true;
      expect(dev_iOS3).to.have.property("ios").that.is.true;
    });

    it("should be false", function() {
      var dev_Mac = new Device(ua_Mac);
      var dev_Android1 = new Device(ua_Android1);

      expect(dev_Mac).to.have.property("ios").that.is.false;
      expect(dev_Android1).to.have.property("ios").that.is.false;
    });
  });

  describe("#android", function() {
    it("should be true", function() {
      var dev_Android1 = new Device(ua_Android1);
      var dev_Tablet = new Device(ua_Tablet);

      expect(dev_Android1).to.have.property("android").that.is.true;
      expect(dev_Tablet).to.have.property("android").that.is.true;
    });

    it("should be false", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_iOS3 = new Device(ua_iOS3);

      expect(dev_iOS1).to.have.property("android").that.is.false;
      expect(dev_iOS2).to.have.property("android").that.is.false;
      expect(dev_iOS3).to.have.property("android").that.is.false;
    });
  });

  describe("#phone", function() {
    it("should be true", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_iOS3 = new Device(ua_iOS3);
      var dev_Android1 = new Device(ua_Android1);
      var dev_Android2 = new Device(ua_Android2);

      expect(dev_iOS1).to.have.property("phone").that.is.true;
      expect(dev_iOS2).to.have.property("phone").that.is.true;
      expect(dev_iOS3).to.have.property("phone").that.is.true;
      expect(dev_Android1).to.have.property("phone").that.is.true;
      expect(dev_Android2).to.have.property("phone").that.is.true;
    });

    it("should be false", function() {
      var dev_Mac = new Device(ua_Mac);
      var dev_iPad = new Device(ua_iPad);
      var dev_Tablet = new Device(ua_Tablet);

      expect(dev_Mac).to.have.property("phone").that.is.false;
      expect(dev_iPad).to.have.property("phone").that.is.false;
      expect(dev_Tablet).to.have.property("phone").that.is.false;
    });
  });

  describe("#tablet", function() {
    it("should be true", function() {
      var dev_iPad = new Device(ua_iPad);
      var dev_Tablet = new Device(ua_Tablet);

      expect(dev_iPad).to.have.property("tablet").that.is.true;
      expect(dev_Tablet).to.have.property("tablet").that.is.true;
    });

    it("should be false", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_iOS3 = new Device(ua_iOS3);

      expect(dev_iOS1).to.have.property("tablet").that.is.false;
      expect(dev_iOS2).to.have.property("tablet").that.is.false;
      expect(dev_iOS3).to.have.property("tablet").that.is.false;
    });
  });

  describe("#mobile", function() {
    it("should be true", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_iOS3 = new Device(ua_iOS3);

      var dev_Android1 = new Device(ua_Android1);
      var dev_Android2 = new Device(ua_Android2);
      var dev_Android3 = new Device(ua_Android3);

      var dev_Tablet = new Device(ua_Tablet);

      expect(dev_iOS1).to.have.property("mobile").that.is.true;
      expect(dev_iOS2).to.have.property("mobile").that.is.true;
      expect(dev_iOS3).to.have.property("mobile").that.is.true;

      expect(dev_Android1).to.have.property("mobile").that.is.true;
      expect(dev_Android2).to.have.property("mobile").that.is.true;
      expect(dev_Android3).to.have.property("mobile").that.is.true;

      expect(dev_Tablet).to.have.property("mobile").that.is.true;
    });

    it("should be false", function() {
      var dev_Mac = new Device(ua_Mac);
      expect(dev_Mac).to.have.property("mobile").that.is.false;
    });
  });

  describe("#webview", function() {
    it("should be true", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_Android1 = new Device(ua_Android1);
      var dev_Android3 = new Device(ua_Android3);

      expect(dev_iOS1).to.have.property("webview").that.is.true;
      expect(dev_Android1).to.have.property("webview").that.is.true;
      expect(dev_Android3).to.have.property("webview").that.is.true;
    });

    it("should be false", function() {
      var dev_iOS2 = new Device(ua_iOS2);
      var dev_Android2 = new Device(ua_Android2);

      expect(dev_iOS2).to.have.property("webview").that.is.false;
      expect(dev_Android2).to.have.property("webview").that.is.false;
    });
  });

  describe("#is()", function() {
    it("should be successful", function() {
      var device = new Device(ua_iOS1);
      expect(device).to.respondTo("is");
    });

    it("should be true", function() {
      var dev_iOS1 = new Device(ua_iOS1);
      var dev_Android1 = new Device(ua_Android1);
      var dev_iPad = new Device(ua_iPad);

      expect(dev_iOS1.is("iOS")).to.be.true;
      expect(dev_Android1.is("Android")).to.be.true;
      expect(dev_iOS1.is("Phone")).to.be.true;
      expect(dev_Android1.is("Phone")).to.be.true;
      expect(dev_iPad.is("Tablet")).to.be.true;
      expect(dev_iOS1.is("Mobile")).to.be.true;
      expect(dev_Android1.is("Mobile")).to.be.true;
      expect(dev_iOS1.is("WebView")).to.be.true;
      expect(dev_Android1.is("WebView")).to.be.true;
    });

    it("should be false", function() {
      var dev_Mac = new Device(ua_Mac);

      expect(dev_Mac.is("Mobile")).to.be.false;
      expect(dev_Mac.is("Something")).to.be.false;
    });
  });
});

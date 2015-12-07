/**
 * Device
 *
 */

module.exports = Device;


//==============================================================================
//-- constructor

function Device(userAgent) {
  var self = this;
  var ua = (typeof(userAgent) === "string") ? userAgent : "";

  var p_iOS = /(iPhone|iPod|iPad)/i;
  var p_Android = /Android/i;
  var p_Phone = /(iPhone|Android.*Mobile)/i;
  var p_Tablet = /(iPad|Android(?!.*Mobile))/i;
  var p_Mobile = /Mobile/i;
  var p_withVersion = /\s(Version|CriOS)\//i;

  var ios = p_iOS.test(ua);
  var android = p_Android.test(ua);
  var phone = p_Phone.test(ua);
  var tablet = p_Tablet.test(ua);
  var mobile = p_Mobile.test(ua) || phone || tablet;
  var withVersion = p_withVersion.test(ua);
  var webview = (ios && !withVersion) || (android && withVersion);

  Object.defineProperties(self, {
    ios     : { value: ios },
    android : { value: android },
    phone   : { value: phone },
    tablet  : { value: tablet },
    mobile  : { value: mobile },
    webview : { value: webview }
  });
}

//------------------------------------------------------------------------------

Device.prototype.is = function(kw) {
  var self = this;
  var _kw = (kw || "").toLowerCase();

  return (_kw && self.hasOwnProperty(_kw) && self[_kw]);
};

//==============================================================================

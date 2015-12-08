# sails-hook-device

Sails extension for determining device via user-agent header.

## Installation

```sh
$ npm install sails-hook-device
```

## Usage

Upon installation, a **_device_** object will be added to **_req_**.

```javascript
//-- api/controllers/HomeController.js
module.exports = {
  index: function(req, res) {
    res.view({ device: req.device });
  }
};

//-- views/home/index.ejs
<div>
  <div><%- device.ios     %></div>
  <div><%- device.android %></div>
  <div><%- device.phone   %></div>
  <div><%- device.tablet  %></div>
  <div><%- device.mobile  %></div>
  <div><%- device.webview %></div>
</div>
```

## Properties

The ff. properties return _true_ or _false_ depending on the device used:

* ios
* android
* phone
* tablet
* mobile
* webview

## Methods

### is(property)

Returns true if **_property_** _(case-insensitive)_ exists and matches the device used.

```javascript
req.device.is("iOS");
req.device.is("Android");
req.device.is("anything");
```

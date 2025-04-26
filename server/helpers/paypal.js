const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXU4WeTwneztMph0gT_GX1zawsYixktwkPWxH0-Wt8beLGynExHJcVIu-3Z8mPt7pcQzH4cYCjx-6RQA",
  client_secret:"ECimTkPidNJRaVyoZOlhIJV9v3rH67BYFsE9nEkqc5quq6TG4BiPwr3JceFF77M2hvHZE84kxVI6nBGJ"
});

module.exports = paypal;

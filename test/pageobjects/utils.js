const EC = require("wdio-wait-for")

module.exports = class Utils {
    async waitToBeClickable(selectorOrElement) {
      await selectorOrElement.waitForEnabled({
        timeout: 25000,
        reverse: false,
        timeoutMsg: "Failed, after waiting for the element to be enabled",
      });
    }
}
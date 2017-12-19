const pickOne = require("../helpers/pickOne");

exports.prefix = "";
exports.generate = () => {
  return pickOne([
    "happens earlier every year",
    "happens later every year",
    "happens at the wrong time every year",
    "drifts out of sync with the sun",
    "drifts out of sync with the moon",
    "drifts out of sync with the zodiac",
    "drifts out of sync with the Gregorian calendar",
    "drifts out of sync with the Mayan calendar",
    "drifts out of sync with the Lunar calendar",
    "drifts out of sync with the iPhone calendar",
    "drifts out of sync with the atomic clock in Colorado",
    "might not happen this year",
    "might happen twice this year"
  ])
}
exports.suffix = " ";
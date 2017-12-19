const pickOne = require("../helpers/pickOne");

exports.prefix = "Did you know that ";
exports.generate = () => {
  return pickOne([
    "the fall equinox",
    "the spring equinox",
    "the winter solstice",
    "the winter olympics",
    "the summer solstice",
    "the summer olympics",
    "the earliest sunrise",
    "the earliest sunset",
    "the latest sunrise",
    "the latest sunset",
    "daylight saving time",
    "daylight savings time",
    "leap day",
    "leap year",
    "easter",
    "the harvest moon",
    "the super moon",
    "the blood moon",
    "Toyota truck month",
    "shark week"
  ])
}
exports.suffix = " ";
const pickOne = require("../helpers/pickOne");

exports.prefix = "because of ";
exports.generate = () => {
  var pickarray = [
    "time zone legislation in Indiana",
    "time zone legislation in Arizona",
    "time zone legislation in Russia",
    "a decree by the Pope in the 1500s",
    "magnetic field reversal",
    "an arbitrary decision by Benjamin Franklin",
    "an arbitrary decision by Isaac Newton",
    "an arbitrary decision by FDR"
  ]
  pickarray.concat(getOfTheOptions());
  return pickOne(pickarray)
}

function getOfTheOptions() {
  var out = [];
  [
    "precession",
    "libration",
    "nutation",
    "libation",
    "eccentricity",
    "obliquity"
  ].forEach(w => {
    [
      "Moon",
      "Sun",
      "Earth's axis",
      "Equator",
      "prime meridian",
      "international date line",
      "mason-dixon line"
    ].forEach(w2 => {
      out.push(w + " of the " + w2)
    })
  })
  return out;
}
exports.suffix = "? ";
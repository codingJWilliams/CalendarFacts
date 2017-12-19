const pickOne = require("../helpers/pickOne");

exports.prefix = "Apparently ";
exports.generate = () => {
  return pickOne([
    "it causes a predictable increase in car accidents",
    "that's why we have leap seconds",
    "scientists are really worried",
    "it was even more extreme during the Bronze Age",
    "it was even more extreme during the Ice Age",
    "it was even more extreme during the Cretaceous Period",
    "it was even more extreme during the 1990s",
    "there's a proposal to fix it, but it will never happen",
    "there's a proposal to fix it, but it actually makes things worse",
    "there's a proposal to fix it, but it is stalled in congress",
    "there's a proposal to fix it, but it might be unconstitutional"
  ])
}
exports.suffix = ".";
var parts = [
  "./parts/1-what",
  "./parts/2-wrong",
  "./parts/3-reason",
  "./parts/4-apparently.js"
]
parts = parts.map(p => {
  return require(p)
})

exports.generateFact = () => {
  var out = "";
  parts.forEach(part => {
    part.prefix ? out = out + part.prefix : null;
    out = out + part.generate();
    part.suffix ? out = out + part.suffix : null;
  });
  return out
}
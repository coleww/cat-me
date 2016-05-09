var cats = require('./cats.json')

for (var name in cats) cats[name] = cats[name].join('\n')

var catNames = Object.keys(cats)

module.exports = function (cat) {
  cat = cat || catNames[~~(Math.random() * catNames.length)]

  return cats[cat]
}

module.exports.catNames = catNames

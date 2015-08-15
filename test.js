var tap = require('tap')

var catMe = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(catMe('world'), 'hello world', 'does it')
})

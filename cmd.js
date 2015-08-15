#!/usr/bin/env node

var yrModule = require('./')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('what it do?')
  .example('yrModule lol cool whatever')
  .alias('i', 'intensity')
  .describe('i', 'describe the intensity')
  .argv

if (process.stdin.isTTY) {
  // we are at a terminal!
  var text = argv._.join(' ')

  process.stdout.write(yrModule(text))
  process.stdout.write('\n')
} else {
  // data is being piped in!
  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function (chunk) {
    data += chunk
  })

  process.stdin.on('end', function () {
    process.stdout.write(yrModule(data))
    process.stdout.write('\n')
  })
}

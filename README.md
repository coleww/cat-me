cat-me
----------------

returns some ASCII cats

[![NPM](https://nodei.co/npm/cat-me.png)](https://nodei.co/npm/cat-me/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/cat-me.png)](http://travis-ci.org/coleww/cat-me)

### EXAMPLE

```javascript
var catMe = require('cat-me')

catMe() // => returns a random cat
  /\ ___ /\
 (  o   o  )
  \  >#<  /
  /       \
 /         \       ^
|           |     //
 \         /    //
  ///  ///   --
catMe('nyan') // => returns a nyan cat
  ☆    ☆  ☆
┈┈┈┈ ╭━━━━━━╮  ☆
┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏
┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏
┈┈ ╰━┫╳╳╳▕▏╰┻╯▏
☆ ┈┈┈┃╳╳╳╳╲▂▂╱
   ☆ ╰┳┳━━┳┳╯   ☆
```

### CLI

`npm install cat-me -g`

```
C A T   M E
print a cat to your console
=^.^=

Options:
  -c, --cats  get list of cat names
  -h, --help  Show help                                                [boolean]

Examples:
  catMe
  catMe nyan
```

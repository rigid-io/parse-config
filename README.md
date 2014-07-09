# rigid-parse-config

[![build status](https://secure.travis-ci.org/rigid-io/parse-config.png)](http://travis-ci.org/rigid-io/parse-config)

Easily parse a `rigid.json` file.

## Usage

```javascript
var parse = require('rigid-parse-config')

parse('/path/to/config', cb(err, config) {
    if(err) return console.error(err)

    console.log(config)
})
```

## Tests

Just run `npm test` to run the tests.

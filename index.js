var schema = require('js-schema')
var fs = require('fs')
var concat = require('concat-stream')

var ConfigFile = schema({
    'name': String,
    '?description': String,
    '?indexFile': String,
    '?siteDir': String,
    '?outputDir': String
})

module.exports = function(configFile, cb) {
    fs.createReadStream(configFile, {
        encoding: 'utf8'
    })
    .pipe(concat(function(data) {
        if(!data) return cb('Empty file')

        var obj
        try {
            obj = JSON.parse(data)
        } catch(err) {
            return cb('Failed to parse json file')
        }

        if(!ConfigFile(obj)) return cb('Schema failure')

        cb(null, obj)
    }))
}

var parse = require('../index')
var test = require('tap').test

test('Test correct parsing of config file', function(t) {
    t.plan(4)
    parse(__dirname + '/correct-config.json', function(err, config) {
        t.notOk(err, 'There shouldn\'t have been an error')
        t.ok(config, 'config must not be null')
        t.ok(config.name === 'correct', 'name must be set')
        t.ok(config.outputDir === '_public', 'outputDir must be set')
        t.end()
    })
})

test('Test parsing of empty file', function(t) {
    parse(__dirname + '/empty-config.json', function(err, config) {
        t.ok(err, 'There must have been an error')
        t.notOk(config, 'There must not be a config')
        t.end()
    })
})

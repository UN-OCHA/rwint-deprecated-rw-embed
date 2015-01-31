'use strict';

// Load the server
var settings = require('./settings');
var server = require(settings.rootPath + '/server');

// Options to pass into the 'Good' plugin
var goodOptions = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        args: [{ log: '*', request: '*', error: '*' }]
    },
    {
        reporter: require('good-file'),
        args: [ './rw-embed.log', { log: '*', request: '*', ops: '*', error: '*' }]
    }]
};

server.register([
    {
        register: require('good'),
        options: goodOptions
    },
    {
        register: require('hapi-named-routes')
    },
    {
        register: require('../plugins/oembed')
    }
], function(err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
        throw err;
    }
});

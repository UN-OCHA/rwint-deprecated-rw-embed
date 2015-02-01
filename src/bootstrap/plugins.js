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

var pkg = require('../../package');
var swaggerOptions = {
    basePath: server.info.uri,
    apiVersion: pkg.version,
    documentationPath: '/docs/interactive',
    info: {
        title: 'ReliefWeb Embed API',
        description: pkg.description,
    }
}

server.register([
    {
        register: require('good'),
        options: goodOptions
    },
    {
        register: require('hapi-named-routes')
    },
    {
        register: require('hapi-oembed-provider')
    },
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    }
], function(err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
        throw err;
    }
});

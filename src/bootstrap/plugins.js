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
    apiVersion: pkg.version,
    authorizations: false,
    basePath: server.info.uri,
    documentationPath: '/docs/interactive',
    endpoint: '/docs/swagger',
    info: {
        title: 'ReliefWeb Embed API',
        description: pkg.description
    }
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
        register: require('hapi-oembed-provider')
    },
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    },
    {
        register: require('../plugins/embed'),
        options: {
            // This is a custom version of options.routes.prefix
            // Multiple plugin registration does not support this,
            // and trying single registration seemed to mean the second
            // call to server.register was skipped.
            prefix: '/v0'
        }
    }
], function(err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
        throw err;
    }
});

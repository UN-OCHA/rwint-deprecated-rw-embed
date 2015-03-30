'use strict';

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        description: 'Root resource of the Embed service.',
        handler: function(request, reply){
            var hypermedia = require('../util/hypermedia')('http://' + request.info.host);
            var json = {
                title: 'ReliefWeb Embed API',
                _links: {
                    self: { href: hypermedia.root },
                    reliefweb: { href: 'http://api.rwlabs.org' }
                },
                data: {
                    v0: {
                        title: 'ReliefWeb Embed API v0',
                        href: hypermedia.uri('/v0/docs'),
                        status: 'experimental'
                    }
                },
                docs: {
                  swagger: hypermedia.link('docs/interactive')
                },
                version: {
                  build: require('../../package.json').version,
                  widgetLibrary: require('../../node_modules/rw-widgets/package.json').version 
                }
            };
            reply(json).type('application/hal+json');
        },
        id: 'index',
        cache: {
            // 1 hour
            expiresIn: 3600000,
            privacy: 'public'
        }
    },
    missing: {
        description: '404/Not Found response',
        handler: function(request, reply){
            reply('404').code(404);
        },
        id: '404'
    }
};

'use strict';

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        description: 'Root resource of the Embed service.',
        handler: function(request, reply){
            var hypermedia = require('../util/hypermedia')('http://' + request.info.host);
            var json = {
                _links: {
                    self: { href: hypermedia.root }
                },
                data: {
                    oembed: {
                        title: 'oEmbed Widgets',
                        href: hypermedia.uri('/v0/oembed')
                    },
                    iframe: {
                        title: 'iFrame Widgets',
                        href: hypermedia.uri('/v0/iframe')
                    },
                    widgets: {
                        title: 'HTML Widgets',
                        href: hypermedia.uri('/v0/widgets')
                    }
                }
            };
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'index'
        }
    },
    v0: {
        description: 'General version 0 root resource.',
        handler: function(request, reply){
            var hypermedia = require('../util/hypermedia')('http://' + request.info.host);
            var json = {
                _links: {
                    self: { href: hypermedia.root }
                },
                data: {
                    oembed: {
                        title: 'oEmbed Widgets',
                        href: hypermedia.uri('/v0/oembed')
                    },
                    iframe: {
                        title: 'iFrame Widgets',
                        href: hypermedia.uri('/v0/iframe')
                    },
                    widgets: {
                        title: 'HTML Widgets',
                        href: hypermedia.uri('/v0/widgets')
                    }
                }
            };
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'v0'
        }
    },
    missing: {
        description: '404/Not Found response',
        handler: function(request, reply){
            reply('404').code(404);
        },
        app: {
            name: '404'
        }
    }
};

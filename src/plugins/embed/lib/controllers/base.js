'use strict';

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    v0: {
        description: 'General version 0 root resource.',
        handler: function(request, reply){
            var hypermedia = require('../../../../util/hypermedia')('http://' + request.info.host);
            var json = {
                title: 'ReliefWeb Embed API v0',
                _links: {
                    self: { href: hypermedia.root . '/v0' }
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
        id: 'v0',
        cache: {
            // 1 hour
            expiresIn: 3600000,
            privacy: 'public'
        }
    }
};

'use strict';

var Joi = require('joi'),
    W = require('../../../../util/registry');

module.exports = {
    list: {
        description: 'List all available ReliefWeb widgets',
        handler: function(request, reply) {
            var json = W.listWidgets('http://' + request.info.host, request.url.href);
            reply(json).type('application/hal+json');
        },
        id: 'list-widget',
        tags: [ 'api', 'widget' ],
        notes: 'These widgets are listed based on the rw-widget library, but they will not work if the widget template isn\'t added to rw-embed.'
    },
    widget: {
        description: 'Relay the core widget content from reliefweb-widgets.js',
        handler: {
            directory: {
                path: 'dist/widgets',
                // defaultExtension is a fallback. For greater performance we should
                // hard-wire the html extension if that's our standard.
                defaultExtension: 'html'
            }
        },
        validate: {
            params: {
              type: Joi.valid(W.registry)
            }
        },
        id: 'widget',
        tags: [ 'api', 'widget' ],
        notes: 'Complete HTML document to be rended client-side by the rw-widget library.'
    }
};

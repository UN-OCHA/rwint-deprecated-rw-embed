'use strict';

var Joi = require('joi');
var rw = require('reliefweb-widgets/src/reliefweb-widgets');
var rwRegistry = rw.listWidgets();

module.exports = {
    list: {
        description: 'List all available ReliefWeb widgets',
        handler: function(request, reply) {
            var hypermedia = require('../util/hypermedia')(request.server.info.uri);

            var widgets = {};
            rwRegistry.forEach(function(item) {
                widgets[item] = hypermedia.link(item, request.url.href, { title: item });
            });

            var json = {
                _links: { self: hypermedia.link(request.url.href) },
                data: widgets
            };
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'list'
        }
    },
    widget: {
        description: 'Relay the core widget content from reliefweb-widgets.js',
        handler: {
            directory: {
                path: 'src/templates',
                // defaultExtension is a fallback. For greater performance we should
                // hard-wire the html extension if that's our standard.
                defaultExtension: 'html'
            }
        },
        validate: {
            params: {
              type: Joi.valid(rwRegistry)
            }
        }
    }
};

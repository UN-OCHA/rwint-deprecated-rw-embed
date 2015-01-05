'use strict';

var Joi = require('joi'),
    path = require('path');

module.exports = {
    list: {
        description: 'List all available oembed widgets',
        handler: function(request, reply) {
            var settings = require('../bootstrap/settings');
            for (var key in settings.widgets) {
                settings.widgets[key].href = request.server.info.uri + path.join(request.path, key);
            }
            var json = {
                _links: { self: { href: request.server.info.uri + request.url.href } },
                data: settings.widgets
            };
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'list'
        }
    },
    widget: {
        description: 'Generate the oembed response for the requested widget type.',
        handler: function(request, reply) {
            var query = request.query;
            var height = request.query.maxheight;
            var width = request.query.maxwidth;
            delete query.maxheight;
            delete query.maxwidth;

            var json = {
                title: 'Not a Real oEmbed Response',
                widget: request.server.info.uri + path.join('v0/widget', request.params.type),
                height: height,
                width: width,
                src: query
            };
            reply(json);
        },
        validate: {
            query: {
                url: Joi.required(),
                maxwidth: Joi.number().integer().min(1).default(800),
                maxheight: Joi.number().integer().min(1).default(800),
                // Apparently no way to blanket allow parameters.
                limit: Joi.optional(),
                offset: Joi.optional(),
                preset: Joi.optional(),
                profile: Joi.optional(),
                filters: Joi.optional(),
                facets: Joi.optional(),
                query: Joi.optional(),
                sort: Joi.optional(),
                fields: Joi.optional()
            }
        },
        app: {
            name: 'widget'
        }
    }
};

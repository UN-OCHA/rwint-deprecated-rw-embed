'use strict';

var Joi = require('joi');

module.exports = {
    list: {
        description: 'List all available oembed widgets',
        handler: function(request, reply) {
            var rw = require('reliefweb-widgets/src/reliefweb-widgets');
            var hypermedia = require('../util/hypermedia')(request.server.info.uri);

            var widgets = {};
            rw().listWidgets().forEach(function(item) {
                widgets[item] = hypermedia.link(item, request.url.href, { title: item });
            } );

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
        description: 'Generate the oembed response for the requested widget type.',
        handler: function(request, reply) {
            var hypermedia = require('../util/hypermedia')(request.server.info.uri);
            var query = request.query;
            var height = request.query.maxheight;
            var width = request.query.maxwidth;
            delete query.maxheight;
            delete query.maxwidth;

            var json = {
                title: 'Not a Real oEmbed Response',
                widget: hypermedia.uri(request.params.type, 'v0/widget'),
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
            },
            params: {
                type: Joi.valid(require('reliefweb-widgets/src/reliefweb-widgets')().listWidgets())
            }
        },
        app: {
            name: 'widget'
        }
    }
};

'use strict';

var Joi = require('joi'),
    W = require('../util/registry');

module.exports = {
    list: {
        description: 'List all available iframe widgets',
        handler: function(request, reply) {
            var json = W.listWidgets(request.server.info.uri, request.url.href);
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'list'
        }
    },
    widget: {
        description: 'Generate the iframe response for the requested widget type.',
        handler: function(request, reply) {
            var hypermedia = require('../util/hypermedia')(request.server.info.uri);
            var html = '<iframe src="' + hypermedia.uri('/v0/widgets')
                + '/' + request.params.type + '" width="' + request.query.maxwidth
                + '" height="' + request.query.maxheight + '"></iframe>';
            reply(html);
        },
        validate: {
            query: {
                maxwidth: Joi.number().integer().min(1).default(600),
                maxheight: Joi.number().integer().min(1).default(600),
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
                type: Joi.valid(W.registry)
            }
        },
        app: {
            name: 'widget'
        }
    }
};

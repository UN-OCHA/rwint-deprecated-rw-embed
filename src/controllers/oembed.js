'use strict';

var Joi = require('joi'),
    W = require('../util/common');

module.exports = {
    list: {
        description: 'List all available oembed widgets',
        handler: function(request, reply) {
            var json = W.listWidgets(request.server.info.uri, request.url.href);
            reply(json).type('application/hal+json');
        },
        app: {
            name: 'list'
        }
    },
    widget: {
        description: 'Generate the oembed response for the requested widget type.',
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    var hypermedia = require('../util/hypermedia')(request.server.info.uri);
                    return '<iframe src="' + hypermedia.uri('/v0/widgets')
                        + '/' + request.params.type + '" width="' + options.height
                        + '" height="' + options.width + '"></iframe>';
                },
                title: function(options, request) {
                    return W.title(request.params.type);
                },
                author_name: 'ReliefWeb',
                author_url: 'http://reliefweb.int'
            }
        },
        validate: {
            query: {
                url: Joi.required(),
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

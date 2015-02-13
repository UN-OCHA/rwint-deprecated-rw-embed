'use strict';

var Joi = require('joi'),
    W = require('../../../../util/registry'),
    common = require('../../../../util/common');

module.exports = {
    list: {
        description: 'List all available oembed widgets',
        handler: function(request, reply) {
            var json = W.listWidgets('http://' + request.info.host, request.url.href);
            reply(json).type('application/hal+json');
        },
        id: 'list-oembed',
        tags: [ 'api', 'oembed' ],
        notes: 'Identify all oembed types made available via the ReliefWeb Widgets library.'

    },
    widget: {
        description: 'Generate the oembed response for the requested widget type.',
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return common.iframe(request, options.height, options.width);
                },
                title: function(options, request) {
                    return W.title(request.params.type);
                },
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int'
            }
        },
        validate: {
            query: {
                url: Joi.string().required(),
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
        id: 'oembed',
        tags: [ 'api', 'oembed' ],
        notes: 'Request the oEmbed payload to be embedded by an oEmbed client..'

    }
};

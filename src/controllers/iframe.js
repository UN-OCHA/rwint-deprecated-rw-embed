'use strict';

var Joi = require('joi'),
    W = require('../util/registry');

module.exports = {
    list: {
        description: 'List all available iframe widgets',
        handler: function(request, reply) {
            var json = W.listWidgets('http://' + request.info.host, request.url.href);
            reply(json).type('application/hal+json');
        },
        id: 'list-iframe',
        tags: ['api', 'iframe'],
        notes: 'Identify all widgets made available via the ReliefWeb Widgets library.'
    },
    widget: {
        description: 'Generate the iframe response for the requested widget type.',
        handler: function(request, reply) {
            reply(require('../util/common').iframe(request, request.query.maxheight, request.query.maxwidth));
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
        id: 'iframe',
        tags: ['api', 'iframe'],
        notes: 'Request the iFrame content for a specific widget as might be included in an oEmbed payload.'
    }
};

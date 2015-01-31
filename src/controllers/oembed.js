'use strict';

var Joi = require('joi'),
    W = require('../util/registry');

module.exports = {
    list: {
        description: 'List all available oembed widgets',
        handler: function(request, reply) {
            var json = W.listWidgets('http://' + request.info.host, request.url.href);
            reply(json).type('application/hal+json');
        },
        id: 'list-oembed'
    },
    widget: {
        description: 'Generate the oembed response for the requested widget type.',
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return require('../util/common').iframe(request, options.height, options.width);
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
        id: 'widget'
    },
    overview: {
        description: 'Generate the oembed response for the crisis overview.',
/*
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return require('../util/common').iframe(request, options.height, options.width, 'crisis-overview');
                },
                title: function(options, request) {
                    return W.title('crisis-overview');
                },
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int'
            }
        },
        */
        handler: function(request, reply) {
            var json = {
                type: 'rich',
                title: W.title('crisis-overview'),
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int',
                html: require('../util/common').iframe(request, '100%', '100%', 'crisis-overview')
            };
            reply(json);
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
        id: 'overview'
    },
    timeline: {
        description: 'Generate the oembed response for the requested timeline widget.',
        /*
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return require('../util/common').iframe(request, options.height, options.width, 'timeline');
                },
                title: function(options, request) {
                    return W.title('timeline');
                },
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int'
            }
        },
        */
        handler: function(request, reply) {
            var json = {
                type: 'rich',
                title: W.title('timeline'),
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int',
                html: require('../util/common').iframe(request, '100%', '100%', 'timeline')
            };
            reply(json);
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
        id: 'timeline'
    },
    financial: {
        description: 'Generate the oembed response for the requested financial widget.',
        /*
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return require('../util/common').iframe(request, options.height, options.width, 'timeline');
                },
                title: function(options, request) {
                    return W.title('timeline');
                },
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int'
            }
        },
        */
        handler: function(request, reply) {
            var json = {
                type: 'rich',
                title: W.title('financial'),
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int',
                html: require('../util/common').iframe(request, '100%', '100%', 'financial')
            };
            reply(json);
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
        id: 'financial'
    },
    river: {
        description: 'Generate the oembed response for the requested river widget.',
        /*
        handler: {
            oembed: {
                type: 'rich',
                html: function(options, request) {
                    return require('../util/common').iframe(request, options.height, options.width, 'timeline');
                },
                title: function(options, request) {
                    return W.title('timeline');
                },
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int'
            }
        },
        */
        handler: function(request, reply) {
            var json = {
                type: 'rich',
                title: W.title('river'),
                provider_name: 'ReliefWeb',
                provider_url: 'http://reliefweb.int',
                html: require('../util/common').iframe(request, '100%', '100%', 'river')
            };
            reply(json);
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
        id: 'river'
    }

};

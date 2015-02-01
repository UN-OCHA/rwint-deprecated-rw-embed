'use strict';

exports.register = function (server, options, next) {
    var requireDirectory = require('require-directory');
    var controller = requireDirectory(module, './lib/controllers');

    server.route([
        {
            method: 'GET',
            path: options.prefix,
            config: controller.base.v0
        },
        {
            method: 'GET',
            path: options.prefix + '/iframe',
            config: controller.iframe.list
        },
        {
            method: 'GET',
            path: options.prefix + '/iframe/{type}',
            config: controller.iframe.widget
        },
        {
            method: 'GET',
            path: options.prefix + '/oembed',
            config: controller.oembed.list
        },
        {
            method: 'GET',
            path: options.prefix + '/oembed/{type}',
            config: controller.oembed.widget
        },
        {
            method: 'GET',
            path: options.prefix + '/widgets',
            config: controller.widgets.list
        },
        {
            method: 'GET',
            path: options.prefix + '/widgets/{type}',
            config: controller.widgets.widget
        }
    ]);

    next();
};

exports.register.attributes = {
    name: 'embed',
    version: require('../../../package.json').version
};

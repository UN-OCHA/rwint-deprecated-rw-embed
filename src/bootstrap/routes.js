'use strict';

/**
 * Dependencies.
 */
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../controllers');

module.exports = [
    {
        method: 'GET',
        path: '/v0',
        config: controller.base.v0
    },
    {
        method: 'GET',
        path: '/v0/oembed',
        config: controller.oembed.list
    },
    {
        method: 'GET',
        path: '/v0/oembed/{type}',
        config: controller.oembed.widget
    },
    {
        method: 'GET',
        path: '/v0/widgets',
        config: controller.widgets.list
    },
    {
        method: 'GET',
        path: '/v0/widgets/{type}',
        config: controller.widgets.widget
    },
    {
        method: 'GET',
        path: '/assets/{path*}',
        config: controller.assets.asset
    },
    {
        method: 'GET',
        path: '/assets/reliefweb-widgets.js',
        config: controller.assets.widgetLibrary
    },
    {
        method: 'GET',
        path: '/',
        config: controller.base.index
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.base.missing
    }
];

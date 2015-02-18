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
        path: '/bower_components/{path*}',
        config: controller.assets.bower
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.assets.style
    },
    {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.assets.image
    },
    {
        method: 'GET',
        path: '/fonts/{path*}',
        config: controller.assets.font
    },
    {
        method: 'GET',
        path: '/dist/rw-widgets.js',
        config: controller.assets.widgetLibrary
    },
    {
        method: 'GET',
        path: '/docs/interactive/{path*}',
        config: controller.assets.swagger
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

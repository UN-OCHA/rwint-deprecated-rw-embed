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
        path: '/v0/iframe',
        config: controller.iframe.list
    },
    {
        method: 'GET',
        path: '/v0/iframe/{type}',
        config: controller.iframe.widget
    },
    {
        method: 'GET',
        path: '/v0/oembed',
        config: controller.oembed.list
    },
    /*
    {
        method: 'GET',
        path: '/v0/oembed/{type}',
        config: controller.oembed.widget
    },
    */
    {
        method: 'GET',
        path: '/v0/oembed/crisis-overview',
        config: controller.oembed.overview
    },
    {
        method: 'GET',
        path: '/v0/oembed/timeline',
        config: controller.oembed.timeline
    },
    {
        method: 'GET',
        path: '/v0/oembed/financial',
        config: controller.oembed.financial
    },
    {
        method: 'GET',
        path: '/v0/oembed/river',
        config: controller.oembed.river
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
        path: '/dist/reliefweb-widgets.js',
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

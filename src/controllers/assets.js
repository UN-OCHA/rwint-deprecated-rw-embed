'use strict';

var Util = require('../util/common');

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    bower: {
        description: 'Frontend library assets.',
        handler: {
            directory: {
                path: Util.modulePath('rw-widgets', '/bower_components')
            }
        },
        id: 'bower'
    },
    jsAgg: {
        description: 'Aggregated JS assets.',
        handler: {
            file: 'dist/js/embed.js'
        },
        id: 'jsAgg'
    },
    cssAgg: {
        description: 'Aggregated CSS assets.',
        handler: {
            file: 'dist/css/embed.css'
        },
        id: 'cssAgg'
    },
    widgetLibrary: {
        description: 'rw-widgets.js library',
        handler: {
            file: Util.modulePath('rw-widgets', '/dist/rw-widgets.js')
        },
        id: 'widgetLibrary'
    },
    style: {
        description: 'rw-widgets.js styles',
        handler: {
            directory: {
                path: Util.modulePath('rw-widgets', '/example/css')
            }
        },
        id: 'widgetStyles'
    },
    image: {
        description: 'rw-widgets.js images',
        handler: {
            directory: {
                path: Util.modulePath('rw-widgets', '/example/images')
            }
        },
        id: 'widgetImages'
    },
    font: {
        description: 'rw-widgets.js fonts',
        handler: {
            directory: {
                path: Util.modulePath('rw-widgets', '/example/fonts')
            }
        },
        id: 'widgetFonts'
    },
    swagger: {
        description: 'rw-widgets.js fonts',
        handler: {
            directory: {
                path: Util.modulePath('hapi-swagger', '/public/swaggerui'),
                listing: false,
                index: true
            }
        },
        id: 'swagger'
    }
};

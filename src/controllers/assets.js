'use strict';

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    asset: {
        description: 'Frontend library assets.',
        handler: {
            directory: {
                path: 'node_modules/reliefweb-widgets/bower_components',
            }
        },
        app: {
            name: 'asset'
        }
    },
    widgetLibrary: {
        description: 'rw-widgets.js library',
        handler: {
            file: 'node_modules/reliefweb-widgets/dist/reliefweb-widgets.js'
        },
        app: {
            name: 'widgetLibrary'
        }
    }
};

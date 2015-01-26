'use strict';

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    bower: {
        description: 'Frontend library assets.',
        handler: {
            directory: {
                path: 'node_modules/rw-widgets/bower_components'
            }
        },
        app: {
            name: 'bower'
        }
    },
    widgetLibrary: {
        description: 'rw-widgets.js library',
        handler: {
            file: 'node_modules/rw-widgets/dist/reliefweb-widgets.js'
        },
        app: {
            name: 'widgetLibrary'
        }
    },
    style: {
        description: 'rw-widgets.js styles',
        handler: {
            directory: {
                path: 'node_modules/rw-widgets/example/css'
            }
        },
        app: {
            name: 'widgetStyles'
        }
    },
    image: {
        description: 'rw-widgets.js images',
        handler: {
            directory: {
                path: 'node_modules/rw-widgets/example/images'
            }
        },
        app: {
            name: 'widgetImages'
        }
    }
,
    font: {
        description: 'rw-widgets.js fonts',
        handler: {
            directory: {
                path: 'node_modules/rw-widgets/example/fonts'
            }
        },
        app: {
            name: 'widgetFonts'
        }
    }
};

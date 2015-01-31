'use strict';

/**
 * Dependencies.
 */
var path = require('path');

// Defaults that you can access when you require this config.
module.exports = {
    rootPath: path.normalize(path.join(__dirname, '/../..')),
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    host: process.env.APP_HOST || '0.0.0.0'
};

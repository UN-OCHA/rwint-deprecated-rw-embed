'use strict';

/**
 * Dependencies.
 */
var path = require('path');
var fs = require('fs');

// Defaults that you can access when you require this config.
module.exports = {
    rootPath: path.normalize(path.join(__dirname, '/../..')),
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    widgets: JSON.parse(fs.readFileSync(path.join(__dirname, '/../../config/widgets.json'), 'utf8'))
};

'use strict';

var Hapi = require('hapi')
    , config = require('./src/bootstrap/settings')
    ;

var server = new Hapi.Server(
    {
        connections: {
            routes: {cors: true},
            router: {stripTrailingSlash: true}
        }
    }
);
server.connection({host: config.host, port: config.port});

// Export the server to be required elsewhere.
module.exports = server;

// Bootstrap Hapi Server Plugins
require('./src/bootstrap/plugins');

// Add the server routes
server.route(require('./src/bootstrap/routes'));

// Start the server.
server.start(function() {
    // Log to the console the host and port info.
    console.log('Server started at: ' + server.info.uri);
});

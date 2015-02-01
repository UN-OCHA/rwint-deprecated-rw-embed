'use strict';

var Path = require('path');

module.exports = {
    iframe: function(request, height, width, type) {
        var query = request.query;
        query.config = query.url;
        delete query.url;
        delete query.maxheight;
        delete query.maxwidth;

        type = type ? type : request.params.type;

        var hypermedia = require('./hypermedia')('http://' + request.info.host);
        var url = hypermedia.uri(type, '/v0/widgets', query);
        return '<iframe src="' + url + '" width="' + width + '" height="' + height + '"></iframe>';
    },
    modulePath: function(module, path) {
        return Path.dirname(Path.dirname(require.resolve(module))) + path;
    }
};

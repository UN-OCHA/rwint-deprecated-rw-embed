'use strict';

module.exports = {
    iframe: function(request, height, width) {
        var query = request.query;
        query.config = query.url;
        delete query.url;
        delete query.maxheight;
        delete query.maxwidth;

        var hypermedia = require('./hypermedia')('http://' + request.info.host);
        var url = hypermedia.uri(request.params.type, '/v0/widgets', query);
        return '<iframe src="' + url + '" width="' + width + '" height="' + height + '"></iframe>';
    }
};

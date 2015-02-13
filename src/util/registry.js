'use strict';

//var rw = require('rw-widgets/src/reliefweb-widgets');
var rwRegistry = [ 'crisis-overview', 'river', 'timeline', 'financial' ];

module.exports = {
    listWidgets: function(baseUrl, path) {
        var hypermedia = require('../util/hypermedia')(baseUrl);

        var widgets = {};
        rwRegistry.forEach(function(item) {
            widgets[item] = hypermedia.link(item, path, { title: item });
        } );

        return {
            _links: { self: hypermedia.link(path) },
            data: widgets
        };
    },
    registry: rwRegistry,
    title: function (type) {
        return type;
    }
};

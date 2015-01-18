'use strict';

var QS = require('querystring');

module.exports = function(baseUrl) {
	return {
		uri: function(path, base, search) {
			base = base === undefined ? '' : base + '/';
			var url = baseUrl + base + path;
			if (search !== undefined) {
				url += '?' + QS.stringify(search);
			}
			return url;
		},
		link: function(path, base, attributes) {
			var link = attributes === undefined ? {} : attributes;
			link.href = this.uri(path, base);
			return link;
		}
	};
};

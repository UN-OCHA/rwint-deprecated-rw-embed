'use strict';



module.exports = function(baseUrl) {
	return {
		uri: function(path, base) {
			base = base === undefined ? '' : base + '/';
			return baseUrl + base + path;
		},
		link: function(path, base, attributes) {
			var link = attributes === undefined ? {} : attributes;
			link.href = this.uri(path, base);
			return link;
		}
	};
};

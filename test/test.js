var Code = require('code')
 , Lab = require('lab')
 , Server = require('../server');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

describe('HTTP Endpoints', function () {
    it('available for "/"', function(done) {
        var options = {
            method: "GET",
            url: "/"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('available for "/v0"', function(done) {
        var options = {
            method: "GET",
            url: "/v0"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('available for "/v0/oembed"', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('not available for "/nowhere"', function(done) {
        var options = {
            method: "GET",
            url: "/nowhere"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('oEmbed implementation', function () {
    it('requires a url parameter', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed/image"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
    it('sets a default maxheight and maxwidth', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed/image?url=placeholder"
        };
        Server.inject(options, function(response) {
            expect(response.result.height).to.equal(800);
            expect(response.result.width).to.equal(800);
            done();
        });
    });
    it('overrides the maxheight and maxwidth from querystring', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed/image?url=placeholder&maxheight=10&maxwidth=20"
        };
        Server.inject(options, function(response) {
            expect(response.result.height).to.equal(10);
            expect(response.result.width).to.equal(20);
            done();
        });
    });
    it('must be of a valid type', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed/nat?url=placeholder&maxheight=10&maxwidth=20"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
});

describe('Widget resources', function() {
    it('must be of a valid type', function(done) {
        var options = {
            method: "GET",
            url: "/v0/oembed/nat?url=placeholder&maxheight=10&maxwidth=20"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
});


var Code = require('code')
 , Lab = require('lab')
 , Server = require('../server');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

describe('Embed plugin', function() {
    describe('provides routes', function() {
        it('for "/"', function(done) {
            var options = {
                method: "GET",
                url: "/v0"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/oembed"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/oembed"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/oembed/{type}"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/oembed/river?url=foo"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/iframe"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/iframe"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/iframe/{type}"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/iframe/river?url=foo"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/widgets"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/widgets"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('for "/widgets/{type}"', function(done) {
            var options = {
                method: "GET",
                url: "/v0/widgets/river"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('implements oEmbed', function () {
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
                expect(response.result.height).to.equal(600);
                expect(response.result.width).to.equal(600);
                done();
            });
        });
    });

    describe('implements iFrames', function() {
        it('must be of a valid type', function(done) {
            var options = {
                method: "GET",
                url: "/v0/iframe/nat?url=placeholder&maxheight=10&maxwidth=20"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(400);
                done();
            });
        });
    });

    describe('implements HTML widgets', function() {
        it('must be of a valid type', function(done) {
            var options = {
                method: "GET",
                url: "/v0/widgets/nat?url=placeholder&maxheight=10&maxwidth=20"
            };
            Server.inject(options, function(response) {
                expect(response.statusCode).to.equal(400);
                done();
            });
        });
    });
});


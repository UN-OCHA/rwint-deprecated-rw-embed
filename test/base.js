var Code = require('code')
 , Lab = require('lab')
 , Server = require('../server');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

describe('Base Endpoints', function () {
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

describe('Assets', function() {
    it('has working paths to bower_components', function(done) {
        var options = {
            method: "GET",
            url: "/bower_components/handlebars/handlebars.js"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('can load the rw-widgets.js library', function(done) {
        var options = {
            method: "GET",
            url: "/dist/rw-widgets.js"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Swagger integration', function() {
    it('can load the swaggerui', function(done) {
        var options = {
            method: "GET",
            url: "/docs/interactive"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('can load the swagger service description', function(done) {
        var options = {
            method: "GET",
            url: "/docs/swagger"
        };
        Server.inject(options, function(response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

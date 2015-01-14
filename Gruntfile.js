"use strict";

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // Load plugins
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

    // Configure plugins
    grunt.initConfig({
        lab : {
            color       : true,
            coverage    : true,
            minCoverage : 90,
            verbose     : true
        },
        eslint: {
            options: {
                config: '.eslint'
            },
            target: [ "src/**/*.js" ]
        },
        watch: {
            code: {
                files: ['*.js', 'src/**/*.js'],
                tasks: ['default'],
                options: {
                  spawn: false
                }
            }
        },
        wiredep: {
            build: {
                src: "src/templates/*.html",
                cwd: "node_modules/reliefweb-widgets",
                ignorePath: /.*(bower_components|dist)\//,
                includeSelf: true
            }
        }
    });

    var version = require('./package.json').version;
    grunt.config('wiredep.build.fileTypes.html.replace.js', '<script src="/assets/{{filePath}}?' + version + '"></script>');

    // Register tasks
    grunt.registerTask("default", [ "eslint", "lab", "wiredep" ]);

};

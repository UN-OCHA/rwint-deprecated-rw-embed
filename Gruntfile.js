"use strict";

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    // Load plugins
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

    // Configure plugins
    grunt.initConfig({
        clean: {
          dist: [ 'dist' ]
        },
        mkdir: {
           init: {
             options: {
               create: [ 'dist' ]
             }
           }
        },
        copy: {
          templates: {
            files: [
              {
                expand: true,
                cwd: 'src/templates',
                src: ['**'],
                dest: 'dist'
              }
            ]
          }
        },
        lab: {
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
                src: "dist/*.html",
                cwd: "node_modules/rw-widgets",
                ignorePath: /.*node_modules\/rw-widgets/,
                includeSelf: true
            }
        }
    });

    var version = require('./package.json').version;
    grunt.config('wiredep.build.fileTypes.html.replace.js', '<script src="{{filePath}}?' + version + '"></script>');

    // Register tasks
    grunt.registerTask("default", [ 'eslint', 'clean', 'mkdir', 'copy', 'wiredep', 'lab' ]);

};

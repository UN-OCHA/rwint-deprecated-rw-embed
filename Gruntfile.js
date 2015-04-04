"use strict";

module.exports = function (grunt) {
    // Path to Widget Library.
    var library = require('./src/util/common').modulePath('rw-widgets', '/')

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
        },
        useminPrepare: {
            html: 'dist/*.html',
            options: {
                dest: 'dist',
                root: [ library, library + '/example' ]
            }
        },
        usemin: {
            html: [ 'dist/*.html' ],
        },
        cacheBust: {
            assets: {
                options: {
                    rename: false
                },
                files: [{
                    src: ['dist/*.html']
                }]
            }
        }
    });

    grunt.registerTask('compile', [
      'clean',
      'mkdir',
      'copy',
      'wiredep',
      'useminPrepare',
      'concat:generated',
      'cssmin:generated',
      'uglify:generated',
      'usemin',
      'cacheBust'
    ]);

    grunt.registerTask('validate', [
      'eslint'
    ]);

    grunt.registerTask('test', [
      'lab'
    ]);

    grunt.registerTask('default', [
      'validate',
      'compile',
      'test'
    ]);

};

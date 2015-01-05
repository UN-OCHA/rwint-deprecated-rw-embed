"use strict";

module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-lab');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Configure plugins
    grunt.initConfig({
        lab : {
            color       : true,
            coverage    : true,
            minCoverage : 98,
            verbose     : true
        },
        eslint: {
            options: {
                config: '.eslint'
            },
            target: [ "src/**" ]
        },
        watch: {
            code: {
                files: ['*.js', 'src/**/*.js'],
                tasks: ['default'],
                options: {
                  spawn: false
                }
            }
        }
    });

    // Register tasks
    grunt.registerTask("default", [ "eslint", "lab" ]);

};

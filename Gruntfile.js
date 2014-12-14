"use strict";

module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-lab");

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
        }
    });

    // Register tasks
    grunt.registerTask("default", [ "eslint", "lab" ]);

};

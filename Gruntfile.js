module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['src/**/*.js', 'test/**/*.js']
        },

        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'spec/*Spec.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint', 'jasmine']);
    grunt.registerTask('test', ['jshint', 'jasmine']);
};
module.exports = function(grunt) {

    /* Load Grunt tasks declared in the package.json file
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });
    */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['src/**/*.js', 'spec/**/*.js']
        },

        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'spec/**/*Spec.js'
            },
            coverage: {
                src: ['src/**/*.js'],
                options: {
                    specs: ['spec/**/*Spec.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'reports/coverage/coverage.json',
                        report: [
                            {
                                type: 'lcov',
                                options: {
                                    dir: 'reports/coverage'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ]
                    }
                }
            }
        },
        coveralls: {
            grunt_coveralls_real_coverage: {
                src: 'reports/coverage/lcov.info'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-template-jasmine-istanbul');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.registerTask('test', ['jshint', 'jasmine:coverage']);
};
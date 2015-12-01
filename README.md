# grunt-jasmine-boilerplate
##Steps to create a basic project ready to write unit tests and check validation of code

### Create a node module package and define a new package.json file
```bash
npm init 
```

```json
 {
   "name": "grunt-jasmine-boilerplate",
   "version": "0.0.0",
   "description": "Example and guide about how to create a basic project ready to write unit tests and check validation of code",
   "main": "app.js",
   "scripts": {
     "test": "grunt jasmine"
   },
   "repository": {
     "type": "git",
     "url": "git+https://github.com/agl0809/grunt-jasmine-boilerplate.git"
   },
   "keywords": [
     "javascript",
     "grunt",
     "jasmine",
     "jshint"
   ],
   "author": "Antonio Garcia Leon",
   "license": "MIT",
   "homepage": "https://github.com/agl0809/grunt-jasmine-boilerplate"
 }
```

### Installing Grunt and Jshint & Jasmine & template-jasmine-istanbul grunt plugins
```
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-jasmine --save-dev
npm install grunt-template-jasmine-istanbul --save-dev
```

### Preparing a new Grunt project
A typical setup will involve adding two files to project: package.json and the Gruntfile.

*   package.json: This file is used by npm to store metadata for projects published as npm modules. Result of previous step:
```json
 "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-jshint": "^0.11.3",
    "grunt-contrib-jasmine": "^0.9.2",
    "grunt-template-jasmine-istanbul": "^0.4.0"
  }
```
*   Gruntfile: This file is named Gruntfile.js and is used to configure or define tasks and load Grunt plugins. Create and add: 
```javascript
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/**/*.js', 'test/**/*.js']
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
        }             
    });
 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-template-jasmine-istanbul');
    grunt.registerTask('test', ['jshint', 'jasmine:coverage']);
};
```

### Preparing travis-ci settings

Add `.travis.yml` file and include basic configuration.
```
language: node_js
node_js:
  - "stable"
before_install: npm install -g grunt-cli
install: npm install
before_script: grunt 
```

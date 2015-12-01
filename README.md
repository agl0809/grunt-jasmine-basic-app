# grunt-jasmine-boilerplate
[![Build Status](https://travis-ci.org/agl0809/grunt-jasmine-boilerplate.svg?branch=develop)](https://travis-ci.org/agl0809/grunt-jasmine-boilerplate)
[![Coverage Status](https://coveralls.io/repos/agl0809/grunt-jasmine-boilerplate/badge.svg?branch=develop&service=github)](https://coveralls.io/github/agl0809/grunt-jasmine-boilerplate?branch=develop)

##Project with a Grunt build process that gets you running with:

* JSHint 
* Jasmine unit tests in a headless browser from the command line and/or in a real browser
* Coveralls code coverage reports 

Start by installing the required node modules:
`npm install`

You can then run the following tasks:

* `grunt test` - Run tests in the console
* `grunt jshint` - Start Jshint validation 
* `grunt jshint:coverage` - Generate code coverage report and show stadistics in the console

You could install dependencies manually

```
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-jasmine --save-dev
npm install grunt-template-jasmine-istanbul --save-dev
npm install grunt-coveralls --save-dev
```

Preparing continuos integration with travis-ci

Add `.travis.yml` file and include basic configuration.

```
language: node_js
node_js:
  - "stable"
before_install: npm install -g grunt-cli
install: npm install
before_script: grunt 
```

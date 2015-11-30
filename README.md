# grunt-jasmine-basic-app
##Steps to create a basic project ready to write unit tests and check validation of code

### Create a node module package and define a new package.json file
```bash
npm init 
```

```json
 {
   "name": "grunt-jasmine-basic-app",
   "version": "0.0.0",
   "description": "Example and guide about how to create a basic project ready to write unit tests and check validation of code",
   "main": "app.js",
   "scripts": {
     "test": "grunt jasmine"
   },
   "repository": {
     "type": "git",
     "url": "git+https://github.com/agl0809/grunt-jasmine-basic-app.git"
   },
   "keywords": [
     "javascript",
     "grunt",
     "jasmine",
     "jshint"
   ],
   "author": "Antonio Garcia Leon",
   "license": "MIT",
   "homepage": "https://github.com/agl0809/grunt-jasmine-basic-app"
 }
```

### Installing Grunt and Jshint & Jasmine grunt plugins
```
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-jasmine --save-dev
```
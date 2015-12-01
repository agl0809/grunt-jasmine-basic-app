var Person = function (name, age) {
    'use strict';

    var greet = function () {
        return 'Hello, I\'m ' + name;
    };

    return {
        name : name,
        greet: greet
    };
};



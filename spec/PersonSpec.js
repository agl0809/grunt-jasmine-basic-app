describe("Person object", function () {
    "use strict";
    var name, age, person, greeting;

    beforeEach(function () {
        name = 'Antonio';
        age = '30';
        greeting = 'Hello, I am ' + name;
        person = new Person(name, age);
    });

    it("Should have a name property with the name provided", function () {
        expect(person.name).toEqual(name);
    });

    it("Should not have a age property with the age provided", function () {
        expect(person.age).toBeUndefined();
    });

    it("Should greet when asked", function () {
        expect(person.greet()).toContain('Hello');
    });

});
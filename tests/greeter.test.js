'use strict';

const greeter = require('../src/greeter');


describe('sayHello', () => {
    test('Undefined name greet', () => {
        const greet = greeter.sayHello()
        expect(greet).toBe('Hello World!')
    });

    test('With a name', () => {
        const greet = greeter.sayHello('Pablo')
        expect(greet).toBe('Hello Pablo!')
    });
});
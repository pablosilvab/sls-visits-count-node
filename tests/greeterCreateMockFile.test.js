'use strict';

const greeter = require('../src/greeter');
jest.mock('../src/dynamoDBConnector');

describe('sayHelloAndRecord', () => {
    test('name and save it', async () => {
        const greet = await greeter.sayHelloAndRecord('Jesse')
        expect(greet).toBe('Hello Jesse!')
    });
});


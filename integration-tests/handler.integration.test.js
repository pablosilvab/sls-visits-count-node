'use strict';

const steps = require('./utils/steps');
const init = require('./utils/init');
const tearDown = require('./utils/tearDown');

describe('When we invoke the hello function', () => {
    test('With a name',  async () => {
        var result = await steps.invokeGetHello('Walter White');
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Hello Walter White!')
    });
});


describe('When we invoke the moi function', () => {
    beforeAll(() =>{
        init();
    });

    test('With a name',  async () => {
        var result = await steps.invokeGetMoi('Walter')
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Hello Walter!')
    });

    afterAll(async()=>{
        await tearDown.removeDataFromTable('Walter')
    })
});


describe('When we invoke the greet function with a name it exists', () => {
    beforeAll(async () => {
        init();
        await steps.invokeGetMoi('Hank')
      });

      test('With a name that exists', async () => {
        var result = await steps.invokeWasGreeted('Hank');
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('Greet found')
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('Hank');
    })
})


describe('When we invoke the greet function with a name it doesnt exists', () => {
    beforeAll(async () => {
        init();
      });

      test('With a name that doesnt exists', async () => {
        var result = await steps.invokeWasGreeted('Marie');
        expect(result.statusCode).toBe(404);
        expect(result.body).toBe('Greet not found')
    });
})
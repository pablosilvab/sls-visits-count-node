'use strict'

const dynamoDBPort = require('../src/dynamoDBPort')
const mockDatabaseConnector = require('../src/dynamoDBConnector')

describe('getItem', () => {
    test('get existing item', async () => {
        const item = {
            name: 'Mikel',
            timestamp: Date.now(),
        }

        mockDatabaseConnector.getItem = jest.fn().mockReturnValue(item)

        const result = await dynamoDBPort.getItem('Mikel')

        const paramsToValidate = {
            Key: {
                name: 'Mikel'
            }, 
            TableName: undefined
        }

        expect(mockDatabaseConnector.getItem).toBeCalledWith(paramsToValidate)
        expect(result).toBe(item)
    });
});
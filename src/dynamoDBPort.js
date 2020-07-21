'use strict'

var databaseManager = require('./dynamoDBConnector')

module.exports.saveItem = async item => {
    const params = {
        TableName: process.env.GREETER_DYNAMODB_TABLE,
        Item: item
    }
    return await databaseManager.saveItem(params)
} 

module.exports.getItem = async name => {
    const params = {
        Key: {
            name: name
        },
        TableName: process.env.GREETER_DYNAMODB_TABLE,
    }
    return await databaseManager.getItem(params)
}


module.exports.recordVisit = async() => {
    const params = {
        TableName: process.env.VISITS_COUNT_DYNAMODB_TABLE,
        Item: 1
    }
    return await databaseManager.saveItem(params)
} 

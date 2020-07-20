'use strict'

var databaseManager = require('./dynamoDBConnector')

module.exports.saveItem = async item => {
    const params = {
        TableName: process.env.GREETER_DYNAMODB_TABLE,
        Item: item
    }
    return await databaseManager.saveItem(params)
} 
'use strict'

const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveItem = async params => {
    return await dynamo.put(params).promise();
}
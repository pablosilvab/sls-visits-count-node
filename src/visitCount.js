'use strict';

const databaseManager = require('./dynamoDBPort')

module.exports.newVisit = async() => {
    const item = await databaseManager.recordVisit()
    return (item!==undefined) ? item : 0
}

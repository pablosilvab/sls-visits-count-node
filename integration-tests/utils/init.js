'use strict';

const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';


function init() {
    process.env.GREETER_DYNAMODB_TABLE = 'sls-unit-test-names-table';
    process.env.BASE_URL = 'https://8poi7x4ea3.execute-api.us-east-1.amazonaws.com/dev/';
}

module.exports = init;
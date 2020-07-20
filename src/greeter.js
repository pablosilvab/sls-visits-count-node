'use strict';

module.exports.sayHello = name => {
    if (name!== undefined && name!== null && name!== ''){
        return `Hello ${name}`
    } else {
        return 'Hello World!'
    }
}
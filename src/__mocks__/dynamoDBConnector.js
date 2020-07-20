'use strict'

module.exports.saveItem = async params => {
    return Promise.resolve()
}

module.exports.getItem = async params => {
    const item = {
        name: params.Key.name,
        timestamp: Date.now(),
    }
    return Promise.resolve(item)
}
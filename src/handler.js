"use strict";

module.exports.hello = async (event) => {
  const name = event.queryStringParameters && event.queryStringParameters.name;
  const greet = greeter.sayHello(name);

  return {
    statusCode: 200,
    body: greet,
  };
};

module.exports.moi =  async (event) => {
  const name = event.queryStringParameters && event.queryStringParameters.name;
  const greet = await greeter.sayHelloAndRecord(name);

  return {
    statusCode: 200,
    body: greet,
  };
};
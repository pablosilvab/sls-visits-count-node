"use strict";

const greeter = require("../src/greeter");
const databaseManagerMock = require("../src/dynamoDBPort");

describe("sayHelloAndRecord", () => {
  test("With a name", () => {
    databaseManagerMock.saveItem = jest.fn();

    return greeter.sayHelloAndRecord("Walter").then((greet) => {
      expect(databaseManagerMock.saveItem).toBeCalledTimes(1);
      expect(greet).toBe("Hello Walter!");
    });
  });
});

describe("getGreeting", () => {
  test("get greeting", async () => {
    const item = {
      name: "Walter",
      timestamp: Date.now(),
    };
    databaseManagerMock.getItem = jest.fn().mockReturnValue(item);

    const result = await greeter.wasGreeted("Walter");
    expect(result).toBe(true);
  });

  test("was greeted non existing name", async () => {
    databaseManagerMock.getItem = jest.fn().mockReturnValue(undefined);
    const result = await greeter.wasGreeted("Walter");
    expect(result).toBe(false);
  });
});

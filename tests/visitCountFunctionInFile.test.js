"use strict";

const visits = require("../src/visitCount");
const databaseManagerMock = require("../src/dynamoDBPort");


describe("newVisit", () => {
    test("save a new visit", async () => {
        const item = 6
        databaseManagerMock.recordVisit = jest.fn().mockReturnValue(item);
        const result = await visits.newVisit();
        expect(result).toBe(6);
      });
});
  

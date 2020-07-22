/**
 * @jest-environment node
 */
"use strict";

const init = require("./utils/init");
const axios = require("axios");
const tearDown = require("./utils/tearDown");

describe("When we invoke the hello API", () => {
  beforeAll(() => {
    init();
  });

  test("With a name", async () => {
    let url = process.env.BASE_URL + "hello?name=Walter";
    const response = await axios.get(url);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Hello Walter!");
  });

  test("Without name", async () => {
    let url = process.env.BASE_URL + "hello";
    const response = await axios.get(url);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Hello World!");
  });
});

describe("When we invoke the moi API", () => {
  beforeAll(() => {
    init();
  });
  test("With a name", async () => {
    let url = process.env.BASE_URL + "moi?name=Jesse";
    const response = await axios.get(url);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Hello Jesse!");
  });

  test("With a name", async () => {
    let url = process.env.BASE_URL + "moi";
    const response = await axios.get(url);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Hello World!");
  });

  afterAll(async () => {
    await tearDown.removeDataFromTable("Jesse");
  });
});

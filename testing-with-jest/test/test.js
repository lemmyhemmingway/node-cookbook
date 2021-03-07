const uppercase = require('../uppercase');

describe("uppercase", () => {
    test("uppercase hello should return 'HELLO'", () => {
        expect(uppercase("hello")).toBe("HELLO");
    })
})
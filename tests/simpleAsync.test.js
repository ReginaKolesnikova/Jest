let { Hello, double, average, joinWords, repeatWord } = require('../src/simpleAsync');

describe("Hello", () => {
    test("Hello function", async () => {
        let text = await Hello("Anton")
        expect(text).toBe("Hello, Anton");
    });
    test("Hello function with empty string", () => {
        expect(Hello("")).resolves.toBe("Hello, ");
    });
});

describe("double", () => {
    test("double function", async () => {
        expect(await double(4)).toBe(8)
    });
});

describe("average", () => {
    test("average function", async () => {
        expect(await average([1, 2, 3, 4])).toBe(2.5);
    });
});

describe("joinWords", () => {
    test("joinWords function", async () => {
        expect(await joinWords(["Hello", "world!"])).toBe("Hello world!");
    });
});

describe("repeatWord", () => {
    test("repeatWord function", async () => {
        expect(await repeatWord("Hello", 3)).toBe("HelloHelloHello");
    });
});

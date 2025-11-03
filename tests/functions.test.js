let { sum, isPalindrome, isStrongPassword, wordCount, lastWordLength, longestCommonPrefix, climbStairs, fromArray, toArray, deleteDuplicates, treeFromArray, isSymmetric } = require('../src/functions');

describe("sum function", () => {
    test("sum two numbers", () => {
        expect(sum(2, 2)).toBe(4)
    })

    test("work with null", () => {
        expect(sum(0, 0)).toBe(0)
    })
})

describe("Check if a string is palindrome", () => {
    let strArray = ["Anna", "Mom", "Civic", "Kayak", "Level", "Madam", "Radar"];
    strArray.forEach(elem => {
        test(`${elem} is a palindrome`, () => {
            expect(isPalindrome(elem)).toBe(true)
        });
    });
});

describe ("Is strong password", () => {
    let passArray =
    ["Strongqwerty!@#123",
    "AnotherSrtongPassword$456",
    "YetanotherStrong1!"]

    passArray.forEach(elem => {
        test(`${elem} is a strong password`, () => {
            expect(isStrongPassword(elem)).toBe(true)
        });
    });
});

describe("Is weak password", () => {
    let passArray =
    ["123",
    "Anja",
    "DorisOceana!"]

    passArray.forEach(elem => {
        test(`${elem} is a weak password`, () => {
            expect(isStrongPassword(elem)).toBe(false)
        });
    });
});

describe("Count words in a string", () => {
    let strArray = [
        ["This is a test sentence", 5],
        ["One two three", 3],
        ["Count words in a string", 5]]
    strArray.forEach(elem => {
        test(`"${elem[0]}" has ${elem[1]} words`, () => {
            expect(wordCount(elem[0])).toBe(elem[1])
        });
    })
})

describe("Length of last word", () => {
    let strArray = [
        ["Hello World", "world", 5],
        ["fly me to the moon", "moon", 4],
        ["luffy is still joyboy", "joyboy", 6],
        ["a", "a", 1],
        ["  a  ", "a", 1],
        ["single", "single", 6]
    ]
    strArray.forEach(elem => {
        test(`The last word in sentence "${elem[0]}" is "${elem[1]}" with length ${elem[2]}`, () => {
            expect(lastWordLength(elem[0])).toBe(elem[2])
        });
    })
})

describe("longestCommonPrefix", () => {
    const cases = [
        [["flower", "flow", "flight"], "fl"],
        [["dog", "racecar", "car"], ""],
        [["interview", "internet", "internal"], "inter"],
        [["a"], "a"],
        [[], ""],
        [["", ""], ""],
        [["re", "re"], "re"],
        [["prefix", ""], ""],
        [["", "prefix"], ""],
        [["abab", "aba", ""], ""],
        [["cir", "car"], "c"]
    ]

    cases.forEach(([arr, expected]) => {
        test(`Common prefix of [${ arr.join(', ') }] is "${expected}"`, () => {
            expect(longestCommonPrefix(arr)).toBe(expected);
        });
    })
})

describe('Climbing Stairs', () => {
    let nArray = [
        [0, 1], 
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [10, 89],
    ];
    nArray.forEach(elem => {
        test(`n${elem[0]} - There are ${elem[1]} ways to climb to the top.`, () => {
            expect(climbStairs(elem[0])).toBe(elem[1])
        });
    });
});

describe('deleteDuplicates (sorted linked list)', () => {
    duplicatesArray = [
        [[1, 1, 2], [1, 2]],
        [[1, 1, 2, 3, 3], [1, 2, 3]],
        [[1], [1]],                  // один элемент
        [[1, 1, 1, 1], [1]],         // все одинаковые
    ];

    duplicatesArray.forEach(([input, expected]) => {
        test(`from ${JSON.stringify(input)} -> ${JSON.stringify(expected)}`, () => {
            const head = fromArray(input);
            const cleaned = deleteDuplicates(head);
            expect(toArray(cleaned)).toEqual(expected);
        });
    });
});


describe('isSymmetric (binary tree)', () => {
    symmetricArray = [
        [[1, 2, 2, 3, 4, 4, 3], true],            
        [[1, 2, 2, null, 3, null, 3], false],      
        [[1], true],                         
        [[1, 2, 2, null, 3, 3, null], true],      
        [[1, 2, 2, 3, null, null, 3, 4], false],    
    ];

    symmetricArray.forEach(([arr, expected]) => {
        test(`Tree ${JSON.stringify(arr)} -> ${expected}`, () => {
            const root = treeFromArray(arr);
            expect(isSymmetric(root)).toBe(expected);
        });
    });
});


// toBeGreaterThan
// toBeLessThan
// toBeGreaterThanOrEqual
//write a function add(a, b) that returns the sum of two numbers, and write a test for it.

function describe(testSuiteName, func) {
    console.log(`beginning test suit ${testSuiteName}`);

    try {
        func();
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch (error) {
        const {testCaseName, errorMessage} = error;
        console.error(
            `failed running test suite ${testSuiteName} on ` +
            `test case ${testCaseName} with error message ${errorMessage}`,
        );
    }
}

function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`);

    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch (errorMessage) {
        throw {testCaseName, errorMessage};
    }
}

function expect(actual) {
    return new ExpectFunctions(actual);
}

class ExpectFunctions {
    constructor(actual) {
        this.actual = actual;
        this.stringifiedActual = JSON.stringify(actual);
    }

    toExist() {
        if (this.actual == null) {
            throw `expected value to exist but got ${this.stringifiedActual}`;
        }
    }

    toBe(expected) {
        if (this.actual !== expected) {
            throw `expected ${this.stringifiedActual} to be ${JSON.stringify(
                expected,
            )}`;
        }
    }
}

function add(a, b) {
    return a + b;
}

//test suite

describe('add function', () => {
    it('should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should return 0 when adding 0 and 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});



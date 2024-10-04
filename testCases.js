// //write a function add(a, b) that returns the sum of two numbers, and write a test for it.

// function describe(testSuiteName, func) {
//     console.log(`beginning test suit ${testSuiteName}`);

//     try {
//         func();
//         console.log(`successfully completed test suite ${testSuiteName}`);
//     } catch (error) {
//         const {testCaseName, errorMessage} = error;
//         console.error(
//             `failed running test suite ${testSuiteName} on ` +
//             `test case ${testCaseName} with error message ${errorMessage}`,
//         );
//     }
// }

// function it(testCaseName, func) {
//     console.log(`beginning test case ${testCaseName}`);

//     try {
//         func();
//         console.log(`successfully completed test case ${testCaseName}`);
//     } catch (errorMessage) {
//         throw {testCaseName, errorMessage};
//     }
// }

// function expect(actual) {
//     return new ExpectFunctions(actual);
// }

// class ExpectFunctions {
//     constructor(actual) {
//         this.actual = actual;
//         this.stringifiedActual = JSON.stringify(actual);
//     }

//     toExist() {
//         if (this.actual == null) {
//             throw `expected value to exist but got ${this.stringifiedActual}`;
//         }
//     }

//     toBe(expected) {
//         if (this.actual !== expected) {
//             throw `expected ${this.stringifiedActual} to be ${JSON.stringify(
//                 expected,
//             )}`;
//         }
//     }
// }

// function add(a, b) {
//     return a + b;
// }

// //test suite

// describe('add function', () => {
//     it('should return the sum of two numbers', () => {
//         expect(add(2, 3)).toBe(5);
//     });

//     it('should return 0 when adding 0 and 0', () => {
//         expect(add(0, 0)).toBe(0);
//     });
// });




/////////////fibonacci sequence/////////////

//test framework

function describe(testSuiteName, func) {
    console.log(`TEST SUITE: ${testSuiteName}`);

    try {
        func();
        console.log(`COMPLETED: ${testSuiteName}`)
    } catch (error) {
        console.error(`ERROR IN: ${testSuiteName}: ${error}`)
    }
}

function it(testCaseName, func) {
    try {
        func();
        console.log(`TEST PASSED: ${testCaseName}`);
    } catch (error) {
        console.error(`TEST FAILED: ${testCaseName}`)
        console.error(error);
    }
}

function expect(actual) {
    return {
        teBe(expected) {
            if (actual !== expected) {
                throw `EXPECTED ${actual} to be ${expected}`;
            }
        }
    };
}

//fibonacci function (recurrsion)
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2)
}


//tests

describe('fibonacci function', () => {
    it('should return 0 for fibonacci(0)', () => {
      expect(fibonacci(0)).toBe(0);
    });
  
    it('should return 1 for fibonacci(1)', () => {
      expect(fibonacci(1)).toBe(1);
    });
  
    it('should return 1 for fibonacci(2)', () => {
      expect(fibonacci(2)).toBe(1);
    });
  
    it('should return 2 for fibonacci(3)', () => {
      expect(fibonacci(3)).toBe(2);
    });
  
    it('should return 8 for fibonacci(6)', () => {
      expect(fibonacci(6)).toBe(8);
    });
  });
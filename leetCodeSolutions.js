//https://leetcode.com/problems/two-sum/


// var twoSum = function(nums, target) {
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         if (map.hasOwnProperty(complement)) {
//             return [map[complement], i];

//         }
//         map[nums[i]] = i;
//     }
// }

// console.log(twoSum([2, 7, 11, 15], 9));  
// console.log(twoSum([3, 2, 4], 6)); 

///////////////////////////////

//https://leetcode.com/problems/palindrome-number/

// var isPalindrome = function(x) {
//     const turnToString = x.toString();
//     for (let i = 0; i < turnToString.length / 2; i++) { //only need to loop halfway through the string because at halfway point it avoids redundant comparison since if its palindrome mirrors at the middle
//         if (turnToString[i] !== turnToString[turnToString.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true
//     };

//     console.log(isPalindrome(121));
//     console.log(isPalindrome(122));

////////////////////////

//https://leetcode.com/problems/longest-common-prefix/

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return ""; //edge case: empty array
//     let prefix = strs[0]; //assume the first string is a prefix

//     for (let i = 1; i < strs.length; i++) { //compare starting from second string
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1); //shorten prefix by removing the last character
//             if (prefix === "") return "";// no common prefix
//         }
//     }
//     return prefix;
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["test", "test", "test"]));

//////////////////////

//https://leetcode.com/problems/roman-to-integer/


// var romanToInt = function (s) {
//     //map of roman numeral to their integer values
//     const romanMap = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let result = 0;
//     let i = 0;

//     while (i < s.length) {
//         const currentVal = romanMap[s[i]];
//         const nextVal = romanMap[s[i + 1]];
    

//     //if current value is less than the next value then subtract it
//     if (nextVal && currentVal < nextVal) {
//         result += nextVal - currentVal;
//         i += 2; //skipthe next character since its already been processed
//     } else {
//         result += currentVal;
//         i += 1;
//     }
// }
// return result;

// };

///////////////////////////////////
//https://leetcode.com/problems/return-length-of-arguments-passed/

// var argumentsLength = function(...args) {
//     return args.length;
// };


//  console.log(argumentsLength(1, 2, 3));
// consloe.log(argumentsLength({},null,"3"))

////////////////////////////////////
//https://leetcode.com/problems/score-of-a-string/submissions/1438628695/
// var scoreOfString = function(s) {
//     let score = 0;
//     for (let i = 0; i < s.length - 1; i++) { // s.length - 1 so that the loop stops at the character before last and there would be no error
//         //charCodeAt is a built in method to find the the strings ASCII/unicode value
//          score += Math.abs(s.charCodeAt(i) -  s.charCodeAt(i + 1)) //use Math.abs to make sure the number is always return positive
//     }
//     return score;
// };

// console.log(scoreOfString("hello"))

//////////////////////////////////////
//https://leetcode.com/problems/add-two-promises/
// const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
// const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// var addTwoPromises = async function(promise1, promise2) {
//     const result1 = await promise1;
//     const result2 = await promise2;

//     return result1 + result2
// };
// addTwoPromises(promise1, promise2).then(console.log);

/////////////////////////

//https://leetcode.com/problems/build-array-from-permutation/

// var buildArray = function(nums) {
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         ans[i] = nums[nums[i]];
        
//     }
//     return ans;
// };
// const nums = [5, 0, 1, 2, 3, 4];
// console.log(nums)

//////////////////////////////

//https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/ 

// var minimumOperations = function(nums) {
//     let operations = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let rem = nums[i] % 3;
//         if (rem === 2) {
//             operations += 1
//         } else if (rem === 1) {
//             operations += 1;
//         }
//     }
//     return operations;
// };

// const nums = [1, 2, 3, 4];
// console.log(minimumOperations(nums));

/////////////////////////////////////

//https://leetcode.com/problems/rotate-string/description/

// var rotateString = function(s, goal) {
//     if (s.length !== goal.length) {
//         return false;
//     }
//     let i = s + s;
//     if (i.includes(goal)) {
//         return true
//     } else {
//         return false;
//     }
// };

// console.log(rotateString("abcde", "cdeab"))

/////////////////////////////////

//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// var finalValueAfterOperations = function(operations) {
//     let x = 0;
//     for (let i = 0; i < operations.length; i++) {
//         if (operations[i] === "X++" || operations[i] === "++X") {
//             x += 1;
//         } 
//         else if (operations[i] === "X--" || operations[i] === "--X") {
//             x -= 1;
//     }
//     }
//     return x;
// };

// console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))

//////////////////////////////////

//https://leetcode.com/problems/defanging-an-ip-address/

// var defangIPaddr = function(address) {
//     a = address.split('');
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === '.') {
//             a[i] = '[.]'
//         }
//     }
//     return a.join('');
// };

// console.log(defangIPaddr("1.1.1.1"))

/////////////////////////////////

//https://leetcode.com/problems/number-of-good-pairs/

// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) { //j = i + 1 so that nums[i] doesnt count itself
//             if (nums[j] === nums[i]) {
//                 count++
//             }
//         }
//     }
//     return count;
   
// };

// console.log(numIdenticalPairs([1,2,3,1,1,3]))

///////////////////////////////////

//https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

// var differenceOfSums = function (n, m) {
//     let num1 = 0;
//     let num2 = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % m === 0) {
//             num2 += i
//         } else {
//             num1 += i
//         }
//     }
//     return num1 - num2;
// };

// console.log(differenceOfSums(5, 6));

/////////////////////////////////

//https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

// var getSneakyNumbers = function(nums) {
//     let repeated = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === nums[i]) {
//                 repeated.push(nums[j]);
//             }
//         }
//     }
//     return repeated;
// };

// console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]))

/////////////////////////////
//https://leetcode.com/problems/jewels-and-stones/

// var numJewelsInStones = function(jewels, stones) {
//     let result = 0;
//     for (let stone of stones) {
//         if (jewels.includes(stone)) {
//             result += 1;
//         }
//     }
//     return result;
// };

// console.log(numJewelsInStones("aA", "aAbbbb"))

//////////////////////////////////////////////

//https://leetcode.com/problems/timeout-cancellation/

// var cancellable = function(fn, args, t) {
//     let timer = setTimeout(() => {
//         fn(...args)
//     }, t);
//     return function() {
//         clearTimeout(timer);
//     };
// };
// const cancel = cancellable((x) => console.log(x * 5), [2], 20);

//////////////////////////
//https://leetcode.com/problems/find-words-containing-character/

// var findWordsContaining = function(words, x) {
//     let output = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             output.push(i)
//         }
//     }
//     return output;
// };

// console.log(findWordsContaining(['leet', 'code'], 'e'))

//////////////////////////
//https://leetcode.com/problems/shuffle-the-array/
// var shuffle = function(nums, n) {
//     let x = [];
//     let y = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i < n - 1) {
//             x.push(nums[i])
//         } else{
//             y.push(nums[i])
//         }
//     }
// };

// console.log(shuffle([2,5,1,3,4,7], 3))

////////////////////////////////
//https://leetcode.com/problems/array-wrapper/
// class ArrayWrapper {
//     constructor(nums) {
//         this.nums = nums;
//     }

//     valueOf() {
//         return this.nums.reduce((acc, curr) => acc + curr, 0);
//     }

//     toString() {
//         return `[${this.nums.join(",")}]`;
//     }
// }

// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);

// console.log(obj1 + obj2); 
// console.log(String(obj1)); 
// console.log(String(obj2));

/////////////////////////////////////////////////

//https://leetcode.com/problems/convert-date-to-binary/

// var convertDateToBinary = function(date) {
//     const [year, month, day] = date.split("-")
//     const binaryYear = parseInt(year, 10).toString(2);
//     const binaryMonth = parseInt(month, 10).toString(2);
//     const binaryDay = parseInt(day, 10).toString(2);

//     return `${binaryYear}-${binaryMonth}-${binaryDay}` 
//     }


// console.log(convertDateToBinary("2080-02-29"))

///////////////////////////////


//https://leetcode.com/problems/permutation-difference-between-two-strings/description/

// var findPermutationDifference = function(s, t) {
//     const indexMap = {};

//     for (let i = 0; i < t.length; i++) {
//         indexMap[t[i]] = i; // {b: 0, a: 1, c: 2}
//     }

//     let totalDifferece = 0;

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i]; // 'a', 'b', 'c'
//         const sIndex = i; // 0, 1, 2
//         const tIndex = indexMap[char] // 1, 0, 2
//         totalDifferece += Math.abs(sIndex - tIndex);
//     }
//     return totalDifferece;
// };

// console.log(findPermutationDifference('abc', 'bac'))

////////////////////////////////////////
//https://leetcode.com/problems/richest-customer-wealth/


// var maximumWealth = function(accounts) {
//     let maxWealth = 0;
//     for (let i = 0; i < accounts.length; i++) {
//         let currWealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
    
//     if (currWealth > maxWealth) {
//         maxWealth = currWealth;
//     }
//     }
//     return maxWealth
// };

// var maximumWealth = function(accounts) {
//     let arr = accounts.map(customer => 
//         customer.reduce((acc, curr) => acc + curr, 0)
//     );
//     return Math.max(...arr);
// };

// console.log(maximumWealth([[1, 2, 3], [2, 3, 4], [4, 6, 7]]))

////////////////////////////////////////////////////
//https://leetcode.com/problems/count-the-number-of-consistent-strings/


// var countConsistentStrings = function(allowed, words) {
//     let count = 0;
//     let a = allowed.split('');
//     console.log(a);
//     for (let i = 0; i < words.length; i++) {
//         let isConsistent = true;

//         for (let j = 0; j < words[i].length; j++) {
//             if (!a.includes(words[i][j])) {
//                 isConsistent = false;
//                 break;
//             }
//         }
//         if (isConsistent) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))

///////////////////////////////////////////////
//https://leetcode.com/problems/design-parking-system/

// var ParkingSystem = function (big, medium, small) {
//     this.big = big;
//     this.medium = medium;
//     this.small = small;
// };


// ParkingSystem.prototype.addCar = function(carType) {
//     if (carType === 1) { 
//         if (this.big > 0) {
//             this.big--;
//             return true;
//         } else {
//             return false;
//         }
//     } else if (carType === 2) {
//         if (this.medium > 0) {
//             this.medium--;
//             return true;
//         } else {
//             return false;
//         }
//     } else if (carType === 3) { 
//         if (this.small > 0) {
//             this.small--;
//             return true;
//         } else {
//             return false;
//         }
//     }
// };

// class ParkingSystem {
//     constructor(big, medium, small) {
//         this.big = big;
//         this.medium = medium;
//         this.small = small;
//     }
//     addCar(carType) {
//         if (carType === 1) { 
//             if (this.big > 0) {
//                 this.big--;
//                 return true;
//             } else {
//                 return false;
//             }
//         } else if (carType === 2) { 
//             if (this.medium > 0) {
//                 this.medium--;
//                 return true;
//             } else {
//                 return false;
//             }
//         } else if (carType === 3) { 
//             if (this.small > 0) {
//                 this.small--;
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }

// const parkingSystem = new ParkingSystem(1, 1, 0);

//////////////////////////////////////

//https://leetcode.com/problems/smallest-even-multiple/

// var smallestEvenMultiple = function(n) {
//     return n % 2 === 0 ? n : n * 2
// };

// console.log(smallestEvenMultiple(5));
// console.log(smallestEvenMultiple(15))
// console.log(smallestEvenMultiple(20))

///////////////////////////////////////

//https://leetcode.com/problems/number-of-employees-who-met-the-target/

// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//     let met = 0
//     for (let i = 0; i < hours.length; i++) {
//         if (hours[i] >= target) {
//             met++;
//         }
//     }
//     return met;
// };

// console.log(numberOfEmployeesWhoMetTarget([1, 3, 5, 4, 8], 4))

///////////////////////////////////////////////

//https://leetcode.com/problems/largest-local-values-in-a-matrix/

// var largestLocal = function(grid) {
    // const n = grid.length; //get the size of the grid (it's an n x n square, so n is both rows and columns)
    // const result = []; // initialize an empty array to store the resulting matrix.

    //the outer loop iterates over each possile starting row (i) of a 3 x 3 block
    //we stop at n - 2 because we can't start a 3 x 3 block in the last two rows
    // for (let i = 0; i < n - 2; i++) {
        // const row = [];//initialize a new row for the result matrix

        //the inner loop iterates over each possilbe starting colum (j) of a 3 x 3 block
        //we stop at n - 2 here as well because we can't start a 3 x 3 block in the last two columns
        // for (let j = 0; j < n - 2; j++) {
            let maxVal = -Infinity;//initialize the maximum value for this 3 x 3 block as a very low number

            //now, we need to go through each element in the 3 x 3 block that starts at (i, j)
            //this means looping over rows from i to i + 2 and columns from j to j + 2
            // for (let x = i; x < i + 3; x++) {//loop through the 3 rows of the 3 x 3 block
                // for (let y = j; y < j + 3; y++) {//loop through the 3 columns of the 3 x 3 block
                    //upddate maxVal if the current element grid[x][y] is larger than the current maxVal
                    // maxVal = Math.max(maxVal, grid[x][y]);
            //     }
            // }
           //after finding the maximum value in this 3x3 block, add it to the current row
        //    row.push(maxVal);  // Add maxVal to the row we're building for the result matrix.
        // }

        //after finishing a row of maximum values for 3x3 blocks add this row to the result matrix
    //     result.push(row);
    // }

    //after constructing the entire result matrix return it
//     return result;
// };

// console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))

////////////////////////////////////

//https://leetcode.com/problems/valid-parentheses/

// var isValid = function(s) {
// const stack = [];
// const map = {
//     ')' : '(',
//     '}' : '{',
//     ']' : '['
// };
// for (let char of s) {
//     if (char === '(' || char === '{' || char === '[') {
//         stack.push(char);
//     } else {
//         if (stack.pop() !== map[char]) {
//             return false;
//         }
//     }
// }
// // if the stack is empty all brackets are balanced
// return stack.length === 0;
// }

// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([])"))
////////////////////////////
//
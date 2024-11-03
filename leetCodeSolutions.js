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

var minimumOperations = function(nums) {
    let operations = 0;
    for (let i = 0; i < nums.length; i++) {
        let rem = nums[i] % 3;
        if (rem === 2) {
            operations += 1
        } else if (rem === 1) {
            operations += 1;
        }
    }
    return operations;
};

const nums = [1, 2, 3, 4];
console.log(minimumOperations(nums));
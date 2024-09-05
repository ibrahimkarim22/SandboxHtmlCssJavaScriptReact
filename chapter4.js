// function countdown(n) {
//     while (n > 0) {
//         n -= 1
//         console.log(n)
//     }
// }
// countdown(8);

// function sumOfEvens(arr) {
//     let sum = 0; //init sum of evens
//     let i = 0; //value for the arr index
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//         i++;
//     }

//     return sum;
// }

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8]));
//////////af


// function findMax(arr) { //init arr variable to hold array of integers
//     let max = arr[0]; // initialize max to the first element in the array
//     let i = 1; // start looping from the second element (index 1)
//     while (i < arr.length) { //continue looping as long as 1 is less than the length of the array
//         if (arr[i] > max) { //if the current elemnt is greater than the current max
//             max = arr[i] // update max to the current element
//         }
//         i++ // move to the next element 
//     }
//     return max; //Return the largest value found 
// }
// console.log(findMax([3, 5, 7, 2, 8, -1, 4, 10, 12]));

////////////

// function sumEvenNumbers(arr) {
//     let i = 0; //start loop at the first index in the array
//     let sum = 0; //initialize the sum of evens
//     while (i < arr.length) { //while current index is less than the array length
//         if (arr[i] % 2 === 0) { //check if the number at arr[i] index is divisable by 2
//             sum += arr[i] //if even add the number value to the sum
//         }
//         i++ //next index in the array
//     }
//     return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

function countVowels(string) {
    let i = 0; //start the loop at index 0 of the string
    let total = 0; //init variable to keep track of total
    const vowels = 'aeiouAEIOU'; //include lower and uppercase
    while(i < string.length) {
        if (vowels.includes(string[i])) { //check if character at position 1 is a vowel
            total += 1 //increment the vowel total
        }
        i++
    }
    return total;
}

console.log(countVowels('Shakespeare'));
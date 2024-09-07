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

// function countVowels(string) {
//     let i = 0; //start the loop at index 0 of the string
//     let total = 0; //init variable to keep track of total
//     const vowels = 'aeiouAEIOU'; //include lower and uppercase
//     while(i < string.length) {
//         if (vowels.includes(string[i])) { //check if character at position 1 is a vowel
//             total += 1 //increment the vowel total
//         }
//         i++
//     }
//     return total;
// }

// console.log(countVowels('Shakespeare'));

// function reverseString(string) {
//     let reversed = ""; //init an empty string to hold the reversed result
//     let i = string.length - 1; // start at the last character of the string

//     while (i >= 0) { //loop backward through the string
//         reversed += string[i]; // add each character to the reversed string
//         i--; // move to the prev character
//     }
    
//     return reversed; //return the reversed string
// }

// console.log(reverseString('Kristy'));


//////for loop/////

// let sum = 0;
// let num;

// for (let counter = 1; counter <= 3; counter += 1) {
//     num = prompt("type a number ", 1);
//     sum += Number(num);

// }
// console.log("The total of your numbers is : " + sum);

/////

// let sum = 0;
// for (let counter = 1; counter < 4; counter += 1) {
//     let num;
//     let ordinal;

//     switch (counter) {
//         case 1:
//             ordinal= "first";
//             break;
//         case 2:
//             ordinal = "second";
//             break;
//         case 3:
//             ordinal ="third";
//     }
//     num = prompt("enter the  " + ordinal + " number:", 1);
//     sum += Number(num)
// }
// console.log("The average is " + sum / 3);

///

// for (let i = 3; i >= 1; i -= 1) {
//     let ordinal;
//     let color;

//     switch (i) {
//         case 1:
//             ordinal = 'first';
//             break;
//         case 2:
//             ordinal = 'second';
//             break;
//         case 3:
//             ordinal = 'third';
//     }
//     color = prompt("Enter your " + ordinal + " color", '')
//     console.log(i + '. ' + color)

//     }

////do...while//

//in the code below the user can opt out of answering from the very first prompt

// let sum = 0;
// let num = prompt("type a number or click Cancel:", 1);
// while (num != null) {
//     sum += Number(num);
//     num = prompt("type a number or click cancel: ", 1);
// }

///

//in the code below sum and num are init to 0 and the while loop ensures that the prompt runs at least once
//evenn if the user clicks cancel the th value is at 0 instead of null; however the do while speciaalizes in that instead

// let sum = 0;
// let num = 0;
// while (num !== null || sum === 0) {
//     num = prompt("type a number; when youre done, click cancel", 1);
//     sum += Number(num);
// }
// console.log("total is " + sum);

//
// let sum = 0;
// let num;

// do {
//     num = prompt("type a number; when you're done, click Cancel: ", 1)
//     sum += Number(num);
// }
// while (num !== null || sum === 0);
// console.log( 'the total number of your number are ' + sum);


//for loop practice/////////////////

// function sumOfSquares(arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i] * arr[i];     
//     }
//     return sum;
// }

// console.log(sumOfSquares([1, 2, 4]));


//////////


// function countDivisibleByThree(arr) {
//     sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 ===0) {
//             sum++
//         }
//     }
//     return sum;
// }

// console.log(countDivisibleByThree([1, 2, 3, 4, 5, 6]));


////do...while practice////

// function findFirstNegative(arr) {
//     let i = 0; //initialze index;
//     let firstNegative = null; //initialize variable to store the first negative #
//     do {
//         if (arr[i] < 0) { //check if the current number is negative
//             firstNegative = arr[i]//store the first negative #
//             break;//exit the loop once the first negative # is found
//         }
//         i++; //increment index
//  } while (i < arr.length); //continue looping while there are elements in the array
//     return firstNegative;//return the first negative # or null if none is found
// }

// console.log(findFirstNegative([-1, 3, 5]))

////////

        // function calculateTip(preTip, tipPercent) {
        //     const tipResult = preTip * tipPercent;
        //     return tipResult;
        // }
        // const preTipTotal = 100.00;
        // const tipPercentge = 0.15;
        // const tipCost = calculateTip(preTipTotal, tipPercentge);
        // const totalBill = preTipTotal + tipCost;
        // document.write("<br>" + "total bill is: $" + totalBill)
//using anonymous function instead
    //     const preTipTotal = 100.00;
    //     const tipPercentage = 0.15;

    //     const tipCost = function(preTip, tipPercent) {
    //         const tipResult = preTip * tipPercent;
    //         return (tipResult);
    //     }

    //     const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
    //     document.write("<br>" + "Your total Bill $" + totalBill);

    // ////////////////


         // function makeBodyBlue() {
      //     document.body.style.backgroundColor = 'blue'
      //     console.log("the backgroud is now blue")
      // }
      // function makeBodyPink() {
      //     document.body.style.backgroundColor = 'hotpink'
      // }

      // function changeColors(back, text) {
      //   document.body.style.backgroundColor = back;
      //   document.body.style.color = text;
      // }
      /////////////////////
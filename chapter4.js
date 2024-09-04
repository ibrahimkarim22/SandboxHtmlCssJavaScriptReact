// function countdown(n) {
//     while (n > 0) {
//         n -= 1
//         console.log(n)
//     }
// }
// countdown(8);

function sumOfEvens(arr) {
    let sum = 0; //init sum of evens
    let i = 0; //value for the arr index
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
        i++;
    }

    return sum;
}

console.log(sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8]));
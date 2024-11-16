//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// function positiveSum(arr) {
//     return arr.reduce((acc, curr) => {
//       if (curr > 0) {
//        return acc + curr;
//       } else {
//         return acc;
//       }
//     }, 0)
//   }

//   console.log(positiveSum([1,2,3,4,5]),15)

/////////////////////////////////////////////////////////////////////

//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript


// function removeEveryOther(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) {
//         newArr.push(arr[i]);
//       } 
//     }
//     return newArr;
//   }

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//////////////////////////////////////////

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// function maps(x){
//     let newX = [];
//     for (let index of x) {
//       newX.push(index * 2);
//     }
//     return newX;
//   }

//   console.log(maps([1, 2, 3]))

/////////////////////////////////////////////

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// function digitize(n) {
//     return n.toString().split('').map(Number).reverse();
//   }
//   console.log(digitize(35231));

///////////////////////////////////////////////////


//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// function fakeBin(x){
//     const arr = x.split('').map(Number);
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 5) {
//         arr[i] = 0;
//       } else if (arr[i] >= 5) {
//         arr[i] = 1;
//       }
//     }
//     return arr.join('')
//   }

//   console.log(fakeBin('45385593107843568'))

//////////////////////////////////////////////////////

//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1)
//   }

//   console.log(grow([1, 2, 3]))

//////////////////////////////////////////////////////

//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// const quarterOf = (month) => {
//     if (month <= 3 && month > 0) {
//       return 1;
//     } else if (month <= 6) {
//       return 2
//     } else if (month <= 9) {
//       return 3;
//     } else if (month <= 12) {
//       return 4;
//     } 
//   }

//   console.log(month(9))
///////////////////////////////////////////////////////

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str){
//     return str.split('').reverse().join('');
//   }

// console.log(solution('world'))

/////////////////////////////////////////////////

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// function firstNonRepeatingLetter(s) {
//     const lowerCase = s.toLowerCase();
     
//      for (let i = 0; i < s.length; i++) {
//        const char = lowerCase[i];
       
//        if (lowerCase.indexOf(char) === lowerCase.lastIndexOf(char)) {
//          return s[i];
//        }
//      }
//      return "";  
//    }

//    console.log(firstNonRepeatingLetter('moonmen'))

///////////////////////////////////////
//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

// function stockList(books, categories) {
//     if (books.length === 0 || categories.length === 0) {
//         return ""
//     }
//     //initialize a result object for category counts
//     const result = {};
//     categories.forEach(cat => result[cat] = 0);

//     //sum up quanitites for each category in the books array
//     books.forEach(book => {
//         const [code, quantity] = book.split(" ");
//         const category = code[0];

//         if (result.hasOwnProperty(category)) {
//             result[category] += parseInt(quantity, 10);
//         }
//     });
//     return categories.map(cat => `({${cat} : ${result[cat]}})`).join(" - ");
// }

// const books = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
// const categories = ["A", "B", "C", "D"];
// console.log(stockList(books, categories)); 

/////////////////////////////////////////////////////

//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// function hero(bullets, dragons){
//     const x = dragons * 2;
//      return x <= bullets ? true : false;
//   }
//   console.log(hero(10, 5))
//   console.log(hero(7, 4))
//////////////////////////////////


//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// function queueTime(customers, n) {
//     if (customers.length === 0) {
//       return 0;
//     }
//     if (n === 1) {
//       return customers.reduce((acc, curr) => acc + curr, 0)
//     }
    
//     const tills = new Array(n).fill(0);
    
//    for (let time of customers) {
//      const nextTill = tills.indexOf(Math.min(...tills));
//      tills[nextTill] += time;
     
//    }  
//      return Math.max(...tills)
//   }

//   console.log(queueTime([1,2,3,4], 1))
//   console.log(queueTime([2,2,3,3,4,4], 2))
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

//////////////////////////////////////////

//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript


// function rentalCarCost(d) {
//     let total = d * 40;
//     if (d >= 7) {
//       total -= 50;
//     } else if (d >= 3) {
//       total -= 20;
//     }
//     return total;
//   }

//   console.log(rentalCarCost(7), 230)

///////////////////////////////////////////////////////
//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump > mpg * fuelLeft ? false : true;
//       }

// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(50, 25, 1));

/////////////////////////////////////////////////
// /https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// var countSheep = function (num){
//     if (num === 0) {
//       return "";
//     }
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//       result += `${i} sheep...`
//     }
//     return result;
    
//   }

// console.log(countSheep(7));


////////////////////////


//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// function longest(s1, s2) {

//     const combined = s1 + s2;
//     console.log(combined)
//     const unique = new Set(combined);
//     console.log(unique)
//     return Array.from(unique).sort().join('')  
    
//   }

//   console.log(longest("aretheyhere", "yestheyarehere"))

//////////////////////////////////////////
//https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

// function setAlarm(employed, vacation){
//     if (employed && !vacation){
//      return true;
//       } else return false;
//   }

//   console.log(setAlarm(true, true));
//   console.log(setAlarm(true, false));

//////////////////////////////

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript



// function abbrevName(name) {
//     let initials = [];
//     const arr = name.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//             initials.push(arr[i][0].toUpperCase());
//             console.log(initials)
//         }
//         return initials.join('.');
//     }

// console.log(abbrevName('Frodo Baggins'))

//////////////////////////////////////////////
//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

// function updateLight(current) {
//     if (current === 'green') {
//       return 'yellow';
//     } else if (current === 'yellow') {
//       return 'red'
//     } else if (current === 'red') {
//       return 'green'
//     }
//   }

// function updateLight(current) {
//     return current === 'green' ? 'yellow' : current === 'red' ? 'green' : 'red'
// }

//   console.log(updateLight('green'))
//   console.log(updateLight('yellow'))
//   console.log(updateLight('red'))
///////////////////////////////////

//https://www.codewars.com/kata/559590633066759614000063/train/javascript

// function minMax(arr){
//     let min = Math.min(...arr);
//      let max = Math.max(...arr);
     
//      return [min, max]
//    }
// console.log(minMax([1, 2, 3, 4, 5]));

///////////////////////////////
//https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

// Array.prototype.remove_ = function(integer_list, values_list){
//     let arr = [];
//     for (let i = 0; i < integer_list.length; i++) {
//      if (!values_list.includes(integer_list[i])) {
//        arr.push(integer_list[i])
//      }
//     }
//     return arr;
//   }
  
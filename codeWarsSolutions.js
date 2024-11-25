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
  
/////////////////////////////////////////////
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// function sumMix(x){
  
//     return x.reduce((acc, curr) =>{
//       return acc + parseInt(curr)
//     } ,0)
//   }

//   console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))

///////////////////////////////////////////////
//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

// function enough(cap, on, wait) {
//     const riders = on + wait;
    
//     if (cap >= riders) {
//       return 0;
//     } else  {
//       return riders - cap;
//     } 
//   }
//   console.log(enough(100, 60, 50))
///////////////////////////////////////

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// function likes(names) {
//     if (names.length === 0) {
//       return `no one likes this`
//     } else if (names.length === 1) {
//       return `${names[0]} likes this`
//     } else if (names.length === 2) {
//       return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else {
//         const count = names.length - 2;
//       return `${names[0]}, ${names[1]} and ${count} others like this`
//     }
//   }

//   console.log(likes([]))
//   console.log(likes(['Peter']))
//   console.log(likes(['Jacob', 'Alex']))
//   console.log(likes(['Max', 'John', 'Mark']))
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

////////////////////////////////////////
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

// function printerError(s) {
//     const total = s.length;
//     const errorCount = s.split('').filter(char => char < 'a' || char > 'm').length;
//     return `${errorCount}/${total}`
//   }
// console.log("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")

/////////////////////////////
//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
//   }
//   console.log(number(8));
//   console.log(number(9))

//////////////////////////////////

//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers){
//     return numbers.reduce((acc, curr) => acc + (curr * curr), 0);
//   }
// console.log(numbers([1, 2, 3]))

//////////////////////////////

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// function filter_list(l) {
//     return l.filter((quotes) => typeof quotes === 'number' );
    
//   }
//   console.log(filter_list([1,2,'a','b']))

/////////////////////////////////////////


//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// var uniqueInOrder=function(iterable){
//     if (typeof iterable === 'string') {
//       iterable.split('')
//     } 
//   const result = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i - 1]) {
//       result.push(iterable[i])
//     }
//   }
//   return result;
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder([1, 2, 2, 2, 3, 3, 4, 1, 2]))

////////////////////////////////////////

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// var number = function(busStops){
//     let onBus = 0;
//      let offBus = 0;
     
//      for (let i = 0; i < busStops.length; i++) {
//        onBus += busStops[i][0];
//        offBus += busStops[i][1]
//      }
//      return onBus - offBus
       
//    }

// console.log(number([[10, 0], [3, 5], [5, 8]]))

///////////////////////////////////

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// function removeChar(str){
//   const strArr = str.split('');
  
//  return strArr.slice(1, -1).join('')

// };

// console.log(removeChar('eloquent'))
///////////////////////////////////////////
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// function noSpace(x){
//     let result = [];
//     let arr = x.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (x[i] !== ' '){
//             result.push(x[i]);
//         }
//     } 
//     return result.join('')
//   }

//   console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

////////////////////////////////////////

//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// function sumArray(array) {
//     if (!Array.isArray(array) || array.length <= 1) {
//         return 0;
//     }
//     const maxMinTotal = Math.max(...array) + Math.min(...array);
//     const sumOfArr = array.reduce((acc, curr) => acc + curr, 0);
//     return sumOfArr - maxMinTotal;
// }

// console.log(sumArray([6, 2, 1, 8, 10]))

//////////////////////////////////

//https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

// function getCount(str) {
//     let result = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const string = str.split('');
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             result++;  
//           }
//     }
//     return result   
//   }

//   console.log(getCount('abracadabra'))

///////////////////////////////////////////////
//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript


// function order(words) {
//     if (!words) return "";
//     return words.split(' ').sort((a, b) => {
//         const numberInA = [...a].find(char => !isNaN(char));
//         const numberInB = [...b].find(char => !isNaN(char));
//         return numberInA - numberInB
//     }).join(' ')

// }
// console.log(order("is2 Thi1s T4est 3a"))

////////////////////////////////////

//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript


// function basicOp(operation, value1, value2){
//     switch(operation) {
//         case "+": 
//           return value1 + value2;
//         case "-":
//           return value1 - value2;
//         case "*":
//           return value1 * value2;
//         case "/": 
//           return value1 / value2;
//     }
//   }

//   console.log(basicOp("+", 4, 7))
//   console.log(basicOp("-", 15, 18));
//   console.log(basicOp("*", 5, 5));
//   console.log(basicOp("/", 49, 7))

//////////////////////////////////////////

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// function findShort(s){
//   const arr = s.split(' ');
//   let shortest = arr[0].length
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < shortest) {
//       shortest = arr[i].length;
//     }
//   }
//   return shortest;
// }
//   console.log(findShort("Let's travel abroad shall we"));

////////////////////////////////

//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

// function bmi(weight, height) {
//     const bodyMass = weight / (height**2);
    
//       if (bodyMass <= 18.5) {
//         return "Underweight"
//       } else if (bodyMass <= 25.0) {
//         return "Normal"
//       } else if (bodyMass <= 30.0) {
//         return "Overweight"
//       } else if (bodyMass > 30) {
//         return "Obese";
//       }
//   }

//   console.log(bmi(50, 1.80));
//   console.log(bmi(80, 1.80));
//   console.log(bmi(90, 1.80));
//   console.log(bmi(100, 1.80));

///////////////////////////////////////////////

//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// const capitalize = function (sentence) {
//     let arr = sentence.split(' ');
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > 0) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//       }
//       }
    
//     return arr.join(' ')
//   };

// console.log(capitalize("This is the air that is the glorious sun"))

////////////////////////////////////////////

//
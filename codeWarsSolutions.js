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

//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// var isSquare = function(n) {
//     if (n < 0) return false;
//     let i = 0;

//     while (i * i <= n) {
//         if (i * i === n) {
//             return true
//         }
//         i++;
//     }
//     return false;
// }

//   console.log(isSquare(25))
//   console.log(isSquare(26))

///////////////////////////////////////////

//https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

// function getSum(a, b) {
//     let arr = [];

//     let number = a;
    
//     while (number <= b) {
//         arr.push(number)
//         number++
//     }
//     return arr.reduce((acc, curr) => acc + curr)
    
// }
// function getSum(a, b)
// {
//    let arr = [];
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
  
//   for (let number = min; number <= max; number++) {
//     arr.push(number)
//   }
//   return arr.reduce((acc, curr) => acc + curr, 0)
// }
// console.log(getSum(1, 7))

//////////////////////////////////////

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// function accum(s) {
//     const arr = s.split('')
//     const newArray = [];
    
//     for (let i = 0; i < arr.length; i++) {

//         newArray.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));    
//     }
//     return newArray.join('-')

// }
// console.log(accum("ZpglnRxqenU")) 
//Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

////////////////////////////////////

//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// function validatePIN (pin) {
        
//         return (/^\d{4}$|^\d{6}$/).test(pin);
    
// }

// console.log(validatePIN("1234"));
// console.log(validatePIN("123456"))
// console.log(validatePIN("12345"));
// console.log(validatePIN("a234"));
// console.log(validatePIN("-1.234"))

//////////////////////////////////////////

//https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

// function highAndlow(numbers) {
//     const arr = numbers.split(' ').map(Number)

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     return `${max} ${min}`;
// }

// console.log(highAndlow("1 2 3 4 5 6 7"))

/////////////////////////////////////////////////

//https://www.codewars.com/kata/5949481f86420f59480000e7/javascript

// function oddOrEven(array) {
//     if (array.length === 0) {
//       return 'even';
//     }
  
//   const sum = array.reduce((acc, curr) => acc + curr, 0)
//    return sum % 2 === 0 ? 'even' : 'odd';
//   }

// console.log(oddOrEven([]));
// console.log(oddOrEven([0]));
// console.log(oddOrEven([1]));
// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([0, 1, 2]));

///////////////////////////////
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript


// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2
//     }
// console.log(lovefunc(1, 4));
// console.log(lovefunc(2, 2))

///////////////////////////////////////

//https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

// function between(a, b) {
//     let arr = [];
//     while (a <= b) {
//         arr.push(a)
//         a++
//     }
//     return arr
// }

// console.log(between(1, 4))


///////////////////////////////////////////////////////

//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/javascript

// function removeSmallest(numbers) {
//     const smallest = Math.min(...numbers);
//     const newArr = [];
//     let found = false;
    
//     if (numbers.length === 0) {
//         return [];
//     }

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === smallest && !found) {
//             found = true;
//             continue;
//         }
//         newArr.push(numbers[i])
//     }
//     return newArr;
// }
// console.log(removeSmallest([1, 2, 3, 4, 5]))

///////////////////////////////////////////////

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

// function firstNonConsecutive (arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] + 1 !== arr[i + 1]){
//         return arr[i + 1]
//     }
//   }
//   return null
//   }

//   console.log(firstNonConsecutive([1, 2, 3, 4, 5]))
//   console.log(firstNonConsecutive([1, 2, 4, 5, 6, 7]))

/////////////////////////////
//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// function alternateCase(string) {
//     const arr = string.split('')
//     let result = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i].toUpperCase()) {
//             result += arr[i].toLowerCase();
//         } else if (arr[i] === arr[i].toLowerCase()) {
//             result += arr[i].toUpperCase();
//        } else result += arr[i];
//     }
//     return result
// }

// console.log(alternateCase("HELLO WORLD"))
// console.log(alternateCase('hello world'))
// console.log(alternateCase('hEllO WoRld'))
// console.log(alternateCase('1, 2, 3, 4, 5'))
// console.log( alternateCase('1abc234'));

///////////////////////////////////
//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript


// function points(games) {
//     let score = 0;
//     for (let i = 0; i < games.length; i++) {
      
//       const [x, y] = games[i].split(':').map(Number);
      
//       if (x > y) {
//         score += 3
//       } else if (x === y) {
//         score += 1;
//       }
      
//     }
//     return score;
//   }

//   console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

////////////////////////////////////////

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// function descendingOrder(n) {
    
//     let digits = n.toString().split('').map(Number);

//     digits.sort((a, b) => b - a);

//     let result = parseInt(digits.join(''), 10);

// return result
// }

// console.log(descendingOrder(0));
// console.log(descendingOrder(1));
// console.log(descendingOrder(111));
// console.log(descendingOrder(123456789));

////////////////////////////////////////

//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// function wave(str){
//     const result = [];
//     const chars = str.split('');
    
    
//     for (let i = 0; i < str.length; i++) {
//       if (chars[i] !== ' ') {
//         const newChars = [...chars];
//         newChars[i] = newChars[i].toUpperCase();
//         result.push(newChars.join(''))
//       }
//     }
//     return result
//   }

// console.log(wave('hello'))

//////////////////////////////////
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// function getMiddle(s) {
//     const length = s.length;

//     if (length % 2 === 0) {
//         return s[length / 2 - 1] + s[length / 2];
//     } else {
//         return s[Math.floor(length / 2)];
//     }
//   }

//   console.log(getMiddle('eva'));
//   console.log(getMiddle('michelle'));

  /////////////////////////////////
  //https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

  // function solution(string) {

  //   let result = '';
    
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
  //      result += ' ' + string[i];
  //     } else {
  //       result += string[i]
  //     }
  //   }
  //   return result;
  // }

  // console.log(solution('camelCasing')); 
  // console.log(solution('identifier'));
  // console.log(solution(''));

  ///////////////////////////
  //https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

  // function switchItUp(number){
  //   if (number < 0 || number > 9) {
  //     return `number must be between 0 and 9`
  //   }
  //     switch (number) { 
  //     case 1:
  //        return "one"
  //     case 2:
  //        return "two"
  //      case 3: 
  //        return "three"
  //       case 4:
  //        return "four"
  //       case 5:
  //        return "five"
  //       case 6: 
  //        return "six"
  //        case 7:
  //        return "seven"
  //        case 8: 
  //        return "eight"
  //        case 9: 
  //        return "nine"
  //         case 0:
  //         return "zero"
  //    }
  //   }

  //   console.log(switchItUp(1))
  //   console.log(switchItUp(2))
  //   console.log(switchItUp(5))
  //   console.log(switchItUp(-1))
  //   console.log(switchItUp(10))


  //////////////////////////////////

  //https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

  // function sortByLength(array) {
  //   return array.sort((a, b) => a.length - b.length)
    
  // }

  // console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))


  /////////////////////////////

  //https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

  // function expressionMatter(a, b, c) {
  //   let arr = [];
    
  //   arr.push(a + b + c);
  //   arr.push(a * b * c);
  //   arr.push(a * (b + c));
  //   arr.push((a + b) * c);
  //   arr.push(a + b * c)
    
  //   return Math.max(...arr);
  // }

  // console.log(expressionMatter(2, 1, 2));
  // console.log(expressionMatter(2, 1, 1));
  // console.log(expressionMatter(1, 1, 1));

  /////////////////////////////

  //https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

  // function findSmallestInt(arr) {
  //   return Math.min(...arr);
  // }

  // console.log(findSmallestInt([78, 56, 232, 12, 8]))

  /////////////////////////////////////////////

  //https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

  // function isUpperCase(str) {
  //   return str.toString() === str.toUpperCase();
  // }

  // console.log(isUpperCase('c'));
  // console.log(isUpperCase('C'))
  // console.log(isUpperCase('hello I AM IBRAHIM'))
  // console.log(isUpperCase('HELLO I AM IBRAHIM'))
  // console.log(isUpperCase('AKLJLNSDFLGINd'))
  // console.log(isUpperCase('AJBNKJFGAUHBNASD'))



  ////////////////////////////////////

  //https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

  // function removeExclamationMarks(s) {
  //   let arr = s.split('')
  //   let newArr = [];

  //    for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== '!') {
  //       newArr.push(arr[i]);
  //     }
  //    }
  //    return newArr.join('')
  // }
  
  // console.log(removeExclamationMarks("Hello World!"))
  // console.log(removeExclamationMarks('!Hello World!'))
  

  //////////////////////////////////
  //https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

  // function findMissingLetter(array){
  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
  //       return String.fromCharCode(array[i].charCodeAt(0) + 1);
  //     }
  //   }
  //   return ' ';
  // }

  // console.log(findMissingLetter(['a', 'b', 'c', 'd', 'e', 'f']))
  // console.log(findMissingLetter(['O', 'Q', 'R', 'S']))


  ////////////////////////////////////
  //https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

//   function arrayPlusArray(arr1, arr2) {
//     const result1 = arr1.reduce((acc, curr) => acc + curr, 0);
//     const result2 = arr2.reduce((acc, curr) => acc + curr, 0);
//     return `${result1} + ${result2}`
//   }
// console.log([1, 2, 3], [4, 5, 6])

////////////////////////////////////////////
//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript


// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       return true;
//     } 
//   }
//   return false
// }

// console.log(check([77, 101], 77))

//////////////////////////////

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript


// function squareDigits(num) {

//   let arr = num.toString().split('').map(Number);

//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]**2);
//   }
//   return parseInt(newArr.join(''));
// }

// console.log(squareDigits(3212));
// console.log(squareDigits(2112));
// console.log(squareDigits(0));


///////////////////////////////

//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

// function hoopCount (n) {
//   return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
// }

// console.log(hoopCount(3));
// console.log(hoopCount(10));

/////////////////////////////////////////////

//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// function monkeyCount(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i)
//   }
//   return arr;
// }
// console.log(monkeyCount(5));
// console.log(monkeyCount(3));
// console.log(monkeyCount(9));
// console.log(monkeyCount(10));
// console.log(monkeyCount(20));

///////////////////////////////////////////////

//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript


// function betterThanAverage(classPoints, yourPoints) {
//   const total = classPoints.reduce((acc, curr) => acc + curr, 0);
//   const average = total / classPoints.length;
//   return yourPoints > average;
// }

// console.log(betterThanAverage([22, 55, 39, 58, 122], 70))


////////////////////////////////
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// const reverseSeqq = n => {
//   let arr = [];
//   let x = 1;
//   while (x <= n) {
//     arr.push(x)
//     x++;
//   }
//   return arr.reverse()
// }
// console.log(reverseSeqq(5))

//////////////////////////////////////

//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(42));

/////////////////////////////////////////////////////

//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// function powersOfTwo(n) {
//   let arr = [];
//   for (let i = 0; i <=n; i++) {
//     arr.push(2**i);
//   }
//   return arr;
// }

// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(4));


////////////////////////////
//
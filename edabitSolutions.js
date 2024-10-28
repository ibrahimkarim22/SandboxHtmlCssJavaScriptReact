
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu 
   
  // function footballPoints(wins, draws, losses) {
  //   let points = (wins * 3) + (draws * 1) + (losses * 0);
  //   return points;
  // }

  // console.log(footballPoints(3, 2, 3));
/////////////////////////

//https://edabit.com/challenge/FipbQSYquQLPZ8QXG
// function isSeven(x) {
// 	return x === 7 ? true : false;
// }
// console.log(isSeven(7));
// console.log(isSeven(8)); 
////////////////////////////////////////

//https://edabit.com/challenge/KSTkFSnaYBJdo6PHx
// function boolToString(flag) {
//   return flag.toString();
// }
// console.log(boolToString(true));
// console.log(boolToString(false));

// //https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG

// function sumPolygon(n) {
//   return (
//     (n - 2) * 180
//     )
// }
// console.log(sumPolygon(7));
//////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
// function checkEquality(a, b) {
//   if (a === b) {
// 		return true;
// 	} else return false;
// }
// console.log(checkEquality(true, 1));
// console.log(checkEquality(1, '1'));
// console.log(checkEquality(1, 1));
/////////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
// function maxNum(n1, n2) {
// 	if (n1 > n2) {
// 	  return n1
// 	} else if (n1 < n2) {
// 		return n2
// 	}
// }
// console.log(maxNum(2, 1));
// console.log(maxNum(1, 2));

///////////////////////////////////
// https://edabit.com/challenge/RMZiERz2cbjmbXruY
// function triangle(n) {
// 	const value = n * (n + 1) / 2;
// 	return value;
// }
// console.log(triangle(6));

///////////////////////////
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

// function capMe(arr) {
//   return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }

// console.log(capMe(['olivia', 'emily']))


/////////////////////////////////
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// function countTrue(arr) {
// 	let trueCounter = 0;
// 	if (arr.length === 0) {
// 		return 0;
// 	} else {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] === true) {
// 				trueCounter++;
// 			}
// 	}
// }
// 	return trueCounter;
// }

// console.log(countTrue([true, false, true, true, true]));

/////////////////////////////////////
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

// function arrayOfMultiples (num, length) {
// 	let len = [];
// 	for (let i = 1; i <= length; i++) {
// 		let	number = num * i;
// 		len.push(number)
// }
// 	return len;
// 	}
	
//   console.log(arrayOfMultiples(7, 5));
///////////////////////////
// https://edabit.com/challenge/EMuszDzF66k9J73HG
// function jazzify(arr) {
//   let result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i].endsWith('7')) {
//           result.push(arr[i]);
//       } else {
//           result.push(arr[i] + '7');
//       }
//   }
  
//   return result;
// }

// console.log(jazzify(['F', 'E', 'A', 'Ab7', 'Gm7', 'C7']))
/////////////////////////////


// https://edabit.com/challenge/erFxBbqzZPSegMwnc

// function changeEnough(change, amountDue) {
// 	const values = [0.25, 0.10, 0.05, 0.01];
// 	let total = 0;
	
// 	for (let i = 0; i < change.length; i++) {
// 		total += change[i] * values[i];		
// 	}
// 	 return total >= amountDue;
// }

// console.log(changeEnough([25, 20, 5, 0], 4.25)); // true
// console.log(changeEnough([2, 100, 0, 0], 14.11)); // false



////////////////////////////
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// function toArray(obj) {
//   return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 })); 


// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

// function concat(...args) {
//   return args.reduce((acc, curr) => acc.concat(curr), []);
// }


// console.log(concat([1, 2, 3], [4, 5], [6, 7]));


///////////////////////////////////////
// https://edabit.com/challenge/4gzDuDkompAqujpRi

// function addUp(num) {
// 	let result = 0;
// 	for (let i = 1; i <= num; i++) {
// 	 result += i;
// 	}
// 	return result;
// }

// console.log(addUp(4));
////////////////////////

// https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

// function splitBunches(fruits) {
//   const result = [];

//   fruits.forEach(fruit => {
//     for (let i = 0; i < fruit.quantity; i++) {
//       result.push({ name: fruit.name, quantity: 1 });
//     }
//   });

//   return result;
// }

// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]));


/////////////////////////////////////
// sumEvenNumbers([10, 15, 20, 25, 30]);

// function sumEvenNumbers (numbers) {
//   let sum = 0;
  
//   numbers.forEach(element => {
//     console.log(element);
//     if (element % 2 === 0) {
//       sum += element;
//       console.log(element);
//     }
//   });
//   console.log('the sum of all the even numbers is: ', sum);
// }

///////////////////////////////////////////

// const names = ['alice', 'bob', 'christopher', 'david', 'eleanor'];

// function countLongNames (names) {
//   result = [];

//   names.forEach(element => {
//     if (element.length > 5) {
//       result.push(element) 
//     }
//   });
//   return result;
// }
// console.log(countLongNames(names));
 //////////////////////////////////////////////////////

//  const people = [
//   { name: 'rebbecca', age: 25 },
//   { name: 'johnny', age: 30 },
//   { name: 'kristin', age: 35 },
//   { name: 'dave', age: 28 },
//  ];

//  function findOldestPerson (people) {
//   let oldestPerson = null;
//   let maxAge = 0;

//   people.forEach(person => {
//     if (person.age > maxAge) {
//       maxAge = person.age;
//       oldestPerson = person.name
//     }
//     console.log('the oldest pesron is: ', oldestPerson);
//     return oldestPerson;
//   });
//  }
//////////////////////
/////length of  a nested array
//https://edabit.com/challenge/yXSTvCNen2DQHyrh6

// function arrLength (array) {
//   return array.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       return acc + arrLength(curr);
//     }
//     return acc + 1;
//   }, 0)
// }
// console.log(arrLength([1, [2, [3, 4]]])); 

//////////////////////////////////////
//////numbers in strings
//https://edabit.com/challenge/eCPim4XcssdZdvs32

// function numInStr(arr) {
//   return arr.filter(value => {
//     for (let char of value) {
//       if (!isNaN(char) && char !== ' ') {
//         return true; 
//       }
//     }
//     return false;
//   });
// }
// console.log(numInStr(["1a", "a", "2b", "b"]));

///////////////////////////////

// function sevenBoom(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString().includes('7')) {
//       return 'Boom!';
//     }
//   }
//   return "there is no 7 in the array";
// }

// console.log(sevenBoomsevenBoom([2, 6, 7, 9, 3]));

///////////////////////////
/////https://edabit.com/challenge/Q3n42rEWanZSTmsJm

// function minMax(arr) {
// 	let min = arr[0];
// 	let max = arr[0];
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] < min) {
// 			min = arr[i]
// 		}
// 		if (arr[i] > max) {
// 			max = arr[i]
// 		}
// 	}
// 	return [min, max];
// }
// console.log(minMax([14, 35, 6, 1, 34, 54]))

//////////////////////////////////////////////
//https://edabit.com/challenge/jRSST87NjECBzbwzL
///Total Price of Groceries

// function getTotalPrice(groceries) {
//   return parseFloat(groceries.reduce((acc, curr) => {
//       return acc + (curr.quantity * curr.price);
//   }, 0).toFixed(2));
// }

////////////////////////
//https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
// function addName(obj, name, value) {
//   obj[name] = value;
//   return obj;
// }
// console.log(addName({}, "Brutus", 300))

/////////////////////
//https://edabit.com/challenge/b7iHQDw72zzkmgCun

// function countBoomerangs(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

///////////////////////////////
//https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

// function oddOrEven(num) {
//   const sum = num.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);

//   return sum % 2 === 0 ? "Even" : "Odd";
// }

// console.log(oddOrEven(121))

////////////////////////////
//https://edabit.com/challenge/Np7R8F24PaqBShZc5

// function colorPatternTimes(cols) {
//   let totalTime = 0; 
//   totalTime += cols.length * 2;
//   for (let i = 1; i < cols.length; i++) {
//     if (cols[i] !== cols[i - 1]) {
//       totalTime += 1;
//     }
//   }
//   return totalTime;
// }
// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]))

////////////////////////////////////////////////
//https://edabit.com/challenge/TYcMysG6yy4RKEQPP

// function invert(string) {
//   return string.split('').reverse().map(char => {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   })
//   .join('');
// }

// console.log(invert("dLROW YM sI HsEt"));
/////////////////////////////////////////
//https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

// function isPositiveDominant(arr) {
//   let uniquePositives = new Set();
//   let uniqueNegatives = new Set();
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       uniquePositives.add(arr[i]);
//     } else if (arr[i] < 0) {
//       uniqueNegatives.add(arr[i]);
//     }
//   }
//   return uniquePositives.size > uniqueNegatives.size;
// }

// console.log(isPositiveDominant([1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));
//////////////////////////

//https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

// function num_of_digits(num) {
//   if (num === 0) return 1;

//   num = Math.abs(num);

//   let count = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
//   return count;
// }


// console.log(num_of_digits(1000));
////////////////////

//

// function chosenWine(wines) {
//   if (wines === 0) {
//     return null;
//   }

//   if (wines.length === 1) {
//     return wines[0].name;
//   }

//   wines.sort((a, b) => a.price - b.price);
//   return wines[1] ? wines[1].name : null;
// }

// console.log(chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]));
////////////////////

///https://edabit.com/challenge/uScx6aGXmNu27NYWz


// function getFrequencies(arr) {
//   const frequencies = {};

//   for (let element of arr) {
//     if (frequencies[element]) {
//       frequencies[element]++;
//     } else {
//       frequencies[element] = 1;
//     }
//   }

//   return frequencies
// }
// console.log(getFrequencies(["A", "B", "A", "A", "A"]));


/////////////////////
//https://edabit.com/challenge/8khL2WEhZ6M9onHL4
// function countLayers(rug) {
//   let count = 1; 
  
//   for (let i = 0; i < Math.floor(rug.length / 2); i++) {
//       if (rug[i] !== rug[i + 1]) {
//           count++;
//       }
//   }
  
//   return count;
// }
// console.log(countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ])); 
/////////////////////
//https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

// function addName(obj, name, value) {
// 	obj[name] = value;
//   return obj;
// }
// console.log(addName({}, "Brutus", 300));
/////////////

/////////////
//https://edabit.com/challenge/x2LS9YvyK38uH8B7J

// function mostExpensive(obj) {
//   let mostExpensiveItem = "";
//   let highestPrice = 0;

//   for (let item in obj) {
//       if (obj[item] > highestPrice) {
//           highestPrice = obj[item];
//           mostExpensiveItem = item;
//       }
//   }

//   return `The most expensive one is the ${mostExpensiveItem}`;
// }

// console.log(mostExpensive({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// })); 
////////////////////////////

//https://edabit.com/challenge/paMpZoEJ6gr4feMS3

// function getVodkaBottle(obj, num) {
//   for (let o in obj) {
//     if (o.startsWith("Rammstein") && obj[o] === num) {
//       return o;
//     }
//   }
//   return null;
// }
// console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100));

///////////////////
//

// function consecutiveCombo(a1, a2) {
// 	const combinedArr = [...a1, ...a2];
	
// 	combinedArr.sort((a, b) => a - b);
	
// 	for (let i = 1; i < combinedArr.length; i++) {
// 		if (combinedArr[i] - combinedArr[i - 1] !== 1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6])); // true
// console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9])); // false
/////////////////////////

//https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

// function commonElements(arr1, arr2) {
	
//  let i = 0;
//  let j = 0;
//  let similars = [];

//  while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] === arr2[j]) {
//     similars.push(arr1[i]);
//     i++;
//     j++;
//   } else if (arr1[i] < arr2[j]) {
//     i++;
//   } else {
//     j++
//   }
//  }
//  return similars;
// }

// console.log(commonElements([1, 3, 5], [1, 5, 7])); 
// console.log(commonElements([1, 2, 4], [2, 3, 4])); 

/////////////////////
//https://edabit.com/challenge/95YiRnBSnfzSQWAuu

// function product(a1, a2, b1, b2, c1, c2) {
//   let firstProduct = a1 * b1 * c1;
//   let secondProduct = a2 * b2 * c2;
//   return firstProduct + secondProduct;
// }

// //currying

// function product(a1, a2) {
// 	return function (b1, b2) {
//     return function(c1, c2) {
//     let firstProduct = a1 * b1 * c1;
//     let secondProduct = a2 * b2 * c2;
//     return firstProduct + secondProduct;
//   }
// }
// }

// console.log(product(1, 2, 1, 2, 2, 3)); 
// console.log(product(10, 2, 5, 0, 2, 3));

////////////////////////////////////

//https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz

// function isPandigital(num) {
//   const digits = new Set(num.toString());

//   if (digits.size === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPandigital(98140723568910));  
// console.log(isPandigital(90864523148909)); 
/////////////////////

//https://edabit.com/challenge/EpwHHdFF6EABASmhL


// function multiplicationTable(n) {
// 	let table = [];

//   for (let i = 1; i <= n; i++) {
//     let row = [];
//     for (let j = 1; j <= n; j++) {
//       row.push(i * j);
//     }
//     table.push(row);
//   }
//   return table;
// }
// console.log(multiplicationTable(3));
// console.log(multiplicationTable(5));
///////////////////////

//https://edabit.com/challenge/LoBo2DoWQuuzSr6Ft

// function threeLetterCollection(s) {
//   if (s.length < 3) return [];

//   let result = [];

//   for (let i = 0; i <= s.length - 3; i++) {
//     result.push(s.substring(i, i + 3));
//   }

//   return result.sort();
// }

// console.log(threeLetterCollection("edabit"));
// console.log(threeLetterCollection("slap"));
// console.log(threeLetterCollection("hi"));
//////////////////////////////

//https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz

// function canConcatenate(arr, target) {
//   const flattened = arr.flat();

//   const sortedFlattened = flattened.sort((a, b) => a - b);
//   const sortedTarget = target.sort((a, b) => a - b);

//   return JSON.stringify(sortedFlattened) === JSON.stringify(sortedTarget);
// }

// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]));  
// console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]));  

////////////////////////////////////////////////

//https://edabit.com/challenge/Gz27eKkMcLarzE5Rj

// function sortByLength(arr) {
// 	return arr.sort((a, b) => a.length - b.length); //a - b is for numbers a.length b.length is for strings
// 	}
//   sortByLength(["Google", "Apple", "Microsoft"])


/////////////////////////////////////////

//https://edabit.com/challenge/vtDnynHfWCnMaKYym

// function factorial(num) {
// 	let store = 1;
// 	for (let i = 1; i <= num; i++) {
// 		store *= i;						
	
// 	}
// 	return store;
// }

// console.log(factorial(5))

///////////////////////////
//https://edabit.com/challenge/Twbmxzd3JwkkqAWES


// function isOmnipresent(arr, val) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!arr[i].includes(val)) {
// 			return false
// 		}
// 	}
// 	return true
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));

//////////////////////////////////
//https://edabit.com/challenge/PBXe4hLP3mbbMEFt8


// function highLow(str) {
// 	const arr = str.split(' ').map(Number);
// 	const max = Math.max(...arr);
// 	const min = Math.min(...arr);
//     return `${max} ${min}`;
// 	}

// console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))

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
function jazzify(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].endsWith('7')) {
          result.push(arr[i]);
      } else {
          result.push(arr[i] + '7');
      }
  }
  
  return result;
}

console.log(jazzify(['F', 'E', 'A', 'Ab7', 'Gm7', 'C7']))
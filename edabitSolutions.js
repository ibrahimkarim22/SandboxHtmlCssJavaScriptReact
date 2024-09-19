
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu 
   
  // function footballPoints(wins, draws, losses) {
  //   let points = (wins * 3) + (draws * 1) + (losses * 0);
  //   return points;
  // }

  // console.log(footballPoints(3, 2, 3));
/////////////////////////

//https://edabit.com/challenge/FipbQSYquQLPZ8QXG
function isSeven(x) {
	return x === 7 ? true : false;
}
console.log(isSeven(7));
console.log(isSeven(8)); 
////////////////////////////////////////

//https://edabit.com/challenge/KSTkFSnaYBJdo6PHx
function boolToString(flag) {
  return flag.toString();
}
console.log(boolToString(true));
console.log(boolToString(false));

//https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG

function sumPolygon(n) {
  return (
    (n - 2) * 180
    )
}
console.log(sumPolygon(7));
//////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
function checkEquality(a, b) {
  if (a === b) {
		return true;
	} else return false;
}
console.log(checkEquality(true, 1));
console.log(checkEquality(1, '1'));
console.log(checkEquality(1, 1));
/////////////////////////////////

//https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
function maxNum(n1, n2) {
	if (n1 > n2) {
	  return n1
	} else if (n1 < n2) {
		return n2
	}
}
console.log(maxNum(2, 1));
console.log(maxNum(1, 2));
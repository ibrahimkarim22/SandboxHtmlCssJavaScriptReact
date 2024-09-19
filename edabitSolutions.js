
//  https://edabit.com/challenge/GwvwXHWCThHZrR7xu 
   
  function footballPoints(wins, draws, losses) {
    let points = (wins * 3) + (draws * 1) + (losses * 0);
    return points;
  }

  console.log(footballPoints(3, 2, 3));

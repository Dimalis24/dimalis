function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }




  function positiveSum(arr) {
    let total = 0
     arr.forEach(x => x >=0 ? total += x:0);
      return total
    
  }




  function highAndLow(numbers){
    const highAndLow2 = numbers.split(' ');
    return `${Math.max(...highAndLow2) + ' ' + Math.min(...highAndLow2)}`;
  }






  function removeSmallest(numbers) {
    const findmin = Math.min(...numbers);
    return numbers.filter((num, index) => index !== numbers.indexOf(findmin));
  }




  var number = function(busStops){
    let pepoleIn = 0;
    let pepoleOut = 0;
    busStops.forEach(item => {
      pepoleIn += item[0];
      pepoleOut += item[1];
    });
    return pepoleIn - pepoleOut;
    }
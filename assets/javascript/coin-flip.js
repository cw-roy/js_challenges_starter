function flipCoin() {
    let randomNum = Math.random();
  
    if (randomNum < 0.5) {
      return "It's heads.";
    } else {
      return "It's tails.";
    }
  }
  
  function showResult() {
    let result = flipCoin();
    document.getElementById("result").innerHTML = result;
    setTimeout(function() {
      document.getElementById("result").innerHTML = "";
    }, 1000); // 1000 milliseconds = 1 second
  }
  
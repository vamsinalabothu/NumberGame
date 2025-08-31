let ipVal = document.getElementById("userInput");
let gameRes = document.getElementById("gameResult");
let randomNum = Math.ceil(Math.random()*100);
console.log(randomNum);
function checkGuess(){
  gameRes.style.color = "white"
  let ipUpdated = parseInt(ipVal.value);
  if(ipUpdated > randomNum){
    gameRes.innerHTML = "Too High, Try Again";
    gameRes.style.backgroundColor = "darkblue";
  }
  else if(ipUpdated < randomNum){
    gameRes.innerHTML = "Too low, Try Again";
    gameRes.style.backgroundColor = "darkblue";
  }
  else if(ipUpdated === randomNum){
    gameRes.textContent = "Congratulations! You Got it right";
    gameRes.style.backgroundColor = "green";
  }
  else{
    gameRes.textContent = "Invalid Input";
    gameRes.style.backgroundColor = "red";

  }
}
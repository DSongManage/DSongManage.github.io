function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
    console.log(this);
}

const bulbasaur = document.querySelector('.bulbasaur');
const squirtle = document.querySelector('.squirtle');
const charmander = document.querySelector('.charmander');

bulbasaur.addEventListener('click', playRound)
squirtle.addEventListener('click', playRound)
charmander.addEventListener('click', playRound)

let playerScore = 0;
let compScore = 0;
let roundScore = 0;

// while (playerScore < 5 || compScore < 5) {

function playRound() {
    const myArray = ["bulbasaur", "squirtle", "charmander"];
    const computerSelection = computerPlay();
    let playerSelection = this.classList.value.toUpperCase();

    function computerPlay() {
      y = myArray[~~(Math.random() * myArray.length)].toUpperCase();
      return (y);
    }

    if (computerSelection === "BULBASAUR") {
        if (playerSelection === computerSelection) {
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            roundScore = roundScore + 1;
            var result = ("Bulbasaur vs Bulbasaur, it's a TIE!")
        } else if (playerSelection === "SQUIRTLE") {
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            roundScore = roundScore + 1;
            var result = ("Bulbasaur beats Squirtle, you LOSE!")
        } else {
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            roundScore = roundScore + 1;
            var result = ("Charmander beats Bulbasaur, you WIN!")
        }   
    } else if (computerSelection === "CHARMANDER") {
      if (playerSelection === computerSelection) {
            roundScore = roundScore + 1;
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            var result = ("Charmander vs Charmander, it's a TIE!")
      } else if (playerSelection === "BULBASAUR") {
            roundScore = roundScore + 1;
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            var result = ("Charmander beats Bulbasaur, you Lose!")
      } else {
            roundScore = roundScore + 1;
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            var result = ("Squirtle beats Charmander, you Win!")
        }  
    } else if (computerSelection === "SQUIRTLE") {
      if (playerSelection === computerSelection) {
            roundScore = roundScore + 1;
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            var result = ("Squirtle vs Squirtle, it's a Tie!")
      } else if (playerSelection === "CHARMANDER") {
            roundScore = roundScore + 1;
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            var result = ("Squirtle beats Charmander, You Lose!")
      } else {
            roundScore = roundScore + 1;
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            var result = ("Bulbasaur beats Squirtle, You Win!")
        }  
    }

  console.log(result);
  console.log(roundScore);
  console.log('player score: ' + playerScore);
  console.log('computer score: ' + compScore);
  
  const resultContainer = document.querySelector('.resultContainer');
  
  resultContainer.innerText = "Round " + roundScore + "...FIGHT!" + "\r\n";
  resultContainer.innerText += result + "\r\n";
  resultContainer.innerText += "Player Score: " + playerScore + " vs Computer Score: " + compScore + "\r\n";

  if (playerScore === 5) {
    resultContainer.innerText += "\r\n YOU ARE THE WINNER!";
    roundScore = 0;
    playerScore = 0;
    compScore = 0;
  } else if (compScore === 5) {
    resultContainer.innerText += "\r\n COMPUTER WINS, you LOSE :(";
    roundScore = 0;
    playerScore = 0;
    compScore = 0;
  } 

}

document.getElementsByClassName("playerScore").innerHTML = playRound[0];


// }





// if (playerScore > compScore) {
//     console.log("YOU WIN! :) you beat the computer by scoring "+playerScore +" while the computer only scored " + compScore)
// } else if (playerScore === compScore) {
//     console.log("Ya'll Tie! The final score was "+ playerScore + " vs " + compScore)
// } else {
//     console.log("YOU LOSE :(. The computer beat you by scoring " + compScore + " and you only scored " + playerScore)
// }









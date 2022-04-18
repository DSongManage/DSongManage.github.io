
let playerScore = 0;
let compScore = 0;

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
          var result = ("Bulbasaur vs Bulbasaur, it's a TIE!")
      } else if (playerSelection === "SQUIRTLE") {
          playerScore = playerScore + 1;
          compScore = compScore + 0;
          var result = ("Bulbasaur beats Squirtle, you LOSE!")
      } else {
          playerScore = playerScore + 0;
          compScore = compScore + 1;
          var result = ("Charmander beats Bulbasaur, you WIN!")
      }   
  } else if (computerSelection === "CHARMANDER") {
      if (playerSelection === computerSelection) {
          playerScore = playerScore + 0;
          compScore = compScore + 0;
          var result = ("Charmander vs Charmander, it's a TIE!")
      } else if (playerSelection === "BULBASAUR") {
          playerScore = playerScore + 0;
          compScore = compScore + 1;
          var result = ("Charmander beats Bulbasaur, you Lose!")
      } else {
          playerScore = playerScore + 1;
          compScore = compScore + 0;
          var result = ("Squirtle beats Charmander, you Win!")
      }  
  } else if (computerSelection === "SQUIRTLE") {
      if (playerSelection === computerSelection) {
          playerScore = playerScore + 0;
          compScore = compScore + 0;
          var result = ("Squirtle vs Squirtle, it's a Tie!")
      } else if (playerSelection === "CHARMANDER") {
          playerScore = playerScore + 0;
          compScore = compScore + 1;
          var result = ("Squirtle beats Charmander, You Lose!")
      } else {
          playerScore = playerScore + 1;
          compScore = compScore + 0;
          var result = ("Bulbasaur beats Squirtle, You Win!")
      }  
  }

  const resultContainer = document.querySelector('.resultContainer');
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = result;
  resultContainer.appendChild(content);

}






// if (playerScore > compScore) {
//     console.log("YOU WIN! :) you beat the computer by scoring "+playerScore +" while the computer only scored " + compScore)
// } else if (playerScore === compScore) {
//     console.log("Ya'll Tie! The final score was "+ playerScore + " vs " + compScore)
// } else {
//     console.log("YOU LOSE :(. The computer beat you by scoring " + compScore + " and you only scored " + playerScore)
// }









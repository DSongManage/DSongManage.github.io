
let playerScore = 0;
let compScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

for (let i = 0; i < 5; i++) {

    const computerSelection = computerPlay();
    playerSelection = window.prompt("So what's it gonna be? Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toUpperCase();

    function computerPlay() {
        y = myArray[~~(Math.random() * myArray.length)].toUpperCase();
        return (y);
    }

    if (computerSelection === "ROCK") {
        if (playerSelection === computerSelection) {
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            console.log("Tie!")
        } else if (playerSelection === "PAPER") {
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            console.log("You Win!")
        } else {
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            console.log("You Lose!")
        }   
    } else if (computerSelection === "SCISSORS") {
        if (playerSelection === computerSelection) {
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            console.log("Tie!")
        } else if (playerSelection === "PAPER") {
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            console.log("You Lose!")
        } else {
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            console.log("You Win!")
        }  
    } else if (computerSelection === "PAPER") {
        if (playerSelection === computerSelection) {
            playerScore = playerScore + 0;
            compScore = compScore + 0;
            console.log("Tie!")
        } else if (playerSelection === "ROCK") {
            playerScore = playerScore + 0;
            compScore = compScore + 1;
            console.log("You Lose!")
        } else {
            playerScore = playerScore + 1;
            compScore = compScore + 0;
            console.log("You Win!")
        }  
    }
}

if (playerScore > compScore) {
    console.log("YOU WIN! :) you beat the computer by scoring "+playerScore +" while the computer only scored " + compScore)
} else if (playerScore === compScore) {
    console.log("Ya'll Tie! The final score was "+ playerScore + " vs " + compScore)
} else {
    console.log("YOU LOSE :(. The computer beat you by scoring " + compScore + " and you only scored " + playerScore)
}









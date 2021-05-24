function computerPlay(){
    
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()*choices.length)];
    
}

function playerPlay(){

    let playerChoice = prompt("Make your play:");

    return playerChoice.toLowerCase();

}

function playRound() {

    let playerSelection = playerPlay();
    let computerSelection = computerPlay ();

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                console.log("It's a tie!");
            }
            else if (computerSelection === 'scissors') {
                console.log("Player wins!");
                playerTally();
            }
            else {
                console.log("Computer wins!");
                computerTally();
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                console.log("Player wins!");
                playerTally();
            }
            else if (computerSelection === "scissors") {
                console.log("Computer wins!");
                computerTally();
            }
            else {
                console.log("It's a tie!");
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                console.log("Computer wins!");
                computerTally();
            }
            else if (computerSelection === 'scissors') {
                console.log("It's a tie!");
            }
            else {
                console.log("Player wins!");
                playerTally();
            }
            break;
    }


}

function playerTally() {
    return playerScore++;
}
function computerTally() {
    return computerScore++;
}

function playGame() {
    let i = 0;

    console.log("This is RockPaperScissors game against computer. Best of 5");

    while (i <=5) {
        playRound();
        i++;
    }
    if (playerScore > computerScore) {
        console.log("Final Result: Player wins! Congratulations!");
    }
    else if (playerScore < computerScore) {
        console.log("Final Result: Computer wins! Better luck next time!");
    }
    else {
        console.log("Final Result: It's a tie! Try again!");
    }

}

let tieScore = 0;
let playerScore = 0;
let computerScore = 0;
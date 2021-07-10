let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('.resultsWindow');
const clear = document.querySelector('#clear');
const plScore = document.querySelector('#playerScore');
const pcScore = document.querySelector('#computerScore');
const txtArea = document.querySelector('#textArea');

plScore.textContent = `Player: ${playerScore}`;
pcScore.textContent = `Computer: ${computerScore}`;
function init() {
    txtArea.value = '';
}

window.onload = init;

function lmao() {
txtArea.scrollTop = txtArea.scrollHeight;
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()*choices.length)];
}

function playerTally() {
    return playerScore++;
}
function computerTally() {
    return computerScore++;
}

function showOutcome(st) {
    /* const p = document.createElement('p');
    p.textContent = `${st}`;
     results.appendChild(p); */

     txtArea.value += `${st} \n`;
    
}



function resetTheGame() {

    showOutcome('Try again!');
    
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    results.appendChild(resetButton);

    buttons.forEach(el => el.disabled = true);

    resetButton.addEventListener('click', () => {
        txtArea.value = '';
        playerScore = 0;
        computerScore = 0;
        plScore.textContent = `Player: ${playerScore}`;
        pcScore.textContent = `Computer: ${computerScore}`;

        resetButton.remove();
        buttons.forEach(el => el.disabled = false);
    })
    
}

function boFive() {
    if (playerScore === 3) {
        showOutcome('Player wins the game!');
        resetTheGame();
    }
    else if  (computerScore === 3) {
        showOutcome('Computer wins the game!');
        resetTheGame();
    }

}

function playRound(e) {
    
    let playerSelection = e;
    let computerSelection = computerPlay ();

    showOutcome(`Player chose ${playerSelection}.`);
    showOutcome(`Computer chose ${computerSelection}.`);

    switch (playerSelection) {
        case 'rock':
                if (computerSelection === 'rock') {
                showOutcome("It's a tie!");
            }
            else if (computerSelection === 'scissors') {
                showOutcome("Player wins the round!");
                playerTally();
            }
            else {
                showOutcome("Computer wins the round!");
                computerTally();
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                showOutcome("Player wins the round!");
                playerTally();
            }
            else if (computerSelection === "scissors") {
                showOutcome("Computer wins the round!");
                computerTally();
            }
            else {
                showOutcome("It's a tie!");
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                showOutcome("Computer wins the round!");
                computerTally();
            }
            else if (computerSelection === 'scissors') {
                showOutcome("It's a tie!");
            }
            else {
                showOutcome("Player wins the round!");
                playerTally();
            }
            break;
        
    }
    

    plScore.textContent = `Player: ${playerScore}`;
    pcScore.textContent = `Computer: ${computerScore}`;
    boFive();
    lmao();
}

buttons.forEach(el => el.addEventListener('click', () => {
    playRound(el.dataset.choice);

}))

/* clear.addEventListener('click', () =>{
    txtArea.value = '';
    plScore.textContent = 0;
    pcScore.textContent = 0;
}); */
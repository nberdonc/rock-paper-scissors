const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const optionBtn = document.querySelectorAll('#buttons button');
const gameResult = document.querySelector('#gameResult');

//Reset game
resetBtn.addEventListener('click', () => location.reload());


let gameValues = ["rock", "paper", "scissors"]
let playerSelection;
let computerSelection = ""
let resultOfMatch = ""
let playerResult = 0
let computerResult = 0

function computerPlay() {
    let randomValue = gameValues[Math.floor(Math.random() * gameValues.length)];
    console.log(randomValue)
    computerSelection = randomValue
    return randomValue;
}

function singleRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        resultOfMatch = "Tie!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
    ) {
        resultOfMatch = `You Win! ${playerSelection} beats ${computerSelection}`
        playerResult++

    } else {
        resultOfMatch = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerResult++
    }

    console.log(`Player:${playerResult} vs. Computer:${computerResult}`)
    return resultOfMatch
}

function reset() {
    playerResult = 0
    computerResult = 0
}

function game(e) {
    for (let i = 0; i < 1000; i++) {
        if (playerSelection > 4 || computerResult > 4) {
            return playerResult > computerResult ? "YOU WIN!" : playerResult < computerResult ? "YOU LOSE!" : "TIE!"
        }
        playerSelection = (e.target.id);
        singleRound(playerSelection, computerSelection)
    }
}




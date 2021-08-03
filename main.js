const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const optionBtn = document.querySelectorAll('#buttons button');
const oneRoundResult = document.querySelector('#oneRoundResult');
const gameResult = document.querySelector('#gameResult');

//reloads page once pressed resetBtn
resetBtn.addEventListener('click', () => location.reload());

optionBtn.forEach(button => { button.addEventListener('click', getPlayerSelection) });


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
        oneRoundResult.textContent = resultOfMatch = "Tie!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
    ) {
        oneRoundResult.textContent = resultOfMatch = `You Win! ${playerSelection} beats ${computerSelection}`
        playerScore.textContent = playerResult++

    } else {
        oneRoundResult.textContent = resultOfMatch = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerScore.textContent = computerResult++
    }

    console.log(`Player:${playerResult} vs. Computer:${computerResult}`)
    gameWinner()
}

function gameWinner() {
    if (playerResult === 5 || computerResult === 5) {
        return playerResult > computerResult ? gameResult.textContent = "YOU WIN!" : playerResult < computerResult ? gameResult.textContent = "YOU LOSE!" : gameResult.textContent = "TIE!"
    }
}

function getPlayerSelection(e) {
    playerSelection = (e.target.id);
    singleRound(playerSelection, computerPlay());
}








/* SIMPLE JS RPS-GAME

let gameValues = ["rock", "paper", "scissors"]
let messageForUser = "Are you goint to play rock, paper or scissors?"
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
        resultOfMatch = "Tie"
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

function game() {
    for (let i = 0; i < 50; i++) {
        if (playerSelection > 4 || computerResult > 4) {
            return playerResult > computerResult ? "YOU WIN" : "YOU LOSE"
        }
        playerSelection = window.prompt(messageForUser);
        singleRound(playerSelection, computerSelection)
    }
}

*/
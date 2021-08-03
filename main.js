const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const optionBtn = document.querySelectorAll('div#buttons.buttons');
const oneRoundResult = document.querySelector('#oneRoundResult');
const gameResult = document.querySelector('#gameResult');

//reloads page once pressed resetBtn
resetBtn.addEventListener('click', () => location.reload());

//once clicked a button we call getPlayerSelection()
optionBtn.forEach(button => { button.addEventListener('click', getPlayerSelection) });

let playerSelection;
let computerSelection = ["rock", "paper", "scissors"]
let resultOfMatch = ""
let playerResult = 1
let computerResult = 1

//selects a random value from the computerSelection array
function computerPlay() {
    let randomValue = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return randomValue;
}

//gets alt value from the image selected by the player
function getPlayerSelection(e) {
    playerSelection = e.target.alt;
    singleRound(playerSelection, computerPlay());
}

function singleRound(playerSelection, computerSelection) {
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
    gameWinner()
}

function gameWinner() {
    if (playerResult > 5 || computerResult > 5) {
        if (playerResult > computerResult) {
            gameResult.textContent = "YOU WIN!"
        }
        else if (playerResult < computerResult) {
            gameResult.textContent = "YOU LOSE!"
        }
        else if (playerResult === computerResult) {
            gameResult.textContent = "TIE!"
        }
        //disables the buttons at gave over
        optionBtn.forEach(button => {
            button.removeEventListener('click', getPlayerSelection);
        });
    }
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
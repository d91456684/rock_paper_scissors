const log = item => console.log(item)
const randomNumber = (min,max) => Math.floor(Math.random()* (max - min + 1)) + min;
let humanScore = 0
let computerScore = 0
let roundAggregate = 0
let array = ["rock","paper","scissors"]

function getComputerChoice (min,max) {
    let number = randomNumber(min,max)
    return array[number]
}
const body = document.querySelector("body")
const buttonContainer = document.querySelector("#button-container")
const resultsContainer = document.querySelector("#results-container")
const roundDisplay = document.querySelector("#round-display")
roundDisplay.textContent = `Rounds: ${roundAggregate}`
const humanScoreDisplay = document.querySelector("#human-score-display")
humanScoreDisplay.textContent = `Your score:${humanScore}`
const computerScoreDisplay = document.querySelector("#computer-score-display")
computerScoreDisplay.textContent = `Computer score:${computerScore}`
const announcer = document.createElement("div")
const playAgain = document.createElement("button")
playAgain.id = "play-again"
playAgain.textContent = "play again"

console.log(playAgain.id)
console.log

buttonContainer.addEventListener("click", (event)=>{
    let target = event.target;
    let humanChoice = "";
    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            console.log(event)
            break;
        case "play-again":
            humanScore = 0;
            computerScore = 0;
            roundAggregate = 0;
            body.appendChild(buttonContainer);
            body.removeChild(playAgain);
            console.log("i work");
            break;
    }
    let computerChoice = getComputerChoice(0,2);
    playRound(computerChoice,humanChoice)
    roundDisplay.textContent = `Rounds: ${roundAggregate}`
    humanScoreDisplay.textContent = `Your score:${humanScore}/5`
    computerScoreDisplay.textContent = `Computer score:${computerScore}/5`

    if (humanScore === 5) {
        announcer.textContent = "you win!!!!!!!!!!!!!"
        resultsContainer.appendChild(announcer)
        body.removeChild(buttonContainer)
        body.appendChild(playAgain)
    }else if (computerScore === 5) {
        announcer.textContent = "you loose!!!!!!!!!!!!!"
        resultsContainer.appendChild(announcer)
        body.removeChild(buttonContainer)
        body.appendChild(playAgain)  
    }
    

})

function playRound(computerChoice, humanChoice) {
roundAggregate ++;
let result = array.indexOf(computerChoice) - array.indexOf(humanChoice)
if(result === 0){
  log("draw")
}else if (result === -1 || result === 2) {
    log("you win");
    humanScore ++
}else {
    log("computer wins")
    computerScore ++
    } 
}







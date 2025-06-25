const log = item => console.log(item)
const randomNumber = (min,max) => Math.floor(Math.random()* (max - min + 1)) + min;
let humanScore = 0
let computerScore = 0
let roundAggregate = 0
function getComputerChoice (min,max) {
    let number = randomNumber(min,max)
    return ["rock","paper","scissors"][number]
}
function getHumanChoice() {
    let choice = prompt("ROCK PAPER SCISSORS OR DISQUALIFICATION").toLowerCase()
    return choice === "rock" || choice === "paper" || choice === "scissors" ? choice : "disqualification"
}
function playRound(computerChoice, humanChoice) {
roundAggregate ++;
log("you:" + humanChoice)
log("computer:" + computerChoice)
log("And the round goes to:")
const arr = ["rock","paper","scissors", "" , "", "disqualification"]
let result = arr.indexOf(computerChoice) - arr.indexOf(humanChoice)
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
function playGame() {
while (roundAggregate < 5) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice(0,2)
    playRound(computerChoice,humanChoice)
    log("COMPUTER: " + computerScore + " HUMAN: " + humanScore)
    log("number of rounds: " + roundAggregate)
    log("_______________________")
  }
}
playGame()
log("HIGHEST SCORE WINS!!!!!")





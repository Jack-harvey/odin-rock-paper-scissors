function computerChoice() {
  let randomNumberFrom1To99 = Math.floor(Math.random() * 100 + 1);
  if (randomNumberFrom1To99 <= 33) {
    return "rock";
  } else if (randomNumberFrom1To99 >= 67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerChoice() {
  let playerChoice = prompt(
    "It's time to throw down against me, the console. You've got to pick 'Rock', 'Paper', or 'Scissors'. May the best console win."
  );
  return playerChoice.toLowerCase();
}

function playerWin() {
  console.log("Congrats, this round is yours!");
  playerScore++;
}

function playerLoss() {
  console.log("That's a point to me, the console!");
  computerScore++;
}

function roundEnd() {
  if (roundNumber <= 4) {
    return;
  } else if (playerScore === computerScore) {
    console.log(`It's a draw. We both scored ${playerScore}`);
  } else {
    console.log(
      `I win. ${roundNumber - playerScore} is lower than ${playerScore}`
    );
  }
}

function calculateWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (playerChoice === "rock") {
    return computerChoice === "paper" ? "computer" : "player";
  } else if (playerChoice === "paper") {
    return computerChoice === "scissors" ? "computer" : "player";
  }
  return computerChoice === "rock" ? "computer" : "player";
}

let playerChoicex = playerChoice();
let computerChoicex = computerChoice();
console.log(playerChoicex);
console.log(computerChoicex);
console.log(calculateWinner(playerChoicex, computerChoicex));

// let playerScore = 0;
// let computerScore = 0;
// let roundNumber = 0;

// while (roundNumber < 5) {
//   roundNumber++;
//   playerChoice();
//   computerChoice();
// }

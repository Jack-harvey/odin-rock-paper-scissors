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

function playerDraw() {
  console.log("A draw!");
}

function endRound() {
  roundNumber++;
  if (roundNumber <= 4) {
    return;
  } else if (playerScore === computerScore) {
    console.log(`It's a draw. We both scored ${playerScore}`);
  } else {
    let winner = playerScore > computerScore ? "You" : "I";
    console.log(
      `${winner} win with ${winner === "You" ? playerScore : computerScore}!`
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

function calculateScore(roundWinnerResult) {
  if (roundWinnerResult === "draw") {
    playerDraw();
    return;
  }
  roundWinnerResult === "player" ? playerWin() : playerLoss();
}

function isPlayerChoiceValid(choice) {
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return true;
  }
  return false;
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

while (roundNumber < 5) {
  let playersChoice = playerChoice();
  if (!isPlayerChoiceValid(playersChoice)) {
    alert("You didn't select 'Rock', 'Paper', or 'Scissors'. Try again");
    continue;
  }
  let computersChoice = computerChoice();
  let roundWinner = calculateWinner(playersChoice, computersChoice);
  calculateScore(roundWinner);
  endRound();
}

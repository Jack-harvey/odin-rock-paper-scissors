function playerMakesMove(choice) {
  let playersChoice = choice.target.closest(".choice").id;
  let computersChoice = computerChoice();
  let roundWinner = calculateWinner(playersChoice, computersChoice);
  calculateScore(roundWinner);
  endRound();
}

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

function playerWin() {
  consoleSpeaks("Congrats, this round is yours!");
  playerScore++;
}

function playerLoss() {
  consoleSpeaks("That's a point to me, the console!");
  computerScore++;
}

function playerDraw() {
  consoleSpeaks("A draw!");
}

function endRound() {
  roundNumber++;
  if (roundNumber <= 4) {
    return;
  } else if (playerScore === computerScore) {
    consoleSpeaks(`It's a draw. We both scored ${playerScore}`);
    return;
  } else {
    let winner = playerScore > computerScore ? "You" : "I";
    consoleSpeaks(
      `${winner} win with ${winner === "You" ? playerScore : computerScore}!`
    );
    return;
  }
}

function consoleSpeaks(quote) {
  const consoleVoice = document.querySelector("#consoleVoice");
  consoleVoice.textContent = quote;
}

function setScoreBoard(consoleScore, playerScore) {}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

document.addEventListener("DOMContentLoaded", () => {
  const buttonPlayerChoiceArea = document.querySelector("#rps");

  const playerName = prompt("Who dares come at me?");

  buttonPlayerChoiceArea.addEventListener("click", (event) => {
    playerMakesMove(event);
  });
});

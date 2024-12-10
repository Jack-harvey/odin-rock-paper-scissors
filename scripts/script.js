function computerChoice() {
  let randomNumberFrom1To99 = Math.floor(Math.random() * 100 + 1);
  if (randomNumberFrom1To99 <= 33) {
    return "Rock";
  } else if (randomNumberFrom1To99 >= 67) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(computerChoice());

function playerChoice() {
  let playerChoice = prompt(
    "It's time to throw down against me, the console. You've got to pick 'Rock', 'Paper', or 'Scissors'. May the best console win."
  );
  return playerChoice.toLowerCase();
}

console.log(playerChoice());

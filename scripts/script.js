function computerChoice() {
  randomNumberFrom1To99 = Math.floor(Math.random() * 100 + 1);
  if (randomNumberFrom1To99 <= 33) {
    return "Rock";
  } else if (randomNumberFrom1To99 >= 67) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(computerChoice());

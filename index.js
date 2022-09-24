//Get computer choice
function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return moves[index];
}

//Get user choice
function getPlayerChoice() {
  let userChoice = window.prompt("Enter your choice: ").toLowerCase();
  return userChoice;
}

//Play a single round & declare the winner
function playARound(userChoice, computerChoice) {
  if ((userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "rock")) {
    userWins++;
    return `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerWins++;
    return `You lose! ${computerChoice} beats ${userChoice}`;
  }
}

//5 round game
function theGame() {
  for (let i = 0; i < 5; i++) {
    let userChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(playARound(userChoice, computerChoice));
  }
  
  if (userWins >= 3) {
    console.log(`Congrats!! You won the game by ${userWins}:${computerWins}`);
  } else {
    console.log(`Oh No!! You lost the game by ${userWins}:${computerWins}`);
  }
}
let userWins = 0;
let computerWins = 0;
theGame();
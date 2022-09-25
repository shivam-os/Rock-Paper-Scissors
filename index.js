//Score counter of both the players
let userWins = 0;
let computerWins = 0;

//UI for scores & information about each round
const h2 = document.querySelector("h2");
const para = document.querySelector(".instructions > p");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoiceIcon = document.getElementById("user-choice-icon");
const computerChoiceIcon = document.getElementById("computer-choice-icon");

//Get computer choice
function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return moves[index];
}

//Add event listeners for user choices
const choices = document.querySelectorAll(".user-choice");
choices.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//Handle what happens when a choice is clicked by the user
function handleClick(event) {
  //Get user choice & place corresponding icon on screen
  let userChoice = event.target.id;
  displayIcon(userChoice, playerChoiceIcon);

  //Get computer choice & place corrseponding icon on screen
  let computerChoice = getComputerChoice();
  displayIcon(computerChoice, computerChoiceIcon);

  //Play a round
  playARound(userChoice, computerChoice);
}

//Display the icons based on choices
function displayIcon(choice, iconPlace) {
  const icons = ["✊", "🖐", "✌️"];

  if (choice === "rock") {
    iconPlace.textContent = icons[0];
  } else if (choice === "paper") {
    iconPlace.textContent = icons[1];
  } else {
    iconPlace.textContent = icons[2];
  }
}

function updateScores() {
  playerScore.textContent = userWins;
  computerScore.textContent = computerWins;
}

//Play a single round & declare the winner
function playARound(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    //Increase user wins & display user wins the round message
    userWins++;
    h2.textContent = "You win!";
    para.textContent = `${userChoice} beats ${computerChoice}`;
  } else if (userChoice === computerChoice) {
    //Don't change any score but display a tie message
    h2.textContent = "It's a tie!";
    para.textContent = `${userChoice} ties with ${computerChoice}`;
  } else {
    //Increase the computer wins & display user lost the round message
    computerWins++;
    h2.textContent = "You lost!";
    para.textContent = `${computerChoice} beats ${userChoice}`;
  }

  //Show the scores after updating the value
  updateScores();
}

//Checks whether anyone of both the players has scored 5 points
function isGameOver() {
  console.log(userWins === 5 || computerWins === 5);
}

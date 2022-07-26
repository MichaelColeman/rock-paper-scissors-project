// Author: Tommy Coleman
// Date: 7.22.2022


//helper for getComputerChoice()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// returns either "rock" "paper" or "scissors" 
function getComputerChoice() {
  const choice = getRandomInt(3);
  if(choice == 0) {
    return "rock";  
  } else if(choice == 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

function playRound(playerSelection , computerSelection) {
  
  let roundResult;  // round result 1 = computer win, 2 = player win, 3 = tie
  if(playerSelection == "rock") {  //player chooses rock
    if (computerSelection == "paper") {
      roundResult = 1; //computer wins
    } else if(computerSelection == "scissors") {
      roundResult = 2; //player wins
    } else {
      roundResult = 3; //game is a tie
    }
  } else if(playerSelection == "paper") {  //player chooses paper
    if(computerSelection == "rock") {
      roundResult = 2; //player wins
    } else if(computerSelection == "scissors") {
      roundResult = 1; //computer wins
    } else {
      roundResult = 3; //game is a tie
    }
  } else if(playerSelection == "scissors") {  //player chooses scissors
    if(computerSelection == "rock") {
      roundResult = 1; //computer wins
    } else if(computerSelection == "paper") {
      roundResult = 2; //player wins
    } else {
      roundResult = 3; //game is a tie
    }
  }
  return roundResult; // round result 1 = computer win, 2 = player win, 3 = tie
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  //play "i" number of rounds.
  for (let i = 0; i < 5; i++) {
    //display current round
    console.log(`round ${i}.`);
    //get player choice
    const playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
    //get computer choice
    const computerSelection = getComputerChoice();
    //play round of rock, paper, scissors
    playRound(playerSelection, computerSelection);
  }
}

console.log();
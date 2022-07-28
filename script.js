//------------------------
// Author: Tommy Coleman
// Date created: 7.22.2022
//------------------------

// returns a random integer from 0-max
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

function playRound(playerSelection, computerSelection) {
  let roundResult; // round result 0 = incorrect answer 1 = computer win, 2 = player win, 3 = tie
  let roundResultString;
  if(playerSelection == computerSelection) {
    roundResult = 3;         // tie round
  } else if(playerSelection == "rock") { //player chooses rock
    if(computerSelection == "paper") {
      roundResult = 1;      //computer win
    } else roundResult = 2; //player win
  } else if(playerSelection == "paper") { //player chooses paper
    if(computerSelection == "scissors") {
       roundResult = 1;     //computer win
    } else roundResult = 2; //player win
  } else if(playerSelection == "scissors") { //player chooses scissors
    if(computerSelection == "rock") {
      roundResult = 1;      //computer win
    } else roundResult = 2; //player win
  } else {
    ;
    roundResult == 0;
  }
  //return a formatted string declaring the winner of the round 
  if(roundResult == 1) {
      roundResultString = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if(roundResult == 2) {
      roundResultString = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if(roundResult == 3) {
      roundResultString = "Round is a tie!";
  } else {
      roundResultString = "you have entered an invalid answer!";
  }
  
  //return winner
  return roundResultString;
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) { //play "i" number of rounds.
    //display current round
    console.log(`round ${i + 1}.`);
    //get player choice
    const playerSelection = window.prompt(`round ${i + 1}`,'rock, paper, or scissors?').toLowerCase();
    //get computer choice
    const computerSelection = getComputerChoice();
    //play round of rock, paper, scissors
    let roundWinner = (playRound(playerSelection, computerSelection));

    if(roundWinner.search("Win")) {
      playerScore++;
    } else if(roundWinner.search("Lose")) {
      computerScore++;
    } else {

    }

    //display winner in console
    console.log(roundWinner);
  }
  //display overall winner
  //console.log((playerScore > computerScore) ? 'Winner!' : 'Loser!');
  console.log(playerScore);
  console.log(computerScore);
}

game();
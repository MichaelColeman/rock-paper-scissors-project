function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {  // returns either "rock" "paper" or "scissors" 
  const choice = getRandomInt(3);
  if(choice == 0) {
    return "rock";  
  } else if(choice == 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  let roundResult;
  let roundResultString;
  if(playerChoice == computerChoice) {
    roundResult = 3;         // tie round
  } else if(playerChoice == "rock") { //player chooses rock
    if(computerChoice == "paper") {
      roundResult = 1;      //computer win
    } else roundResult = 2; //player win
  } else if(playerChoice == "paper") { //player chooses paper
    if(computerChoice == "scissors") {
       roundResult = 1;     //computer win
    } else roundResult = 2; //player win
  } else if(playerChoice == "scissors") { //player chooses scissors
    if(computerChoice == "rock") {
      roundResult = 1;      //computer win
    } else roundResult = 2; //player win
  } else {
    roundResult == 0;
  }
  if(roundResult == 1) {   //return a formatted string declaring the winner of the round 
      roundResultString = `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else if(roundResult == 2) {
      roundResultString = `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if(roundResult == 3) {
      roundResultString = "Round is a tie!";
  } else {
      roundResultString = "you have entered an invalid answer!";
  }
  return roundResultString;
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) { //play "i" number of rounds.
    console.log(`round ${i + 1}.`);
    const playerChoice = window.prompt('rock, paper, or scissors?').toLowerCase();
    const computerChoice = getComputerChoice();
    let roundWinner = (playRound(playerChoice, computerChoice));
    if(roundWinner.search("Win") != -1) {
      playerScore++;
    } else if(roundWinner.search("Lose") != -1) {
      computerScore++;
    }
    console.log(roundWinner);
  }
  //display overall winner
  if(playerScore !== computerScore) {
   console.log((playerScore > computerScore) ? 'Winner!' : 'Loser!');
 } else {
   console.log('Game is a tie');
 }
}
game();
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const winner = document.querySelector('#winner')
const playerTotal = document.querySelector('#playerTotalScore');
const computerTotal = document.querySelector('#computerTotalScore');

let playerChoice;
let computerChoice;
let playerTotalScore = 0;
let computerTotalScore = 0;

const buttons = document.querySelectorAll('.choiceBtn'); // buttons is a node list. It looks and acts much like an array.

buttons.forEach((button) => { // we use the .forEach method to iterate through each button
  button.addEventListener('click', () => {
    playerChoice = button.textContent;
    computerChoice = getComputerChoice();
    roundResult = playRound(playerChoice, computerChoice);
    switch(roundResult){
      case 'computer':
        computerTotalScore++;
        break;
      case 'player':
        playerTotalScore++;
        break;
      case 'tie':
        console.log('tie game');
    }
    updateDisplay(roundResult);
    checkForWinner();
  });
});

function checkForWinner(){
  if (computerTotalScore === 5 || playerTotalScore === 5){
    if(computerTotalScore > playerTotalScore) {
      winner.textContent = 'Computer Wins!'
      console.log('computer wins!')
      computerTotalScore = 0;
      playerTotalScore = 0;
    } else {
      winner.textContent = 'Player Wins!'
      console.log('player wins!')
      computerTotalScore = 0;
      playerTotalScore = 0;
    }
  }
}

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
  let roundResult = "";
  if(playerChoice === computerChoice){  //player choses computer choice
    roundResult = 'tie';
  } else if(playerChoice === 'rock'){ //player rock
      if(computerChoice === 'paper'){
        roundResult = 'computer'; 
      } else {
          roundResult = 'player';
        }
      }
    else if(playerChoice === 'paper'){ //player paper
      if(computerChoice === 'scissors'){
        roundResult = 'computer'; 
      } else {
          roundResult = 'player';
        }
      }
    else if(playerChoice === 'scissors'){ //player scissors
      if(computerChoice === 'rock'){
        roundResult = 'computer'; 
      } else {
          roundResult = 'player';
        }
      }
  return roundResult;
}

function updateDisplay(roundResult) {
  playerText.textContent = `Player: ${playerChoice}`;
  computerText.textContent = `Computer: ${computerChoice}`;
  resultText.textContent = `Winner: ${roundResult}`
  playerTotal.textContent = playerTotalScore;
  computerTotal.textContent = computerTotalScore;
}
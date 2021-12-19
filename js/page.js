/*
1.) Set up variables
2.) Generate a random number
3.) Assign number to computer pick
4.) Register player pick
5.) Compare computer and player pick to determine winner
6.) Display all picks, and winner
BONUS: Keep track of number of games (display wins, losses, ties)
*/

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  return "Scissors";
}

var x = userScore;
var y = computerScore

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  x++;
  userScore_span.innerHTML = x;
  computerScore_span.innerHTML = y;
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. YOU WIN!`;
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  y++;
  userScore_span.innerHTML = x;
  computerScore_span.innerHTML = y;
  result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. YOU LOSE!`;
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. ITS A TIE!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
  }
}

function main() {}
rock_div.addEventListener('click', function() {
  game("r");
})

paper_div.addEventListener('click', function() {
  game("p");
})

scissors_div.addEventListener('click', function() {
  game("s");
})


main();

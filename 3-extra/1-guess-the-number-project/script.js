let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesNumber = 7;

document.querySelector(".Tries-output").innerText = "Number of Tries: 7";

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess > 100 || guess === "") {
    document.querySelector(".final-output").innerText =
      "Please enter a number between 1 and 100";
    exit;
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  if (guess > randomNumber) {
    document.querySelector(".final-output").innerText = "Number is too high";
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  if (guess < randomNumber) {
    document.querySelector(".final-output").innerText = "Number is too low";
  }

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

  if (guess === randomNumber) {
    document.querySelector(".final-output").innerText =
      "Guess is correct. You win!";
  }
  //

  triesNumber--;
  document.querySelector(
    ".Tries-output"
  ).innerText = `Number of Tries: ${triesNumber}`;
  if (triesNumber <= 0) {
    document.querySelector(
      ".Tries-output"
    ).innerText = `You Lose, the number was ${randomNumber}`;
    document.querySelector(".final-output").innerText = "";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";

  //Reset tries, and triesTaken by the user
  triesNumber = 7;
  document.querySelector(".Tries-output").innerText = "Number of Tries: 7";
  document.querySelector(".final-output").innerText =
    "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);

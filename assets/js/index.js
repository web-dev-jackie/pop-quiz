var startButton = document.querySelector("#generate");
var timerElement = document.querySelector(".timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");

var selectA = document.querySelector("#a");
var selectB = document.querySelector("#b");
var selectC = document.querySelector("#c");
var selectD = document.querySelector("#d");

var questionList = 0;
var winCounter = 0; 
var loseCounter = 0; 
var isWin = false; 
var timer;
var timerCount;

startBox = document.getElementById("start-box");
startButton = document.getElementById("start-button");
quizBox = document.getElementById("quiz-box");
question = document.getElementById("question");
calculate = document.getElementById("countdownTimer");

const questions = [
  {
    question:
      "What is a full stack application?",
    answer1: "Express, JavaScript and C+",
    answer2: "MERN",
    answer3: "Mongo, Ruby, Note and Express",
    answer4: "Mongo, Express, React and Node",

    correct: "Mongo, Express, React and Node",
  },
  {
    question:
      "What does Node do?",
    answer1: "Asks your mom to make a pb & j.",
    answer2: "Grows trees and natural resources.",
    answer3: "Lets a developer run JavaScript in the browser.",
    answer4: "Allows JavaScript to query it's self.",

    correct: "Allows JavaScript to query it's self.",
  },
  {
    question:
      "On average, how long does it take a junior developer to complete a bootcamp?",
    answer1: "Three years",
    answer2: "One month",
    answer3: "Six months",
    answer4: "Three weeks",

    correct: "Six months",
  },
  {
    question: "How many questions are in this quiz?",
    answer1: "Ten",
    answer2: "Three",
    answer3: "Five",
    answer4: "Four",

    correct: "Five",
  },
  {
    question:
      "How long does it take for a Junior Developer to learn JavaScript?",
    answer1: "At least six months.",
    answer2: "Two years.",
    answer3: "Depends, but at least six months.",
    answer4: "Depends, but at least one month.",

    correct: "Depends, but at least six months."
  },
]; 

function queue() {
  question.textContent = questions[questionList].question;
  selectA.textContent = questions[questionList].answer1;
  selectB.textContent = questions[questionList].answer2;
  selectC.textContent = questions[questionList].answer3;
  selectD.textContent = questions[questionList].answer4;
}
// increment question list

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}
// startQuiz()
function startQuiz() {
  startBox.style.display = "none";
  quizBox.style.display = "block";
  timerCount = 10; 
  // Interval timer in activity 10 in week 4 - use that one! 
  // Run endGame() when timer runs out
  // Used to change seconds in display 

  //countdown("01/19/2038 03:14:07 AM").style.display = "block";
  queue();
  startTimer();
  //queue().style.display = "block";
}

// evalFunction()
function evalFunction() {
    // take 10 seconds off timer if incorrect
  // if correct add to scoreboard
  // this.textContent compare to questions[questionList].correct
  // evaluate answer here
  console.log(`is ${questionList} = ${questions.length}`)
  questionList += 1;
  console.log(this.textContent)
  // is 1 == "1" returns true
  // is 1 === "1" returns false
  if (questionList >= questions.length) {
    endQuiz()
  } else {
    queue();
  }
}

// The winGame() function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame() function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The startTimer() function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number
var num = 10;
var countdown = function(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
};


// These functions are used by init()
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

function endQuiz() {
  console.log("Game Over")
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 1;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
reset.addEventListener("click", resetGame);


startButton.addEventListener("click", startQuiz);
selectA.addEventListener("click", evalFunction);
selectB.addEventListener("click", evalFunction);
selectC.addEventListener("click", evalFunction);
selectD.addEventListener("click", evalFunction);

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame());
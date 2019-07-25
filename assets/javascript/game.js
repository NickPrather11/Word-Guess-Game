var wordBank = [
  "accidental",
  "solfege",
  "scale",
  "mode",
  "rhythm",
  "polyrhythm",
  "chord",
  "dominant",
  "harmonic",
  "inversion",
  "interval",
  "meter",
  "notation",
  "syncopation",
  "tonal",
  "atonal"
];
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var randWordLetters = randWord.split("");
var tempChars = [];
var guessedLetters = [];
var wins = 0;
var guessesRemaining = 11;
var arraysEqual = false;
var reset = function() {
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  randWordLetters = randWord.split("");
  tempChars = [];
  guessedLetters = [];
  guessesRemaining = 11;
  arraysEqual = false;
  console.log(randWord);
  $("#GuessThisWord").empty();
  $("#GuessesRemaining").empty();
  $("#LettersGuessed").empty();
};
var updatePage = function() {
  for (i = 0; i < tempChars.length; i++) {
    $("#GuessThisWord").append(tempChars[i] + " ");
  }
  $("#LettersGuessed").text("Letters guessed: " + guessedLetters);
  $("#GuessesRemaining").text("Guesses remaining: " + guessesRemaining);
  $("#wins").text("Wins: " + wins);
};

// Display "_" for each letter of the chosen word.
// Create array equal in length to randWordLetters, but made of "_" ?
function game() {
  updatePage();
  for (i = 0; i < randWord.length; i++) {
    tempChars.push("_");
    $("#GuessThisWord").append(tempChars[i] + " ");
  }

  console.log(randWord);
  console.log(tempChars);

  document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    $("#instr").hide();
    $("#GuessThisWord").empty();

    // Determines which key was pressed and assigns it to userGuess.
    if (event.keyCode < 65 && event.keyCode > 90) {
      alert("Please choose a letter");
    } else {
      if (guessedLetters.indexOf(userGuess) > -1) {
        alert("You've already guessed that letter. Try another letter.");
      } else {
        // Compares each letter of the word to the user's guess
        for (i = 0; i < randWord.length; i++) {
          if (randWordLetters[i] === userGuess) {
            // display the guessed letter in the space where it belongs
            tempChars[i] = randWordLetters[i];
            if (guessedLetters.indexOf(userGuess) < 0) guessedLetters.push(userGuess);
            console.log(tempChars);
          }
        }

        // add guessed letter to incorrect letter array and subtract 1 from guesses remaining
        if (randWordLetters.indexOf(userGuess) < 0) {
          guessedLetters.push(userGuess);
          guessesRemaining -= 1;
        }

        // compare arrays
        for (i = 0; i < randWordLetters.length; i++) {
          if (randWordLetters[i] === tempChars[i]) {
            arraysEqual = true;
          } else {
            arraysEqual = false;
            break;
          }
        }
      }

      updatePage();

      // What to do when the game ends
      if (arraysEqual === true) {
        wins++;
        alert("You won!");
        reset();
        game();
        $("#instr").show();
      } else if (guessesRemaining < 1) {
        alert("You lost");
        reset();
        game();
        $("#instr").show();
      }
    }
  };
}

game();

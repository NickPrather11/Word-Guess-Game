var wordBank = ["accidental", "solfege", "scale", "mode", "rhythm", "polyrhythm", "chord", "dominant", "harmonic", "inversion", "interval", "meter", "notation", "syncopation", "tonal", "atonal"];
var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
var randWordLetters = randWord.split("");
var tempWord = [];
var correctLetter = [];
var incorrectLetter = [];
var wins = 0;
var guessesRemaining = 11;




// Display "_" for each letter of the chosen word.
// Create array equal in length to randWordLetters, but made of "_" ?
for(i = 0; i < randWord.length; i++){
    tempWord.push("_");
    $("#GuessThisWord").append(tempWord[i]);
}

document.onkeyup = function(event) {

    // Determines which key was pressed and assigns it to userGuess.
    var userGuess = event.key;

    // Compares each letter of the word to the user's guess
    for(i = 0; i < randWord.length; i++){
        if(randWordLetters[i] === userGuess){
            // display the guessed letter in the space where it belongs
            $(this).text(userGuess);
        } else {
            // add guessed letter to incorrect letter array and subtract 1 from guesses remaining
            incorrectLetter.push(userGuess);
            guessesRemaining--;
        }
    
    });

}
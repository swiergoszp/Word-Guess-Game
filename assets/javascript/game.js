// creates array of words for the game in variable "words"
var words = ["Thor", "IronMan", "Hawkeye", "StarLord", "AntMan", "Hulk"];

// creates rng for choosing word from the array "words"
var choice = words[Math.floor(Math.random() * words.length)];

// array for alphabet
var alphabet = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m"
                , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

document.write(choice);

// creates object containing game info
var game = {
        numberWins: 0,
        numberLoss: 0,
        numberGuess: 0,
}

// key event for user letter guess
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    // removes guessed letter from array
    if (userGuess === alphabet) {

    }
}
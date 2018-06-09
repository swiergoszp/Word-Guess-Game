window.onload = function() {
    
    // creates variables for game info
    var alphabet = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , 
                    "j" , "k" , "l" , "m", "n" , "o" , "p" , "q" , "r" , 
                    "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
    var numGuess = 15;
    var win = 0;
    var loss = 0;
    var wrongGuess = [""];

    // 1. creates array of words for the game
    var wordLibrary = ["Thor", "IronMan", "Hawkeye", "StarLord", "AntMan", "Hulk" , 
                    "NickFury" , "BlackWidow" , "Vision" , "Valkerie", "BlackPanther" , 
                    "SpiderMan" , "WarMachine"];

    // 2. creates rng for choosing word from the library
    var randomWord = (wordLibrary[Math.floor(Math.random() * wordLibrary.length)]).toLowerCase();

        console.log(randomWord); // shows randomly chosen word

    // 3. popluates an array with dashes in the length of the chosen word
    var answerArray = [];
    for (var i = 0; i < randomWord.length; i++){
        answerArray[i] = "_";
    };
    
        console.log(answerArray); //shows amount of dashes displayed, 1 per letter of word

    // prints word being guessed in dashes until individual letter guessed
    document.getElementById("guessWord").innerHTML = answerArray.join(" ");

    // keeps track of letters remaining (randomWord decreases as its guessed)
    var remainingLetters = randomWord.length;

    var wrongGuess = [];

    // 4. key event for user letter guess
    document.onkeyup = function() {
        var userGuess = event.key.toLowerCase();

        // what swaps the letters in for dashes
        for (var j = 0; j < randomWord.length; j++) {
            // if a letter from userGuess is in randomWord...
            if (randomWord[j] === userGuess) {
            // it will plug it into the answerArray and...
            answerArray[j] = userGuess;
            // subtract from the number of remaining letters
            remainingLetters--;

            }
            else (randomWord[j] !== userGuess); {
            numGuess-- ;
            document.getElementById("usedGuessNum").innerHTML=
            "<p>Guesses Remaining: " + numGuess + "</p>";
            document.getElementById("usedLetters").innerHTML=
            "<p>Letters Guessed: " + userGuess + "</p>";

            };
        
        };

        // prints correctly guessed letters to page
        document.getElementById("guessWord").innerHTML = answerArray.join(" ");

        // increases guesses used on key press and alerts when out of guesses
        if (numGuess == 0) {
            return (alert("Sorry, You Lost"));

        }
        if (userGuess !== answerArray) {
            

        };

    };

};

// pseudo for win add


// if remainingLetters.length = 0 
// win ++
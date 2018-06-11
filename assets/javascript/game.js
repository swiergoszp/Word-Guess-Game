window.onload = function() {
    
    // creates variables for game info
    var numGuess = 10;
    var win = 1;
    var loss = 1;

    // 1. creates array of words for the game
    var wordLibrary = ["Thor", "IronMan", "Hawkeye", "StarLord", "AntMan", "Hulk" , 
                    "NickFury" , "BlackWidow" , "BlackPanther" , "SpiderMan"];

    // 2. creates rng for choosing word from the library
    var randomWord = (wordLibrary[Math.floor(Math.random() * wordLibrary.length)]).toLowerCase();

        console.log(randomWord);

    // 3. popluates an array with dashes in the length of the chosen word
    var answerArray = [];
    for (var i = 0; i < randomWord.length; i++){
        answerArray[i] = "_";
    };
        // prints array of dashes to doc
        document.getElementById("guessWord").innerHTML = answerArray.join(" ");

    // keeps track of amount of letters remaining (randomWord decreases as its guessed)
    var remainingLetters = randomWord.length;
    // empty array to store wrong guesses
    var wrongGuesses = [];


    // 4. key event for user letter guess
    document.onkeyup = function() {
        var userGuess = event.key.toLowerCase();

        if (remainingLetters === 0) {
            alert("You Win! The Correct Answer was " + randomWord.toUpperCase())
            winFunction();
        }
        if (numGuess > 0) {

            // if user guess is not found in either array listed then execute further steps
            if (answerArray.indexOf(userGuess) == -1 && 
               (wrongGuesses.indexOf(userGuess)) == -1) {

                // sorts guess into correct guess function
                if (randomWord.indexOf(userGuess) > -1) {
                    correctGuess(userGuess);
                    this.remainingLetters--;

                }
                // sorts guess into wrong guess function
                else {
                    wrongGuess(userGuess);

                }

            };
        }
        else {
            alert("Sorry! You Lose...");
            lossFunction();
        };

    };

        function correctGuess(ltrGuessed) {

            for (var j = 0; j < randomWord.length; j++) {
            
                // if a letter from userGuess is in randomWord...
                if (ltrGuessed === randomWord[j]) {
                    //push into correctGuesses array
                    answerArray[j] = ltrGuessed;
                    // decrease amount of remaining letters
                    remainingLetters--;
                };
                // prints word being guessed to document
                document.getElementById("guessWord").innerHTML = answerArray.join(" ").toUpperCase();
            
            };

        };

        function wrongGuess(ltrGuessed) {

            // displays wrong letter guesses in an array
            wrongGuesses.push(ltrGuessed);
            // decreases guesses left
            numGuess--;
            // prints number of guesses remaining to doc
            document.getElementById("usedGuessNum").innerHTML=
            "Guesses Remaining: " + numGuess; 
            //prings wrong letters to doc
            document.getElementById("usedLetters").innerHTML= 
            "Letters Guessed: " + wrongGuesses.join(" ").toUpperCase();

        };

        // function run on win to reset game
        function winFunction(){
            document.getElementById("wins").innerHTML ="Wins: " + win++;
            numGuess = 10;
            wrongGuesses= [];
            randomWord = (wordLibrary[Math.floor(Math.random() * wordLibrary.length)]).toLowerCase();
            answerArray= [];
            for (var i = 0; i < randomWord.length; i++){
                answerArray[i] = "_";
            };
            remainingLetters = randomWord.length;

        };

        // function run on loss to reset game
        function lossFunction(){
            document.getElementById("losses").innerHTML ="Losses: " + loss++;
            numGuess = 10;
            wrongGuesses= [];
            randomWord = (wordLibrary[Math.floor(Math.random() * wordLibrary.length)]).toLowerCase();
            answerArray= [];
            for (var i = 0; i < randomWord.length; i++){
                answerArray[i] = "_";
            };
            remainingLetters = randomWord.length;

        };
        
};

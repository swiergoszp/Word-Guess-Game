var wordLibrary = ["thor", "ironman", "hawkeye", "starlord", "antman", "hulk" , 
                    "nickfury" , "blackwidow" , "blackpanther" , "spiderman"];
var answerArray = [];
var userGuess = "";
var win = 0;
var loss = 0;
var numGuess = 8;
var wrongGuesses = [];
var randomWord = "";
var remainingLetters = randomWord.length;

function startGame() {
    randomWord = (wordLibrary[Math.floor(Math.random() * wordLibrary.length)]);
    answerArray = randomWord.split("");
    remainingLetters = randomWord.length;
    numGuess = 8;
    wrongGuesses = [];
    answerArray = [];

    for (var i = 0; i < remainingLetters; i++){
        answerArray[i] = "_";
        $(".guessWord").html(answerArray.join(" "));
    };

    $(".guessWord").html(answerArray.join(" ").toUpperCase());
    $(".usedGuessNum").html(numGuess);
    $(".wins").html(win);
    $(".losses").html(loss);

};

function guessCheck() {
    // filters selection and eliminates repeat choices
    if (answerArray.indexOf(userGuess) == -1 && (wrongGuesses.indexOf(userGuess)) == -1) {

        // right guess option
        if (randomWord.indexOf(userGuess) > -1) {
            for (var i = 0; i < randomWord.length; i++) {
                if (userGuess === randomWord[i]) {
                    answerArray[i] = userGuess;
                    remainingLetters--;
                };
            };
            $(".guessWord").html(answerArray.join(" ").toUpperCase());
        }
            // wrong guess option
            else {
                wrongGuesses.push(userGuess);
                numGuess--;
                $(".usedGuessNum").html(numGuess);
                $(".usedLetters").html(wrongGuesses.join(" ").toUpperCase());;
            }
    }
        else {
            alert("You already picked that letter")
        };

};

// adds win and resets
function roundComplete(){
    if (answerArray.join("") === randomWord) {
        $(".wins").html(win++);
        alert("You Win! The Correct Answer was " + randomWord.toUpperCase());
        if (randomWord === "starlord"){
            $(".avengers").attr("src", "assets/images/" + randomWord + ".gif");
        }
            else {
                $(".avengers").attr("src", "assets/images/" + randomWord + ".jpg");
            }
        startGame();
    } 
        else if (numGuess === 0) {
            alert("Sorry! You Lose...");
            $(".avengers").attr("src", "assets/images/thanos.jpg");
            startGame();
        }
            else {
                guessCheck();
            };
};

startGame();

$(document).keyup(function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    roundComplete();
});
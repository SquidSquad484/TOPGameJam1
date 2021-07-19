/*The Odin Project -- Game Jam 2021
    SquidSquad
    coderlore
    iketaco
    AqueousOtter
    Game Specs:
        Random word is chosen and characters are randomly jumbled
        Word is presented to player
        Player mixes the letter
        If the player’s word is equal to the original word, the player wins/gets points
        If the player’s word is NOT equal to the original word, the player loses points
*/

//global varibles
const secondGradeList1 = ["gravity", "orbit", "space", "earth", "travel", "solar", "planet", "shuttle", "launch", "universe"];
const thirdGradeList1 = ["observe", "distant", "solution", "approach", "saturn", "jupiter", "atmosphere", "intelligent", "theory", "globe"];
const fourthGradeList1 = ["accurate", "extraordinary", "peculiar", "astronaut", "surface", "impact", "descend", "millennium", "century", "frontier"];

let userScore = 0;
let highScore = 0; 
let difficulty = fourthGradeList1; //change to input from  main page

const shuffleDisplay = document.getElementById("letterDisplay");
const newWordButton = document.getElementById("new"); //new word button
const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const score = document.getElementById("scoreDisplay");
const highScoreDisplay = document.getElementById("highScoreDisplay");
const resetButton = document.getElementById("reset");

let wordToGuess;
let guessList = [];
const clickSound = document.getElementById("clickSound"); //plays click sound
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
//main game functions
guessList = difficulty;


const subtractedPoints = document.getElementById("subtracted-points");
const addedPoints = document.getElementById("added-points");

const subtractedPoints = document.getElementById("subtracted-points");
const addedPoints = document.getElementById("added-points");

//shuffles word
function shuffle(word) {
    let wordArr = [];
    let randomArr = []; 
    for (i = 0; i < word.length; i++) {
        wordArr.push(word[i]);
    }
    let capitolWordArr = wordArr.map(wordArr => wordArr.toUpperCase()); //capitolizes letter
    for (j = 0; j < word.length; j++) {
        let random = Math.floor(Math.random() * capitolWordArr.length); 
        randomArr.push(capitolWordArr[random]);
        capitolWordArr.splice(random,1);
        shuffleDisplay.innerHTML +=randomArr[j];  //displays jumbled word
    }
};
//checks if input is equal
function inputCheck(userGuess, wordToGuess){
    if(userGuess === wordToGuess){
        correct.play();
        //add points, display correct indication. Maybe a green text under "score" with "+100" or something
        userScore += 150; 
        score.innerText = "Score: " +userScore;
        updateHighScore(userScore);
        let index = guessList.indexOf(wordToGuess);
        guessList.splice(index,1);
        gameFinished(guessList);
        timeLeft += 5;
    }
    else{
        //take away points, show indication. Maybe shake scrambled word, red text under "score" "-50" or something.
        userScore -= 75;
        incorrect.play();
        score.innerText = "Score: " + userScore;
    }
}
//checks if list is finished
function gameFinished(guessList){
    if(guessList.length == 0){
        shuffleDisplay.innerText = "Game Over";   
        userInput.classList.toggle("hide");
        submit.classList.toggle("hide");
        newWordButton.classList.toggle("hide");
        resetButton.classList.toggle("hide");
    }
    else{
        newWordGen();
    }
}
//local storage function for highscores
function updateHighScore(userScore){
    let oldScore = localStorage.getItem("scrambleHighScore");
    if (oldScore < userScore){
        localStorage.setItem("scrambleHighScore", userScore);
        highScore = localStorage.getItem("scrambleHighScore");
        highScoreDisplay.innerText = "HighScore: " + highScore;
    }
};
//generates new word
function newWordGen(){
    shuffleDisplay.innerText = ""; //clears old
    //choose random element from chosen array
    let newWord = guessList[Math.floor(Math.random() * guessList.length)];
    wordToGuess = newWord;
    console.log(newWord)
    shuffle(newWord);
<<<<<<< HEAD:scripts.js
    if (shuffleDisplay.innerHTML === wordToGuess) {
        shuffle(newWord); //shuffles word again if it is same as original word
    }
=======
}

//Event Listeners
//generates new word
newWordButton.addEventListener("click", () =>{
    clickSound.play();
    newWordGen();
>>>>>>> f405b8243601eeab0e1bf42c71a219399f261512:scripts/scramble.js
});

//allows enter key to be used
userInput.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        clickSound.play();
        submit.click(true);
    }
});
//submits input
submit.addEventListener("click", ()=>{
    clickSound.play();
    let userGuess = userInput.value;
    //convert both to uppercase for compare
    userGuess = userGuess.toLowerCase();
    wordToGuess = wordToGuess.toLowerCase();
    userInput.value = "";
<<<<<<< HEAD:scripts.js
    if(userGuess === wordToGuess){
        //add points, display correct indication. Maybe a green text under "score" with "+100" or something
        newButton.click(true); //triggers click event for new word
        userScore += 100; 
        score.innerText = "Score: " +userScore;
        updateHighScore(userScore);
        addPointsUpEffect();
        secondGradeList1.splice(wordToGuess, 1);
/*         if (isNaN(score.innerHTML) || score.innerHTML === "") {
            score.innerHTML = parseInt(userScore);
        } else {
            score.innerHTML = parseInt(userScore) + parseInt(score.innerHTML);
        } */
    }
    else {
        //take away points, show indication. Maybe shake scrambled word, red text under "score" "-50" or something.
        userScore -= 50;
        score.innerText = "Score: " + userScore;
        addPointsDownEffect();
    }
=======
    inputCheck(userGuess, wordToGuess);
>>>>>>> f405b8243601eeab0e1bf42c71a219399f261512:scripts/scramble.js
});
//refreshes page
resetButton.addEventListener("click", ()=>{
    window.location.reload();
})

<<<<<<< HEAD:scripts.js
//makes green for 1 second then reverts to white
function addPointsUpEffect() {
    score.style.color = "green";
    setTimeout(function() {score.style.color = "white"}, 1000);
}

//makes red for 1 second then reverts to white
function addPointsDownEffect() {
    score.style.color = "red";
    setTimeout(function() {score.style.color = "white"}, 1000);
}


//main game logic

//local storage function for scores
function updateHighScore(userScore){
    let oldScore = localStorage.getItem("userHighScore");
    if (oldScore < userScore){
        localStorage.setItem("userHighScore", userScore);
        highScore = localStorage.getItem("userHighScore");
        highScoreDisplay.innerText = "HighScore: " + highScore;
    }
}
=======
>>>>>>> f405b8243601eeab0e1bf42c71a219399f261512:scripts/scramble.js
//events to run when DOM loaded
document.addEventListener("DOMContentLoaded", ()=>{
    //checks for previous high score, sets to 0 if none, sets highscore to stored highscore otherwise.
    newWordGen(); //generates new word
    if(localStorage.length == 0){
        localStorage.setItem("scrambleHighScore", 0);
        highScoreDisplay.innerText = "HighScore: " + localStorage.getItem("scrambleHighScore");    }
    else{
        highScore = localStorage.getItem("scrambleHighScore");
        highScoreDisplay.innerText = "HighScore: " + highScore;
    }
})

//countdown timer set to 60 sec for the round
let timeLeft = 60;
countdown = document.getElementById("countdown");
let timer = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        countdown.innerText = "Time is up!";
    } else {
        if (timeLeft <= 10) {
            countdown.style.color = "red";
            countdown.innerText = "Time left: " + timeLeft;
        } else {
            countdown.style.color = "white";
            countdown.innerText = "Time left: " + timeLeft;
        }
    }
    timeLeft -= 1;
}, 1000);
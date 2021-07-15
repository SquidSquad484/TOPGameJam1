/*The Odin Project -- Game Jam 2021
    SquidSquad
    coderlore
    iketaco
    AqueousOtter
    Game Specs:
        Random word is chosen and characters are randomly jumbled
        Word is presented to player
        Player mixes the letter
        If the player’s word is equal to the original word, the win/get a point
        If the player’s word is NOT equal to the original word, the lose/lose one chance or heart
*/

//global varibles
const secondGradeList1 = ["gravity", "orbit", "space", "earth", "travel", "solar", "planet", "shuttle", "launch", "universe"];
const thirdGradeList1 = ["observe", "distant", "solution", "approach", "saturn", "jupiter", "atmosphere", "intelligent", "theory", "globe"];
const fourthGradeList1 = ["accurate", "extraordinary", "peculiar", "astronaut", "surface", "impact", "descend", "millennium", "century", "frontier"];

let userScore =0;
let highScore; //to be set by gameplay/loaded from previous plays.


//main game functions
const shuffleDisplay = document.getElementById("letterDisplay");
const newButton = document.getElementById("new"); //new word button
const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const score = document.getElementById("scoreDisplay");
let wordToGuess;

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
}

//generates new word
newButton.addEventListener("click", () =>{
    shuffleDisplay.innerText = "";
    //choose random element from chosen array
    let newWord = secondGradeList1[Math.floor(Math.random() * secondGradeList1.length)];
    wordToGuess = newWord;
    console.log(newWord)
    shuffle(newWord);
});
//submits input
submit.addEventListener("click", ()=>{
    let userGuess = userInput.value;
    //convert both to uppercase for compare
    userGuess = userGuess.toUpperCase();
    wordToGuess = wordToGuess.toUpperCase();
    userInput.value = "";
    if(userGuess === wordToGuess){
        //add points, display correct indication. Maybe a green text under "score" with "+100" or something
        newButton.click(true); //triggers click event for new word
        console.log("correct")
        userScore = 100; 
        if (isNaN(score.innerHTML) || score.innerHTML === "") {
            score.innerHTML = parseInt(userScore);
        } else {
            score.innerHTML = parseInt(userScore) + parseInt(score.innerHTML);
        }
    }
    else{
        //take away points, show indication. Maybe shake scrambled word, red text under "score" "-50" or something.
        console.log("nope")
    }
})
//main game logic

//local storage function for scores
function updateHighScore(userScore){
    let oldScore = localStorage.getItem("userHighScore");
    if (oldScore < userScore){
        localStorage.setItem("userHighScore", userScore);
    }
}
//events to run when DOM loaded
document.addEventListener("DOMContentLoaded", ()=>{
    //checks for previous high score, sets to 0 if none, sets highscore to stored highscore otherwise.
    if(localStorage.length == 0){
        localStorage.setItem("userHighScore", 0);
    }
    else{
        highScore = localStorage.getItem("userHighScore");
    }
})
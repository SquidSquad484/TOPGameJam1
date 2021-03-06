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
const all = secondGradeList1.concat(thirdGradeList1).concat(fourthGradeList1);

let userScore = 0;
let highScore = 0; 

let wordCount = 0; //count words unscrambled
let wordIncorrect = 0; //count incorrectly answered words

//main game functions
const shuffleDisplay = document.getElementById("letterDisplay");
const newButton = document.getElementById("new"); //new word button
const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const score = document.getElementById("scoreDisplay");
const highScoreDisplay = document.getElementById("highScoreDisplay");
let wordToGuess;
let timeLeft = 60;
let countdown = document.getElementById("countdown");
let timer = setInterval(function() {
    if (timeLeft <=0) {
        clearInterval(timer);
        countdown.innerText = "Time is up!";
        const currScore = document.getElementById("scoreDisplay");
        localStorage.setItem("currScore", currScore.textContent.substring(7, currScore.length));
        localStorage.setItem("wordIncorrect", wordIncorrect);
        localStorage.setItem("wordCount", wordCount);
        window.location.replace("end-screen/end.html");
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

//generates new word
newButton.addEventListener("click", () =>{
    shuffleDisplay.innerText = "";
    let newWord;
    let custom;
    //choose random element from chosen array
    if (localStorage.customList != "false") {
        custom = localStorage.customList.split(",");
        newWord = custom[Math.floor(Math.random() * custom.length)];
        localStorage.setItem("listLength", localStorage.customList.length)
    } else {
        newWord = all[Math.floor(Math.random() * all.length)];
        localStorage.setItem("listLength", all.length)
    }
    wordToGuess = newWord;
    shuffle(newWord);
    if (shuffleDisplay.innerHTML === wordToGuess) {
        shuffle(newWord); //shuffles word again if it is same as original word
    }
});

//allows enter key to be used
userInput.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        submit.click(true);
    }
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
        userScore += 100; 
        score.innerText = "Score: " + userScore;
        updateHighScore(userScore);
        addPointsUpEffect();
        wordCount++;
/*         if (isNaN(score.innerHTML) || score.innerHTML === "") {
            score.innerHTML = parseInt(userScore);
        } else {
            score.innerHTML = parseInt(userScore) + parseInt(score.innerHTML);
        } */
    }
    else{
        //take away points, show indication. Maybe shake scrambled word, red text under "score" "-50" or something.
        userScore -= 50;
        score.innerText = "Score: " + userScore;
        addPointsDownEffect();
        wordIncorrect++;
    }
});

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
//events to run when DOM loaded
document.addEventListener("DOMContentLoaded", ()=>{
    //checks for previous high score, sets to 0 if none, sets highscore to stored highscore otherwise.
    newButton.click(true);
    if(localStorage.length == 0){
        localStorage.setItem("userHighScore", 0);
        highScoreDisplay.innerText = "HighScore: " + localStorage.getItem("userHighScore");    }
    else{
        highScore = localStorage.getItem("userHighScore");
        highScoreDisplay.innerText = "HighScore: " + highScore;
    }
})

// Turning music on or off
function music(){
    if (localStorage.getItem('musicvar') === "on"){
        document.getElementById("backgroundsound").pause();
        document.getElementById("pauser").style.display="block";
        document.getElementById("player").style.display="none";
        localStorage.setItem('musicvar', "off");
    }
    else {
        document.getElementById("backgroundsound").play();
        document.getElementById("player").style.display="block";
        document.getElementById("pauser").style.display="none";
        localStorage.setItem('musicvar', "on");
    }
}
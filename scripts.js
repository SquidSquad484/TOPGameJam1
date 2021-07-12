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
const fourthGradeList1 = ["accurate", "extraordinary", "peculiar", "peculiar", "surface", "impact", "descend", "millennium", "century", "frontier"];

let userScore;
let highScore; //to be set by gameplay/loaded from previous plays.

//main game functions

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
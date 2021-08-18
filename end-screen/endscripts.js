let finalScore = document.getElementById("final-score");
let words = document.getElementById("words");
let incorrectWords = document.getElementById("incorrect");
let finalHighScore = document.getElementById("high-score");

finalScore.textContent = finalScore.innerHTML + localStorage.getItem("currScore");
words.textContent = "Words Unscrambled: " + localStorage.getItem("wordCount") + "/" + localStorage.getItem("listLength");
incorrectWords.textContent = "Incorrectly Scrambled Words: " + localStorage.getItem("wordIncorrect");
finalHighScore.textContent = "High Score: " + localStorage.getItem("userHighScore");
//score, wordCount, etc. is from ../scripts.js
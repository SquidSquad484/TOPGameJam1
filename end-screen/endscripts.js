let finalScore = document.getElementById("final-score");
let words = document.getElementById("words");
let incorrectWords = document.getElementById("incorrect");
let finalHighScore = document.getElementById("high-score");

finalScore.textContent = finalScore.innerHTML + score;
words.textContent = `${words.innerHTML} ${wordCount} / ${secondGradeList.length}`;
incorrectWords.textContent = `${incorrectWords.innerHTML} ${wordIncorrect} / ${secondGradeList.length}`;
finalHighScore.textContent = highScore.innerHTML + highScore;
//score, wordCount, etc. is from ../scripts.js
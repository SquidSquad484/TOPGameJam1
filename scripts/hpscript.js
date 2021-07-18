/*The Odin Project -- Game Jam 2021
    SquidSquad
    coderlore
    iketaco
    AqueousOtter
    
    HomePage Script
*/

//localStorage variables that can be accessed anywhere throughout the site
localStorage.gamemode = "Word Scramble";
localStorage.grademode = "Pre-K";
localStorage.musicvar = "on";

//Switching between Modes and Grade Level
let modebutton = document.getElementById('modebutton');
let mainoverlay = document.getElementById('options');
let modes = document.getElementById('modesoptions');
let backbutton1 = document.getElementById('back1');

let gradesbutton = document.getElementById('gradebutton');
let grades = document.getElementById('gradeoptions');
let backbutton2 = document.getElementById('back2');

let modetext = document.getElementById('modesetting');
let gradetext = document.getElementById('gradesetting');

modebutton.addEventListener('click', function() {
        modes.style.display = 'block';
        mainoverlay.style.display = 'none';
        gradetext.style.display = 'none';
  }, false);

  backbutton1.addEventListener('click', function() {
      mainoverlay.style.display = 'block';
      gradetext.style.display = 'block';
      modes.style.display = 'none';
  }, false);

gradesbutton.addEventListener('click', function() {
    grades.style.display = 'block';
    mainoverlay.style.display = 'none';
    modetext.style.display = 'none';
}, false);

backbutton2.addEventListener('click', function() {
    mainoverlay.style.display = 'block';
    modetext.style.display = 'block';
    grades.style.display = 'none';
}, false);

//Selecting and changing localStorage variables for Mode and Grade 
function gamehighlight(){
    document.getElementById(localStorage.getItem('gamemode')).style.backgroundColor="white";
    document.getElementById(localStorage.getItem('gamemode')).style.color="black";
}

function gradehighlight(){
    document.getElementById(localStorage.getItem('grademode')).style.backgroundColor="white";
    document.getElementById(localStorage.getItem('grademode')).style.color="black";
}

function mode(currentID){
    if (currentID !== localStorage.getItem('gamemode')){
        document.getElementById(currentID).style.backgroundColor="white";
        document.getElementById(currentID).style.color="black";
        document.getElementById(localStorage.getItem('gamemode')).style.backgroundColor="black";
        document.getElementById(localStorage.getItem('gamemode')).style.color="white";
    }
    localStorage.setItem("gamemode", currentID);
    document.getElementById("modesetting").textContent="Mode: " + localStorage.getItem('gamemode');
}

function gradelevel(currentID){
    if (currentID !== localStorage.getItem('grademode')){
        document.getElementById(currentID).style.backgroundColor="white";
        document.getElementById(currentID).style.color="black";
        document.getElementById(localStorage.getItem('grademode')).style.backgroundColor="black";
        document.getElementById(localStorage.getItem('grademode')).style.color="white";
    }
    localStorage.setItem('grademode', currentID);
    document.getElementById("gradesetting").textContent="Grade: " + localStorage.getItem('grademode');
}

//Displaying Rules and Login
function rulesdisplay(){
    document.getElementById("main").style.display="none";
    document.getElementById("footervalues").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("headermenu").style.display="none";

    document.getElementById("rules").style.display="block";
}

function logindisplay(){
    document.getElementById("main").style.display="none";
    document.getElementById("footervalues").style.display="none";
    document.getElementById("rules").style.display="none";
    document.getElementById("headermenu").style.display="none";

    document.getElementById("login").style.display="block";
}

function backwards(){
    document.getElementById("main").style.display="block";
    document.getElementById("footervalues").style.display="block";
    document.getElementById("headermenu").style.display="flex";

    document.getElementById("rules").style.display="none";
    document.getElementById("login").style.display="none";
}
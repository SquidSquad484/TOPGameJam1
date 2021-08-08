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
localStorage.customList = false;

//Switching between Modes and Grade Level
let mainoverlay = document.getElementById('options');
let modes = document.getElementById('modesoptions');
let backbutton1 = document.getElementById('back1');

let gradesbutton = document.getElementById('gradebutton');
let grades = document.getElementById('gradeoptions');
let backbutton2 = document.getElementById('back2');
let backbutton3 = document.getElementById('back3');

let modetext = document.getElementById('modesetting');
let gradetext = document.getElementById('gradesetting');

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

backbutton3.addEventListener('click', function() {
    document.getElementById("gradeoptions").style.display="block";
    document.getElementById("wordList").style.display="none";
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

function wordLis() {
    document.getElementById("gradeoptions").style.display="none";
    document.getElementById("wordList").style.display="block";
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
    document.getElementById("leaderboards").style.display="none";
}

// Login and Sign Up Page

function loginForm() {
    document.getElementById("loginHeader").innerHTML = "Login";
    let signup_class = document.getElementsByClassName("signup");
    for (let i = 0; i < signup_class.length; i++) {
        signup_class[i].style.display="none";
    }
    document.getElementById("switchacc").innerHTML = "Don't Have An Account? <a id='changeLink' onclick='registerForm()'>Create One</a>";
    document.getElementById("login_button").style.display="block";

    document.getElementById("nameError").style.display="none";
    document.getElementById("usernameError").style.display="none";
    document.getElementById("emailError").style.display="none";
    document.getElementById("passwordError").style.display="none";
    document.getElementById("emailUseError").style.display="none";
}

function registerForm() {
    document.getElementById("loginHeader").innerHTML = "Sign Up";
    let signup_class = document.getElementsByClassName("signup");
    for (let i = 0; i < signup_class.length; i++) {
        signup_class[i].style.display="block";
    }
    document.getElementById("switchacc").innerHTML = "Already have an account? <a id='changeLink' onclick='loginForm()'>Login</a>";
    document.getElementById("login_button").style.display="none";

    document.getElementById("incorrectInfo").style.display="none";
    document.getElementById("incorrectInfo2").style.display="none";
}

function wordAdd(string_text){
    if (string_text) {
        arr = string_text.split(",");
        arr = arr.filter(function(entry) { return entry.trim() != ''; })

        if (arr.length > 1) {
            localStorage.customList = arr;

            gradelevel("Custom List")

            document.getElementById("WordError").style.display="none";
            document.getElementById("WordSuccess").style.display="block";
            document.getElementById("WordSuccess").style.color="green";  
        } else {
            document.getElementById("WordError").style.display="block";
            document.getElementById("WordError").style.color="#ff5858";
            document.getElementById("WordSuccess").style.display="none";    
        }
    } else {
        document.getElementById("WordError").style.display="block";
        document.getElementById("WordError").style.color="#ff5858";
        document.getElementById("WordSuccess").style.display="none";    
    }
}

function leaders() {
    document.getElementById("main").style.display="none";
    document.getElementById("footervalues").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("headermenu").style.display="none";
    document.getElementById("rules").style.display="none";

    document.getElementById("leaderboards").style.display="block";
}
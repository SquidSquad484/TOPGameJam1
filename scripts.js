/*The Odin Project -- Game Jam 2021
    SquidSquad
    coderlore
    iketaco
    AqueousOtter
*/

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
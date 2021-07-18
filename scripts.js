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

// Turning music on or off
function music(){
    if (musicvar === "on"){
        document.getElementById("backgroundsound").pause();
        document.getElementById("pauser").style.display="block";
        document.getElementById("player").style.display="none";
        musicvar = "off"
    }
    else {
        document.getElementById("backgroundsound").play();
        document.getElementById("player").style.display="block";
        document.getElementById("pauser").style.display="none";
        musicvar = "on"
    }
}

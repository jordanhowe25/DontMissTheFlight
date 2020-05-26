
//To test flow, in the console run through the "hide" commands in order.  for example:  hideTitle(), hideDifficulty(), hideInstructions(), ect...
function hideTitle() {
    $('#title-screen').fadeToggle(1000, displayDifficulty);
    $('#button-group-main-menu').fadeToggle(1000)
}

function displayDifficulty() {
    $('#difficulty-select').fadeToggle(1000);
    $('#button-group-difficulty-select').fadeToggle(1000);
}

function hideDifficulty() {
    $('#difficulty-select').fadeToggle(1000, displayInstructions);
    $('#button-group-difficulty-select').fadeToggle(1000);
}

function displayInstructions(){
    $('#instructions').fadeToggle(1000);
    $('#button-group-instructions').fadeToggle(1000);
}

function hideInstructions(){
    $('#instructions').fadeToggle(1000, displayWorld);
    $('#button-group-instructions').fadeToggle(1000);
}

function displayWorld(){
    $('#world-view').fadeToggle(1000);
    $('#button-group-world-view').fadeToggle(1000);
    $('#number-of-hints').fadeToggle(1000);
    $('#timer').fadeToggle(1000);
}
    
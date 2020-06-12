
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
    $('#container-canvas').fadeToggle(1000);
    $('#world-view').fadeToggle(1000);
    $('#button-group-world-view').fadeToggle(1000);
    if (currentObstacle == 0) {
        $('#btn-continue-trip').hide();
        $('#btn-start-trip').show();
    } else {
        $('#btn-continue-trip').show();
        $('#btn-start-trip').hide();
    }
    
    
}

function hideWorld(displayFunction) {
    //displayFunction possibe choices:  displayCutScene, displayEndGameWin, displayEndGameLose
    $('#world-view').fadeToggle(1000, displayFunction);
    $('#button-group-world-view').fadeToggle(1000);
}

function displayCutScene(){
    $('#cut-scene').fadeToggle(1000);
    $('#button-group-cut-scene').fadeToggle(1000);
}

function hideCutScene(){
    $('#cut-scene').fadeToggle(1000, displayTriviaCard);
    $('#container-canvas').fadeToggle(1000);
    $('#button-group-cut-scene').fadeToggle(1000);
}

function displayTriviaCard(){
    $('#trivia-card').fadeToggle(1000);
    $('#tivia-card-content').fadeToggle(1000);
    $('#button-group-trivia-card').fadeToggle(1000);
}

function hideTriviaCard(){
    $('#trivia-card').fadeToggle(1000, displayWorld);
    $('#tivia-card-content').fadeToggle(1000);
    $('#button-group-trivia-card').fadeToggle(1000);
}


function displayEndGameWin(){
    $('#end-game-win').fadeToggle(1000);
}

function displayEndGameLose(){
    $('#end-game-lose').fadeToggle(1000);
}
    
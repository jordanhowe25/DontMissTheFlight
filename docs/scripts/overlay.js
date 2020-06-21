
//To test flow, in the console run through the "hide" commands in order.  for example:  hideTitle(), hideDifficulty(), hideInstructions(), ect...
function hideTitle() {
    $('#title-screen').fadeToggle(500, displayDifficulty);
    $('#button-group-main-menu').fadeToggle(500)
}

function displayDifficulty() {
    $('#difficulty-select').fadeToggle(500);
    $('#button-group-difficulty-select').fadeToggle(500);
}

function hideDifficulty() {
    $('#difficulty-select').fadeToggle(500, displayInstructions);
    $('#button-group-difficulty-select').fadeToggle(500);
}

function displayInstructions(){
    $('#instructions').fadeToggle(500);
    $('#button-group-instructions').fadeToggle(500);
}

function hideInstructions(displayFunction){
    $('#instructions').fadeToggle(500, displayFunction);
    $('#button-group-instructions').fadeToggle(500);
}

function displayWorld(){
    $('#container-canvas').fadeToggle(500);
    $('#world-view').fadeToggle(500);
    $('#button-group-world-view').fadeToggle(500);
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
    $('#world-view').fadeToggle(500, displayFunction);
    $('#button-group-world-view').fadeToggle(500);
}

function displayCutScene(){
    $('#cut-scene').fadeToggle(500);
    $('#button-group-cut-scene').fadeToggle(500);
}

function hideCutScene(){
    $('#cut-scene').fadeToggle(500, displayTriviaCard);
    $('#container-canvas').fadeToggle(500);
    $('#button-group-cut-scene').fadeToggle(500);
}

function displayTriviaCard(){
    $('#trivia-card').fadeToggle(500);
    $('#tivia-card-content').fadeToggle(500);
    $('#button-group-trivia-card').fadeToggle(500);
}

function hideTriviaCard(){
    $('#trivia-card').fadeToggle(500, displayWorld);
    $('#tivia-card-content').fadeToggle(500);
    $('#button-group-trivia-card').fadeToggle(500);
}


function displayEndGameWin(){
    $('#end-game-win').fadeToggle(500);
}

function displayEndGameLose(){
    $('#end-game-lose').fadeToggle(500);
}

function displayHint() {
	$('#hint-content').show();
}

function hideHint() {
	$('#hint-content').hide();
}
function displayHintPrompt() {
	$('#hint-prompt').show();
}
function hideHintPrompt() {
	$('#hint-prompt').hide();
}

function displayNoHintPrompt() {
    $('#no-hint-prompt').show();
}
function hideNoHintPrompt() {
    $('#no-hint-prompt').hide();
}

function displayCorrectAnswerPrompt() {
    $('#correct-answer-prompt').show();
}
function hideCorrectAnswerPrompt() {
    $('#correct-answer-prompt').hide();
}
function displayIncorrectAnswerPrompt() {
    $('#incorrect-answer-prompt').show();
}
function hideIncorrectAnswerPrompt() {
    $('#incorrect-answer-prompt').hide();
}

    
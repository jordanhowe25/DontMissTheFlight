
//To test flow, in the console run through the "hide" commands in order.  for example:  hideTitle(), hideDifficulty(), hideInstructions(), ect...
function hideTitle() {
    $('#title-screen').fadeToggle(500, displayInstructions);
    $('#button-group-main-menu').fadeToggle(500)
}

function displayInstructions(){
    $('#instructions').fadeToggle(500);
}

function hideInstructions(displayFunction){
    $('#instructions').fadeToggle(500, displayFunction);
}

function displayWorld(){
    $('#container-canvas').fadeToggle(500);
    $('#world-view').fadeToggle(500);
    $('#button-group-world-view').fadeToggle(500);
    $('#container-hints').show(500);
    $('#container-timer').show(500);
    if (currentObstacle == 0) {
        $('#btn-start-trip').show();
    } else {
        $('#btn-start-trip').hide();
        game.player.startAnimation();
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
    game.populateTriviaCard();
    game.player.setOrientation();
    setTimeout(hideCutScene, 2000);
}

function hideCutScene(){
    $('#cut-scene').fadeToggle(500, displayTriviaCard);
    $('#container-canvas').fadeToggle(500);
    $('#button-group-cut-scene').fadeToggle(500);
}
function hideCutSceneLose(){
    $('#cut-scene').fadeToggle(500, displayEndGameLose);
    $('#button-group-cut-scene').fadeToggle(500);
    $('#container-hints').hide(500);
    $('#container-timer').hide(500);
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
function hideTriviaCardLose(){
    $('#trivia-card').fadeToggle(500, displayEndGameLose);
    $('#tivia-card-content').fadeToggle(500);
    $('#button-group-trivia-card').fadeToggle(500);
    $('#container-hints').hide(500);
    $('#container-timer').hide(500);
}

function displayEndGameWin(){
    $('#trivia-card').hide();
    $('#tivia-card-content').hide();
    $('#button-group-trivia-card').hide();
    $('#container-hints').hide(500);
    $('#container-timer').hide(500);
    $('#container-canvas').show();
    $('#end-game-win').show();
    setTimeout(displayEndGamePrompt, 1000);
}

function displayEndGameLose(){
    $('#container-canvas').show();
    $('#end-game-lose').fadeToggle(500);
    $('#container-hints').hide(500);
    $('#container-timer').hide(500);
    setTimeout(displayEndGamePrompt, 1000);
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
function displayEndGamePrompt() {
    if ($("#end-game-win").is(":visible")) {
        $('#end-game-win-prompt').show();
      } else {
        $('#end-game-lose-prompt').show();
      }
}

function displayCorrectAnswerPrompt() {
    $('#correct-answer-prompt').show();
    currentObstacle ++;
    currentTrivia ++;
    //Checks if the game has cycled through all trivia questions.  If so, resets back to the first trivia question.
    if (currentTrivia > qty) {
        currentTrivia = 0;
    }
    $("input:radio").prop("checked", false);
    //Checks for end game win scenario.  If currentObstacle = 10 then all obstacles have been passed and player wins.
    if (currentObstacle < 10) {
        setTimeout(function() {hideTriviaCard(); hideCorrectAnswerPrompt(); }, 1000); 
        
    } else {
        game.stopCountdown();
        setTimeout(displayEndGameWin, 1000);
    }
    
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

    
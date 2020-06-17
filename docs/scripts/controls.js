/* globals game */

const bindToTouch = (selector, handler) => {
  $(selector).on('click touch', handler);
  
}

//temporarily disables button press
function delayPress() {
$(':button').prop('disabled', true);
  setTimeout(function(){
    $(':button').prop('disabled', false);
  }, 1000);
}

//static back button displayed on all screens
bindToTouch('#btn-back', () => {
window.location.href = 'http://www.flywithbutchohare.com';
});

//Main menu buttons
bindToTouch('#btn-start-game', () => {
hideTitle();
});

bindToTouch('#btn-quit-game', () => {
window.location.href = 'http://www.flywithbutchohare.com';
});

//Difficulty selection buttons
bindToTouch('#btn-early-learner', () => {
delayPress();
game._difficulty = "Early Learner";
hideDifficulty();
  
});

bindToTouch('#btn-beginner', () => {
delayPress();
game._difficulty = "Beginner";
hideDifficulty();

});

bindToTouch('#btn-intermediate', () => {
delayPress();
game._difficulty = "Intermediate";
hideDifficulty();

});

bindToTouch('#btn-advanced', () => {
delayPress();
game._difficulty = "Advanced";
hideDifficulty();
 
});

//Instructions buttons
bindToTouch('#btn-instruction-confirm', () => {
game.getTriviaData();
game.createTriviaCards();
delayPress();
hideInstructions(displayWorld);
if (game._difficulty != "Early Learner"){
  game.startCountdown();
} else {
  var unlimited = document.getElementById('timer');
  unlimited.innerHTML = "UNLIMITED";
  unlimited.style.fontSize = "2em";
}
game.setStartingGameSettings();



});

bindToTouch('#btn-instruction-back', () => {
delayPress();
hideInstructions(displayDifficulty);
});

//World-view buttons
bindToTouch('#btn-start-trip', () => {
delayPress();
game.player.startAnimation();
});

bindToTouch('#btn-continue-trip', () => {
delayPress();
game.player.startAnimation();
});

//Cut scene button
bindToTouch('#btn-cutscene', () => {
delayPress();
game.player.setOrientation();
hideCutScene();
});

//Trivia Card
bindToTouch('#btn-submit-answer', () => {
delayPress();
hideTriviaCard();
currentObstacle ++;
});

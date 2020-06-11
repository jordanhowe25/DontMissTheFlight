/* globals game */

const bindToTouch = (selector, handler) => {
    $(selector).on('click touch', handler);
  };

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
  game._difficulty = "Early Learner";
  game.setStartingGameSettings();
  hideDifficulty();
});

bindToTouch('#btn-beginner', () => {
  game._difficulty = "Beginner";
  game.setStartingGameSettings();
  hideDifficulty();
});

bindToTouch('#btn-intermediate', () => {
  game._difficulty = "Intermediate";
  game.setStartingGameSettings();
  hideDifficulty();
});

bindToTouch('#btn-advanced', () => {
  game._difficulty = "Advanced";
  game.setStartingGameSettings();
  hideDifficulty();
});

//Instructions buttons
bindToTouch('#btn-instruction-confirm', () => {
  hideInstructions();
  if (game._difficulty != "Early Learner"){
    game.startCountdown();
  } else {
    var unlimited = document.getElementById('timer');
    unlimited.innerHTML = "UNLIMITED";
    unlimited.style.fontSize = "2em";
    
  }
  
});

//World-view buttons
bindToTouch('#btn-start-trip', () => {
  game.player.startAnimation();
});

bindToTouch('#btn-continue-trip', () => {
  game.player.startAnimation();
});

//Cut scene button
bindToTouch('#btn-cutscene', () => {
  game.player.setOrientation();
  hideCutScene();
});

//Trivia Card
bindToTouch('#btn-submit-answer', () => {
  hideTriviaCard();
  currentObstacle ++;
});

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
  game.setStartingGameTime();
  hideDifficulty();
});

bindToTouch('#btn-beginner', () => {
  game._difficulty = "Beginner";
  game.setStartingGameTime();
  hideDifficulty();
});

bindToTouch('#btn-intermediate', () => {
  game._difficulty = "Intermediate";
  game.setStartingGameTime();
  hideDifficulty();
});

bindToTouch('#btn-advanced', () => {
  game._difficulty = "Advanced";
  game.setStartingGameTime();
  hideDifficulty();
});

//Instructions buttons
bindToTouch('#btn-instruction-confirm', () => {
  hideInstructions();
  game.start();
});

//World-view buttons
bindToTouch('#btn-start-trip', () => {
  //TODO:  This button will be displayed if the player is just starting, otherwise continue-trip button will be displayed.
  hideWorld(displayCutScene);
});

bindToTouch('#btn-continue-trip', () => {
  hideWorld(displayCutScene);
});

//Cut scene button
bindToTouch('#btn-cutscene', () => {
  hideCutScene();
});

//Trivia Card
bindToTouch('#btn-submit-answer', () => {
  hideTriviaCard();
});

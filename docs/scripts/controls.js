/* globals game */

const bindToTouch = (selector, handler) => {
    $(selector).on('click touch', handler);
  };

//Main menu buttons
bindToTouch('#btn-start-game', () => {
  hideTitle();
});

bindToTouch('#btn-quit-game', () => {
  window.location.href = 'http://www.flywithbutchohare.com';
});

//Difficulty selection buttons
bindToTouch('#btn-early-learner', () => {
  hideDifficulty();
});

bindToTouch('#btn-beginner', () => {
  hideDifficulty();
});

bindToTouch('#btn-intermediate', () => {
  hideDifficulty();
});

bindToTouch('#btn-advanced', () => {
  hideDifficulty();
});

//Instructions buttons
bindToTouch('#btn-instruction-confirm', () => {
  //TODO:  start game function goes here, set game variables based on difficulty selected
  hideInstructions();
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

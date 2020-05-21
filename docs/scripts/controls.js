/* globals game */

const bindToTouch = (selector, handler) => {
    $(selector).on('click touch', handler);
  };
    
  bindToTouch('#start-button', () => {
    $('#start-screen-window').hide();
    $('#game-scene').show();
    game.start()
  });

function testToggle() {
  $('#title-screen').toggle();
  $('#difficulty-select').toggle();
}


  
  
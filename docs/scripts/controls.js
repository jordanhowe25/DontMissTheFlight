/* globals game */

const bindToTouch = (selector, handler) => {
    $(selector).on('click touch', handler);
  };
    
  bindToTouch('#start-button', () => {
    $('#start-screen-window').hide();
    $('#game-scene').show();
    game.start()
  });

  //To test this yourself, open the console when you have the game up and enter:  testToggleStart('#title-screen');
function testToggleStart(elementID) {
  $(elementID).fadeToggle(2500, testToggleEnd);
  
}

function testToggleEnd() {
  $('#difficulty-select').fadeToggle(1000);
}

  
  
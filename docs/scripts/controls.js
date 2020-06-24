/* globals game */

const bindToTouch = (selector, handler) => {
  $(selector).on('click touch', handler);
  
}

//temporarily disables button press
function delayPress() {
  $(':button').prop('disabled', true);
    setTimeout(function(){
      $(':button').prop('disabled', false);
    }, 1500);
}

//static back button displayed on all screens
bindToTouch('#btn-back', () => {
  window.location.href = 'http://www.flywithbutchohare.com';
});

//Main menu buttons
bindToTouch('#btn-start-game', () => {
  game.start();
  hideTitle();
});

bindToTouch('#btn-quit-game', () => {
  window.location.href = 'http://www.flywithbutchohare.com';
});

//Difficulty selection buttons
bindToTouch('#btn-early-learner', () => {
  game._difficulty = "Early Learner";
  hideDifficulty();
  
});

bindToTouch('#btn-beginner', () => {
  game._difficulty = "Beginner";
  hideDifficulty();

});

bindToTouch('#btn-intermediate', () => {
  game._difficulty = "Intermediate";
  hideDifficulty();

});

bindToTouch('#btn-advanced', () => {
  game._difficulty = "Advanced";
  hideDifficulty();
 
});

//Instructions buttons
bindToTouch('#btn-instruction-confirm', () => {
	game.getTriviaData();
  hideInstructions(displayWorld);
  if (game._difficulty != "Early Learner"){
    game.startCountdown();
  } else {
    var unlimited = document.getElementById('timer');
    unlimited.innerHTML = "UNLIMITED";
    unlimited.style.fontSize = "2em";
  }
  game.setStartingGameSettings();
  game.redrawObjects();
});

bindToTouch('#btn-instruction-back', () => {
  hideInstructions(displayDifficulty);
});

//World-view buttons
bindToTouch('#btn-start-trip', () => {
  game.createTriviaCards();
  $("#btn-cutscene").attr("disabled", false);
  game.player.startAnimation();
});

bindToTouch('#btn-continue-trip', () => {
  game.player.startAnimation();
});

//Cut scene button
bindToTouch('#btn-cutscene', () => {
  game.populateTriviaCard();
  game.player.setOrientation();
  hideCutScene();
});

//Trivia Card
bindToTouch('#btn-submit-answer', () => {
  //checks first if the user selected an answer.
  if ($("input:radio[name='trivia-answers']").is(":checked")) {
    var selectedAnswer = $('input[name="trivia-answers"]:checked').val();
    var answerValue;
    hideHint();
    switch (selectedAnswer) {
      case "a":
        answerValue = game.triviaCard[currentTrivia].answerA;
        break;
      case "b":
        answerValue = game.triviaCard[currentTrivia].answerB;
        break;
      case "c":
        answerValue = game.triviaCard[currentTrivia].answerC;
        break;
      case "d":
        answerValue = game.triviaCard[currentTrivia].answerD;
        break;
    }
    if (game.triviaCard[currentTrivia].correctAnswer.trimStart() == answerValue.trimStart()) {
      displayCorrectAnswerPrompt();
      
    } else {
      $('#corrected-answer').html(game.triviaCard[currentTrivia].correctAnswer);
      displayIncorrectAnswerPrompt();
    }
  } else {
    console.log("nothing was checked");
  }
  

});

bindToTouch('#trivia-card-hint-image', () => {
  if (game._hints != 0) {
    displayHintPrompt();
  } else {
    displayNoHintPrompt();
  }  
});

bindToTouch('#no-hint-confirm', () => {
  hideNoHintPrompt();
});

bindToTouch('#hint-confirm-yes', () => {
  displayHint();
  if(game._difficulty != "Early Learner") {
    game.removeHint();
  }
  hideHintPrompt();
});

bindToTouch('#hint-confirm-no', () => {
  hideHintPrompt();
});

bindToTouch('#correct-confirm', () => {
  currentObstacle ++;
  currentTrivia ++;
  //Checks if the game has cycled through all trivia questions.  If so, resets back to the first trivia question.
  if (currentTrivia > qty) {
    currentTrivia = 0;
  }
  $("input:radio").prop("checked", false);
  //Checks for end game win scenario.  If currentObstacle = 10 then all obstacles have been passed and player wins.
  if (currentObstacle < 10) {
    hideTriviaCard();
    hideCorrectAnswerPrompt();
  } else {
    game.stopCountdown();
    displayEndGameWin();
  }
  
  
});

bindToTouch('#incorrect-confirm', () => {
  game.applyTimePenalty();
  currentTrivia ++;
  $("input:radio").prop("checked", false);
  game.populateTriviaCard();
  hideIncorrectAnswerPrompt();
});

bindToTouch('#btn-endGame', () => {
  if ($("#end-game-win").is(":visible")) {
    $('#end-game-win-prompt').show();
  } else {
    $('#end-game-lose-prompt').show();
  }
  $('#button-group-end-game').hide();
  $('#button-group-end-game-continued').show();
});

bindToTouch("#btn-endGame-playAgain", () => {
  window.location.reload(true);
});
bindToTouch("#btn-endGame-Quit", () => {
  window.location.href = 'http://www.flywithbutchohare.com';
});
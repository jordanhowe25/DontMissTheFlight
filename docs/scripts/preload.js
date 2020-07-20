(() => {
    [
        // put image assets here
	    //TODO:  Add image assets to this array as they are added in the game
        './images/instruction_page.png', 
        './images/main_title_background.png',
        './images/world-view-background.png',
        './images/ui/advance.png',
        './images/ui/beginner.png',
        './images/ui/btn-hint.png',
        './images/ui/earlyLearner.png',
        './images/ui/hint.png',
        './images/ui/intermediate.png',
        './images/ui/timer.png',       
        './images/car/player-up.png', 
        './images/car/player-right.png', 
        './images/car/player-down.png', 
        './images/O/o1.png',
        './images/O/o2.png',
        './images/O/o3.png',
        './images/O/o4.png',
        './images/O/o5.png',
        './images/O/o6.png',
        './images/O/o7.png',
        './images/O/o8.png',
        './images/O/o9.png',
        './images/O/o10.png',
        './images/cutscenes/cutscene0.png',
        './images/cutscenes/cutscene1.png',
        './images/cutscenes/cutscene2.png',
        './images/cutscenes/cutscene3.png',
        './images/cutscenes/cutscene4.png',
        './images/cutscenes/cutscene5.png',
        './images/cutscenes/cutscene6.png',
        './images/cutscenes/cutscene7.png',
        './images/cutscenes/cutscene8.png',
        './images/cutscenes/cutscene9.png',
        './images/cutscenes/cutsceneLose.png',
        './images/cutscenes/cutsceneWin.png',
    ].forEach(src => {
        const img = new Image();
        img.src = src;
        return img;  
    })
})();
/*
//Self calling timeout function, starts when page is game is first loaded.  Listens for activity, adjust timer if needed.  
(() => {
    var t;
    //window.onload = resetTimer;
    window.onmousemove = resetTimer; // catches mouse movements
    window.onmousedown = resetTimer; // catches mouse movements
    window.onclick = resetTimer;     // catches mouse clicks
    window.onscroll = resetTimer;    // catches scrolling
    window.onkeypress = resetTimer;  //catches keyboard actions
 
   function reload() {
          window.location.href = 'http://www.flywithbutchohare.com';  
   }
 
   function resetTimer() {
        clearTimeout(t);
        t= setTimeout(reload, 120000);  // time is in milliseconds (1000 is 1 second)
    }   
})();*/
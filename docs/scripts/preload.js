(() => {
    [
        // put image assets here
	    //TODO:  Add image assets to this array as they are added in the game
        './images/player-up.png', 
        './images/player-right.png', 
        './images/player-down.png', 
        './images/o1.png',
        './images/o2.png',
        './images/o3.png',
        './images/o4.png',
        './images/o5.png',
        './images/o6.png',
        './images/o7.png',
        './images/o8.png',
        './images/o9.png',
        './images/o10.png',
        './images/o_done.png', 
        './images/hint.png' 
    ].forEach(src => {
        const img = new Image();
        img.src = src;
        return img;  
    })
})();

//Self calling timeout function, starts when page is game is first loaded.  Listens for activity, adjust timer if needed.  
/*(() => {
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
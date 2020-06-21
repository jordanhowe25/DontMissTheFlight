var currentObstacle = 0;
var selection;
var currentTrivia = 0;
class Game {
    constructor({
      canvasElementId,
    }){
        this._canvasElementId = canvasElementId;
        this._difficulty = "Early Learner"  
        this._time = 300;
        this._obstacle = [];   
        this.createCanvas(canvasElementId);
        this._triviaCard = [];
        this._hints = 0;    
    }
  
        get canvas(){ return this._canvas; }
        set canvas(value){ this._canvas = value; }
    
        get canvasWidth(){ return 1480; }
        get canvasHeight(){ return 540; }
    
        get canvasElementId(){ return this._canvasElementId; }
    
        get score(){ return this._score; }
        set score(value){ this._score = value; }
    
        get timer() { return this._timer; }
        set timer(value) { this._timer = value; }
        
        get time(){ return this._time; }
        set time(value){ this._time = value; }

        get player(){ return this._player; }
        set player(value) { this._player = value; }

        get obstacle() {return this._obstacle; }

        get triviaCard() {return this._triviaCard; }

        get hints() { return this._hints; }
        set hints(value) { this._hints = value; }

  
    createCanvas(elementId){ 
        const canvas = document.getElementById(elementId);
        this.canvas = canvas.getContext('2d');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;

        return this.canvas;
    }

    clearCanvas(){
        this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    setStartingGameSettings(){
        switch (this._difficulty) {
            case "Early Learner":
                this._time = 300;
                this._hints = 1000;
                this.populateHints();
                break;
            case "Beginner":
                this._time = 300;
                this._hints = 5;
                this.populateHints();
                break;
            case "Intermediate":
                this._time = 240;
                this._hints = 3;
                this.populateHints();
                break;
            case "Advanced":
                this._time = 180;
                this._hints = 1;
                this.populateHints();
                break;
            default:
                //Used for testing purposes only, should always be 1 of the 4 options.
                this._time = 600;
                break;
        }
    }
	
	

    getTriviaData() {
		let diff;
        switch (this._difficulty){
			case "Early Learner":
                diff = 1;
                break;
            case "Beginner":
                diff = 2;
                break;
            case "Intermediate":
                diff = 3;
                break;
            case "Advanced":
                diff = 4;
                break;
		}
		var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
					selection = JSON.parse(this.responseText);
            }
        }
        // Send a request to PHP for a new question
        ajax.open("GET", "scripts/getTriviaCards.php?difficulty=" + diff, true);
        ajax.send();
    }

    createTriviaCards(){
        var qty = selection.length;
        this.shuffleArray(selection);
        for (var i = 0; i < qty; i++) {
            this.triviaCard.push(
                new TriviaCard({
                    id: i,
                    question: selection[i].question,
                    answerA: selection[i].answer1,
                    answerB: selection[i].answer2,
                    answerC: selection[i].answer3,
                    answerD: selection[i].answer4,
                    correctAnswer: selection[i].correctAnswer,
                    hint: selection[i].hint,
                    game: this,
                })
            )
        } 
    }

    //Fisher-Yates-shuffle method
    shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
        
    startCountdown()
    {
        this.timer = setInterval(() => {
        var seconds = this.time;
        const minutes = Math.floor(seconds/60);
        const time001 = document.getElementById('time001');
        seconds = seconds % 60;
        seconds = seconds <10? '0' + seconds:seconds;
        timer.innerHTML = minutes + ':' + seconds;
        this.time --;
        if (this.time < 0) {
            this.stopCountdown();
            this.stop();
            }
        }, 1000);
    }
  
    stopCountdown() {
      clearInterval(this.timer);
    }
   
    populateTriviaCard() {
        $('#question').html(this.triviaCard[currentTrivia].question);
		$('#hint').html(this.triviaCard[currentTrivia].hint);
        $('#a-answer').html(this.triviaCard[currentTrivia].answerA);
		$('#b-answer').html(this.triviaCard[currentTrivia].answerB);
		$('#c-answer').html(this.triviaCard[currentTrivia].answerC);
		$('#d-answer').html(this.triviaCard[currentTrivia].answerD);
		
    }
    
    applyTimePenalty() {
        this.stopCountdown();
        const currentTime = this.time;
        var penalty;
        switch (this._difficulty){
			case "Early Learner":
                penalty = 0;
                break;
            case "Beginner":
                penalty = 10;
                break;
            case "Intermediate":
                penalty = 10;
                break;
            case "Advanced":
                penalty = 15;
                break;
        }
        this.time = (currentTime - penalty);
        this.startCountdown();
    }

    populateHints() {
        var div = document.getElementById("number-of-hints");

        if (this._hints == 1000) {
            var hintImg = document.createElement("img");
            var hintText = document.createElement("P");
            hintText.innerText = "UNLIMITED";
            hintImg.src = "./images/ui/hint.png";
            hintImg.width = "40";
            hintImg.height = "78";
            div.appendChild(hintImg);
            div.appendChild(hintText);
            
        } else {
            for (var i = 0; i < this._hints; i++) {
                var hintImg = document.createElement("img");
                hintImg.src = "./images/ui/hint.png";
                hintImg.width = "65";
                hintImg.height = "103";
                div.appendChild(hintImg);

            }
        }
    }

    removeHint() {
        this.hints --;
        var div = document.getElementById("number-of-hints");
        var image = div.querySelectorAll('[src="./images/ui/hint.png"]');
        div.removeChild(image[0]);
    }

    spawnPlayer() {
            this.player = new Player({
            game: this
        });
    }

    spawnObstacles() {
        var coordsX = [100, 260, 260, 430, 430, 580, 780, 950, 1062, 1062, 1180];
        var coordsY = [170, 170, 375, 375, 170, 170, 170, 170, 170, 355, 250];
        var counter = 0
        for (let n = 0; n < 11; n++ ){
            this.obstacle.push(
                new Obstacle({
                    id: counter,
                    x: coordsX[counter],
                    y: coordsY[counter],
                    game: this
                })
            );
            counter ++;
        }
    }

  
    start() {
        this.spawnPlayer();
        this.spawnObstacles();
        
        
    }
  
    

   loadCutScene() {
    var cutScene = document.getElementById("cut-scene");
    var triviaCard = document.getElementById("trivia-card");

    var cutScenes = [
        "url('./images/cutscenes/cutScene0.png')",
        "url('./images/cutscenes/cutScene3.png')",
        "url('./images/cutscenes/cutScene2.png')",
        "url('./images/cutscenes/cutScene5.png')",
        "url('./images/cutscenes/cutScene1.png')",
        "url('./images/cutscenes/cutScene9.png')",
        "url('./images/cutscenes/cutScene6.png')",
        "url('./images/cutscenes/cutScene4.png')",
        "url('./images/cutscenes/cutScene7.png')",
        "url('./images/cutscenes/cutScene8.png')",
    ]
    cutScene.style.backgroundImage = cutScenes[currentObstacle];
    triviaCard.style.backgroundImage = cutScenes[currentObstacle];
   }

  
    // return true if two bounding boxes collided
    static didCollide(obj1, obj2){
      // since we have getBoundingBox it should be easy
      if (!obj1.getBoundingBox && !obj2.getBoundingBox) return false;
  
      // get boxes
      const box1 = obj1.getBoundingBox();
      const box2 = obj2.getBoundingBox();
  
      // check for intersections based on the vertices from bounding box
      return (box1.topLeft.x < (box2.bottomRight.x) && 
      (box1.bottomRight.x) > box2.topLeft.x) && 
      (box1.topLeft.y < (box2.bottomRight.y) && 
      (box1.bottomRight.y) > box2.topLeft.y);
    }
  }
  
  const game = new Game({
    canvasElementId: 'world-view',
  });

  game.start();
  
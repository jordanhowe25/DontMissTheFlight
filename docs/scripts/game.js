class Game {
    constructor({
      canvasElementId,
    }){
      this._canvasElementId = canvasElementId;
      this._difficulty = "Early Learner"  
      this._time = 300;
    
      this.createCanvas(canvasElementId);
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
  
    setStartingGameTime(){
        switch (this._difficulty) {
            case "Early Learner":
                this._time = 300;
                break;
            case "Beginner":
                this._time = 300;
                break;
            case "Intermediate":
                this._time = 240;
                break;
            case "Advanced":
                this._time = 180;
                break;
            default:
                //Used for testing purposes only, should always be 1 of the 4 options.
                this._time = 600;
                break;
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

    spawnPlayer() {
            this.player = new Player({
            game: this
        });
    }
  
    start() {
        this.spawnPlayer();
        console.log("start has begun");
    }
  
    stop() {
      
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
  
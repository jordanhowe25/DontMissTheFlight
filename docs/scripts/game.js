class Game {
    constructor({
        canvasElementID
    }){
        this._time = 300;
        this._difficulty = "Beginner";
        this._hintPool = 10;
        this.createCanvas(canvasElementID);
    }

    //Getters/Setters
    get canvas() { return this._canvas; }
    set canvas(value){ this._canvas = value; }

    get canvasWidth(){ return 1480; }
    get canvasHeight(){ return 540; }

    get canvasElementID(){return this._canvasElementID; }

    get time(){ return this._time; }
    set time(value){ this._time = value; }

    //Methods
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
}

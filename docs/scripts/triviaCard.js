class TriviaCard {
    constructor({
        id,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
        correctAnswer,
        hint,
        game,
    }) {
        this._id = id;
        this._game = game;
        this._question = question;
        this._answerA = answerA;
        this._answerB = answerB;
        this._answerC = answerC;
        this._answerD = answerD;
        this._correctAnswer = correctAnswer;
        this._hint = hint;
    }
    // Getters and Setters
    get game() { return this._game; }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get question() {return this._question; }
    set question(value) {this._question = value; }
    get question() {return this._question; }
    get answerA() {return this._answerA; }
    set answerA(value) {this._answerA = value; }
    get answerB() {return this._answerB; }
    set answerB(value) {this._answerB = value; }
    get answerC() {return this._answerC; }
    set answerC(value) {this._answerC = value; }
    get answerD() {return this._answerD; }
    set answerD(value) {this._answerD = value; }
    get correctAnswer() {return this._correctAnswer; }
    set correctAnswer(value) {this._correctAnswer = value; }
    get hint() {return this._hint; }
    set hint(value) {this._hint = value; }




    // class methods
    
    

}
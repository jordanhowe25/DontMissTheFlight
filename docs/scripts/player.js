class Player {
    constructor({
        x = 5,
        y = 175,
        height = 30,
        width = 70,
        vHeight = 70,
        vWidth = 30,
        images = [
            //images of the players car in horizontal orientation.
            './images/car/player-right.png'
        ],
        vImages = [
            //images of the players car in vertical orientation.
            './images/car/player-up.png',
            './images/car/player-down.png'
        ],
        speed = 1,
        game,
    }) {
        //position data
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._speed = speed;
        this._vHeight = vHeight;
        this._vWidth = vWidth;

        //parent game
        this._game = game;

        //images to use
        this._images = this.loadImages(images, this.height, this.width);
        this._vImages = this.loadImages(vImages, this.vHeight, this.vWidth);

        //loadImage images
        this.loadImage(this.images[0]);

        //draw to canvas at initial position
        this.draw();
    }

    // Getters and Setters
    get game(){ return this._game; }
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get speed() { return this._speed; }
    set speed(speed) { this._speed = speed; }
    get height() { return this._height; }
    set height(value) { this._height = value; }
    get width() { return this._width; }
    set width(value) { this._width = value; }
    get vHeight() { return this._vHeight; }
    get vWidth() { return this._vWidth; }
    get canvas() { return this.game.canvas; }
    get images() { return this._images; }
    get vImages() { return this._vImages; }
    get image() { return this._image; }
    set image(src) { this._image = src; }
    get animationInterval() { return this._animationInterval; }
    set animationInterval(interval) { this._animationInterval = interval; }
    

    loadImages(images, height, width) {
        return images.map(src => {
          const img = new Image();
          img.height = height;
          img.width = width;
          img.src = src;
          return img;
        });
    }

    loadImage(image) {
        this.image = image
    }

    draw(x = this.x, y = this.y) {
        //draw on canvas
        this.canvas.drawImage(
            this.image,
            x,
            y,
            this.width,
            this.height
        );
    }

    clear() {
        this.canvas.clearRect(
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
    //Much more will need to be added below this comment.  To the move function and additional functions might be needed.
    update(speedX, speedY) {
        this.clear();
        this.draw();
        this.x += speedX;
        this.y += speedY;
    }

    verticalOrientation(vImage){
        this.clear();
        this.width = this.vWidth;
        this.height = this.vHeight;
        this.loadImage(vImage);
        this.x = game.obstacle[currentObstacle].x;
        this.y = (game.obstacle[currentObstacle].y - game.obstacle[currentObstacle].height);
        this.draw();
        
    }

    horizontalOrientation(image = this.images[0]){
        this.clear();
        this.width = 70;
        this.height = 30;
        this.loadImage(image);
        this.x = game.obstacle[currentObstacle].x;
        this.y = game.obstacle[currentObstacle].y;
        this.draw();
        
    }

    setOrientation(){
       switch(currentObstacle) {
            case 1:
            case 8:
            
			
               this.verticalOrientation(this.vImages[1]);
               break;
            case 0:
            case 2:
            case 6:
            case 4:
            case 5:
			
			case 7:
                this.horizontalOrientation();
                break;
            case 3:
            
                this.verticalOrientation(this.vImages[0]);
            default:
                console.log("case not found");
       }
    }

    startAnimation() {
        const targetPosX = game.obstacle[currentObstacle].x;
        const targetPosY = game.obstacle[currentObstacle].y;

        var deltaX = (this.x - targetPosX);
        var deltaY = (this.y - targetPosY);

        if (deltaX < 0) {
            var speedX = this.speed;
            var speedY = 0;
        } else if (deltaY < 0) {
            var speedY = this.speed;
            var speedX = 0;
        } else if  (deltaY > 0) {
            var speedY = this.speed * -1;
            var speedX = 0;
        }

        
        this.animationInterval = requestAnimationFrame(() => this.startAnimation(this.animationInterval));
        if (!Game.didCollide(this, game.obstacle[currentObstacle])) {
            this.update(speedX, speedY);
        } else {
            this.stopAnimation();
            game.loadCutScene();
            hideWorld(displayCutScene);
            
        }
    }

    stopAnimation() {
        cancelAnimationFrame(this.animationInterval);
    }

    getBoundingBox() {
        return {
          topLeft: {x: this.x, y: this.y},
          bottomRight: {x: this.x + this.width, y: this.y + this.height},
        }
    }

    


};
class Player {
    constructor({
        x = 50,
        y = 115,
        height = 48,
        width = 100,
        images = [
            //More images will need to be added for the direction of the car.  Just go to paint, rotate image, make png transparent, then save image.  Add here.
            './images/player-car.png'
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

        //parent game
        this._game = game;

        //images to use
        this._images = this.loadImages(images);

        //loadImage images
        this.loadImage();

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
    get width() { return this._width; }
    get canvas() { return this.game.canvas; }
    get images() { return this._images; }
    get image() { return this._image; }
    set image(src) { this._image = src; }
    get animationInterval() { return this._animationInterval; }
    set animationInterval(interval) { this._animationInterval = interval }

    loadImages(images) {
        return images.map(src => {
          const img = new Image();
          img.height = this.height;
          img.width = this.width;
          img.src = src;
          return img;
        });
    }

    loadImage() {
        this.image = this.images[0];
    }

    draw(x = this.x, y = this.y) {
        //update position data
        this.x = x;
        this.y = y;

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

    startAnimation() {
        const targetPosX = game.obstacle[currentObstacle].x;
        const targetPosY = game.obstacle[currentObstacle].y;

        var deltaX = (this.x - targetPosX);
        var deltaY = (this.y - targetPosY);

        if (deltaX < 30) {
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
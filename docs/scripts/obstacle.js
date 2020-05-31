class Obstacle {
    constructor({
        id,
        x,
        y,
        height = 50,
        width = 44,
        images = [
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o1.png',
            './images/o_done.png'
        ],
        game,
    }) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._game = game;

        //images to use
        this._images = this.loadImages(images);

        // loadImage images
        this.loadImage();

        //draw to canvas at initial position
        this.draw(this.x, this.y);
    }
    // Getters and Setters
    get game() { return this._game; }
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get height() { return this._height; }
    get width() { return this._width; }
    get canvas() { return this.game.canvas; }
    get images() { return this._images; }
    get image() { return this._image; }
    set image(src) { this._image = src; }

    // class methods
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
        //TODO:  This will have to be redefined eventually
        this.image = this.images[0];
    }

    draw(x = this.x, y = this.y) {
        // draw on canvas
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

    getBoundingBox() {
        return {
          topLeft: {x: this.x, y: this.y},
          bottomRight: {x: this.x + this.width, y: this.y + this.height},
        }
    }

    //TODO:  Function to handle the obstacle image change when an obstacle is completed.
    //Once the obstacle is completed, the obstacle image will change to a checkmark.

}
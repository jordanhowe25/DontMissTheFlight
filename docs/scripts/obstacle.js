class Obstacle {
    constructor({
        id,
        x,
        y,
        height = 30,
        width = 30,
        images = [
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

        // loadImage images..
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
    get id() { return this._id; }
    set id(id) { this._id = id;}

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
        this.image = this.images[this.id];
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

}
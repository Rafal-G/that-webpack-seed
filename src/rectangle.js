'use strict';
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get getHeight() {
        return this.height;
    }

    get getWidth() {
        return this.width;
    }
}

module.exports = {Rectangle};


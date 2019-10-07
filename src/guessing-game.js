class GuessingGame {
    constructor() {
        this.MIN = 0;
        this.MAX = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.MIN = min;
        this.MAX = max;
    }

    guess() {
        return this.result = Math.round((this.MIN + this.MAX) / 2);
    }

    lower() {
        return this.MAX = this.result;
    }

    greater() {
        return this.MIN = this.result;
    }
}

module.exports = GuessingGame;

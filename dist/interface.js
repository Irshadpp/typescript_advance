"use strict";
class Instagram {
    constructor(mode, filter, burst) {
        this.mode = mode;
        this.filter = filter;
        this.burst = burst;
    }
    createSotry() {
        console.log('story was created');
    }
}
class Youtube {
    constructor(mode, filter, burst, short) {
        this.mode = mode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}

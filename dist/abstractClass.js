"use strict";
class TakePhoto2 {
    constructor(mode, filter) {
        this.mode = mode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculations
        return 8;
    }
}
class Instagram2 extends TakePhoto2 {
    constructor(mode, filter) {
        super(mode, filter);
        this.mode = mode;
        this.filter = filter;
    }
    getSapia() {
        console.log('sapia');
    }
}
const obj = new Instagram2('test', 'test');
obj.getReelTime(); // this is the diffrence between interface and abstract bcz we can use the methode of abstract class like this

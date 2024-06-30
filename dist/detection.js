"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provid an id');
        return;
    }
    id.toLowerCase();
}

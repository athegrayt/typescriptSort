"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        if (this.collection instanceof Array) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
        if (typeof this.collection === 'string') {
        }
    }
}
const sorter = new Sorter([10, 4, 5]);
sorter.sort();
console.log(sorter.collection);
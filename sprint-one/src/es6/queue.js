class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, front, back) {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back += 1;
    return this.storage;
  }
  dequeue() {
    var currentFront = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return currentFront;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
var newQueue = new Queue();
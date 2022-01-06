class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, back) {
    this.storage = {},
    this.back = 0;
  }

  push(value) {
    this.storage[this.back] = value;
    this.back += 1;
  }
  pop() {
    var deletedVal = this.storage[this.back - 1];
    delete this.storage[this.back - 1];
    this.back -= 1;
    return deletedVal;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
var newStack = new Stack();
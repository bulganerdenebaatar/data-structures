var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.back = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.back] = value;
  this.back += 1;
};
Stack.prototype.pop = function() {
  var deletedVal = this.storage[this.back - 1];
  delete this.storage[this.back - 1];
  this.back -= 1;
  return deletedVal;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var newStack = new Stack();

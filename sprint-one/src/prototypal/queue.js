var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use object.create
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back += 1;
    return this.storage;
  },
  dequeue: function() {
    var currentFront = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return currentFront;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



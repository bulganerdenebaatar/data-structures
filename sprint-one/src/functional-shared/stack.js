var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.back = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.back] = value;
    this.back += 1;
  },
  pop: function() {
    var deletedVal = this.storage[this.back - 1];
    delete this.storage[this.back - 1];
    this.back -= 1;
    return deletedVal;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



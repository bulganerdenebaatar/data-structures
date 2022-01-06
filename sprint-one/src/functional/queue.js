var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // first in first out
  // [1, 2, 3] - 1 is out, 3 is in
  var front = 0; // 1
  var back = 0; // 3

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // adding on back
    storage[back] = value;
    back += 1;
    return storage;
  };

  someInstance.dequeue = function() {
    // removing from front
    // assign front to be the next val
    var currentFront = storage[front];
    delete storage[front]; // delete
    front += 1;
    return currentFront;

  };

  someInstance.size = function() {
    // return object size
    return Object.keys(storage).length;
  };

  return someInstance;
};


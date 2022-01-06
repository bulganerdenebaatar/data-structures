var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var back = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // console.log(value);
    // console.log(storage);
    storage[back] = value;
    back += 1;
  };

  someInstance.pop = function() {
    // first in, last out
    // console.log('back', back);
    var deletedVal = storage[back - 1];
    delete storage[back - 1];
    back -= 1;
    return deletedVal;
  };

  someInstance.size = function() {
    // console.log(storage);
    return Object.keys(storage).length;
  };

  return someInstance;
};

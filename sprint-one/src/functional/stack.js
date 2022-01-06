var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.storage.back = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // console.log(value);
    // console.log(storage);
    someInstance.storage[someInstance.storage.back] = value;
    someInstance.storage.back += 1;
  };

  someInstance.pop = function() {
    // first in, last out
    delete someInstance.storage[someInstance.storage.back];
    someInstance.storage.back -= 1;
    return someInstance.storage[someInstance.storage.back];
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};

var BinarySearchTree = function(value) {
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.right = {};
  newBinarySearchTree.left = {};

  _.extend(newBinarySearchTree, binarySearchTreeMethods);
  return newBinarySearchTree;
};


var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(val) {
  // check if the val is greater than or less than the current value
  // assign accordingly
  // creating a new node;
  var newBinary = new BinarySearchTree(val);

  if (val < this.value) {
    //go to left recursive
    if (Object.keys(this.left).length === 0) {
      this.left = newBinary;
      return newBinary.value = val;
    }
    this.left.insert(val);
  } else {
    if (Object.keys(this.right).length === 0) {
      this.right = newBinary;
      return newBinary.value = val;
    }
    this.right.insert(val);
  }
  return newBinary;
};

binarySearchTreeMethods.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  //the value doesnt match the first node,
  // this.value > < val
  // if less we check left side
  // if more we check right side

  if (val < this.value && Object.keys(this.left).length !== 0) {
    if (this.left.contains(val)) {
      return true;
    }
  } else if (val > this.value && Object.keys(this.right).length !== 0) {
    // console.log(this.right);
    if (this.right.contains(val)) {
      return true;
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  var array = [];
  // base case : when left and right sides are empty - return
  // recursive :
  if (this.value) {
    array.push(cb(this.value));
  }
  if (Object.keys(this.left).length !== 0) {
    this.left.depthFirstLog(cb);
  }
  if (Object.keys(this.right).length !== 0) {
    this.right.depthFirstLog(cb);
  }
  return array;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  // console.log(newTree);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new children node
  var newChild = new Tree(value);
  // push the new tree to the children
  // console.log(this.children);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // does value === target
  // if not, check if has any child,
  //if not, return false
  //if yes, then loop over children
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

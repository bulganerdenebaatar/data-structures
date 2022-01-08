/*
example nodes:
nodes:[1      ,2      ,3      ,4      ]
edges:[[2,3]  ,[1,3]  ,[1,2]  ,[3]    ]

- add: 1) push to the end of nodes
       2) push an empty arr to edges;
       * this is making sure the node and its edges are at the same index
- contain: check if nodes arr has input node
- remove: 1) find the node's index,
          2) nodes.splice(index,1)
          3) edges.splice(index,1)
*/
// Instantiate a new graph
var Graph = function() {
// edges - ponters
// nodes - vertices
};

//{node:edges}
//{1: [2, 3],
// 2: [1, 3]}
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodes.push(node);
  // console.log(node);
  //is there a way to add a new property with input node as key??
  this[node] = [];
  return this;
  // this.node = node;
  // this.node = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // while (this.nodes.length > 0) {
  //   for (var i = 0; i < this.nodes.length; i ++) {
  //     if (this.nodes[i] === node) {
  //       return true;
  //     }
  //     return false;
  //   }
  // }
  // return false;
  /* iterate over the key in this, if any key is input node, return true, else return false
  */
  for (var key in this) {
    //key is a string, needed to be converted to a number to match the node type
    if (Number(key) === node) {
      // console.log(key === node);
      return true;
    } else {
      return false;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete node
  // also delete that node from the edges // iterate through edges
  // var edgeToBeDeleted;
  // console.log(this);
  for (var key in this) {
    var eachEdges = this[key];
    if (Number(key) === node) {
      // console.log(this[key]);
      delete this[key];
    }
    for (var i = 0; i < eachEdges.length; i ++) {
      if (eachEdges[i] === node) {
        eachEdges.splice(i, 1);
      }
    }
  }
  return this;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // console.log(fromNode);
  //go to fromNode's edges, check if toNode is there
  var fromNodeEdges = this[fromNode];
  if (fromNodeEdges.length === 0) {
    return false;
  }
  for (var i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //go to the fromNode's edges, push toNode
  //go to toNode's edges, push fromNode
  // console.log(toNode, fromNode);
  this[toNode].push(fromNode);
  this[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdges = this[fromNode];
  var toNodeEdges = this[toNode];
  for (var i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
      // console.log(fromNodeEdges);
      fromNodeEdges.splice(i, 1);
      // console.log(fromNodeEdges);
    }
  }
  for (var i = 0; i < toNodeEdges.length; i++) {
    if (toNodeEdges[i] === fromNode) {
      // console.log(toNodeEdges);
      toNodeEdges.splice(i, 1);
      // console.log(toNodeEdges);
    }
  }
  return this;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log(this);
  for (var key in this) {
    // console.log(key);
    // console.log(typeof this[key]);
    if (Array.isArray(this[key])) {
      cb(key);
    }
  }
  // while (Array.isArray(value) ) {
  //   console.log(this[key]);
  //   cb(key);
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newGraph = new Graph();
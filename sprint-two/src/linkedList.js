var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if the list is empty, assign both value to head and tail as starting point
    // create a new node(value)
    // console.log('add to tail list', list);
    var newNode = new Node(value);
    if (list.head === null || list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head.next = list.tail;
    }
    // [[val       ,next]]
    //  head, tail
    //  [[val ,next][val        ,next]]
    //  head,  ------>   , tail , null
    // head.value = new value - value
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    // delete removed;
    return removed;
  };

  list.contains = function(target) {
    // while tail.next !== null
    // list.head.value === target
    // yes return true
    // if no then list.head.next === target

    /*tail.next will always be null,
    so need to check if node.next is null
    if currentnode.next is null, stop iterating

    */
    var currentNode = list.head;
    // console.log(currentNode);

    if (!currentNode.next && currentNode.value === target) {
      return true;
    } else if (!currentNode.next && currentNode.value !== target) {
      return false;
    }

    //if nextnode is defined, do a while loop to check the currentnodes value
    while (currentNode.next) {
      if (currentNode.value === target || currentNode.next.value === target) {
        currentNode = currentNode.next;
        return true;
      } else {
        return false;
      }
    }
    // return false;

    //** tail.next is always null
    // while (list.tail.next !== null) {
    //   if (list.head.value === target) {
    //     return true;
    //   } else {
    //     if (list.head.next.value === target) {
    //       return true;
    //     }
    // list.head = list.head.next;
    // list.head = next.value

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

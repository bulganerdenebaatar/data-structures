

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(this);
  // console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var tuple = [pair, pair ... ]

  var tuples = [];
  var pair = {};
  pair[k] = v;
  if (this._storage.get(index)) {
    if (this._storage.get(index)[k]) {
      //not an arr
      if (!Array.isArray(this._storage.get(index))) {
        //check if k is repeated, if not
        if (!this._storage.get(index)[k]) {
          tuples.push(this._storage.get(index));
          tuples.push(pair);
          console.log(tuples);
          this._storage.set(index, tuples);
        } else {
          //k is repeated, overwrite the value
          this._storage.set(index, pair);
        }
        tuples.push(pair);
      }
      this._storage.set(index, pair);
    }
  }
  // console.log(this._storage.set);
  // console.log(pair);
  this._storage.set(index, pair);
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this._storage[index]);
  // return this._storage[index][k];
  if (Array.isArray(this._storage.get(index))) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      var eachPair = this._storage.get(index)[i];
      if (eachPair[k] !== undefined) {
        return eachPair[k];
      }
    }
  }
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};

var newHashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */



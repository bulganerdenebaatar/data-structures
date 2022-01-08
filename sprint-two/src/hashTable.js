

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

  var bucket = this._storage.get(index);
  // console.log(bucket);
  //if the bucket is taken
  if (bucket) {
    //not an arr => bucket is taken with a pair
    if (!Array.isArray(bucket)) {
      //check if k is repeated, if not
      if (!bucket[k]) {
        tuples.push(bucket);
        tuples.push(pair);
        // console.log(tuples);
        this._storage.set(index, tuples);
      } else {
        //k is repeated, overwrite the value
        // console.log(bucket[k]);
        // bucket[k] = pair;
        this._storage.set(index, pair);
      }
      tuples.push(pair);
    }
    // this._storage.set(index, pair);
  }
  // console.log(this._storage.set);
  // console.log(pair);
  //the bucket is never taken, assign it to the pair
  this._storage.set(index, pair);
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this._storage[index]);
  // return this._storage[index][k];

  var bucket = this._storage.get(index);
  console.log(this._storage, bucket, k);
  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      var eachPair = bucket[i];
      console.log(eachPair);
      if (eachPair[k] !== undefined) {
        return eachPair[k];
      }
    }
  }
  return bucket[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};

var newHashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */



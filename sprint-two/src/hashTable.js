var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var touple = [k,v];

  if(!this._storage.get(i)){
    this._storage.set(i, []);
  }

  this._storage.get(i).push(touple);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var answer = this._storage.get(i);
  // console.log('ANSWER!: ', answer)
  for(var i = 0; i < answer.length; i++){
    if(answer[i][0] === k){
      return answer[i][1];
    }
  }
  return null;

  // _.each(answer, function(element, index, collection){
  //   if (element[0] === k){
  //     return element[1];
  //   }
  // })
  // return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var answer = this._storage.get(i);
  for (var j = 0; j < answer.length; j++){
    if (answer[j][0] === k){
      // console.log("this is the bucket before splicing: ", answer)
      this._storage.get(i).splice(j, 1);
      // console.log("this is the bucket after splicing: ", answer)
    }
  }



  // var answer = this._storage.get(i);
  // answer = null;
  // this._storage.set(i, null);
  // // console.log('This is the storage: ', this._storage.get(i))
  // this._storage[i].each(function(innerArray, index, array){
  //   console.log('This is the innerArray: ', innerArray, 'This is the innerArray[0]: ', innerArray[0])
  //   if(innerArray[0] === k){
  //     innerArray = null;
  //   }
  // })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

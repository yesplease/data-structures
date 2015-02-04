// var Queue = function(){
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;
//   var first = 0;

//   // Implement the methods below

//   someInstance.enqueue = function(value){
//     storage[first] = value;
//     size++;
//   };

//   someInstance.dequeue = function(){
//     if ( size > 0 ) {
//       var answer = storage[first];
//       delete storage[first];
//       first++;
//       size--;
//       return answer;
//     }
//   };

//   someInstance.size = function(){
//     return size;
//   };

//   return someInstance;
// };
var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function(){
    if ( first < last ) {
      var answer = storage[first];
      delete storage[first];
      first++;
      return answer;
    }
  };

  someInstance.size = function(){
    return last - first;
  };

  return someInstance;
};

var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueData = {};

  queueData.storage = {};
  queueData.end = 0;
  queueData.first = 0;

  _.extend(queueData, queueMethods);

  return queueData;
};

var queueMethods = {};

//enqueue
queueMethods.enqueue = function(value){
  //add that value to the end of the line
  this.storage[this.end] = value;
  this.end++;
};

//dequeue
queueMethods.dequeue = function(){
  if(this.end > this.first){
    var answer = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return answer;
  }
};

//size
queueMethods.size = function(){
  return this.end - this.first;
};

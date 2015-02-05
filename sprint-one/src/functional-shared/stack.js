var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackData = {};
  stackData.counter = 0;
  stackData.storage = {};
  _.extend(stackData, stackMethods);
  return stackData;
  console.log("this is stackData:", stackData);
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  if(this.counter > 0){
    this.counter--;
    var popper = this.storage[this.counter];
    delete this.storage[this.counter];
    return popper;
  }
};

stackMethods.size = function(){
  return this.counter;
};

Stack();


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    this.stackSize--;
    var answer = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return answer;
  }
};

Stack.prototype.size = function(){
  return this.stackSize;
};

//cap function name
var newStack = new Stack()
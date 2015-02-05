var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  if (this.count > 0){
    this.count--;
    var answer = this.storage[this.count];
    delete this.storage[this.count];
    return answer;
  }
};

stackMethods.size = function(){
  return this.count;
};

//You can also do this with an object literal. Is this less flexable?
// var stackMethods = {
//   push: function(value){
//   this.storage[this.count] = value;
//   this.count++;
//   },
//   pop: function(){
//   if (this.count > 0){
//     this.count--;
//     var answer = this.storage[this.count];
//     delete this.storage[this.count];
//     return answer;
//     }
//   },
//   size: function(){
//   return this.count;
//   }
// }

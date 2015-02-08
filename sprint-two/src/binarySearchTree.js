var BinarySearchTree = function(value){
  var newNode = Object.create(binaryTreeMethods);
  newNode.value = value;
  newNode.left = null;
  newNode.right = null;
  return newNode;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(newValue){

  var currentRoot = this;

  while(currentRoot !== null){
    if(currentRoot.value === newValue){
      return;
    }
    if(currentRoot.value < newValue){
      if(currentRoot.right === null){
        currentRoot.right = BinarySearchTree(newValue);
      }
      currentRoot = currentRoot.right;
    }
    if(currentRoot.value > newValue){
      if(currentRoot.left === null){
        currentRoot.left = BinarySearchTree(newValue);
      }
      currentRoot = currentRoot.left;
    }
  }
};

binaryTreeMethods.contains = function(target){
  var currentRoot = this;
   while (currentRoot !== null){
    if (currentRoot.value === target){
      return true;
    }
    if (currentRoot.value < target){
      if(currentRoot.right === null) {
        return false;
      }
      currentRoot = currentRoot.right;
    }
    if (currentRoot.value > target) {
      if (currentRoot.left === null){
        return false;
      }
      currentRoot = currentRoot.left;
    }
   }
};

binaryTreeMethods.depthFirstLog = function(callback){  //note: check argument
  //store the current context in this as 'currentRoot'
  var currentRoot = this;
  // console.log('This is the currentRoot: ', currentRoot);
  var callbackArr = [];
  // console.log('This is the callbackArr: ', callbackArr);
  var answer = [];
  //at some point at each value for the current root we need to call the callback
  //callback(currentRoot.value)

  var depthRecursiveSearch = function(node){
    callbackArr.push(node.value)
    if(node.left !== null){
      depthRecursiveSearch(node.left);
    }
    if(node.right !== null){
      depthRecursiveSearch(node.right);
    }
  };

  depthRecursiveSearch(currentRoot);

  for(var i = 0; i < callbackArr.length; i++){
    answer.push(callback(callbackArr[i]));
  };
  return answer;
}




/*
 * Complexity: What is the time complexity of the above functions?
 */

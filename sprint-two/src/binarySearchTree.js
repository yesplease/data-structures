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



};

binaryTreeMethods.depthFirstLog = function(){  //note: check argument


};



/*
 * Complexity: What is the time complexity of the above functions?
 */

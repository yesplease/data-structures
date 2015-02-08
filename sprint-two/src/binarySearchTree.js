var BinarySearchTree = function(value){
  var newNode = Object.create(binaryTreeMethods);
  newNode.value = value;
  newNode.left = null;
  newNode.right = null;
  newNode.depth = 0;
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
        currentRoot.right.depth = currentRoot.depth + 1;
      }
      currentRoot = currentRoot.right;
    }
    if(currentRoot.value > newValue){
      if(currentRoot.left === null){
        currentRoot.left = BinarySearchTree(newValue);
        currentRoot.left.depth = currentRoot.depth + 1;
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

binaryTreeMethods.breadthFirstSearch = function(node){
//store the current context in this as 'currentRoot'
  var currentRoot = this;
  var answer = [];
  var queue = [];
  var finalQueue = [];

  var addToBucket = function(node){
    if ( queue[node.depth] === undefined ){
      queue[node.depth] = [node.value];
    }
    else {
      queue[node.depth].push(node.value);
    }
  };

  var depthRecursiveSearch = function(node){
  addToBucket(node);
  if(node.left !== null){
    depthRecursiveSearch(node.left);
  }
  if(node.right !== null){
    depthRecursiveSearch(node.right);
    }
  };

  depthRecursiveSearch(currentRoot);

  finalQueue = queue.concat.apply(finalQueue, queue);
  console.log("This is finalQueue: ", finalQueue);
  console.log("Is finalQueue an array? ", Array.isArray(finalQueue));
  return finalQueue;




  //call depthRecursiveSearch

  //function:add to appropriate bucket (takes in node)
  //reads the .depth property
  //looks to a bigger storage array
    //if a bucket exists at that index for the storage array
      //push to that bucket
    //if not, create a bucket with this node value in it.





};




/*
 * Complexity: What is the time complexity of the above functions?
 */

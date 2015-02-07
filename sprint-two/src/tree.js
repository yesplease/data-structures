var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //push to the Tree's children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var answer = false;

  var innerRecursive = function(node){
    //control statement to check if node.value ==== target
    if(node.value === target){
      answer = true;
      //return;
    } else {
      // for(var i = 0; i < node.children.length; i++){
      //   innerRecursive(node.children[i]);
      // }
      _.each(node.children, function(element){
        innerRecursive(element);
      })
    }
      //yes set answer to true
      //return
    //else loop on node.children if they exist
      //call innerRecursive(node.children[i]);
  };

  innerRecursive(this);
  // console.log(this)
  return answer;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

  // // if (this.value === target){
  // //     answer = true;
  // //     console.log("value equals target");
  // //   }
  // // var answer = _.each(this.children, function(element, index, collection){
  // //   console.log("This is the value " , element.value);
  // //   console.log("This is the target ", target);
  // //   console.log("this dot children ", element);
  // //   return element.contains(target);
  // //   return false;

  //   var conRecu = function(val){

  //   }

  // });

  // console.log(answer);
  // return answer;
  // //does the value equal the target? y/n
  // //if y then return true
  // //if n then check if this.children.length > 0 y/n
  // //if y for each of the children call contains on this.children[something]
  // //if n then return false


  // var answer = false;
  // if(this.value === target){
  //   answer = true;
  // } else {
  //   _.each(this.children, function(element, index, collection){
  //     if (this.children.length !== 0){
  //       contains(this.children[])
  //     }
  //     }
  //     // _.each(element, function(value, key, collection){
  //     //   if(this.value === target){
  //     //     answer = true;
  //     //   }
  //     // })
  //   })
  // }
  // return answer;

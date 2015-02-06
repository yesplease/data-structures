var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){

    console.log('this is the value: ', value);
    var newNode = Node(value);
    // newNode.next = list.head;

    if (this.head === null){
      this.head = newNode;
      this.tail = newNode
    };

    this.tail.next = newNode;
    this.tail = newNode;
  }

  list.removeHead = function(){
    //this.head = this.head.next;
    //if this.head.next === null:
    //set this.head to null
    if(this.head.next === null){
      this.head = null;
    };
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target){
    if(){
      return false;
    } else {
      return true;
    }
    //look at head to see if it matches the target
    //if it does then return true
    //move head to tail
    //if at terminator
    //move head to tail
  };

  console.log(list);
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// //first instance
// {
//   list.a = {
//     node.value = 'a';
//     node.next = null;
//   }
//   list.head:'a'
//   list.tail:'a'
// }
// //second instance (adding b):
// {
//   list.a = {
//     node.value = 'a';
//     node.next = b;
//   },
//   list.b = {
//     node.value = 'b';
//     node.next = null;
//   }
//   list.head:'a'
//   list.tail:'b'
// }

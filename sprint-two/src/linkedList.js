var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
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
    if(this.head.next === null){
      this.head = null;
    };
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target){
    var checker = this.head;

    while (checker.value !== target){
      if (checker.next === null){
        return false;
      }
      checker = checker.next;
    }
    return true;
  };

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

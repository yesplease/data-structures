var Graph = function(value){
  this.world = {};
};

Graph.prototype.addNode = function(node){
  this.world[node] = [];
  this.value
  this.edge = [];
};

Graph.prototype.contains = function(node){
  for(var key in this.world){
    if(node === key){
      return true;
    }
  }
  return false
};

Graph.prototype.removeNode = function(node){
  for(var key in this.world){
    if(node === key){
      delete this.world[node];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.world[fromNode].length; i++ ){
   if (this.world[fromNode][i] === toNode) {
    return true;
   }
  }
  return false
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.world[fromNode].push(toNode);
  this.world[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var that = this;

  var remover = function(place1, place2){
    // console.log('This is place one: ', that.world)
    for(var i = 0; i < that.world[place1].length; i++){
      if(that.world[place1][i] === place2){
        that.world[place1].splice(i, 1);
      }
    }
  }
  remover(fromNode, toNode);
  remover(toNode, fromNode);
  // console.log('This is the world after remover: ', that.world)
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.world){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




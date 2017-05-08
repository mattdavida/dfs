function Cell(i,j) {
  this.i = i; //column number
  this.j = j; // row number
  this.walls = [true,true,true,true]; // top, right, bottom, left
  this.visited = false; //cells starts not visited.

  this.checkNeighbors = function() {
    var neighbors = [];
    var top = grid[index(i, j-1)];
    var right = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left = grid[index(i-1, j)];

    if(top && !top.visited) { //as long as top is a real thing and top has not been visited, then it can go into the array
      neighbors.push(top);
    }
    if(right && !right.visited) { //as long as right is a real thing and top has not been visited, then it can go into the array
      neighbors.push(right);
    }
    if(bottom && !bottom.visited) { //as long as bottom is a real thing and top has not been visited, then it can go into the array
      neighbors.push(bottom);
    }
    if(left && !left.visited) {  //as long as left is a real thing and top has not been visited, then it can go into the array
      neighbors.push(left);
    }

    if(neighbors.length > 0) {
      var r = floor(random(0,neighbors.length)); // choose a random value between zero and length of the array
      return neighbors[r];
    }
    else {
      return undefined;
    }

  }

  this.highlight = function() {
    var x= this.i*w;
    var y= this.j*w;
    noStroke();
    fill(0,100);
    rect(x,y,w,w);
  }

  this.show = function() {
    var x  = this.i*w; // column * w
    var y = this.j*w; // row * w
    stroke(255);
    if(this.walls[0]) {
        line(x,y,x+w,y); //top left wall
    }
    if(this.walls[1]) {
        line(x+w,y,x+w,y+w); //top right wall
    }
    if(this.walls[2]) {
        line(x+w,y+w,x,y+w); //bottom right wall
    }
    if(this.walls[3]) {
        line(x,y+w,x,y); //bottom left wall
    }
    if(this.visited) {
    noStroke();
    fill(0,255,255, 150);
    rect(x,y,w,w);
    }
  }
}

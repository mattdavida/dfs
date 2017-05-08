//Depth first Search
//Recursive Backtracker
var cols;
var rows;
var w = 40; //Width / height of each square
var grid = [];

function setup() {
  createCanvas(400,400);
  cols = Math.floor(width/w); //use floor to make sure we're dealing with integers.
  rows = Math.floor(height/w);

  for(var j=0; i<rows; j++) { //draw the grid
    for(var i=0; j<cols; i++) {
      var cell = new Cell[i][j];
      grid.push(cell);
    }
  }
}
function draw() {
  background(51);
  for(var i=0; i<grid.length; i++) {
    grid[i].show();
  }
}
function Cell(i,j) {
  this.i = i; //column number
  this.j = j; // row number

  this.show = function() {
    var x  = this.i * w;
    var y = this.j * w;
    stroke(255);
    noFill();
    rect(x,y,w,w)
}
}

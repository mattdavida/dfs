//Depth first Search
//Recursive Backtracker
//https://en.wikipedia.org/wiki/Maze_generation_algorithm
//CreditTo: https://github.com/CodingRainbow/Rainbow-Code/tree/master/challenges/CC_10_Maze_DFS_p5.js // Thanks for the tutorial!!!!
var cols;
var rows;
var w = 40; //Width / height of each square
var grid = [];
var current;

var stack = [];

function setup() {
  createCanvas(400,400);
  cols = floor(width/w); //use floor to make sure we're dealing with integers.
  rows = floor(height/w);
  //frameRate(5);

  for(var j=0; j<rows; j++) { // make 100 cell objects.// put them into an array
    for(var i=0; i<cols; i++) {
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }
    current = grid[0]; //start grid top left
}

function draw() { //draw the grid //show the grid
  background(51);
  for(var i=0; i<grid.length; i++) {
    grid[i].show();
  }
  current.visited = true;
  current.highlight();
      // STEP 1
  var next = current.checkNeighbors();
  if(next) {
    next.visited = true;

    //STEP 2
    stack.push(current);
    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  }
  else if(stack.length > 0){ //else if stack is not empty
    current = stack.pop();
  }
}

function index(i,j) {
  if(i < 0 || j < 0 || i > cols -1 || j > rows - 1) { //invalid index values..
    return -1;
  }
  else {
  return i + j * cols;
  }
}

function removeWalls(a,b) {
  var x = a.i - b.i;
  console.log(x);
  if(x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;

  }
  else if(x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  if(y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  }
  else if(y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }

}

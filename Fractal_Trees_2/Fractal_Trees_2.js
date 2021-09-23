
var root;
var tree = [];
var leaves = [];
var count = 0;
function setup() {
  createCanvas(400, 400);
  var begin = createVector(width/2, height);
  var end = createVector(width/2, height-100);
  root = new Branch(begin, end);

  tree[0] = root;
}

function mousePressed() {
  count+=1;
  for (var i = tree.length-1; i >= 0; i--) {
    if (!tree[i].hasBranches) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
      tree[i].hasBranches = true;
    }
  }
  
  if (count == 6){
     for (var i = 0; i<tree.length; i++) {
       if (!tree[i].hasBranches){
         var leaf = tree[i].end.copy();
         leaves.push(leaf);
       }
     }
  }
}

function draw() {
  background(51);

  for (var i=0; i<tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }
  
  //** should make leaves an object
  // Could then treat as particles that would fall with the wind, etc.
  for (var i =0; i<leaves.length; i++){
    fill(255,0,100,100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    
  }
}

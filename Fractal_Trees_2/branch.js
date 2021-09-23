function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.hasBranches = false;
  
  this.jitter = function() {
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }
  
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  
  this.branchA = function() {
    var newBranch = p5.Vector.sub(this.end, this.begin);
    newBranch.rotate(PI/6);
    newBranch.mult(0.67);
    newBranch = p5.Vector.add(newBranch, this.end)
    var right = new Branch(this.end, newBranch)
    
    return right;
  }
  
    this.branchB = function() {
    var newBranch = p5.Vector.sub(this.end, this.begin);
    newBranch.rotate(-PI/4);
    newBranch.mult(0.67);
    newBranch = p5.Vector.add(newBranch, this.end)
    var left = new Branch(this.end, newBranch)
    
    return left;
  }
}

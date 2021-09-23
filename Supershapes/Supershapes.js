//paulborke.net for different shape parameters
var n1 = .3, n2 = 1, n3 = 5;
var m = 5;
var a = 1, b = 1;
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,10,5,1);
}

function superShape(theta) {
  var r = 1;
  var part1 = pow(abs((1/a)*cos(theta * m/4)), n2);
  var part2 = pow(abs((1/b)*sin(theta * m/4)), n3);
  var part3 = pow(part1 + part2, 1/n1);
  
  if (part3 == 0){
    return 0;
  }
 
 return 1/part3; 
}
function draw() {
  m = slider.value();
  background(51);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  
  var scale = 100;
  totalPoints = 500; //Define number of points to divide by TWO_PI
  increment = TWO_PI/totalPoints; // divide to get an increment that adds up to TWO_PI evenly
  
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += increment){
    var r = superShape(angle);
    var x = r*cos(angle)*scale;
    var y = r*sin(angle)*scale;
    
    vertex(x, y);
  }
  endShape(CLOSE);
  
}

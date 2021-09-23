var angle = 0;
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, .01);
}


function draw() {
  angle = slider.value();
  background(51);
  
  len=100;
  stroke(255);
  
  translate(200, height);
  branch(100);
  
}

function branch(len) {
  if(len < 5){
   return 
  }
  
  line(0, 0, 0, -len);
  translate(0, -len); //translate to top of branch to draw next
  
  push(); // Need to use push/pop because the render state is not saved on the recursion stack.
  rotate(angle); // rotate for the next branch
  branch(len*0.67);
  pop();
  
  push();
  rotate(-angle);
  branch(len*0.67);
  pop();
 
}

//Things to try:
//Keep track of level and draw different stroke weight
// Angles are different among branches / different number of branches

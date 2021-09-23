var inc = 0.1;
var scl = 10; // vector for some amount of pixels
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield = []; // holds vectors from vector field to be applied to particles

function setup() {
  createCanvas(600, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  
  flowfield = new Array(rows*cols);
  
  for(var i=0; i<200; i++){
    particles[i] = new Particle();
  }
  
}


function draw() {
  //background(255);
  strokeWeight(1);
  zoff += 0.01;
  var yoff = 0;
  for (var y=0; y<rows; y++){
    var xoff = 0;
    for (var x = 0; x<cols; x++){
      var index = (x+y*cols);
      var angle = noise(xoff, yoff, zoff)*TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1); // how exact the particles will be to follow path
      flowfield[index] = v;
      xoff += inc;
      
      
      stroke(0, 100);
      push();
      translate(x*scl, y*scl);
      rotate(v.heading());
      //line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }
  
  for(var i=0; i<particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].edges(); // needs to be before show to update edges before drawing
    particles[i].show();
    particles[i].update();
    
    
  }

  fr.html(floor(frameRate()));
}

float x = 0.01;
float y = 0;
float z = 0;

float sigma = 10;
float rho = 28;
float beta = 8/3.0;

ArrayList<PVector> points = new ArrayList<>();

void setup(){
  size(800, 600, P3D);
  colorMode(HSB);
}

void draw() {
  background(0);
  
  float dt = 0.01;
  float dx = sigma*(y-x);
  float dy = x * (rho - z);
  float dz = x*y - beta*z;
  x += dx*dt;
  y += dy*dt;
  z += dz*dt;
  points.add(new PVector(x, y, z));
  
  noFill();
  translate(width/2, height/2);
  scale(5);
  
  float hue = 0;
  beginShape();
  for (PVector v: points){
    stroke(hue, 255, 255);
    vertex(v.x, v.y, v.z);
    
    // Create a vector to offset all points by
    // Gives a wiggle effect. Could make this more organic with perlin noise or a sine wave
    PVector offset = PVector.random3D();
    offset.mult(.1);
    v.add(offset);
    
    hue+=.1;
    if (hue > 255){
      hue = 0;
    }
  }
  endShape();
  //println(x,y,z);
 
}

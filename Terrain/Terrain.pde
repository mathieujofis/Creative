int cols, rows;
int scl = 20;
int w = 2000;
int h = 1600;
float[][] terrain;
float flying = 0;
void setup() {
  size(600, 600, P3D);

  cols = w/scl;
  rows = w/scl;
  terrain = new float[cols][rows];

}

void draw() {
  flying -=.1;
  float yOff = flying;
  for (int y = 0; y < rows; y++){
    float xOff = 0;
    for (int x = 0; x < rows; x++){
      terrain[x][y] = map(noise(xOff, yOff), 0, 1, -100, 50);
      xOff += .2;
    }
    yOff+=.2;
  }
  
  translate(width/2, height/2+50);
  rotateX(PI/3);
  translate(-w/2, -h/2);

  background(0);
  stroke(255);
  noFill();
  for (int y=0; y< rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x=0; x< cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}

public class Star{
  float x, y, z;
  float speed = 5.0;
  Star(){
   x = random(-width, width);
   y = random(-height, height);
   z = random(width);
  }
  
  void update() {
    z -= speed;
    
    if (z < 1){
       z = width;
       x = random(-width, width);
       y = random(-height, height);
    }
  }
  
  void show() {
    fill(255);
    noStroke();
    
    float starX = map(x/z, 0, 1, 0, width);
    float starY = map(y/z, 0, 1, 0, height);
    
    float radius = map(z, width, 0, 0, 8);
    ellipse(starX, starY, radius, radius);
  }
}

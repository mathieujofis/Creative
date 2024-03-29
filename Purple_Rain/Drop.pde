class Drop{
  float x = random(width), y=random(-500, -50);
  float z = random(0, 20);
  // Z is mapped across code to give parallax effect
  float ySpeed = map(z, 0, 20, 4, 8);
  float len = map(z, 0, 20, 10, 20);
  void fall(){
    y += ySpeed;
    ySpeed += map(z, 0, 20, 0, .2);
    if (y > height){
      y = random(-200, 200);
      ySpeed = map(z, 0, 20, 4, 8);
    }
  }
  
  void show() {
    float thick = map(z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(x, y, x, y+len);
  }
}

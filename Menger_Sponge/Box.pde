class Box{
  PVector pos;
  float r;
  
 Box(float x, float y, float z, float r){
   pos = new PVector(x, y, z);
   this.r = r;
 }
 
 ArrayList<Box> generate(){
   ArrayList<Box> boxes = new ArrayList<>(); 
   for (int i=-1; i<2; i++){
     for (int j=-1; j<2; j++){ 
       for (int k=-1; k<2; k++){
         //Don't add a box unless the combined coordinates add up to more than 1
         //(Every point that is missing a box has at least 2 coordinates that are 0)
         int sum = abs(i) + abs(j) + abs(k);
        
         float newR = r/3;
         float x = pos.x+i*newR;
         float y = pos.y+j*newR;
         float z = pos.z+k*newR;
        
         if (sum > 1){
           Box b = new Box(x, y, z, newR);
           boxes.add(b);
         }
       }
     }
   }
   return boxes;
 }
 
 void show() {
   pushMatrix();
   translate(pos.x, pos.y, pos.z);
   fill(255);
   box(r);
   popMatrix();
 }
}

function setup() {
  createCanvas(500, 500);
   
}

function draw() {
  background(0);
  
  if (mouseIsPressed);{
  let levels = round(map(mouseX, 0, width, 0, 8));
  drawCircle(10, width /2, 250, levels);}
   stroke(300, 0, 0)
  
   if (mouseIsPressed);{
  if (mouseIsPressed) {
fill(random(0, 300))
} else {
fill(200, 30);
}
   }
}

  
 

 function drawCircle(x, y, radius, levels){
  circle(x, y, radius);
  if(levels > -7){
    drawCircle(x-radius/1.5, y, radius/1.5, levels-3);
    drawCircle(x+radius/1.5, y, radius/1.5, levels-3);
    
}
  
  

  }

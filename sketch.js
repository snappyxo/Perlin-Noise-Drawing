let currentX, currentY;
let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(600, 400);
  background(0);
//   currentX = random(width/2-20, width/2+20);
//   currentY = random(height/2-20, width/2+20);
  
  currentX = random(0, width);
  currentY = random(0, height);
}

function draw() {
  
  let prevX = currentX;
  let prevY = currentY;
  
//   let deltaX = random(-20, 20);
//   let deltaY = random(-20, 20);
  
  let deltaX = noise(xoff);
  let deltaY = noise(yoff);
  
  deltaX = map(deltaX, 0, 1, -20, 20);
  deltaY = map(deltaY, 0, 1, -20, 20);
  
  
  currentX = prevX + deltaX;
  currentY = prevY + deltaY;
  
  //stroke(random(0,255),random(0,255),random(0,255));
  stroke(random(0,255));
  strokeWeight(8.0);
  line(prevX, prevY, currentX, currentY);
  
  
  if ((currentX < 0) || (currentX > width) || (currentY < 0) || (currentY > height))
    {
    currentX = random(0, width);
    currentY = random(0, height);
    }
  
  console.log(currentX,currentY);
  
  xoff += 0.05;
  yoff += 0.05; 
  
 
  
}
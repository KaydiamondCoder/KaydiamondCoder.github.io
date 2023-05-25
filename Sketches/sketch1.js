function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //The Head
  fill('red')
  ellipse(200,200,300,300);
  
  //The Eyes
  fill(0,0,0);
  stroke(255,255,255);
  strokeWeight(10)
  circle(160,140,40);
  circle(230,140,40);
  
  //The nose
  fill('DarkOrange')
  noStroke()
  triangle(190,168,222,229,140,229);
  
  //Mouth
  fill('black')
  arc(200,250,100,150,0,PI);
  
  //Line
  fill('black')
  ellipse(143,92,54,2)
  ellipse(143,102,5)
  ellipse(219,90,54,2)
 
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}
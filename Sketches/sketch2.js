function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  
  if (mouseX > 0 && mouseX <= 100) {
    background(241, 87, 183);
    fill('cornflowerblue');
    ellipse(mouseX, mouseY, 40, 40);
    text('Mind The',0,100)
    textSize(22)
    line(100, 0, 100, 300);
  line(200, 0, 200, 300);
    line(300,0,300,300)
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    background(167, 250, 13 )
    fill(168,32,182);
    ellipse(mouseX, mouseY, 40, 40);
    text('Buisness That',100,100)
    textSize(22)
    line(100, 0, 100, 300);
  line(200, 0, 200, 300);
    line(300,0,300,300)
  
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    background(122, 11, 11)
    fill('lightpink');
    ellipse(mouseX, mouseY, 40, 40);
    text('Pays You',190,100)
    textSize(25)
    line(100, 0, 100, 300);
  line(200, 0, 200, 300);
    line(300,0,300,300)
  }
  else if (mouseX > 300 && mouseX <= 400) {
    background('beige')
    fill('black');
    ellipse(mouseX, mouseY, 40, 40);
    text('👋', 300,200);
    textSize(50)
     line(100, 0, 100, 300);
  line(200, 0, 200, 300);
    line(300,0,300,300)
  }
}








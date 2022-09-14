function setup() {
  createCanvas(1920, 1080);

  //frameRate(24);
}

function draw() {
  background(0);
  translate(0, 0);
  noFill();
  stroke(255);

  push();

  push(); //main artboard

  rect(0, 0, 1400, 750);

  fill(255);
  noStroke();
  textSize(100);
  text("YELIN MOON", 200, 400);
  pop();

  push(); //3D button
  rect(1400, 0, 520, 250);
  pop();

  push(); //Interation
  rect(1400, 250, 520, 250);
  pop();

  push(); //
  rect(1400, 500, 520, 250);
  pop();

  push();
  rect(0, 750, 1920, 330);
  pop();

  pop();

  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, 80);
  textSize(30);
  text("Hi", mouseX, mouseY);
}

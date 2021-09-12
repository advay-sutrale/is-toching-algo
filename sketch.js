var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="green"

 fixedRect=createSprite(200,200,50,100)
 fixedRect.shapeColor="green"

 fixedRect.debug=true
 movingRect.debug=true
}

function draw() {
  background(0);
  movingRect.y=mouseY
  movingRect.x=mouseX

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  drawSprites();
}
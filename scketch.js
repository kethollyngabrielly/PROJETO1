function setup(){
  createCanvas(1000, 800);
  background("white");
}

function draw(){
  stroke("white")
  fill("black");
  
  if (mouseIsPressed){
    circle (mouseX,mouseY,20,35);
  }
}

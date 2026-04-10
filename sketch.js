let drops = [];
let y;

function setup() {

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  for(let i = 0; i < 5000; i++){
    let d = new Drop();
    drops.push(d);
  }

}

function draw() {
  background(220);

  //circle(windowWidth-50, windowHeight-50, 10);

  //ground dimensions (not used)
  //quad(0, windowHeight, windowWidth, windowHeight, (11*windowWidth)/20, (11*windowHeight)/20, (9*windowWidth/20), (11*windowHeight)/20);
     
  gradients()
 
  wallBackground();
  
  centerSquare();
  
  gridCurves()
  
  for(let i = 0; i < drops.length; i++){
    drops[i].display();
    drops[i].move();
  }
  
  centerSquare();
  
}

class Drop{
  
  constructor(){
    this.x = random(windowWidth);
    this.y = random(-windowHeight, 0);
    
    this.yspeed = random(1, 5);
    
    this.l = random(1, 20);

    
  }
  
  display() {
    stroke(255, 255, 255, 60);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y + this.l);
  }
  
  move(){
    this.y = this.y + this.yspeed;
    
    if(this.y > height){
      this.y = -this.l;
    }
  }
}

function gradients(){
    //gradient floor
  for (let j = windowHeight; j > (11 * windowHeight) / 20; j -= 8) {
    
    fill((j - (11 * windowHeight) / 20) * 0.27, 0, 0);    
    noStroke();
    
    rect(0, j, windowWidth * 2, 8);
  }
  
  //gradient ceiling
  for (let j = 0; j < (9 * windowHeight) / 20; j += 8) {
    fill((((9 * windowHeight) / 20) - j) * 0.27, 0, 0);
    noStroke();
    rect(0, j, windowWidth * 2, 8);
  }
}

function wallBackground(){
    fill(0);
    quad(0, 0, 0, windowHeight, (9*windowWidth)/20, (11*windowHeight)/20, (9*windowWidth/20), (9*windowHeight)/20);
    quad(windowWidth, 0, windowWidth, windowHeight, (11*windowWidth)/20, (11*windowHeight)/20, (11*windowWidth/20), (9*windowHeight)/20);
}

function centerSquare(){
  stroke(255);
  strokeWeight(0.2);
  fill(0);
  rect(windowWidth/2, windowHeight/2, windowWidth/10, windowHeight/10);
}

function gridCurves(){
  i = 0;
  while(i < windowHeight){
    stroke(180);
    
    line(0, i, i, windowHeight);
    line(windowWidth, i, i, 0); 
    
    i+=10;
  }
}
  
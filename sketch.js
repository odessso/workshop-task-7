let walkers = [];
let numWalkers = 70;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  background(100, 170, 200);
  fill(100, 170, 255); 
  noStroke(); 
  rect(0, 0, width, height / 2);

 
  fill(255, 192, 203); 
  rect(0, height / 2, width, height / 2);
  
  
  for (let i = 0; i < numWalkers / 2; i++) {
    let x = random(0, width);
    let y = random(0, height / 2);
    walkers.push(new Walker(x, y, random(150, 255), random(150, 200), random(200, 255), 10, 12, 0, height / 2)); // Adjusted walker colors to be visible against blue, removed green
  }

  
  for (let i = 0; i < numWalkers / 2; i++) {
    let x = random(0, width);
    let y = random(height / 2, height);
    walkers.push(new Walker(x, y, random(100, 150), random(100, 150), random(150, 255), 10, 12, height / 2, height)); // Adjusted walker colors to be visible against pink, removed green
  }
}

function draw() {
  for (let walker of walkers) {
    walker.step();
    walker.show();
  }
}

class Walker {
  constructor(x, y, r, g, b, speed, size, minY, maxY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed; 
    this.size = size; 
    this.minY = minY; 
    this.maxY = maxY; 
  }

  step() {
    if (this.y < this.minY || this.y > this.maxY) {
      this.x = random(0, width);
      this.y = random(this.minY, this.maxY);
    }
    this.x += random(-this.speed, this.speed); 
    this.y += random(-this.speed, this.speed); 
  }

  show() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size); 
  }
}



let baby;
let babyImg;
let sawImg;
let sawImg2;
// let bImg;
let saws = [];

function preload() {

  babyImg = loadImage('baby.png');
  sawImg = loadImage('Saw1.png');
  sawImg2 = loadImage('Saw2.png');
  // bImg = loadImage('playground.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(64);
  textAlign(CENTER, CENTER);
  baby = new Baby();

}



function keyPressed() {
  if (key == ' ') {
    baby.jump();
  }
}



function draw() {
  if (random(1) < 0.005) {
    saws.push(new Saw());
  }

  background('rgba(10%,30%,50%,0.3)');
  for (let s of saws) {
    s.move();
    s.show();
    s.show2();
    if (baby.hits(s)) {
      fill(255, 30, 53);
      text('GAME OVER', width / 2, height / 2);
      noLoop();
    }
  }


  baby.show();
  baby.move();
}

class Saw {
  constructor() {
    this.r = 55;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 7;
  }

  show() {
    image(sawImg, this.x, this.y, this.r, this.r);
  }
  
  show2() {
    image(sawImg2, this.x, this.y, this.r, this.r);
  }
}
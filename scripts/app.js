class Bird {
  constructor() {
    this.legs = 2;
    this.wings = 2;
    this.beak = 1;
  }
}


class BlueJay extends Bird {
  constructor() {
    this.color = "blue";
  }
}

function createBird() {
  let bird = new BlueJay();
  console.log(bird);
} 
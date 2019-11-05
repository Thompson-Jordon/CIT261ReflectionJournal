let canvas = document.getElementById("myCanvas");
let context = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));
let blockW = 30;
let boardW = 240;

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    context.fillStyle = "red";
    context.moveTo(0, blockW * j);
    context.lineTo(boardW, blockW * j);
    context.stroke();

    context.moveTo(blockW * i, 0);
    context.lineTo(blockW * i, boardW);
    context.stroke();
    let left = 0;

    // fill in every other square
    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b += 2) {
        startX = b * blockW;
        if (a % 2 == 0) {
          startX = (b + 1) * blockW;
          context.fillRect(startX + left, (a * blockW), blockW, blockW);
        } else {
          context.fillRect(startX + left, (a * blockW), blockW, blockW);
        }
      }
    }
  }
}
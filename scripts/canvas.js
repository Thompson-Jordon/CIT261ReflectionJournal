let canvas = /** @type {HTMLCanbasElement} */ (document.getElementById('canvas'));
//context = document.getElementById('canvas').getContext("2d");
let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;

function addClick(x, y, dragging) {
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
}

function redraw() {
   // clears the canvas
   canvas.clearRect(0,0,canvas.canvas.width, canvas.canvas.height);

   canvas.str
}

canvas.mousedown(function(e) {
   let mouseX = e.pageX - this.offsetLeft;
   let mouseY = e.pageY - this.offsetTop;

   paint = true;
   addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
   redraw();
});

canvas.mousemove(function(e) {
   if(paint) {
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      redraw();
   }
});

canvas.mouseup(function(e) {
   paint = false;
});

canvas.mouseleave(function(e){
   paint = false;
});

// function for onload
function loadAlert() {
  window.alert("Your page has loaded.");
}

// get buttons
let click = document.getElementById("click");
let blur = document.getElementById("blur");
let touch = document.getElementById("touch");
let mouseup = document.getElementById("mouseup");
let mouse = document.getElementById("mouse");

click.addEventListener("click", () => {
  window.alert("You have clicked the onclick button.");
});

blur.addEventListener("blur", () => {
  window.alert("You have blured the onblur button.");
});

touch.addEventListener("touchstart", () => {
  window.alert("You have touched the ontouch button.");
});

mouseup.addEventListener("mouseup", () => {
  window.alert("You have double clicked the ondblclick button.");
});

mouse.addEventListener("mouseover", () => {
  mouse.style.background = "Purple";
});
mouse.addEventListener("mouseout", () => {
  mouse.style.background = "green";
});

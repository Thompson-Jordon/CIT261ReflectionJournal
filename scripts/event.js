// function for onload
function loadAlert() {
   window.alert("Your page has loaded.");
}

// get buttons
let click = document.getElementById("click");
let blur = document.getElementById("blur");
let touch = document.getElementById("touch");
let dblclick = document.getElementById("dblclick");
let mouseover = document.getElementById("mouseover");

click.addEventListener("click", () => {
   window.alert("You have clicked the onclick button.");
});

blur.addEventListener("blur", () =>{
   window.alert("You have blured the onblur button.");
});

touch.addEventListener("touchstart", () =>{
   window.alert("You have touched the ontouch button.");
});

dblclick.addEventListener("dblclick", () => {
   window.alert("You have double clicked the ondblclick button.");
});

function changeColor() {
   let btn = document.getElementById("mouseover");
   btn.style.backgroundColor = "purple";
};
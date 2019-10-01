//DOM Topic Functions
function makeElement() {
   document.getElementById("btn1");
   var btn = document.createElement("blockquote");
   btn.innerHTML = "You have created a new element";
   btn1.parentNode.appendChild(btn);
}

function putBefore() {
   var btn2 = document.getElementById("btn2");
   var before = document.getElementById("myDiv");
   var btn = document.createElement("blockquote");
   btn.innerHTML = "You have created a new element";
   before.insertBefore(btn, btn2);
}

function takeAway() {
   var list = document.getElementById("myList");
   list.removeChild(list.childNodes[0]);
}
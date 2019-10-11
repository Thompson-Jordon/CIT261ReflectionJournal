//DOM Topic Functions
function makeElement() {
   document.getElementById("btn1");
   let btn = document.createElement("blockquote");
   btn.innerHTML = "You have created a new element";
   btn1.parentNode.appendChild(btn);
}

function putBefore() {
   let btn2 = document.getElementById("btn2");
   let before = document.getElementById("myDiv");
   let btn = document.createElement("blockquote");
   btn.innerHTML = "You have created a new element";
   before.insertBefore(btn, btn2);
}

function remove() {
   let list = document.getElementById("myList");
   list.removeChild(list.children[0]);
}
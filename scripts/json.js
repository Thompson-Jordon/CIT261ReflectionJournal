let obj;

//Function to parse json
function parseJSON() {
  let text =
    '{"ball": {"color": "green", "size": "small", "typeOf": "soccer"}}';
  obj = JSON.parse(text);
  let story = `Jimmy loves to play ${obj.ball.typeOf} with his ${obj.ball.size} ${obj.ball.color} ball.`;

  //place story in html
  document.getElementById("story").innerHTML = story;
}

function makeString() {
   let text = JSON.stringify(obj);

   //display string
   document.getElementById("string").innerHTML = text;
}
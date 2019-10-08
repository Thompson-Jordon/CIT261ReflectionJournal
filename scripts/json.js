var obj;

//Function to parse json
function parseJSON() {
  var text =
    '{"ball": {"color": "green", "size": "small", "typeOf": "soccer"}}';
  obj = JSON.parse(text);
  var story = `Jimmy loves to play ${obj.ball.typeOf} with his ${obj.ball.size} ${obj.ball.color} ball.`;

  //place story in html
  document.getElementById("story").innerHTML = story;
}

function makeString() {
   var text = JSON.stringify(obj);

   //display string
   document.getElementById("string").innerHTML = text;
}
//Function to demonstrate the use of methods
function displayMessage() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  let person = new Person(firstName, lastName);

  //run method here
  document.getElementById("message").innerHTML = person.getMessage();
};

//Functions for JavaScriptObject.html page
class Person  {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getMessage() {
    this.message = `Hello ${this.firstName} ${this.lastName}!`;
    return this.message;
  }
};

class Bird {
  constructor() {
    this.legs = 2;
    this.wings = 2;
    this.beak = 1;
  }
}

class BlueJay extends Bird {
  constructor() {
    super();
    this.color = "blue";
  }
}

function createBird() {
  let bird = new BlueJay();
  console.log(bird);
} 
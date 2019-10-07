//Function to demonstrate the use of methods
function displayMessage() {
   var firstName = document.getElementById("firstName").value;
   var lastName = document.getElementById("lastName").value;
   person.firstName = firstName;
   person.lastName = lastName;

   //run method here
   person.setMessage();
   document.getElementById("message").innerHTML = person.message;
};

//Functions for JavaScriptObject.html page
const person = {
  firstName: 'john',
  lastName: 'doe',
  message: '',
  setMessage: function() {
    this.message = "Hello " + this.firstName + " " + this.lastName + "!";
  }
};
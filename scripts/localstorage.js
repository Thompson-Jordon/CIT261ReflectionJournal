//You can set a variable to your local storage
let myStorage = window.localStorage;
let tempStorage = window.sessionStorage;

document.getElementById("store").value = myStorage.username;

function storeUsername() {
  let username = document.getElementById("store").value;
  let key = document.getElementById("key").value;
  let val = document.getElementById("value").value;
  //store username is localStorage
  myStorage.username = username;
  myStorage.setItem(key, val);
}

function removeUsername() {
  //Remove username from long term history
  myStorage.removeItem.username;
}

function clearStorage() {
  myStorage.clear();
}

let sports = ["Soccer", "Football", "Basketball", "Volleyball"];

function storeSports() {
  myStorage.sports = JSON.stringify(sports);
}
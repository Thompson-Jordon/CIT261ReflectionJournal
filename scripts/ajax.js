const key = "566212c3f3fa2dd43a6047055529f569";

function getWeather() {
  let city = document.getElementById("city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${key}`;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if ((this.readyState = 4 && this.status == 200)) {
      const obj = JSON.parse(this.responseText);
      document.getElementById("location").innerHTML = city;
      document.getElementById(
        "temp"
      ).innerHTML = `Current Temperature: ${obj.main.temp} °F`;
    }
  };
  xhttp.open("POST", url, true);
  xhttp.send();
}

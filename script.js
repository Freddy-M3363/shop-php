document.getElementById("location-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var locationInput = document.getElementById("location-input").value;

if (locationInput.trim() === "") {
    const success =(position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude+" "+ longitude);

    }
    const error =()=>{
        status.textcontent = "unable to connect";
    }
    navigator.geolocation.getCurrentPosition(success, error);

    locationInput = defaultLocation;
}
    var xhr = new XMLHttpRequest();
   
     var apiKey = '80f69bd173df46efb01194636242203';

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            displayWeather(data);
        }
    };
    

var url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + encodeURIComponent(locationInput);

xhr.open("GET", url, true);

//xhr.open("GET", "http://api.weatherapi.com/v1/current.json?key==" + apiKey + "&q=" + encodeURIComponent(locationInput), true);
//xhr.open("GET", "http://api.weatherapi.com/v1/current.json?key=80f69bd173df46efb01194636242203&q=" + encodeURIComponent(locationInput), true);

    xhr.send();
});

function displayWeather(data) {
    var weatherDataDiv = document.getElementById("weather-data");
    weatherDataDiv.innerHTML = "<p>Location: " + data.location.name + ",   " + data.location.country + "</p>";   
    weatherDataDiv.innerHTML += "<p>Temperature: " + data.current.temp_c + "°C</p>";
    weatherDataDiv.innerHTML += "<p>Cloud: " + data.current.condition.text + "</p>";
    weatherDataDiv.innerHTML += "<p>Time: " + (data.current.is_day == 1 ? "Day Time" : "Night Time") + "</p>"
}


document.getElementById("travel").addEventListener("click", buttonClicked);

function buttonClicked() {
    var traveler = document.getElementById("city_input").value;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=${traveler}`)
        .then((response) => response.json())
        .then((data) => {
            var info = data;
            console.log(info);
            console.log("Location: " + info.location.name); 
            console.log("Region: " + info.location.region);
            console.log("Country: " + info.location.country);
            console.log("Local Time: " + info.location.localtime);
            console.log("Temperature: " + info.current.temp_c + "°C"); 
            console.log("Feels Like Temperature (°C): " + info.current.feelslike_c + "°C");
            console.log("Forecast Temperature (°C): " + info.forecast.forecastday[0].day.avgtemp_c + "°C");
            console.log("Sunset: " + info.forecast.forecastday[0].astro.sunset);
            console.log("Sunrise: " + info.forecast.forecastday[0].astro.sunrise);
            console.log("icon: " + info.current.condition.icon);
            console.log("Wind Speed: " + info.current.condition.wind_kph);
            console.log("Humidity Level: " + info.current.condition.humidity);
            console.log("Weather description: " + info.current.condition.text); 
        })
        .catch((error) => console.error('Error fetching the data:', error));
}

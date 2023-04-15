var apikey = "05e883ab5e1a5aa9dbb8f6d3c975191f";
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
var textInput = document.querySelector(".text");
var city = textInput.value;
var days = document.getElementById("today")
var futureDays = document.getElementById("future")
var futureDays1 = document.getElementById("future1")
var futureDays2 = document.getElementById("future2")
var futureDays3 = document.getElementById("future3")
var futureDays4 = document.getElementById("future4")



var searchButton = document.querySelector(".searchContainer");

console.log(textInput);

// Seach button 
searchButton.addEventListener("submit", function(event) {
    event.preventDefault();
    var city = textInput.value;

    console.log("this button works");
    // console.log(textInput.value);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
        var todayForecast = document.createElement("div");
        todayForecast.textContent = data.city.name;
        days.appendChild(todayForecast);

        localStorage.setItem("City",JSON.stringify(city));

        var date = document.createElement("p");
        date.textContent = "Date & Time: " + data.list[0].dt_txt;
        todayForecast.appendChild(date);

        var icon = document.createElement("p");
        icon.textContent = "Icon: " + data.list[0].weather[0].icon;
        todayForecast.appendChild(icon);

        var temp = document.createElement("p");
        temp.textContent = "Temperture: " + data.list[0].main.temp + "F";
        todayForecast.appendChild(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[0].main.humidity;
        todayForecast.appendChild(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind-Speed: " + data.list[0].wind.speed;
        todayForecast.appendChild(windSpeed);
        
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apikey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       
        // Next day forecast 
        var todayForecast = document.createElement("div");
        todayForecast.textContent = data.city.name;
        futureDays.appendChild(todayForecast);

        var date = document.createElement("p");
        date.textContent = "Date & Time: " + data.list[3].dt_txt;
        todayForecast.appendChild(date);

        var icon = document.createElement("p");
        icon.textContent = "Icon: " + data.list[3].weather[0].icon;
        todayForecast.appendChild(icon);

        var temp = document.createElement("p");
        temp.textContent = "Temperture: " + data.list[3].main.temp + "F";
        todayForecast.appendChild(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[3].main.humidity;
        todayForecast.appendChild(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind-Speed: " + data.list[3].wind.speed;
        todayForecast.appendChild(windSpeed);
        // day 2 forecast
        var todayForecast = document.createElement("div");
        todayForecast.textContent = data.city.name;
        futureDays1.appendChild(todayForecast);

        var date = document.createElement("p");
        date.textContent = "Date & Time: " + data.list[6].dt_txt;
        todayForecast.appendChild(date);

        var icon = document.createElement("p");
        icon.textContent = "Icon: " + data.list[6].weather[0].icon;
        todayForecast.appendChild(icon);

        var temp = document.createElement("p");
        temp.textContent = "Temperture: " + data.list[6].main.temp + "F";
        todayForecast.appendChild(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[6].main.humidity;
        todayForecast.appendChild(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind-Speed: " + data.list[6].wind.speed;
        todayForecast.appendChild(windSpeed);
        // Day 3 forcast
        var todayForecast = document.createElement("div");
        todayForecast.textContent = data.city.name;
        futureDays2.appendChild(todayForecast);

        var date = document.createElement("p");
        date.textContent = "Date & Time: " + data.list[6].dt_txt;
        todayForecast.appendChild(date);

        var icon = document.createElement("p");
        icon.textContent = "Icon: " + data.list[6].weather[0].icon;
        todayForecast.appendChild(icon);

        var temp = document.createElement("p");
        temp.textContent = "Temperture: " + data.list[6].main.temp + "F";
        todayForecast.appendChild(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[6].main.humidity;
        todayForecast.appendChild(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind-Speed: " + data.list[6].wind.speed;
        todayForecast.appendChild(windSpeed);
         // Day 4 forcast
         var todayForecast = document.createElement("div");
         todayForecast.textContent = data.city.name;
         futureDays3.appendChild(todayForecast);
 
         var date = document.createElement("p");
         date.textContent = "Date & Time: " + data.list[6].dt_txt;
         todayForecast.appendChild(date);
 
         var icon = document.createElement("p");
         icon.textContent = "Icon: " + data.list[6].weather[0].icon;
         todayForecast.appendChild(icon);
 
         var temp = document.createElement("p");
         temp.textContent = "Temperture: " + data.list[6].main.temp + "F";
         todayForecast.appendChild(temp);
 
         var humidity = document.createElement("p");
         humidity.textContent = "Humidity: " + data.list[6].main.humidity;
         todayForecast.appendChild(humidity);
 
         var windSpeed = document.createElement("p");
         windSpeed.textContent = "Wind-Speed: " + data.list[6].wind.speed;
         todayForecast.appendChild(windSpeed);
          // Day 5 forcast
        var todayForecast = document.createElement("div");
        todayForecast.textContent = data.city.name;
        futureDays4.appendChild(todayForecast);

        var date = document.createElement("p");
        date.textContent = "Date & Time: " + data.list[6].dt_txt;
        todayForecast.appendChild(date);

        var icon = document.createElement("p");
        icon.textContent = "Icon: " + data.list[6].weather[0].icon;
        todayForecast.appendChild(icon);

        var temp = document.createElement("p");
        temp.textContent = "Temperture: " + data.list[6].main.temp + "F";
        todayForecast.appendChild(temp);

        var humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + data.list[6].main.humidity;
        todayForecast.appendChild(humidity);

        var windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind-Speed: " + data.list[6].wind.speed;
        todayForecast.appendChild(windSpeed);
        
    })
})







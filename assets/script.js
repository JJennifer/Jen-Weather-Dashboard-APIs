var apikey = "05e883ab5e1a5aa9dbb8f6d3c975191f";
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`
var city



var searchButton = document.querySelector(".searchContainer");
var textInput = document.querySelector(".text ");
console.log(textInput);

searchButton.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("this button works");
    console.log(textInput.value);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${"city"}&appid=05e883ab5e1a5aa9dbb8f6d3c975191f`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.city.name);
        console.log(data.list.dt_txt);
        console.log(data.list[5].main.temp);
        console.log(data.list[5].main.humidity);
        console.log(data.list[5].wind.speed);
        console.log(data.list[5].weather[3]);
    })

})





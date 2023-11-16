fetch('http://api.weatherstack.com/current?access_key=97d15e7c90db23a58c0bc6437a507d1f&query=Bozeman')
            .then(res=>res.json())
            .then(displayWeather)

function displayWeather(response) {
    //alert(response["current"]["temperature"])
    // https://weatherstack.com/documentation <-- for API documention
}
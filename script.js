// const apiKey = "831242e21b4d392b3dd409da96e46694";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWether(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);



//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// }


// searchBtn.addEventListener("click", ()=>{
//     checkWether(searchBox.value);
// })






document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "831242e21b4d392b3dd409da96e46694";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    // Check if elements are found before proceeding
    if (!searchBox || !searchBtn) {
        console.error("Search elements not found!");
        return; // Exit if the elements are missing
    }

    async function checkWeather(city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            // Update the UI with the weather data
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            // Weather condition icon logic using if-else if
            const weatherCondition = data.weather[0].main.toLowerCase();
            const weatherIcon = document.querySelector(".wether-icon");

            document.querySelector(".weather").style.display = "block";

            if (weatherCondition === "clear") {
                weatherIcon.src = "image/clear.png"; 
            } else if (weatherCondition === "clouds") {
                weatherIcon.src = "image/clouds.png";
            } else if (weatherCondition === "rain") {
                weatherIcon.src = "image/rain.png"; 
            } else if (weatherCondition === "snow") {
                weatherIcon.src = "image/snow.png";
            } else if (weatherCondition === "thunderstorm") {
                weatherIcon.src = "image/Thunderstorm.png"; 
            } else if (weatherCondition === "drizzle") {
                weatherIcon.src = "image/drizzle.png";
            } else {
                weatherIcon.src = "image/clear.png"; 
            }
        } catch (error) {
            console.error("Error fetching weather data: ", error);
        }
    }


    

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});

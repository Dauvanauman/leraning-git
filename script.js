let searchbutton  = document.querySelector(".searchButton")
let all_content_weather = document.querySelector(".all-weather-content");
let inputvalue = document.querySelector(".searchInput");
let Api_key = "d5d1856e7486f0b14eb2112fcf4f0981";
let tempreture = document.querySelector(".tempreture");
let humanity = document.querySelector(".humanity")
let city = document.querySelector(".city")
let windspeed = document.querySelector(".wind")




searchbutton.addEventListener("click", (e) => {
    const inputValue = inputvalue.value.trim(); // Trim to remove any leading/trailing whitespace

    if (inputValue === "") {
        alert("Please enter a city name.");
        return; // Exit the function if the input is empty
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${Api_key}`)
        .then((res) => {
            if(!res.ok){
                all_content_weather.classList.remove("show-all-weather-content")
            }
            else if (res.ok){
                all_content_weather.classList.toggle("show-all-weather-content")
                return res.json()
                
            }
        })
         .then((data) => {
            console.log(data)
            tempreture.innerText = data.main.temp
            humanity.innerText = data.main.humidity
            city.innerText = data.name.toUpperCase();
            windspeed.innerText = data.wind.speed
            console.log(data.wind.speed)
        }) 
        .catch((error) => {
            console.error('Error:', error);
            alert('Invalid city name. Please enter a valid city.');
        });
})


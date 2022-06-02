import {currentWeather, hourlyWeatherr} from './weather-api.js';
import init from './index.js'

function updateCurrent(data) {

    //selects elements in DOM
    const city = document.querySelector('#location');
    const time = document.querySelector('#time');
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#humidity');
    const description = document.querySelector('#description');
    const image = document.querySelector('#current-image');
    //gets current time
    let today = new Date();
    let timeVal = today.getHours() + ":00";

    console.log(data);
    city.textContent = data.name;
    city.textContent += ', ' + data.sys.country;
    temp.textContent = `${data.main.temp}°C`;
    time.textContent = timeVal;
    humidity.textContent = 'humidity: ' + data.main.humidity + '%';
    description.textContent = data.weather[0].description;
    image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

}

function updateHourlyAll(data) {
    updateHourly(data.list[0], 0);
    updateHourly(data.list[1], 6)
    updateHourly(data.list[2], 12)
    updateHourly(data.list[3], 18)
    updateHourly(data.list[4], 24)

}

function updateHourly(data, time) {
    const image = document.getElementById(`${time}-image`)
    const temp = document.getElementById(`${time}-temp`)
    const current = document.getElementById(`${time}-time`)

    let today = new Date();
    let currentTime = parseInt(today.getHours()) + time;
    if (currentTime > 24) {
        currentTime -= 24;
    }
    let timeVal = String(currentTime) + ":00";

    image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    temp.textContent = `${data.main.temp}°C`;
    current.textContent = timeVal;
}

function updateSearch() {

    const form = document.querySelector('form')
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const newCity = document.querySelector('#city-input').value;
        console.log(newCity);
        init(newCity);
    })

}

export {updateCurrent, updateHourlyAll, updateSearch};
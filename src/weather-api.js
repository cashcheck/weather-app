//helper function to get location object which contains coordinates

async function getLocation(location) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=ce92be4a3110a7ba76071466972fbc76`, {mode: 'cors'});
    const locationData = await response.json();
    return locationData;
}

//function to get weather data based on location string

async function currentWeather(location) {

    //calls getLocation helper method and assigns coordinates
    const loc = await getLocation(location);
    const lat = await loc[0].lat, 
          lon = await loc[0].lon;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce92be4a3110a7ba76071466972fbc76&units=metric`, {mode: 'cors'});
    const weather = await response.json()
    return weather;
}

async function hourlyWeather(location) {

    //calls getLocation helper method and assigns coordinates
    const loc = await getLocation(location);
    const lat = await loc[0].lat, 
          lon = await loc[0].lon;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ce92be4a3110a7ba76071466972fbc76&units=metric`, {mode: 'cors'});
    const weather = await response.json()
    return weather;
}

export {currentWeather, hourlyWeather};
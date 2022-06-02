import './style.css';
import {currentWeather, hourlyWeather} from './weather-api.js';
import {updateCurrent, updateHourly, updateHourlyAll} from './dom.js'


async function init(location) {
    const data = await currentWeather(location);
    await updateCurrent(data);

    const dataHourly = await hourlyWeather(location);
    await updateHourlyAll(dataHourly)

}

init('london')

export default init

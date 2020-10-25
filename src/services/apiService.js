import axios from 'axios';

export default class ApiService {

    _weatherBase = 'https://api.openweathermap.org/data/2.5/weather';
    _weatherKey = '4550c445d164716e9e5e41587bf81839';

    _locationBase = 'http://ip-api.com/json';

    getLocation = async () => {
        const res = await axios.get(this._locationBase);
        return this.normalizeLocationData(res.data);
    };

    getWeather = async (city) => {
        const res = await axios.get(this._weatherBase, {
            params: {
                q: city,
                units: 'metric',
                appid: this._weatherKey
            }
        });
        return this.normalizeWeatherData(res.data);
    };

    normalizeWeatherData = (data) => {
        return {
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            windAngle: data.wind.deg,
            windSpeed: data.wind.speed,
            temperature: data.main.temp,
            pressure: data.main.pressure,
        }
    };

    normalizeLocationData = (data) => {
        return {
            city: data.city,
            country: data.country,
            countryCode: data.countryCode,
        }
    }
};
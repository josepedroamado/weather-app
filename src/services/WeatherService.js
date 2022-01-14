import axios from 'axios';

const weatherMapAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

const APIkey = "4a39926d7ad24ffe23863225c11c0ee3";

export async function getWeather(city) {
    try {
        var fetchedWeather = await weatherMapAPI.get(`weather?q=${city}&appid=${APIkey}&units=metric`).then(({ data }) => data);
        return fetchedWeather;
    }
    catch (error) {
        console.error(error);
    }
}
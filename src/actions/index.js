import axios from 'axios';

const API_KEY = '31bf8b6ccb76162eeaa8103830560941';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function selectBook(book) {
    // selectBook is an action, so it needs to return an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function fetchWeather(city) {
    var url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
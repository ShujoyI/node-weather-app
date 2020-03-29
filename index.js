// dotenv module it use environmental variables
require('dotenv').config({path: 'variables.env'});
const fetch = require('node-fetch');

// using env variable for API key
// not fully secure for real apps!
const API_KEY = process.env.NODE_WEATHER_APP_API_KEY;

// city to get weather data from
let city = 'Los Angeles, US'

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${API_KEY}`;

async function response() {
    console.log('Wowie');
}

//let weather = JSON.parse(res);
let message = 

fetch(url)
    .then(res => res.text())
    .then(body => {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees Farenheit in ${weather.name}!`;
        console.log(message);
    })
    .catch(err => console.error(err));
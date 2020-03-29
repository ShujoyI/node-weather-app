const fetch = require('node-fetch');

// need to learn to hide apiKey
let apiKey = '9dc9bda53cd4556e407c38cd07a0dff8';

// city to get weather data from
let city = 'Cerritos, US'

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

async function response() {
    console.log('Wowie');
}

//let weather = JSON.parse(body);

fetch(url)
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(err => console.error(err));
const fetch = require('node-fetch');

let apiKey = '9dc9bda53cd4556e407c38cd07a0dff8';
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

async function response() {
    console.log('Wowie');
}

fetch(url)
    .then(res => res.text())
    .then(body => console.log(body));
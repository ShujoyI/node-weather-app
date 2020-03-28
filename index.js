const request = require('request');

let apiKey = '9dc9bda53cd4556e407c38cd07a0dff8';
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    }
    else {
        console.log('body:', body);
    }
});
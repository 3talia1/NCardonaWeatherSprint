let lowest = document.getElementById("lowest");
let highest = document.getElementById("highest");
let current = document.getElementById("current");
let wind = document.getElementById("wind");
let feelsLike = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity");
let sunrise = document.getElementById("sunrise")
let sunset = document.getElementById("sunset")
let weatherType = document.getElementById("weatherType")
let time = document.getElementById("time")
let date = document.getElementById("date")


function ApiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => lowest.innerHTML = " Low: " + Math.floor(data.main.temp_min) + "°F"))
}
ApiCall();


function ApiCall1() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => highest.innerHTML = " High: " + Math.floor(data.main.temp_max) + "°F"))
}
ApiCall1();

function ApiCall2() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => current.innerHTML = Math.floor(data.main.temp) + "°F"))
}
ApiCall2();


function ApiCall3() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => wind.innerHTML = " Wind: " + Math.floor(data.wind.speed) + " mph"))
}
ApiCall3();


function ApiCall4() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => feelsLike.innerHTML = " Feels Like " + Math.floor(data.main.feels_like) + "° F"))
}
ApiCall4();

function ApiCall5() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => humidity.innerHTML = " Humidity: " + Math.floor(data.main.humidity) + "%"))
}
ApiCall5();




function ApiCall6() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => sunrise.innerHTML = " Sunrise " + Math.floor(data.sys.sunrise) + "am"))
}
ApiCall6();








function ApiCall7() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => sunset.innerHTML = " Sunset " + Math.floor(data.sys.sunset) + "pm"))
}
ApiCall7();





function ApiCall8() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=2dc945bfebf121b50a8f1a27a2c8af72&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => weatherType.innerHTML = data.weather[0].main))
}
ApiCall8();

let d = new Date();

let t = new Date();



document.getElementById('date').innerText = d.toDateString();

document.getElementById('time').innerText = t.toLocaleTimeString();


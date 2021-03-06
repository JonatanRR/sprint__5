//Exercise 1 y 2
document.querySelector('#buttonJoke').addEventListener('click', getData);
var contentJoke = document.querySelector('#contentJoke');
var vote = document.querySelector('#vote');
var petition = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};
function getData() {
    fetch('https://icanhazdadjoke.com', petition)
        .then(function (result) { return result.json(); })
        .then(function (data) {
        contentJoke.innerText = data.joke;
        //console.log(data.joke);
        vote.innerHTML = "<button class=\"buttons h3\" type=\"button\" onclick=\"getVote(1)\"><span>\uD83D\uDE13</span></button>\n        <button class=\"buttons h3\" type=\"button\" onclick=\"getVote(2)\"><span>\uD83D\uDE10</span></button>\n        <button class=\"buttons h3\" type=\"button\" onclick=\"getVote(3)\"><span>\uD83D\uDE02</span></button>";
    })["catch"](function (error) {
        console.log('Ha ocurrido un error', error);
    });
}
//Exercise 3 (Lines: 4, 18, 19 & 20, are added as a part of this exercise)
var reportJokes = Array();
function getVote(id) {
    var d = new Date();
    var text = d.toISOString();
    var properties = {
        "joke": contentJoke.innerText,
        "score": id,
        "date": text
    };
    console.log(reportJokes);
    reportJokes.push(properties);
    //Exercise 5
    if (id === 1) { //If vote equal to 1, show Chuck Norris joke
        fetch("https://api.chucknorris.io/jokes/random")
            .then(function (result) { return result.json(); })
            .then(function (data) {
            contentJoke.innerText = data.value;
            vote.innerHTML = "<button class=\"buttons h3\" type=\"button\" onclick=\"getVote(1)\"><span>\uD83D\uDE13</span></button>\n            <button class=\"buttons h3\" type=\"button\" onclick=\"getVote(2)\"><span>\uD83D\uDE10</span></button>\n            <button class=\"buttons h3\" type=\"button\" onclick=\"getVote(3)\"><span>\uD83D\uDE02</span></button>";
        })["catch"](function (error) {
            console.log('Ha ocurrido un error', error);
        });
    }
    else {
        getData();
    }
    console.log(properties);
    console.log(reportJokes);
    return reportJokes;
}
//Exercise 4
var num = document.querySelector('#num');
var weather_icon = document.querySelector('#weather_icon');
function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=8457934f6de289917f70175b39793167")
        .then(function (result) { return result.json(); })
        .then(function (data) {
        num.textContent = Math.floor((data.main.temp) - 273, 15); //become from Celsius to Degrees
        console.log(data);
        weather_icon.innerHTML = "<img class=\"imge pe-5\" src=\"./icons/".concat(data.weather[0].icon, ".png\">");
    })["catch"](function (error) {
        console.log('Ha ocurrido un error', error);
    });
}
getWeather();

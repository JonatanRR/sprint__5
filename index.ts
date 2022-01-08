//Exercise 1 y 2
document.querySelector('#buttonJoke').addEventListener('click', getData);
const contentJoke = <HTMLElement>document.querySelector('#contentJoke');
const vote = <HTMLElement>document.querySelector('#vote');
const petition = {
   method: 'GET',
   headers: {
    'Accept': 'application/json'
   },
}

function getData(){
    fetch('https://icanhazdadjoke.com', petition)
    .then(result => result.json())
    .then(data => {
        contentJoke.innerText = data.joke;
        //console.log(data.joke);
        vote.innerHTML = `<button type="button" onclick="getVote(1)">1</button>
        <button type="button" onclick="getVote(2)">2</button>
        <button type="button" onclick="getVote(3)">3</button>`
    })
    .catch(error => {
        console.log('Ha ocurrido un error', error);
    });
}

//Exercise 3 (Lines: 4, 18, 19 & 20, are added as a part of this exercise)
let reportJokes= Array<Object>;
function getVote(id: number) {
    const d = new Date();
    let text= d.toISOString();
    let properties= {
        "joke" : contentJoke.innerText,
        "score" : id,
        "date": text,
    };
    console.log(reportJokes);
    reportJokes.push(properties);
}

//Exercise 4
const num = <HTMLElement>document.querySelector('#num');
const weather_icon = <HTMLElement>document.querySelector('#weather_icon');
function getWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=8457934f6de289917f70175b39793167")
    .then(result => result.json())    
    .then(data => {
        num.textContent = Math.floor((data.main.temp) -273,15); //become from Celsius to Degrees
        console.log(data);
        weather_icon.innerHTML = `<img class="imge pe-5" src="./icons/${data.weather[0].icon}.png">`
    })
    .catch(error => {
        console.log(error);
    })
}
getWeather();

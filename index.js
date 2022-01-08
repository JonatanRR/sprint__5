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
        vote.innerHTML = "<button type=\"button\" onclick=\"getVote(1)\">1</button>\n        <button type=\"button\" onclick=\"getVote(2)\">2</button>\n        <button type=\"button\" onclick=\"getVote(3)\">3</button>";
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
}

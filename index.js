//Exercise 1
document.querySelector('#buttonJoke').addEventListener('click', getData);
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
        data.joke;
        console.log(data.joke);
    })["catch"](function (error) {
        console.log('Ha ocurrido un error', error);
    });
}

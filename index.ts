//Exercise 1
document.querySelector('#buttonJoke').addEventListener('click', getData);
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
        data.joke;
        console.log(data.joke);
    })
    .catch(error => {
        console.log('Ha ocurrido un error', error);
    });
}
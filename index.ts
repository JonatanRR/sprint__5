//Exercise 1 y 2
document.querySelector('#buttonJoke').addEventListener('click', getData);
const contentJoke = <HTMLElement>document.querySelector('#contentJoke');
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
    })
    .catch(error => {
        console.log('Ha ocurrido un error', error);
    });
}




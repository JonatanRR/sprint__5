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


// api

const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20";
const results = document.querySelector(".results");

characters = (characters) => {
    console.log(characters);
    results.innerHTML = "";
    for (character of characters) {
        let ricks = `
        <a href="details.html">
        <ul>
        <h2>${character.id}</h2>
        <h3>${character.name}</h3>
        <p>${character.species}</p>
        <p>${character.gender}</p>
        </ul>
        </a>
        `;
        results.innerHTML += ricks;
    }
}

fetch(rickAndMortyUrl)
.then(response => response.json())
.then(data => characters(data))
.catch(error => results.innerHTML = "IM PICKLE RICK(burp) AND SOMETHING IS FU****!!!");


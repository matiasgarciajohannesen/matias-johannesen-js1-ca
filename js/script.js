// api

const rickAndMortyUrl = "https://rickandmortyapi.com/api/character";
const results = document.querySelector(".results");

characters = (characters) => {
    console.log(characters);
    results.innerHTML = "";
    for (character of characters.results) {
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
    };
};

fetch(rickAndMortyUrl)
.then(response => response.json())
.then(data => characters(data))
.catch(error => results.innerHTML = "IM PICKLE RICK(burp) SOMETHING IS FU****!!!");






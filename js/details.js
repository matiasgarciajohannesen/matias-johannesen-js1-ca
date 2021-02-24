const getUrl = document.location.search
console.log (getUrl)

const para = new URLSearchParams (getUrl);
const id = para.get("id")
console.log(id)

const star = document.querySelector (".details")
const url = `https://rickandmortyapi.com/api/character/${id}`

characters = (character) => {
    console.log(character);
    star.innerHTML = "";
        let ricks = `
        <h2>${character.name}</h2>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Status: ${character.status}</p>
        <p>Created: ${character.created}</p>
        <img src="${character.image}">
        `;
        star.innerHTML += ricks;
        document.title = (character.name)
};

fetch(url)
.then(response => response.json())
.then(data => characters(data))
.catch(error => star.innerHTML = "IM PICKLE RICK(burp) SOMETHING IS FU****!!!");



const url = 'https://pokeapi.co/api/v2/pokemon-species/';
const spriteUrl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'



const pokemon = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');



document.getElementById('submit').addEventListener('click', () => {
    
 let pokemonID = pokemon.value.toLowerCase()
 parseInt(pokemonID, 10)    
    console.log(pokemon.value);


    fetch(`${url}${pokemonID}`)
    .then((resp) => resp.json())
    .then(function poke(data) {
        console.log(data);
        console.log(data.name);
        
        let upperCase = data.name

        let pokename = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);

        document.getElementById("test").src = `${spriteUrl}${data.id}.png`;
        document.getElementById("name").innerHTML = `${pokename}  #${data.id}`;
        document.getElementById("description").innerHTML = data.flavor_text_entries[53].flavor_text;
    }); 





})








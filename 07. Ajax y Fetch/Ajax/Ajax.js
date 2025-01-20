const PokeAPI ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

 //ajax sin jquery    
const xhr = new XMLHttpRequest();
xhr.open('GET', PokeAPI, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
    xhr.onload = () => console.log(xhr.responseText);
    xhr.send();
    
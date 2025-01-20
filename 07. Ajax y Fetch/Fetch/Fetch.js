const PokeAPI ='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
  
  fetch(PokeAPI)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`); 
      }
      return response.json();     
    })
    .then(data => {
      console.log("Datos: ", data.results);
    })
    .catch(err => {
      console.error("ERROR: ", error);
    });  
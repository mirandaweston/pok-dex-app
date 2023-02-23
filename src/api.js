const fetchPokemon = (pokemonname) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name),
      };
      return pokemon;
    })
  
  console.log('End of File');
};


module.exports = fetchPokemon;
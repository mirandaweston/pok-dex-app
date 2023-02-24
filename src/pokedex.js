// const fetchPokemon = require('./api')

class Pokedex {
  constructor() {
    this.pokemon = [];
    this.pokedex = [];
  }

  async addPokemon(pokemonName) {
    const pokemonData = await fetchPokemon(pokemonName);
    this.pokedex.push(pokemonData);
  }  

  all() {
    return this.pokedex;
  }
}

const fetchPokemon = async (pokemonname) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
  const data = await response.json();
  const pokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    types: data.types.map(type => type.type.name).join(', '),
  };
  // introduce a delay of 1 second
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return pokemon;
};

const pokedex = new Pokedex();
pokedex.addPokemon('pikachu');
pokedex.addPokemon('jigglypuff');
Promise.all(pokedex.pokedex).then(() => {
  console.log(pokedex.all());
});

module.exports = Pokedex;
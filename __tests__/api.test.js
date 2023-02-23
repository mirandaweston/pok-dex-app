const fetchPokemon = require('../../javascript-programs/pokeAPI/src/api')

describe('fetchPokemon', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(25);
        expect(pokemon.name).toEqual('pikachu')
        expect(pokemon.height).toEqual(4)
        done();
      });
  });
});
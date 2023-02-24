const Pokedex = require('../src/pokedex')
const fetchPokemon = require('../src/api')

describe('pokedex', () => {
  jest.setTimeout(10000);
  it('constructs with two empty arrays', () => {
    const pokedex = new Pokedex();
    expect(pokedex).toEqual({"pokedex": [], "pokemon": []});
  });

  it('adds a pokemon to the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.addPokemon('pikachu');
    expect(pokedex.pokedex.length).toBe(1);
    expect(pokedex.pokedex[0].name).toBe('pikachu');
  });

  it('returns the pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.addPokemon('pikachu');
    await pokedex.addPokemon('snorlax');
    expect(pokedex.all()).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'pikachu' }),
      expect.objectContaining({ name: 'snorlax' }),
    ]));
  });
});


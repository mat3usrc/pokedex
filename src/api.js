const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = async (limit, offSet) => {
  return fetch(
    `${baseUrl}/pokemon?limit=${limit}&offset=${offSet}`
  ).then((response) => response.json());
};

export const getPokemon = async (url) => {
  const pokemon = await fetch(url).then((response) => response.json());

  const pokemonSpecies = await fetch(
    `${baseUrl}/pokemon-species/${pokemon.id}`
  ).then((response) => response.json());

  const evolutionChain = await fetch(
    pokemonSpecies.evolution_chain.url
  ).then((response) => response.json());

  return { ...pokemon, evolution_chain: evolutionChain };
};

export default {
  getPokemons,
  getPokemon,
};

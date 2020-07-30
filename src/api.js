const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = async (limit, offSet) => {
  return fetch(
    `${baseUrl}/pokemon?limit=${limit}&offset=${offSet}`
  ).then((response) => response.json());
};

export const getPokemon = async (url) => {
  return fetch(url).then((response) => response.json());
};

export default {
  getPokemons,
  getPokemon,
};

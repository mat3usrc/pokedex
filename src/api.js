const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemons = (limit, offSet) => {
  return fetch(
    `${baseUrl}/pokemon?limit=${limit}&offset=${offSet}`
  ).then((response) => response.json());
};

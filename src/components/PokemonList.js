import React, { useState, useEffect } from 'react';
import { getPokemons } from '../api';
import Row from 'react-bootstrap/Row';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(10, 0).then((response) => setPokemons(response.results));
  }, []);

  return (
    <Row>
      {pokemons.map(({ name }) => (
        <PokemonCard key={name} name={name} />
      ))}
    </Row>
  );
};

export default PokemonList;

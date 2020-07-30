import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { selectAllPokemons, fetchPokemons } from '../../store/modules/pokemon';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectAllPokemons);

  const pokemonStatus = useSelector((state) => state.pokemon.status);

  useEffect(() => {
    if (pokemonStatus === 'idle') {
      dispatch(fetchPokemons({ limit: 10, offSet: 0 }));
    }
  }, [pokemonStatus, dispatch]);

  return (
    <Row>
      {pokemons.map(({ name }) => (
        <PokemonCard key={name} name={name} />
      ))}
    </Row>
  );
};

export default PokemonList;

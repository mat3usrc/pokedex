import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { fetchPokemons } from '../../store/modules/pokemon';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const page = useSelector((state) => state.pokemon.page);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [page, dispatch]);

  return (
    <Row>
      {pokemons.map(({ name }) => (
        <PokemonCard key={name} name={name} />
      ))}
    </Row>
  );
};

export default PokemonList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import { fetchPokemons } from '../reducers/pokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);
  const pokemons = useSelector((state) => state.pokemon[selected]);
  const page = useSelector((state) => state.pokemon.page);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [page, dispatch]);

  return (
    <Row className="justify-content-center">
      {pokemons.map(({ name, url }) => (
        <PokemonCard key={name} name={name} url={url} />
      ))}
    </Row>
  );
};

export default PokemonList;

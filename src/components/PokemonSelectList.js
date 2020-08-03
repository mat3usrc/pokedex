import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../reducers/pokemon';

const PokemonSelectList = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);

  const handleChange = (event) => {
    dispatch(setSelected(event.target.value));
  };

  return (
    <Form.Group className="d-flex align-items-center">
      <Form.Label className="mr-3">Exibir:</Form.Label>
      <Form.Control as="select" value={selected} onChange={handleChange}>
        <option value="pokemons">Todos</option>
        <option value="favorites">Favoritos</option>
      </Form.Control>
    </Form.Group>
  );
};

export default PokemonSelectList;

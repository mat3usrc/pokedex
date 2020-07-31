import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../store/modules/pokemon';

const PokemonSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let searchFormatted = search.toLowerCase().trim();

    if (!isNaN(searchFormatted)) {
      searchFormatted = parseInt(searchFormatted);
    }

    dispatch(fetchPokemon({ search: searchFormatted }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row className="mb-5">
        <InputGroup>
          <FormControl
            placeholder="Name or ID..."
            value={search}
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button onClick={handleSubmit}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Row>
    </form>
  );
};

export default PokemonSearch;

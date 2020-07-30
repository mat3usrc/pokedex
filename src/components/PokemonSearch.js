import React from 'react';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const PokemonSearch = () => {
  return (
    <Row className="mb-5">
      <InputGroup>
        <FormControl placeholder="Name or ID..." />
        <InputGroup.Append>
          <Button>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Row>
  );
};

export default PokemonSearch;

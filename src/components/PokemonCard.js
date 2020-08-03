import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../store/modules/pokemon';
import { capitalize } from '../utils';

const PokemonCard = ({ name, url }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const urlArray = url.split('/');
    const id = urlArray[urlArray.length - 2];
    dispatch(fetchPokemon({ search: id }));
  };

  return (
    <Col xl={2} lg={2} md={3} sm={4} xs={5} className="mb-3 px-2">
      <Card className="pokemon-card h-100" onClick={handleClick}>
        <Card.Header>
          <Card.Img
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            className="bg-light"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="h6 text-center">{capitalize(name)}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonCard;

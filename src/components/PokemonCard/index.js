import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const PokemonCard = ({ name }) => (
  <Col xs={3} className="mb-3">
    <Card className="pokemon-card h-100">
      <Card.Img
        variant="top"
        src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
      />
      <Card.Body>
        <Card.Title className="h6">{name}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default PokemonCard;

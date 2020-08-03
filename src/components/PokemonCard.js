import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, addFavorite, removeFavorite } from '../reducers/pokemon';
import { capitalize } from '../utils';

const PokemonCard = ({ name, url }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.pokemon.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.find((fav) => fav.name === name));
  }, [favorites, name]);

  const handleClickDetails = () => {
    const urlArray = url.split('/');
    const id = urlArray[urlArray.length - 2];
    dispatch(fetchPokemon({ search: id }));
  };

  const handleClickFavorite = (event) => {
    event.stopPropagation();

    if (isFavorite) dispatch(removeFavorite(name));
    else dispatch(addFavorite({ name }));
  };

  return (
    <Col xl={2} lg={2} md={3} sm={4} xs={5} className="mb-3 px-2">
      <Card className="pokemon-card h-100" onClick={handleClickDetails}>
        <Card.Header>
          <Card.Img
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            className="bg-light"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="h6 text-center mb-0">
            {capitalize(name)}
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="link"
            className="p-0 mx-auto d-block"
            onClick={handleClickFavorite}
          >
            <i className={`${isFavorite ? 'fas' : 'far'} fa-star`}></i>
            <small className="ml-2 d-none d-sm-inline">Add to Favs.</small>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PokemonCard;

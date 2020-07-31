import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import { setDetailsModal } from '../store/modules/pokemon';

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const detailsModal = useSelector((state) => state.pokemon.detailsModal);
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  const handleClose = () => dispatch(setDetailsModal(false));

  const formatStatName = (name) => name.toUpperCase().split('-').join(' ');

  // https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_VIII-present)
  const maxBaseValues = [
    { name: 'hp', value: 255 },
    { name: 'attack', value: 190 },
    { name: 'defense', value: 250 },
    { name: 'special-attack', value: 194 },
    { name: 'special-defense', value: 250 },
    { name: 'speed', value: 180 },
  ];

  const findMaxBaseValue = (name) =>
    maxBaseValues.find((baseValue) => baseValue.name === name).value;

  return (
    <Modal size="xl" show={detailsModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pokemon.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row noGutters>
          <Col xs={6}></Col>
          <Col xs={6}>
            <Card>
              <Card.Body>
                <Row noGutters className="mb-3">
                  <Col xs={12}>
                    <h5>Height</h5>
                  </Col>
                  <p className="h6">{pokemon.height / 10} m</p>
                </Row>
                <Row noGutters className="mb-3">
                  <Col xs={12}>
                    <h5>Type</h5>
                  </Col>
                  {pokemon.types.map((type) => (
                    <div
                      key={type.type.name}
                      className={`
                        pokemon-type d-flex justify-content-center align-items-center rounded-pill mr-2 mt-1 
                        color-${type.type.name}
                      `}
                    >
                      {type.type.name}
                    </div>
                  ))}
                </Row>
                <Row noGutters>
                  <Col xs={12}>
                    <h5>Stats</h5>
                  </Col>
                  {pokemon.stats.map((stat) => (
                    <Col key={stat.stat.name} xs={12} className="my-1">
                      <p className="mb-1">{formatStatName(stat.stat.name)}</p>
                      <ProgressBar
                        animated
                        max={findMaxBaseValue(stat.stat.name)}
                        now={stat.base_stat}
                      />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PokemonDetails;

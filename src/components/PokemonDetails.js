import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { setDetailsModal } from '../store/modules/pokemon';

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const detailsModal = useSelector((state) => state.pokemon.detailsModal);
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  const handleClose = () => dispatch(setDetailsModal(false));

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
                <Row noGutters></Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PokemonDetails;

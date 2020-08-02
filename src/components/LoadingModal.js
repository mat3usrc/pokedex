import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const LoadingModal = () => {
  const loading = useSelector((state) => state.pokemon.loading);

  return (
    <Modal show={loading} centered className="modal-loading">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </Modal>
  );
};

export default LoadingModal;

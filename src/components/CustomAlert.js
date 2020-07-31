import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setDetailsError } from '../store/modules/pokemon';

const CustomAlert = () => {
  const dispatch = useDispatch();
  const detailsError = useSelector((state) => state.pokemon.detailsError);

  const handleClose = () => dispatch(setDetailsError(false));

  return (
    <Alert
      show={detailsError}
      transition
      dismissible
      variant="danger"
      onClose={handleClose}
    >
      Pokemon not found
    </Alert>
  );
};

export default CustomAlert;

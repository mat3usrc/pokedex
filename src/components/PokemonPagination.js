import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import { increment, decrement } from '../reducers/pokemon';

const PokemonPagination = () => {
  const dispatch = useDispatch();
  const next = useSelector((state) => state.pokemon.next);
  const previous = useSelector((state) => state.pokemon.previous);

  return (
    <Row className="justify-content-center mt-5">
      <Pagination>
        <Pagination.Prev
          disabled={!previous}
          onClick={() => dispatch(decrement())}
        >
          Previous
        </Pagination.Prev>
        <Pagination.Next disabled={!next} onClick={() => dispatch(increment())}>
          Next
        </Pagination.Next>
      </Pagination>
    </Row>
  );
};

export default PokemonPagination;

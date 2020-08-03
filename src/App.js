import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';
import PokemonSearch from './components/PokemonSearch';
import PokemonDetails from './components/PokemonDetails';
import CustomAlert from './components/CustomAlert';
import LoadingModal from './components/LoadingModal';
import PokemonSelectList from './components/PokemonSelectList';

export const App = () => {
  return (
    <Container fluid>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs={8}>
            <PokemonSearch />
          </Col>
          <Col xs={3}>
            <PokemonSelectList />
          </Col>
        </Row>
        <CustomAlert />
        <PokemonList />
        <PokemonPagination />
        <PokemonDetails />
        <LoadingModal />
      </Container>
    </Container>
  );
};

export default App;

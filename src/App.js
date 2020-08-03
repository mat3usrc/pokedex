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
    <Container fluid className="mt-4">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg={8} md={8} sm={12} className="mb-4 mb-md-0">
            <PokemonSearch />
          </Col>
          <Col lg={3} md={3} sm={12}>
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

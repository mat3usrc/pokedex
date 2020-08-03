import React from 'react';
import Container from 'react-bootstrap/Container';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';
import PokemonSearch from './components/PokemonSearch';
import PokemonDetails from './components/PokemonDetails';
import CustomAlert from './components/CustomAlert';
import LoadingModal from './components/LoadingModal';

export const App = () => {
  return (
    <Container fluid>
      <Container>
        <PokemonSearch />
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

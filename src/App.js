import React from 'react';
import Container from 'react-bootstrap/Container';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';
import PokemonSearch from './components/PokemonSearch';
import PokemonDetails from './components/PokemonDetails';
import CustomAlert from './components/CustomAlert';

export const App = () => {
  return (
    <Container>
      <PokemonSearch />
      <CustomAlert />
      <PokemonList />
      <PokemonPagination />
      <PokemonDetails />
    </Container>
  );
};

export default App;

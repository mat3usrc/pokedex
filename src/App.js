import React from 'react';
import Container from 'react-bootstrap/Container';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';
import PokemonSearch from './components/PokemonSearch';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <Container>
      <PokemonSearch />
      <PokemonList />
      <PokemonPagination />
      <PokemonDetails />
    </Container>
  );
}

export default App;

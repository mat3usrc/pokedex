import React from 'react';
import Container from 'react-bootstrap/Container';
import PokemonList from './components/PokemonList';
import PokemonPagination from './components/PokemonPagination';

function App() {
  return (
    <Container>
      <PokemonList />
      <PokemonPagination />
    </Container>
  );
}

export default App;

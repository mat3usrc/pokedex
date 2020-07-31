import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const PokemonDetailsEvolution = ({ chain }) => {
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    const mountEvolutionsArray = () => {
      let evolutions = [];
      let chainData = chain;

      do {
        let numberOfEvolutions = chainData['evolves_to'].length;
        evolutions.push(chainData.species.name);

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            evolutions.push(chainData.evolves_to[i].species.name);
          }
        }

        chainData = chainData['evolves_to'][0];
      } while (!!chainData && chainData.evolves_to);

      return evolutions;
    };
    setEvolutions(mountEvolutionsArray());
  }, [chain]);

  return (
    <Row>
      {evolutions.map((evolution) => (
        <Col key={evolution}>
          <Image
            src={`https://img.pokemondb.net/sprites/sword-shield/icon/${evolution}.png`}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonDetailsEvolution;

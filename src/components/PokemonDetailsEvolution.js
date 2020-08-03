import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { capitalize } from '../utils';

const PokemonDetailsEvolution = ({ chain }) => {
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    const mountEvolutionsArray = () => {
      let evolutions = [],
        chainData = chain,
        numEvolutions;

      do {
        numEvolutions = chainData.evolves_to.length;
        evolutions.push(chainData.species.name);

        if (numEvolutions > 1) {
          for (let i = 1; i < numEvolutions; i++) {
            evolutions.push(chainData.evolves_to[i].species.name);
          }
        }

        chainData = chainData.evolves_to[0];
      } while (!!chainData && chainData.evolves_to);

      return evolutions;
    };
    setEvolutions(mountEvolutionsArray());
  }, [chain]);

  const checkLastItem = (index) => {
    if (index !== evolutions.length - 1) {
      return <i className="icon-arrow icon-arrow-e"></i>;
    }
    return <div></div>;
  };

  return (
    <Col xs={12} className="mb-md-3">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>Evolution Chain:</Card.Title>
          <Row
            noGutters
            className="align-items-center justify-content-around h-75"
          >
            {evolutions.map((evolution, index) => (
              <Col
                xs={4}
                key={evolution}
                className="d-flex align-items-center justify-content-around"
              >
                <div>
                  <Image
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${evolution}.png`}
                  />
                  <p className="mt-3">{capitalize(evolution)}</p>
                </div>
                {checkLastItem(index)}
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonDetailsEvolution;

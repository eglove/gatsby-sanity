import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
`;

const PizzaStyles = styled.div`
  display: grid;
  grid-auto-rows: auto auto 300px;
  grid-gap: 1rem;
`;

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza, index) => (
        <SinglePizza key={index} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.array,
};

SinglePizza.propTypes = {
  pizza: PropTypes.object,
};

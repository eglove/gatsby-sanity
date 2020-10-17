import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';

export default function PizzaPage({ data }) {
  const { pizzas } = data;
  return (
    <>
      <PizzaList pizzas={pizzas.nodes} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

PizzaPage.propTypes = {
  data: PropTypes.object,
};

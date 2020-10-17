import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      </Link>
    </>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <>
      {pizzas.map((pizza, index) => (
        <SinglePizza key={index} pizza={pizza} />
      ))}
    </>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.array,
};

SinglePizza.propTypes = {
  pizza: PropTypes.object,
};

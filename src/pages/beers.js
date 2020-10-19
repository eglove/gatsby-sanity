import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  padding: 2rem;
  border: 1px solid var(--grey);
  text-align: center;

  img {
    display: grid;
    width: 100%;
    height: 200px;
    object-fit: contain;
    place-items: center;
  }
`;

export default function BeerPage({ data: { beers } }) {
  return (
    <>
      <SEO title={`Beers! We have ${beers.nodes.length} in stock.`} />
      <h2 className="center">
        We have {beers.nodes.length} beers available. Dine in only.
      </h2>
      <BeerGridStyles>
        {beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`⭐`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          reviews
          average
        }
      }
    }
  }
`;

BeerPage.propTypes = {
  data: PropTypes.object,
};

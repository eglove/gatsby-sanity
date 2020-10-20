import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const ContentStyles = styled.div`
  padding: 2rem;
  background: white;
`;

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  padding: clamp(5px, 1vw, 25px);
  border: 5px solid white;
  margin: clamp(2rem, 10vw, 12rem) auto 4rem auto;
  background: white url(${stripes});
  background-size: 1500px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);

  @media (max-width: 1100px) {
    margin: 0 1.5rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

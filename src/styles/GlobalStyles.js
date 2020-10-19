import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #FFC600;
    --white: white;
    --grey: #EFEFEF;
  }

  html {
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: 450px;
    font-size: 10px;
    scrollbar-color: var(--red) var(--white);
    scrollbar-width: thin;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (prefers-reduced-motion: reduce) {
    button {
      padding: 0.6rem 1rem;
      border: 0;
      background: var(--red);
      border-radius: 2px;
      box-shadow: var(--cast) var(--cast) 0 var(--grey);
      color: white;
      cursor: pointer;

      --cast: 2px;

      text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
      transition: none;

      &:hover,
      &:focus {
        --cast: 4px;
      }
    }
  }

  button {
    padding: 0.6rem 1rem;
    border: 0;
    background: var(--red);
    border-radius: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    color: white;
    cursor: pointer;

    --cast: 2px;

    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s;

    &:hover,
    &:focus {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    border: 3px solid var(--white);
    background-color: var(--red);
    border-radius: 6px;
  }

  hr {
    height: 8px;
    border: 0;
    background-image: url(${stripes});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    position: relative;
    display: inline-block;
    transform: rotate(-2deg);
  }
`;

export default GlobalStyles;

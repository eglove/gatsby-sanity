import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }

  ul {
    display: grid;
    align-items: center;
    padding: 0;
    margin: -6rem 0 0 0;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    list-style-type: none;
    text-align: center;
  }

  li {
    --rotate: -2deg;

    order: 1;
    transform: rotate(var(--rotate));

    &:nth-child(1) {
      --rotate: 1deg;
    }

    &:nth-child(2) {
      --rotate: -2.5deg;
    }

    &:nth-child(4) {
      --rotate: 2.5deg;
    }

    &:hover,
    &:focus {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead</Link>
        </li>
      </ul>
    </NavStyles>
  );
}

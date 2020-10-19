import styled from 'styled-components';

const MenuItemStyles = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  gap: 0 1.3rem;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;

  .gatsby-image-wrapper {
    height: 100%;
    grid-row: span 2;
  }

  p {
    margin: 0;
  }

  button {
    font-size: 1.5rem;
  }

  button + button {
    margin-left: 1rem;
  }

  .remove {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    box-shadow: none;
    color: var(--red);
    font-size: 3rem;
    line-height: 1rem;
  }
`;

export default MenuItemStyles;

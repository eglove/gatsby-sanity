import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  fieldset {
    display: grid;
    overflow: auto;
    max-height: 600px;
    align-content: start;
    gap: 1rem;
    grid-column: span 2;

    &.order,
    &.menu {
      grid-column: span 1;
    }

    .maloneyBaloney {
      display: none;
    }

    @media (max-width: 900px) {
      fieldset.menu,
      fieldset.order {
        grid-column: span 2;
      }
    }
  }
`;

export default OrderStyles;

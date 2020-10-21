import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;

export const ItemStyles = styled.div`
  position: relative;
  text-align: center;

  img {
    height: auto;
    border: 1px solid red;
    font-size: 0;
  }

  p {
    position: absolute;
    left: 0;
    width: 100%;
    transform: rotate(-2deg) translateY(-140%);
  }

  .mark {
    display: inline;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);

    animation: shine 1s infinite linear;
    background-image: linear-gradient(
      90deg,
      var(--background) 0,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

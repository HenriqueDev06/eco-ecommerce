import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    height: 70%;
    object-fit: contain;
  }

  margin: 0 auto;

  @media (max-width: 1074px) {
    transform: scale(0.8);
    img {
      height: 45%;
    }
  }

  @media (max-width: 774px) {
    justify-content: flex-start;
    flex-direction: column;

    padding-top: 20px;
    img {
      height: 45%;
    }
  }
`;

export const InfoContainer = styled.section`
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;

  flex-direction: column;

  span {
    text-align: center;
    margin: 5px 0;
  }

  h1 {
    font-size: 50px;
    font-weight: 900;
    text-align: center;
  }

  p {
    font-size: 40px;
    font-weight: 600;
    color: #68f558;
  }

  button {
    padding: 2px 8px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e6e8e7;
    color: #68f558;
    padding: 11px 0;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    outline: none;
    border: none;

    width: 50%;

    font-family: 'Poppins';

    margin-top: 8px;

    svg {
      fill: #68f558;
    }

    :hover {
      cursor: pointer;
      color: #e6e8e7;
      background-color: #68f558;

      svg {
        fill: #e6e8e7;
      }
    }

    svg {
      margin-left: 10px;
    }
  }

  @media (max-width: 774px) {
    span {
      min-width: 100vw;
    }
    h1 {
      min-width: 100vw;
    }

    button {
      width: 100%;
    }
  }
`;

export const RatingContainer = styled.div`
  display: inline-block;
`;

export const Star = styled.label<{ active: boolean }>`
  transition: 0.4s ease;
  svg {
    fill: ${(props) => (props.active ? '#ffce00' : '#aaa')};
  }
  cursor: pointer;
`;

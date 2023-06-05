import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 70px;
    line-height: 70px;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }

  padding: 20px 0px;
  padding-top: 80px;

  #more {
    position: absolute;
    top: -105px;
    right: 15px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: auto;
      margin-left: 5px;
    }
  }

  @media (max-width: 700px) {
    #more {
      top: -62px;
      right: 40%;
    }
  }
`;

export const List = styled.ul`
  width: 92%;

  display: grid;
  justify-content: flex-end;
  align-items: center;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 13px;
  row-gap: 29px;

  margin-top: 63px;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  button {
    padding: 2px 8px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e6e8e7;
    font-size: 16px;
    border: 2px solid #333333;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    font-family: 'Poppins';

    margin-top: 8px;

    :hover {
      cursor: pointer;
      background-color: #e6e8e7;
      color: #333333;

      svg {
        fill: #333333;
      }
    }

    svg {
      margin-left: 10px;
    }
  }

  p {
    font-size: 15px;
    color: #e6e8e7;

    margin-top: 7px;
  }

  img {
    height: 160px;
    width: 180px;
    object-fit: contain;
  }
`;

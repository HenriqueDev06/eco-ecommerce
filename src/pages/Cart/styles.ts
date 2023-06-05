import styled from 'styled-components';

export const PaymentMethodsContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const PaymentMethod = styled.div`
  margin-right: 10px;

  img {
    height: 50px;
    object-fit: cover;

    margin: 0px 8px;
  }

  @media (max-width: 614px) {
    img {
      height: 40px;
      object-fit: cover;

      margin: 0px 8px;
    }
  }

  @media (max-width: 614px) {
    img {
      height: 30px;
      object-fit: cover;

      margin: 0px 8px;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 20px;

  #back {
    position: fixed;
    top: 40px;
    left: 30px;

    cursor: pointer;
  }

  h2 {
    font-size: 35px;
  }

  .price_container {
    width: 100%;

    background-color: #0d0d0d;
    border-radius: 6px;

    margin-top: -40px;
    z-index: 999;
    padding: 20px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-content: center;
      justify-content: flex-end;

      flex-direction: column;

      margin: 5px 0;
    }

    h1 {
      font-size: 30px;
      line-height: 26px;
      text-align: end;
    }

    span {
      font-size: 13px;
      opacity: 0.8;
      text-align: end;

      margin-right: 10px;
    }

    button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 220px;

      font-family: 'Poppins';

      &:hover {
        background-color: #45a049;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: darkred;
  }

  display: flex;
  justify-content: center;
  align-content: center;

  font-size: 11px;

  font-family: 'Poppins';

  svg {
    margin: auto;
    transition: 0.4s ease;
    margin-left: 5px;
  }

  :hover {
    svg {
      color: #f75454;
    }
  }
`;

export const ListContainer = styled.section`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  padding-bottom: 40px;
  padding-top: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #e6e6e6;

  border-radius: 6px;

  * {
    color: #0f0f0f;
  }
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 5px;
  }
`;

export const ProductCardContainer = styled.section`
  width: 100%;

  display: flex;
  /* justify-content: flex-start;  usar na media queries*/
  justify-content: space-around;
  align-items: center;

  min-height: 120px;

  img {
    min-width: 75px;
    max-width: 75px;
    height: 100px;
    object-fit: contain;
    margin: 0 25px;
  }

  .info {
    /* width: 360px; */
    width: 100%;

    h1 {
      font-size: 30px;
      line-height: 26px;
    }

    p {
      font-size: 13px;
      opacity: 0.8;
    }
  }

  @media (max-width: 814px) {
    min-height: 100px;
    .info {
      h1 {
        font-size: 26px;
        line-height: 20px;
      }
    }
    img {
      min-width: 42px;
      max-width: 42px;
    }
  }

  .price {
    width: 200px;

    span {
      font-size: 20px;
      font-weight: bolder;
    }
  }

  .quantity_button {
    display: flex;
    align-content: center;
    justify-content: center;

    transform: translateX(-23px);

    button {
      font-size: 16px;
      height: 35px;
      width: 35px;
      cursor: pointer;

      border-radius: 50%;
      background-color: #c2c2c2;

      border: none;
      outline: none;
    }

    span {
      font-size: 20px;
      max-width: 35px;
      text-align: center;
      min-width: 35px;
    }
  }
`;

export const CartEmpty = styled.section`
  width: 90%;
  height: 90%;

  /* border: 1px solid #525252; */
  border-radius: 7px;

  display: flex;
  align-content: center;
  justify-content: center;

  flex-direction: column;
  text-align: center;

  cursor: pointer;

  img {
    height: 200px;
    object-fit: contain;
  }

  p {
    padding: 0px 210px;
  }

  span {
    font-size: 18px;
    font-weight: 700;

    margin: 10px 0px;
  }

  @media (max-width: 814px) {
    p {
      padding: 0px 100px;
    }
  }

  @media (max-width: 514px) {
    p {
      padding: 0px;
    }
  }
`;

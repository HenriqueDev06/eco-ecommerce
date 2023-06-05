import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background: rgb(10, 10, 10);
  background: radial-gradient(
    circle,
    rgba(10, 10, 10, 1) 0%,
    rgba(11, 1, 85, 1) 71%,
    rgba(7, 8, 8, 1) 100%
  );

  position: relative;

  img {
    height: 300px;
    width: 55%;
    object-fit: contain;

    position: absolute;
  }

  #img_1 {
    height: 400px;
    left: -200px;
    bottom: 0;
    transform: scaleX(-1);
    -webkit-mask-image: linear-gradient(352deg, transparent 20%, black 77%);
  }

  #img_2 {
    top: -100px;
    height: 240px;
    transform: scaleY(-1);
    -webkit-mask-image: linear-gradient(352deg, transparent 20%, black 77%);
    right: 40%;
  }
  #img_3 {
    height: 400px;
    right: -250px;
    bottom: 80px;
    transform: scaleX(-1);
    -webkit-mask-image: linear-gradient(352deg, transparent 20%, black 77%);
  }

  @media (max-width: 900px) {
    #img_3 {
      right: -153px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 55%;

  p {
    margin-bottom: 12px;
  }

  span {
    text-align: center;
    font-size: 50px;
    font-weight: 800;

    line-height: 50px;
    text-transform: uppercase;
  }

  button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #ffffff;
    color: #333333;
    font-size: 16px;
    border: 2px solid #333333;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    cursor: pointer;

    font-family: 'Poppins';
    width: 50%;

    margin-top: 20px;
  }

  @media (max-width: 900px) {
    span {
      font-size: 35px;
      line-height: 35px;
    }
    p {
      font-size: 14px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 20px 15px;
  padding-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  background: #0a0a0a;

  border-bottom: 1px solid #757575;

  .cards {
    width: 93%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px 0px;

    #card_1 {
      background: linear-gradient(225deg, #1b1b1d 0%, #2d0246 100%);
    }

    #card_2 {
      background: linear-gradient(225deg, #1b1b1d 0%, #452002 100%);
      img {
        transform: translateX(-15px) translateY(50px);
      }
    }

    #card_3 {
      background: linear-gradient(225deg, #1b1b1d 0%, #094502 100%);
    }

    #card_4 {
      background: linear-gradient(225deg, #1b1b1d 0%, #434502 100%);
      img {
        transform: translateX(-15px) translateY(50px);
      }
    }
  }

  h1 {
    font-size: 70px;
    line-height: 70px;
    text-align: center;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    #card_2 img {
      transform: translateX(18px) translateY(50px) !important;
    }

    #card_4 img {
      transform: translateX(18px) translateY(50px) !important;
    }
  }

  @media (max-width: 1000px) {
    .cards {
      overflow-y: hidden;
      overflow-x: scroll;

      padding-bottom: 4px;

      ::-webkit-scrollbar {
        width: 8px;
        height: 3px;
        border-radius: 3px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 3px;
      }

      ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
    }
  }
`;

export const CardContainer = styled.div`
  width: 290px;
  height: 190px;

  border-radius: 5px;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

  cursor: pointer;

  img {
    height: 200px;
    object-fit: contain;
    transform: translateX(-41px) translateY(50px);
  }

  span {
    font-size: 1.5rem;
    text-align: center;
    margin-right: 70px;
  }

  @media (max-width: 1200px) {
    width: 220px;

    span {
      margin-right: 112px;
      font-size: 1rem;
    }

    img {
      transform: translateX(-22px) translateY(50px);
    }
  }

  @media (max-width: 1000px) {
    min-width: 230px;

    margin: 0px 10px;
  }
`;

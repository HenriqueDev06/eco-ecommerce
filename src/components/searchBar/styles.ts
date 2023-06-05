import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  #categories {
    margin-top: 10px;

    span {
      margin: 0px 5px;
      transition: 0.4s ease;
      cursor: pointer;

      :hover {
        letter-spacing: 1px;
      }
    }

    span.selected {
      border-bottom: 1px solid #ccc;
    }
  }

  #back {
    margin: 0px 10px;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 474px) {
    #categories {
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 60px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    font-family: 'Poppins';
    background-color: #f3f3f3;

    color: #333333;

    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  @media (max-width: 514px) {
    input {
      height: 40px;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #f3f3f3;
  border: none;
  padding: 8px;
  height: 60px;
  width: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  svg {
    fill: #333333;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 514px) {
    height: 40px;
    width: 40px;
  }
`;

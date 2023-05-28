import styled from 'styled-components';

export const Buttons = styled.div<{ isOpen: boolean }>`
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: 1.4s ease;

  top: ${(props) => (props.isOpen ? '70px' : '-140px')};
  z-index: -1;

  button {
    background: transparent;
    color: #e6e8e7;
    transition: 1.4s ease;

    font-family: 'Poppins';
    border: 0;
    outline: 0;
    cursor: pointer;

    margin: 0 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button#cart {
    background: #212121;
    padding: 8px 12px;
    border-radius: 4px;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Container = styled.nav<{ isOpen: boolean }>`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  z-index: 9999;

  position: fixed;
  top: 0;
  left: 0;

  #menu_toggle {
    color: #e6e8e7;

    width: 40px;
    height: 40px;

    display: none;
  }

  #logo {
    height: 100%;
    width: 70px;

    background: url(https://res.cloudinary.com/dmceve2cp/image/upload/v1685065654/ecomerce/Pngtree_dragon_head_mascot_logo_5901920_hwp3so.png)
      no-repeat;
    background-position: center;
    background-size: contain;

    position: relative;
    font-family: 'Aoboshi One';

    ::before {
      content: 'Store';
      top: 29px;
      right: -31px;
      position: absolute;
      color: #f76d31;
      font-family: 'Aoboshi One';
      font-weight: 700;
      z-index: 11;
      font-size: 20px;
    }
    ::after {
      content: 'Drangon';
      top: 28px;
      right: -21px;
      position: absolute;
      color: #e6e8e7;
      font-family: 'Aoboshi One';
      font-size: 9px;
    }
  }

  padding: 0 27px;

  @media (max-width: 584px) {
    background: #0d0d0d;

    #menu_toggle {
      display: block;
    }

    ${Buttons} {
      position: fixed;
      width: 100%;
      background: #0d0d0d;
      right: 0;
      flex-direction: column;
      height: auto;

      button {
        opacity: ${(props) => (props.isOpen ? '1' : '0')};
        width: 90%;
        margin: 5px 0px;
      }
    }
  }
`;

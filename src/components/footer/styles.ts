import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px;

  width: 100%;

  margin-top: 200px;

  @media (max-width: 974px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

export const Logo = styled.div`
  height: 200px;
  width: 200px;

  background: url(https://res.cloudinary.com/dmceve2cp/image/upload/v1685065654/ecomerce/Pngtree_dragon_head_mascot_logo_5901920_hwp3so.png)
    no-repeat;
  background-position: center;
  background-size: contain;

  position: relative;
  font-family: 'Aoboshi One';

  ::before {
    content: 'Store';
    top: 25px;
    right: -144px;
    position: absolute;
    color: #f76d31;
    font-family: 'Aoboshi One';
    font-weight: 700;
    z-index: 11;
    font-size: 80px;
  }
  ::after {
    content: 'Drangon';
    top: 96px;
    right: -109px;
    position: absolute;
    color: #333;
    font-family: 'Aoboshi One';
    font-size: 40px;
  }

  @media (max-width: 974px) {
    transform: translateX(-84px);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 20px;

  margin-right: 20px;
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Poppins';
`;

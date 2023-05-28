import React, { FC, useState } from 'react';

import { Container, Buttons } from './styles';

import { CiShoppingCart } from 'react-icons/ci';
import { HiOutlineMenu } from 'react-icons/hi';

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <div id="logo"></div>
      <Buttons className="buttons" isOpen={isOpen}>
        <button type="button">Home</button>
        <button type="button">Products</button>
        <button type="button">Contact</button>
        <button type="button" id="cart">
          Cart
          <CiShoppingCart />
        </button>
      </Buttons>
      <HiOutlineMenu id="menu_toggle" onClick={toggleMenu} />
    </Container>
  );
};

export { NavBar };

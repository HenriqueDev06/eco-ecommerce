import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Buttons } from './styles';
import { CiShoppingCart } from 'react-icons/ci';
import { HiOutlineMenu } from 'react-icons/hi';
import { useCart } from '../../context/cart';

interface NavProps {
  backing?: boolean;
}

const NavBar: FC<NavProps> = ({ backing }) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = scrollTop > 0;

      setIsTop(!isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    if (!backing) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      history.replace('/');
    }
  };

  const handleProductsClick = () => {
    history.push('/produtos');
  };

  const handleCartClick = () => {
    history.push('/carrinho');
  };

  return (
    <Container isTop={isTop} isOpen={isOpen}>
      <div id="logo"></div>
      <Buttons className="buttons" isOpen={isOpen}>
        <button type="button" onClick={handleHomeClick}>
          Home
        </button>
        <button type="button" onClick={handleProductsClick}>
          Produtos
        </button>
        <button
          data-itens={cart.length}
          type="button"
          onClick={handleCartClick}
          id="cart"
        >
          Cart
          <CiShoppingCart />
        </button>
      </Buttons>
      <HiOutlineMenu id="menu_toggle" onClick={toggleMenu} />
    </Container>
  );
};

export default NavBar;

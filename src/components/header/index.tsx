import React, { FC } from 'react';
import { Container, Content } from './styles';

const Header: FC = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Content>
        <p>Explore o universo dos criadores de conteúdo</p>
        <span>
          Aqui você encontra tudo para se tornar um influenciador digital
        </span>
        <button onClick={handleScroll}>ver produtos</button>
      </Content>

      <img
        id="img_2"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1685229629/ecomerce/pngfind.com-gaming-headset-png-1413541_ltxchk.png"
      />
      <img
        id="img_1"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1685225242/ecomerce/pngfind.com-microfono-png-810499_pl0wk6.png"
      />
      <img
        id="img_3"
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1685226155/ecomerce/pngfind.com-tripod-png-1071325_ct45xk.png"
      />
    </Container>
  );
};
export default Header;

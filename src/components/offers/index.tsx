import React, { FC } from 'react';
import { Container, CardContainer } from './styles';

import { useHistory } from 'react-router-dom';

interface OfferCardProps {
  imgSrc: string;
  text: string;
  ide: string;
  onClick: () => void;
}

const OfferCard: FC<OfferCardProps> = ({ imgSrc, text, ide, onClick }) => {
  return (
    <CardContainer onClick={onClick} id={ide}>
      <img src={imgSrc} />
      <span>{text}</span>
    </CardContainer>
  );
};

const OffersContainer: FC = () => {
  let history = useHistory();

  const handleProduct = (categorie) => {
    history.push('produtos/' + categorie);
  };

  return (
    <Container>
      <h1>Ofertas da semana!</h1>
      <p>Confira ofertas por categorias</p>
      <div className="cards">
        <OfferCard
          ide="card_1"
          onClick={() => handleProduct('camera')}
          text="Video, Cameras e Imagem"
          imgSrc="https://res.cloudinary.com/dmceve2cp/image/upload/v1685389104/ecomerce/pngfind.com-vlog-camera-png-6754901_lzizoh.png"
        />
        <OfferCard
          ide="card_2"
          onClick={() => handleProduct('suporte')}
          text="Suporte para Microfones, Celular e Luzes"
          imgSrc="https://res.cloudinary.com/dmceve2cp/image/upload/v1685390069/ecomerce/pngfind.com-tripod-png-2837069_hcfiyz.png"
        />
        <OfferCard
          ide="card_3"
          onClick={() => handleProduct('fone')}
          text="Audio, Som e Ambiente"
          imgSrc="https://res.cloudinary.com/dmceve2cp/image/upload/v1685390381/ecomerce/pngfind.com-headphone-png-425234_xr8kqz.png"
        />
        <OfferCard
          ide="card_4"
          onClick={() => handleProduct('microfone')}
          text="Microfones e Qualidade de audio"
          imgSrc="https://res.cloudinary.com/dmceve2cp/image/upload/v1685391272/ecomerce/3933f3723348c0121d294d3826bb4ecd_ulk3s7.png"
        />
      </div>
    </Container>
  );
};
export default OffersContainer;

import React, { FC } from 'react';
import { Container, List, ProductCardContainer } from './styles';
import { useHistory } from 'react-router';

import { productsData } from '../../mocks/productsData';

import { MdOpenInNew } from 'react-icons/md';
import { CiCircleInfo } from 'react-icons/ci';

export const ListContainer = List;

export interface ProductCardProps {
  id: number;
  img: string;
  name: string;
  price: string;
  desc?: string;
  index?: number;
  quantity?: number;
  category?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ id, img, name, price }) => {
  let history = useHistory();

  const handleProductClick = () => {
    history.replace(`/produto/${id}`);
  };

  return (
    <ProductCardContainer>
      <img src={img} />
      <p>{name}</p>
      <span>R${price}</span>
      <button type="button" onClick={handleProductClick}>
        Detalhes
        <CiCircleInfo />
      </button>
    </ProductCardContainer>
  );
};

const ProductsList: FC = () => {
  const productsLimitPage = 14;
  let history = useHistory();

  function handleClick() {
    history.push('/produtos');
  }

  return (
    <Container>
      <h1>Produtos</h1>
      <p>os mais vendidos!</p>
      <List>
        <span onClick={handleClick} id="more">
          ver todos
          <MdOpenInNew />
        </span>
        {productsData
          .slice(0, productsLimitPage)
          .map(({ id, name, price, img }) => {
            return <ProductCard id={id} name={name} price={price} img={img} />;
          })}
      </List>
    </Container>
  );
};
export default ProductsList;

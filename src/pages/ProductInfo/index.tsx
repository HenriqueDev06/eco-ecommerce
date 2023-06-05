import React, { FC, useState, useEffect } from 'react';
import { BiCartAdd } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import { productsData } from '../../mocks/productsData';
import { Container, InfoContainer, RatingContainer, Star } from './styles';

import { ProductCardProps } from '../../components/productsList';
import NavBar from '../../components/navbar';
import { useCart } from '../../context/cart';

interface ParamTypes {
  id: string;
}

interface RatingProps {
  rating: number;
  onRatingChange: (value: number) => void;
}

const getObjectById = (id: number) => {
  return productsData.find((product) => product.id === id);
};

const ProductInfoPage: FC = () => {
  const [product, setProduct] = useState<ProductCardProps>();
  const [rating, setRating] = useState(0);

  const { addInCart } = useCart();

  const { id } = useParams<ParamTypes>();

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  useEffect(() => {
    setProduct(getObjectById(parseInt(id)));
  }, [id]);

  let history = useHistory();

  return (
    <>
      <NavBar backing />
      {product && (
        <Container>
          <img src={product.img} alt={product.name} />
          <InfoContainer>
            <h1>{product.name}</h1>
            <RatingContainer>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  active={index < rating}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  <FaStar />
                </Star>
              ))}
            </RatingContainer>
            <span>{product.desc}</span>
            <p>R${product.price}</p>
            <button
              type="button"
              onClick={() => {
                addInCart(getObjectById(parseInt(id)));
                history.replace('/produtos');
              }}
            >
              Add Cart <BiCartAdd />
            </button>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export { ProductInfoPage };

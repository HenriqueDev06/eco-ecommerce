import React, { FC, useEffect } from 'react';

import {
  Container,
  ListContainer,
  ProductCardContainer,
  RemoveButton,
  CartEmpty,
  PaymentMethod,
  PaymentMethodsContainer,
} from './styles';

import { useCart } from '../../context/cart';
import { ProductCardProps } from '../../components/productsList';

import { FaArrowUp, FaArrowDown, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

interface QuantityButtonProps {
  index: number;
}

const QuantityButton: FC<QuantityButtonProps> = ({ index }) => {
  const { cart, updatePrice } = useCart();
  const item = cart[index];
  const quantity = item.quantity || 1;

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    updateQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateQuantity(newQuantity);
    }
  };

  const updateQuantity = (newQuantity: number) => {
    const newCart = [...cart];
    newCart[index] = { ...item, quantity: newQuantity };
    updatePrice(newCart);
  };

  return (
    <div className="quantity_button">
      <button onClick={handleDecrease}>
        <FaArrowDown />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>
        <FaArrowUp />
      </button>
    </div>
  );
};

const ProductCard: FC<ProductCardProps> = ({
  id,
  img,
  name,
  price,
  index,
  category,
}) => {
  const { removeInCart } = useCart();

  const handleRemove = () => {
    removeInCart(index);
    console.log(index);
  };

  return (
    <ProductCardContainer>
      <img src={img} />
      <div className="info">
        <h1>{name}</h1>
        <p>{category}</p>
      </div>
      <QuantityButton index={index} />
      <div className="price">
        <span>R${price}</span>
        <RemoveButton onClick={handleRemove}>
          Remover <FaTrash />
        </RemoveButton>
      </div>
    </ProductCardContainer>
  );
};

const CartPage = () => {
  const { cart, totalValue } = useCart();

  let history = useHistory();

  return (
    <Container>
      {cart.length != 0 && <h2>Meu Carrinho</h2>}
      {cart.length == 0 ? (
        <CartEmpty
          onClick={() => {
            history.replace('/');
          }}
        >
          <img src="https://res.cloudinary.com/dmceve2cp/image/upload/v1685903811/ecomerce/pngwing.com_vcgehr.png" />
          <span>Carinho Vazio!</span>
          <p>
            Parece que seu carrinho de compras está vazio. Clique em qualquer
            lugar e explore nossa loja e adicione produtos incríveis para
            começar a preencher seu carrinho
          </p>
        </CartEmpty>
      ) : (
        <ListContainer>
          {cart &&
            cart.map(({ id, name, price, img, category }, index) => (
              <ProductCard
                key={index}
                id={id}
                name={name}
                price={price}
                img={img}
                index={index}
                category={category}
              />
            ))}
        </ListContainer>
      )}

      {cart.length == 0 ? null : (
        <>
          <FaArrowLeft
            id="back"
            onClick={() => {
              history.replace('/produtos');
            }}
          />
          <div className="price_container">
            <PaymentMethodsContainer>
              <PaymentMethod>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_XrKz0xIvkjqX5e_mKbg6I2KyAra6L_brBvsXwXK&s"
                  alt="Credit Card"
                />
              </PaymentMethod>
              <PaymentMethod>
                <img
                  src="https://res.cloudinary.com/dmceve2cp/image/upload/v1685906456/ecomerce/qotkomwdmhcsc4ere2iq.png"
                  alt="PIX"
                />
              </PaymentMethod>
              <PaymentMethod>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcZPR2e638dkyMWIeC4-4-hd11bOixhzhQyMvffpH&s"
                  alt="Boleto"
                />
              </PaymentMethod>
            </PaymentMethodsContainer>
            <div>
              <span>Sub-Total</span>
              <h1>
                {totalValue &&
                  'R$' +
                    totalValue.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
              </h1>

              <button type="button">Confirmar</button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
export { CartPage };

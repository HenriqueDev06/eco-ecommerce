import React, {
  FC,
  createContext,
  useState,
  ReactElement,
  useEffect,
  useContext,
} from 'react';

const CartContext = createContext<any>([]);

const CartProvider: FC = ({ children }): ReactElement => {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const addInCart = (item) => {
    // Verifica se o item já está no carrinho
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      const newCart = [...cart, item];
      setCart(newCart);
    }
  };

  const removeInCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const updatePrice = (newCart) => {
    let value = 0;
    newCart.forEach((item) => {
      let price = parseFloat(
        item.price.replace(/\./g, '').replace(',', '.'),
      ).toFixed(2);
      const quantity = item.quantity || 1;
      value += parseFloat(price) * quantity;
    });

    setTotalValue(value);
    setCart(newCart);
  };

  useEffect(() => {
    updatePrice(cart);
    console.log(totalValue);
  }, [cart, totalValue]);

  const store = {
    addInCart,
    removeInCart,
    updatePrice,
    cart,
    totalValue,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  const { cart, addInCart, removeInCart, updatePrice, totalValue } = context;

  return { addInCart, removeInCart, cart, updatePrice, totalValue };
};

export default CartProvider;

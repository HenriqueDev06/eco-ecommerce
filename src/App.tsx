import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

import CartProvider from './context/cart';

// eslint-disable-next-line
const App: FC = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </CartProvider>
);

export default App;

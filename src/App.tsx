import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

// eslint-disable-next-line
const App: FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

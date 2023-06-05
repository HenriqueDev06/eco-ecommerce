import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home, ProductsPage, ProductInfoPage, CartPage } from '../pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routes: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:categorie?" exact component={ProductsPage} />
        <Route path="/produto/:id" exact component={ProductInfoPage} />
        <Route path="/carrinho" exact component={CartPage} />
      </Switch>
    </>
  );
};

export default Routes;

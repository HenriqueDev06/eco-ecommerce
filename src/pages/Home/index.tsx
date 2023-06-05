import React, { FC } from 'react';
import { Container } from './styles';

import NavBar from '../../components/navbar';
import Header from '../../components/header';
import OffersContainer from '../../components/offers';
import ProductsList from '../../components/productsList';
import Footer from '../../components/footer';

const Home: FC = () => (
  <Container>
    <NavBar />
    <Header />
    <OffersContainer />
    <ProductsList />
    <Footer />
  </Container>
);

export { Home };

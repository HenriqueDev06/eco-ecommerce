import React, { FC } from 'react';

import { Container } from './styles';
import { NavBar } from '../../components/navbar';
import Header from '../../components/header';

const Home: FC = () => (
  <Container>
    <NavBar />
    <Header />
  </Container>
);

export { Home };

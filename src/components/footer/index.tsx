import React, { FC } from 'react';
import { Container, Logo, LinksContainer, LinkButton } from './styles';

const Footer: FC = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <LinksContainer>
        <LinkButton>SAC</LinkButton>
        <LinkButton>Termos de Serviço</LinkButton>
        <LinkButton>Trabalhe Conosco</LinkButton>
        <LinkButton>Sobre a Empresa</LinkButton>
        <LinkButton>Contato</LinkButton>
      </LinksContainer>
    </Container>
  );
};

export default Footer;

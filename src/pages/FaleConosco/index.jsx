import React from 'react';
import { Header } from '../../components/Header';

import { Container, MainContent, Form } from './styles';

export function FaleConosco() {
  return (
    <Container>
      <Header />
      <MainContent>
        <h1>Entre em contato conosco através do formulário abaixo:</h1>
        <Form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </MainContent>
    </Container>
  );
};

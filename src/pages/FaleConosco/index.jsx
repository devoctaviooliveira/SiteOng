import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';

export function FaleConosco() {
  return (
    <Container>
      <Header />
      <h1>Fale Conosco</h1>
      <p>Entre em contato conosco através do formulário abaixo:</p>
      <form>
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
      </form>
    </Container>
  );
};

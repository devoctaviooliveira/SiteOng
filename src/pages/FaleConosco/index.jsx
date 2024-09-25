import React from 'react';
import { Header } from '../../components/Header';
import DogIMG from '../../assets/fundofale.png';

import { Container, MainContent } from './styles';

export function FaleConosco() {
  return (
    <Container>
      <Header />
      <MainContent>
        <div className="content">
          <div className="form-container">
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
          </div>
          <div className="image-container">
            <img src={DogIMG} alt="Cachorro observando" />
          </div>
        </div>
      </MainContent>
    </Container>
  );
};

import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/path-to-your-image/fundofale.png'); /* Caminho para sua imagem fundofale.png */
  background-size: cover; /* Ajusta a imagem para cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    color: #fff; /* Cor do título em branco para contraste com o fundo */
  }

  p {
    color: #fff; /* Cor do texto em branco */
  }

  form {
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente no formulário */
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;

    div {
      margin-bottom: 15px;
    }

    label {
      color: #fff; /* Cor do label em branco */
      display: block;
      margin-bottom: 5px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background-color: #00aaff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0077cc;
    }
  }
`;

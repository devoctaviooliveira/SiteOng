import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    color: Navy;
    font-size: 2.5rem;
    margin-top: 95px;
    margin-bottom: 20px;
    margin-left: 70rem;
    font-family: "Roboto Slab";
  }

  p {
    color: MidnightBlue;
    font-size: 2rem;
    margin-bottom: 15px;
    margin-left: 50rem;
    font-family: "Poppins";
  }

  form {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin-left: 53.9rem;
    margin-top: 4rem;

    div {
      margin-bottom: 13px;
    }

    label {
      color: #fff;
      display: block;
      margin-bottom: 9px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    button {
      padding: 10px 40px;
      background-color: #1E90FF;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #4169E1;
    }
  }

  .image-container {
    z-index: -1;
    position: fixed;
    top: 0;
    height: 100vh;
    object-fit: cover;
  }

  /* Responsividade para dispositivos móveis */
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
      margin-left: 1rem;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      margin-left: 1rem;
      text-align: center;
    }

    form {
      margin-left: 0; /* Centraliza o form */
      margin-top: 2rem;
      padding: 15px;
    }

    .image-container {
      display: none; /* Oculta a imagem de fundo no mobile, se necessário */
    }
  }
`;

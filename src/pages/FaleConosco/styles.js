import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const MainContent = styled.div`
  margin: auto;

  h1 {
    color: Navy;
    font-size: 2.4rem;
    font-family: "Roboto Slab";
  }

  p {
    color: Navy;
    font-size: 2rem;
    margin-bottom: 1.6rem;
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
    left: 0;
    height: 100vh;
    object-fit: cover;
  }

  
  @media only screen and (max-width: 600px) {
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
`

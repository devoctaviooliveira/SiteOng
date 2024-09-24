import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    color:black; 
  }

  p {
    color:black; 
  }

  form {
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente no formulário */
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    margin-left:92rem;

    div {
      margin-bottom: 10px;
    }

    label {
      color: #fff; /* Cor do label em branco */
      display: block;
      margin-bottom: 6px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }

    button {
      padding: 10px 40px;
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
  h1 {
  font-size: 2.5rem; 
  margin-top: 95px; /* Espaçamento acima do h1 */
  margin-bottom: 20px;
  margin-left: 110rem; 
}

p {
  font-size: 2rem; 
  margin-bottom: 15px; 
  margin-left:95rem;
}

.image-container {
  z-index: -1;
  position: fixed;
  top: 0;
  height:100vh;
  object-fit: cover;
}

`;


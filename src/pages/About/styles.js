import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 430px) { /* iPhone 14 Pro Max width */
    height: auto;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  margin: auto;

  .Button {
    width: 20rem;
    
    @media (max-width: 430px) {
      width: 50%; /* Botão ocupa toda a largura em mobile */
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 430px) {
    flex-direction: column; /* Muda para coluna em dispositivos móveis */
    align-items: center; /* Centraliza os itens */
    gap: 1.2rem; /* Reduz o espaço entre os itens */
  }
`;

export const ImgContent = styled.div`
  display: flex;
  gap: 2rem;

  img {
    border-radius: 2rem;
    width: 100%; /* Imagem ocupa toda a largura disponível */
    height: auto; /* Mantém a proporção da imagem */
  }

  @media (max-width: 430px) {
    flex-direction: column; /* Alinha imagens em coluna em mobile */
    gap: 1rem; /* Reduz o espaço entre as imagens */
  }
`;

export const FirstText = styled.div`
  font-size: 3.2rem;
  max-width: 84rem;
  text-align: justify;

  @media (max-width: 430px) {
    margin-top: 5rem;
    font-size: 1.3rem; /* Ajusta o tamanho da fonte em mobile */
    max-width: 100%; 
    font-family: "Roboto Slab";
    padding: 0 1rem; /* Adiciona padding para evitar que o texto encoste nas bordas */
  }
`;

export const SecondText = styled.div`
  display: flex;
  gap: 3.2rem;

  h1 {
    font-size: 9.6rem;
    
    @media (max-width: 430px) {
      font-size: 5.6rem; /* Ajusta o tamanho do título em mobile */
    }
  }

  p {
    font-size: 2.4rem;
    
    @media (max-width: 430px) {
      font-size: 2rem; /* Ajusta o tamanho do parágrafo em mobile */
    }
  }
`;

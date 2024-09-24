import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  @media (max-width: 430px) { /* iPhone 14 Pro Max width */
    height: auto;
    padding: 0 1rem; /* Adiciona padding para evitar que o conteúdo encoste nas bordas */
  }
`;

export const MainContent = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 430px) {
    gap: 2rem; /* Reduz o espaço entre os itens em mobile */
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    font-size: 6rem;
    font-style: normal;
    line-height: 150%;
    text-align: center;
    font-weight: bold;
    color: #1F70B5;

    @media (max-width: 430px) {
      font-size: 4.8rem; /* Ajusta o tamanho do título em mobile */
    }
  }

  p {
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 200;
    line-height: 180%;

    @media (max-width: 430px) {
      font-size: 2rem; /* Ajusta o tamanho do parágrafo em mobile */
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 430px) {
    flex-direction: column; /* Alinha os cards em coluna em dispositivos móveis */
    gap: 1.6rem; /* Reduz o espaço entre os cards */
  }
`;

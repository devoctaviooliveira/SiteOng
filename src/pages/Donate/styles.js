import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const MainContent = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 600px) {
    margin-top: 0;
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
    font-family: Roboto Slabb;

    @media (max-width: 600px) {
      font-size: 4.8rem; 
    }
  }

  p {
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 200;
    line-height: 180%;
    font-family: Poppins;

    @media (max-width: 600px) {
      font-size: 2.4rem; 
      text-align: center;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 600px) {
    flex-direction: column; 
    gap: 1.6rem; 
  }
`;

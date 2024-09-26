import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  margin: auto;

  .Button {
    width: 20rem;
  }

  @media (max-width: 600px) {
    
  }
`;

export const TextContent = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 4rem;
  }
`;

export const ImgContent = styled.div`
  display: flex;
  gap: 2rem;

  img {
    border-radius: 2rem;
  }

  @media (max-width: 600px) {
    .IMG1 {
      width: 100%;
      border-radius: 0;
    }

    .IMG2 {
      display: none;
    }
  }
`;

export const FirstText = styled.div`
  font-size: 2.4rem;
  max-width: 84rem;
  text-align: justify;
  font-family: Poppins;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const SecondText = styled.div`
  display: flex;
  gap: 3.2rem;

  h1 {
    font-size: 9.6rem;
  }

  p {
    font-size: 2.4rem;
  }


  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

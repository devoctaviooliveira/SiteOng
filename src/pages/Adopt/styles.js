import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  
  
  img {
    border-radius: 2rem;
    border: 2px solid white;
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  padding: 3.4rem;
  border-radius: 2rem;
  
  margin: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.6rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    font-size: 3.6rem;
    max-width: 62rem;
    color: black;
    font-family: "Roboto Slab";
  }

  .Button {
    color: #1F70B5;
    background-color: white;
    font-weight: bold;
    font-family: "Roboto Slab";
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;

    h1 {
      font-size: 2.4rem;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  img {
    border-radius: 2rem;
    border: 2px solid white;
  }
`

export const MainContent = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  padding: 3.4rem;
  border-radius: 2rem;
  background-color: rgba(31, 112, 181, 0.50);
  margin: auto;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    font-size: 3.6rem;
    max-width: 62rem;
    color: white;
    font-family: "Roboto Slab";
  }

  .Button {
    color: #1F70B5;
    background-color: white;
    font-weight: bold;
    font-family: "Roboto Slab";
  }
`
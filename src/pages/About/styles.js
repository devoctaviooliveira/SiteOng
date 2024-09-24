import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;  
`

export const MainContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  margin: auto;

  .Button {
    width: 20rem;
  }
`

export const TextContent = styled.div `
  display: flex;
  gap: 6rem;
`

export const ImgContent = styled.div `
  display: flex;
  gap: 2rem;

  img {
    border-radius: 2rem;
  }
`

export const FirstText = styled.div `
  font-size: 3.2rem;
  max-width: 84rem;
  text-align: justify;
`

export const SecondText = styled.div `
  display: flex;
  gap: 3.2rem;

  h1 {
    font-size: 9.6rem;
  }

  p {
    font-size: 2.4rem;
  }
`
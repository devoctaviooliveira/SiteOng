import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
`

export const MainContent = styled.div `
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
`

export const TextContent = styled.div `
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
  }

  p {
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 200;
    line-height: 180%;
  }
`

export const CardContent = styled.div`
  display: flex;
  gap: 2.4rem;
`
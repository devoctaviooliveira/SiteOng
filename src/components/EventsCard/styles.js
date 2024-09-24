import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 42rem;
  background-color: white;
  border-radius: 1.2rem;
  padding: 3.2rem 2.4rem;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  .icon {
    width: 2.4rem;
    height: 2.4rem;
    color: #1F70B5;
  }

  h1 {
    color: #1F70B5;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
  }
`
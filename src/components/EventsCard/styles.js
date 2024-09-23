import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 24rem;
  background-color: rgba(31, 112, 181, 0.20);
  border: 1px solid black;
  border-radius: 1.2rem;
  padding: 3.2rem 2.4rem;
  gap: 1.6rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }

  p {
    font-size: 1.6rem;
  }
`
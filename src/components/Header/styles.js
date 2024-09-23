import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3.6rem 7.6rem;
  gap: 3.6rem;
  background-color: white;
  justify-content: space-between;
  
`

export const Links = styled.div `
  display: flex;
  gap: 3.8rem;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 2.4rem;
    color: #1F70B5;
  }

  a:hover {
    color: #1F3DB5;
  }
`

export const Button = styled.div `
  justify-content: right;
`
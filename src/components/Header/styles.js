import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  width: 100%;
  align-items: center;
  padding: 3.6rem 7.6rem;
  gap: 3.6rem;
  background-color: white;
  justify-content: space-between;
  border-bottom: solid 1px #1F3DB5;

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`

export const Links = styled.div `
  display: flex;
  gap: 3.8rem;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 2.4rem;
    color: #1F70B5;

    position: relative;
    font-family: "Poppins";
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: rgba(31, 112, 181, 0.50);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  
  @media (max-width: 600px) {
    .DesktopVersion {
      display: none;
    }
  }
`

export const Button = styled.div `
  justify-content: right;

  @media (max-width: 600px) {
    display: none;
  }
`

export const HomeButton = styled.button `
  
`

export const DropDownMenu = styled.button `
  .Icon {
    width: 3.4rem;
    height: 3.4rem;
    color: #1F3DB5;
  }

  @media (min-width: 600px) {
    display: none;
  }
`

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 9.6rem; /* ajuste conforme necessário */
  right: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    color: #333;
    text-decoration: none;

    &:last-child {
      border-bottom: none;
    }
  }
`;
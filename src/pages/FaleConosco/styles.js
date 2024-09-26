import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  

  h1 {
    color: #1F70B5;
    font-size: 3.6rem;
    font-family: "Roboto Slab";
    margin-top: 4rem;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`

export const Form = styled.form`
  background-color: rgba(31, 112, 181, 0.60);
  padding: 2rem;
  border-radius: 2rem;
  width: 54rem;

  @media (max-width: 600px) {
    width: 100%;
  }


  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    color: #fff;
    display: block;
    font-family: Poppins;
    font-size: 1.6rem;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    padding: 1rem 4rem;
    margin-top: 1rem;
    background-color: #1E90FF;
    color: #fff;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-family: Poppins;
    font-size: 1.6rem;
  }

  button:hover {
    background-color: #4169E1;
  }

  

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
      margin-left: 1rem;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      margin-left: 1rem;
      text-align: center;
    }
  }
`

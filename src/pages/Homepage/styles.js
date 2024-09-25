import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #1F70B5;
  overflow: hidden;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12rem;
  margin: auto;

  @media (max-width: 600px) {
    gap: 2rem;
  }
  
  img {
    border-radius: 2rem;

    @media (max-width: 600px) {
      width: 100%;
      padding: 1rem;
    }
  }

  h1 {
    color: white;
    font-size: 4.8rem;
  }
`

export const SecondHalf = styled.div`
  img {
    @media (max-width: 600px) {
      width: 100%;
      margin-top: 2rem;
    }
  }
`
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
  
`

export const FirstHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12rem;
  margin: auto;
  
  img {
    border-radius: 2rem;
  }

  h1 {
    color: white;
    font-size: 4.8rem;
  }
`

export const SecondHalf = styled.div`
  img {
    
  }
`
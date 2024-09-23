import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: #DBDBDB;
    color: black;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.8);
  }

  button {
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }
`
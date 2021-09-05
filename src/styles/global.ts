import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.grayscale};
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary}
  }
`

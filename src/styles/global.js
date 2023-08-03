import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`



body {
    margin: 0;
    font-family: 'DMSans', 'Bebas Neue', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
    overflow-x: hidden;
    width: 100vw;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a, a span, button {
    outline: none;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    color: inherit;
  }

  @font-face {
   font-family: 'Bebas-Neue';
   src: url('../pages/fonts/BebasNeue-Regular.ttf') format('opentype');
   font-display: swap;
  }


 
`

export default GlobalStyles
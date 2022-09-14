import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

  body{
    background-color: #fbdd74;
    color: #294910;
    height: 100vh;
    width: 100vw;
    position: relative;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }
`;

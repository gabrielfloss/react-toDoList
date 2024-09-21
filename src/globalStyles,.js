import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style-type: none;
    font-family: "Roboto", sans-serif;
  }
  body{
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  }
`

export default GlobalStyles;
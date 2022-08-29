import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Commissioner', sans-serif;
  }
  body {
    max-width: 100%;
    width: 100vw;
    height: 100vh;
    background-color: #1F2937;
    //background-color: #111827;
    color: white;
  }

  button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  }
`;

export default GlobalStyle;

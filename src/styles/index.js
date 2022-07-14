import { createGlobalStyle } from "styled-components";
// import "semantic-ui-css/semantic.min.css";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

a {
  text-decoration: none;
  color: black;
}
body {
	background-color: #1f1f1f;
  font-family: 'Roboto', sans-serif;
  margin: 0;
	padding: 0;
}
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

a {
  text-decoration: none;
  color: black;
}
body {
	background-color: ${(props) => props.theme.colors.darkGrey};
  font-family: 'Roboto', sans-serif;
  margin: 0;
	padding: 0;
}
input, button {
	border: none;
	border-radius: none;
}
input:focus, textarea:focus, select:focus{
  outline: none;
}
button:hover {
	cursor: pointer;
}
`;

export default GlobalStyles;

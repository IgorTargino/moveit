import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

body {
  background: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text};
}

body, input, textarea, button {
  font: 400 1rem "Inter", sans-serif;
}

button{
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Montserrat;
  background-color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

select,
a,
button {
  text-decoration:none;
  cursor: pointer;
}
`;

export default GlobalStyle;

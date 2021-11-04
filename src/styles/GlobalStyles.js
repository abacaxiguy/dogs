import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { typeFirst, primaryDarkColor } from '../config/variables';

export default createGlobalStyle`
  *{
    font-family: ${typeFirst};
  }

  body{
    outline: none;
    padding-top: 4rem;
    margin: 0px;
    box-sizing: border-box;
    color: ${primaryDarkColor};
  }

  h1, h2, h3, h4, p{
    margin: 0px;
  }

  ul, li{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img{
    display: block;
    max-width: 100%;
  }

  button, input{
    display: block;
    font-size: 1rem;
    font-family: ${typeFirst};
    color: ${primaryDarkColor};
  }

  a{
    text-decoration: none
  }

`;

export const Container = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

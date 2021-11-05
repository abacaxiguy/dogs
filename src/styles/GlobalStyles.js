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

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.4s;

    &:focus,
    &:hover {
      outline: none;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`;
export const Button = styled.button`
  font-size: 1rem;
  font-family: ${typeFirst};
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

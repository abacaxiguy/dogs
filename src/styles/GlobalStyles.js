import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import {
  typeFirst,
  typeSecond,
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
  secondaryDarkColor,
  lightGray,
} from '../config/variables';
import loginImg from '../assets/login.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');


  body{
    outline: none;
    padding-top: 4rem;
    margin: 0px;
    box-sizing: border-box;
    color: ${secondaryDarkColor};
    font-family: ${typeFirst};
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
    color: ${secondaryDarkColor};
  }

  a{
    text-decoration: none;
    color: ${secondaryDarkColor};
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
    border: 1px solid ${lightGray};
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: ${lightGray};
    transition: 0.4s;

    &:focus,
    &:hover {
      outline: none;
      border-color: ${primaryColor};
      background: white;
      box-shadow: 0 0 0 3px ${primaryLightColor};
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
  background: ${primaryColor};
  color: ${primaryDarkColor};
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${primaryLightColor}, 0 0 0 4px ${primaryColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

export const Animate = styled.section`
  opacity: 0;
  transform: translateX(-40px);
  animation: animateLeft 0.5s forwards;

  @keyframes animateLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const Title = styled.h1`
  font-family: ${typeSecond};
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: ${primaryColor};
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 1rem;

  &::before {
    content: '';
    display: block;
    background: url(${loginImg}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    & {
      grid-template-columns: 1fr;
    }
    &::before {
      display: none;
    }
  }
`;

export const Forms = styled.div`
  max-width: 25rem;
  padding: 2rem;
  padding-top: 4rem;
  margin-top: 10vh;

  @media (max-width: 40rem) {
    & {
      max-width: 100%;
    }
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 3.5rem);
`;

export const AppMain = styled.main`
  flex: 1;
`;

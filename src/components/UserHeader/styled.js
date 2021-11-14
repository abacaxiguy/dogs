import styled from 'styled-components';

export const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.4s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active:not([href='/account/edit']) svg > * {
    fill: #fb1;
  }

  a.active[href='/account/edit'] svg g path {
    stroke: #fb1;
  }
  a.active[href='/account/edit'] svg g path[fill-rule='evenodd'] {
    fill: #fb1;
  }
`;

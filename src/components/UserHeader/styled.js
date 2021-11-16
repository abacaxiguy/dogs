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

export const MobileNav = styled.nav`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;

  ${(props) =>
    props.isActive
      ? `
  transform: initial;
  opacity: 1;
  z-index: 90;
  pointer-events: initial;
  `
      : ''};

  a,
  button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  button {
    border-bottom: none;
  }

  a[href='/account/edit'] svg {
    margin-left: -4px;
  }

  a:not([href='/account/edit']):hover svg > *,
  button:hover svg > * {
    fill: #fb1;
  }

  a[href='/account/edit']:hover svg g path {
    stroke: #fb1;
  }

  a[href='/account/edit']:hover svg g path[fill-rule='evenodd'] {
    fill: #fb1;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  padding: 0px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.4s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition: transform 0.2s;
    box-shadow: ${(props) =>
      props.isActive
        ? '0 8px currentColor, 0 -8px currentColor;'
        : '0 6px currentColor, 0 -6px currentColor;'};
    ${(props) =>
      props.isActive ? 'transform: rotate(90deg);width:4px;height:4px;' : ''};
  }

  &:hover,
  &:focus {
    color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
  }
`;

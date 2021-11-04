import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primaryDarkColor } from '../../config/variables';

export const Head = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`;

export const Nav = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;
export const Login = styled(Link)`
  color: ${primaryDarkColor};
`;

import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/variables';

export const FooterWrapper = styled.footer`
  background: ${primaryColor};
  padding: 2rem 1rem 2rem 1rem;
  height: 7.5rem;
  text-align: center;
  color: ${primaryDarkColor};

  p {
    margin-top: 1rem;
  }
`;

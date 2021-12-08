import styled from 'styled-components';
import { almostGray, typeSecond } from '../../config/variables';

export const Form = styled.form`
  margin-bottom: 6rem;
`;
export const Register = styled.div`
  margin: 4rem 0 3rem 0;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: ${typeSecond};
    line-height: 1;
    font-size: 2.4rem;
  }

  h2::after {
    content: '';
    display: block;
    background: ${almostGray};
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

import styled from 'styled-components';

import { lightGray } from '../../config/variables';

export const Wrapper = styled.div`
  display: grid;
`;

export const Img = styled.img`
  min-width: -webkit-fill-available;
  display: block;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.3s;
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    ${lightGray} 0px,
    white 50%,
    ${lightGray} 100%
  );
  background-color: ${lightGray};
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

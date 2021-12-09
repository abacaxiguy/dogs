import styled from 'styled-components';

export const PhotoCreate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 40rem) {
    gap: 2rem;
    grid-template-columns: 1fr;
    margin-bottom: 4rem;
  }

  input[type='file'] {
    margin-bottom: 1rem;
  }
`;

export const Preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;

import styled from 'styled-components';

import ViewUrl from '../../assets/view.svg';

export const MainContainer = styled.div``;

export const Modal = styled.div``;

export const PhotosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Photo = styled.li`
  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }

  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    grid-area: 1/1;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    opacity: 0;
    transition: opacity 0.3s;
  }

  span::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${ViewUrl}) no-repeat;
  }

  &:hover span {
    opacity: 1;
  }
`;

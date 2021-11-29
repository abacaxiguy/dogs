import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const LoadingCircle = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  padding-left: 5px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

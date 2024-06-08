import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    margin-top: 0;
  }
  40% {
    margin-top: -60px;
  }
  60% {
    margin-top: -30px;
  }
`;

const StyledLoader = styled.div`
 width: 180px;
  height: 180px;
  background-color: #ff7f50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  box-sizing: border-box;
`;

const Loader = () => (
  <StyledLoader />
);

export default Loader;
import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  } 
  50% {
    transform: scale(1.0);
  }
`;

const StyledLoader = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ff7f50;

  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${bounce} 2.0s infinite ease-in-out;
`;

const Loader = () => (
  <StyledLoader />
);

export default Loader;
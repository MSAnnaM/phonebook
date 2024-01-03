import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #ff66b2, #ff4d94);
  -webkit-background-clip: text;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  display: inline-block;
`;

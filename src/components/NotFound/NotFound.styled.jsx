import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: #61dafb;
`;

export const PageNotFoundMsg = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const HomePageLink = styled(Link)`
  text-decoration: none;
  color: #61dafb;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4fa3d1;
  }
`;
